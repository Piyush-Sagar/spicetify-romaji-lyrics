// Native Spotify layouts: legacy, test IDs, and the primary text class in 1.3.3.
// Keep these adapters explicit: broad [class*="lyrics"] selectors alter controls.
export const LYRIC_SELECTOR = [
  ".lyrics-lyricsContent-text",
  ".C8vlCbXzAR7qEMsoQG1r",
  '[data-testid="lyrics-line"]',
  '[data-testid="lyrics-line-always-visible"]',
  '[data-testid="lyrics-line-collapsible"]',
].join(",");

export const isJapanese = text => /[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]/u.test(text);

export class LyricsController {
  constructor({ document, convert, enabled = true, onError = () => {}, onLoading = () => {} }) {
    this.document = document;
    this.convert = convert;
    this.enabled = enabled;
    this.onError = onError;
    this.onLoading = onLoading;
    this.nodes = new Map();
    this.cache = new Map();
    this.pending = new Map();
    this.epoch = 0;
    this.failed = false;
    this.disposed = false;
    this.observer = new document.defaultView.MutationObserver(mutations => {
      if (!this.enabled || this.disposed) return;
      const lines = new Set();
      for (const mutation of mutations) {
        this.collect(mutation.target.nodeType === 3 ? mutation.target.parentElement : mutation.target, lines, false);
        for (const node of mutation.addedNodes ?? []) this.collect(node, lines, true);
      }
      this.prune();
      for (const line of lines) this.processLine(line);
    });
  }

  start() {
    this.observer.observe(this.document.body, { childList: true, subtree: true, characterData: true });
    this.scan();
  }

  collect(node, lines, descendants) {
    if (node?.nodeType !== 1) return;
    const parent = node.closest(LYRIC_SELECTOR);
    if (parent) lines.add(parent);
    if (descendants) for (const line of node.querySelectorAll(LYRIC_SELECTOR)) lines.add(line);
  }

  scan() {
    this.prune();
    if (this.enabled && !this.disposed) {
      for (const line of this.document.querySelectorAll(LYRIC_SELECTOR)) this.processLine(line);
    }
  }

  processLine(line) {
    if (this.failed || !this.enabled || this.disposed) return;
    const walker = this.document.createTreeWalker(line, 4); // SHOW_TEXT: preserve React's elements and listeners.
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.parentElement.closest("script,style,button,[aria-hidden='true'],[data-romaji-ignore]")) continue;
      let state = this.nodes.get(node);
      if (state && (node.data === state.applied || (node.data === state.original && state.busy))) continue;
      const original = node.data;
      if (!isJapanese(original)) {
        this.nodes.delete(node);
        continue;
      }
      state = { original, applied: null, busy: true };
      this.nodes.set(node, state);
      const epoch = this.epoch;
      if (this.cache.has(original)) {
        this.apply(node, state, this.cache.get(original), epoch);
        continue;
      }
      if (!this.pending.has(original)) {
        this.onLoading();
        const promise = Promise.resolve().then(() => this.convert(original)).then(result => {
          if (typeof result !== "string") throw new Error("Invalid romanization result");
          this.cache.set(original, result);
          if (this.cache.size > 1000) this.cache.delete(this.cache.keys().next().value);
          return result;
        }).finally(() => this.pending.delete(original));
        this.pending.set(original, promise);
      }
      this.pending.get(original).then(result => this.apply(node, state, result, epoch)).catch(error => {
        state.busy = false;
        if (this.disposed || !this.enabled || epoch !== this.epoch || this.failed) return;
        this.failed = true;
        this.onError(error);
      });
    }
  }

  apply(node, state, result, epoch) {
    state.busy = false;
    if (this.disposed || !this.enabled || epoch !== this.epoch || !node.isConnected ||
        this.nodes.get(node) !== state || node.data !== state.original || !node.parentElement?.closest(LYRIC_SELECTOR)) return;
    state.applied = result;
    node.data = result; // Lyrics are plain text, never HTML.
  }

  restore() {
    for (const [node, state] of this.nodes) {
      if (state.applied !== null && node.data === state.applied) node.data = state.original;
    }
    this.nodes.clear();
  }

  setEnabled(enabled) {
    this.epoch++;
    this.enabled = enabled;
    this.failed = false;
    this.restore();
    if (enabled) this.scan();
  }

  songChanged() {
    this.epoch++;
    this.restore();
    this.scan();
  }

  prune() {
    for (const [node, state] of this.nodes) {
      if (node.isConnected && node.parentElement?.closest(LYRIC_SELECTOR)) continue;
      // A detached React node may be inserted again later. Restore before forgetting it.
      if (state.applied !== null && node.data === state.applied) node.data = state.original;
      this.nodes.delete(node);
    }
  }

  dispose() {
    this.disposed = true;
    this.epoch++;
    this.observer.disconnect();
    this.restore();
    this.cache.clear();
  }
}
