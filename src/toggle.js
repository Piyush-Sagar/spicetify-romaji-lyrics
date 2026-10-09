// Spotify 1.3.4 no longer exposes the legacy containers used by Playbar.Button.
// Keep one toggle attached to the native lyrics control as the player remounts.
export function createLyricsToggle({ document, enabled, onToggle, icon }) {
  const button = document.createElement("button");
  button.id = "romaji-toggle";
  button.type = "button";
  button.dataset.romajiIgnore = "";
  button.style.cssText = "display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;width:32px;height:32px;padding:0;margin-right:4px;border:0;border-radius:50%;background:transparent;cursor:pointer;";
  const glyph = document.createElement("span");
  glyph.setAttribute("aria-hidden", "true");
  glyph.style.cssText = "display:flex;align-items:center;";
  glyph.innerHTML = icon; // Extension-owned static SVG, never lyric content.
  button.append(glyph);
  button.addEventListener("click", onToggle);

  function update(isRomaji) {
    const action = isRomaji ? "Show Japanese lyrics" : "Show romaji lyrics";
    button.setAttribute("aria-label", action);
    button.setAttribute("aria-pressed", String(isRomaji));
    button.title = action;
    button.style.color = isRomaji ? "var(--spice-button, #1ed760)" : "var(--spice-subtext, #b3b3b3)";
  }

  function mount() {
    const bar = document.querySelector('[data-testid="now-playing-bar"], .main-nowPlayingBar-nowPlayingBar, .n6XE6JL2UDeFogzbLcNC');
    if (!bar) return;
    const lyrics = bar.querySelector('button[data-testid="lyrics-button"]');
    const host = lyrics?.parentElement ?? bar.querySelector(".main-nowPlayingBar-right > div");
    if (!host || button.parentElement === host) return;
    host.insertBefore(button, lyrics ?? host.firstChild);
  }

  update(enabled);
  const observer = new document.defaultView.MutationObserver(mount);
  observer.observe(document.body, { childList: true, subtree: true });
  mount();
  return {
    update,
    dispose() {
      observer.disconnect();
      button.removeEventListener("click", onToggle);
      button.remove();
    },
  };
}
