import Kuroshiro from "kuroshiro";
import Tokenizer from "kuromoji/src/Tokenizer.js";
import DynamicDictionaries from "kuromoji/src/dict/DynamicDictionaries.js";
import { gunzipSync } from "fflate";
import { dictionaryFiles } from "./dictionary-files.js";

export const DICTIONARY_BASE = "https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict/";

export async function downloadDictionary(base = DICTIONARY_BASE, fetcher = fetch) {
  const abort = new AbortController();
  const timer = setTimeout(() => abort.abort(), 120000);
  try {
    const queue = [...dictionaryFiles];
    const entries = [];
    // Limit concurrent large downloads; twelve simultaneous requests can stall
    // on slower connections and consume too much memory during decompression.
    const download = async ({ name, sha256 }) => {
      const response = await fetcher(new URL(name, base).href, {
        signal: abort.signal, credentials: "omit", referrerPolicy: "no-referrer",
      });
      if (!response.ok) throw new Error(`Dictionary request failed (${response.status})`);
      const bytes = new Uint8Array(await response.arrayBuffer());
      const digest = await globalThis.crypto.subtle.digest("SHA-256", bytes);
      const actual = Array.from(new Uint8Array(digest), b => b.toString(16).padStart(2, "0")).join("");
      if (actual !== sha256) throw new Error("Dictionary integrity check failed");
      const decoded = gunzipSync(bytes);
      // Typed dictionary arrays require the exact buffer, without an offset.
      entries.push([name, decoded.buffer.slice(decoded.byteOffset, decoded.byteOffset + decoded.byteLength)]);
    };
    await Promise.all(Array.from({ length: 3 }, async () => {
      while (queue.length) {
        abort.signal.throwIfAborted();
        await download(queue.shift());
      }
    }));
    const files = Object.fromEntries(entries);
    const dic = new DynamicDictionaries();
    dic.loadTrie(new Int32Array(files["base.dat.gz"]), new Int32Array(files["check.dat.gz"]));
    dic.loadTokenInfoDictionaries(new Uint8Array(files["tid.dat.gz"]), new Uint8Array(files["tid_pos.dat.gz"]), new Uint8Array(files["tid_map.dat.gz"]));
    dic.loadConnectionCosts(new Int16Array(files["cc.dat.gz"]));
    dic.loadUnknownDictionaries(
      new Uint8Array(files["unk.dat.gz"]), new Uint8Array(files["unk_pos.dat.gz"]),
      new Uint8Array(files["unk_map.dat.gz"]), new Uint8Array(files["unk_char.dat.gz"]),
      new Uint32Array(files["unk_compat.dat.gz"]), new Uint8Array(files["unk_invoke.dat.gz"]),
    );
    return new Tokenizer(dic);
  } finally {
    clearTimeout(timer);
    abort.abort();
  }
}

export function createRomanizer({ loadTokenizer = downloadDictionary } = {}) {
  let ready;
  return {
    async convert(text) {
      if (!ready) {
        const kuroshiro = new Kuroshiro();
        ready = kuroshiro.init({
          async init() { this.tokenizer = await loadTokenizer(); },
          async parse(input) { return this.tokenizer.tokenize(input); },
        }).then(() => kuroshiro);
        ready.catch(() => { ready = undefined; });
      }
      const converter = await ready;
      // Kuroshiro's spaced mode adds separators around existing whitespace.
      // Convert runs separately so the original spaces and newlines survive.
      const parts = await Promise.all(text.split(/(\s+)/).map(part =>
        !part || /^\s+$/.test(part) ? part : converter.convert(part.replace(/[\uFF66-\uFF9F]+/g, kana => kana.normalize("NFKC")), {
          to: "romaji", mode: "spaced", romajiSystem: "hepburn",
        })
      ));
      return parts.join("");
    },
  };
}
