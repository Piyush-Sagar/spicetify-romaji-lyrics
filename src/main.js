import { createRomanizer } from "./analyzer.js";
import { LyricsController } from "./controller.js";

(() => {
  "use strict";
  const KEY = "romaji-lyrics:enabled";
  const INSTANCE = "__spicetifyRomajiLyrics";
  const icon = '<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M1 3h7v1H5v1c0 1.5-.4 2.8-1.2 3.9L6 11l-.7.7L3.1 9.6 1 11.7l-.7-.7 2.2-2.2A6.3 6.3 0 0 1 1.3 6l1-.2c.1.8.4 1.6.9 2.3C3.7 7.2 4 6.2 4 5V4H1V3zm3-2h1v2H4V1zm6 5h1l4 8h-1.2l-1-2H8.2l-1 2H6l4-8zm.5 1.5L8.7 11h3.6l-1.8-3.5z"/></svg>';
  let retryTimer;
  let controller;
  let menu;
  let button;
  let disposed = false;
  let loadingNotified = false;
  let attempts = 0;
  let api;
  const onSongChange = () => controller?.songChanged();
  const dispose = () => {
    disposed = true;
    clearTimeout(retryTimer);
    controller?.dispose();
    menu?.deregister();
    button?.deregister();
    api?.Player?.removeEventListener?.("songchange", onSongChange);
    window.removeEventListener("pagehide", dispose);
    if (window[INSTANCE]?.dispose === dispose) delete window[INSTANCE];
  };
  window[INSTANCE]?.dispose?.();
  window[INSTANCE] = { dispose };

  function init() {
    if (disposed) return;
    api = window.Spicetify;
    // Menu constructors exist before Spotify exposes their React dependencies.
    // ContextMenuV2-based Menu.Item immediately calls ReactJSX.jsx in its constructor.
    if (!document.body || !api?.Player?.addEventListener || !api?.Menu?.Item ||
        !api?.React?.createElement || (api.ContextMenuV2 && !api.ReactJSX?.jsx)) {
      if (++attempts < 150) retryTimer = setTimeout(init, 200);
      else console.warn("[Romaji Lyrics] Spicetify did not become ready; reload Spotify to retry.");
      return;
    }
    let enabled = true;
    try { enabled = api.LocalStorage?.get(KEY) !== "false"; } catch { /* Session-only mode. */ }
    const romanizer = createRomanizer();
    controller = new LyricsController({
      document, enabled, convert: text => romanizer.convert(text),
      onLoading: () => {
        if (loadingNotified) return;
        loadingNotified = true;
        api.showNotification?.("Romaji Lyrics: loading the Japanese dictionary…");
      },
      onError: () => {
        // Do not log lyric content, account data, or URLs from arbitrary errors.
        console.warn("[Romaji Lyrics] Conversion unavailable. Original lyrics remain visible.");
        api.showNotification?.("Romaji Lyrics: dictionary unavailable. Check your connection, then switch off and on to retry.", true);
      },
    });
    const toggle = () => {
      controller.setEnabled(!controller.enabled);
      try { api.LocalStorage?.set(KEY, String(controller.enabled)); } catch { /* Session-only mode. */ }
      menu.setState(controller.enabled);
      if (button) {
        button.active = controller.enabled;
        button.label = controller.enabled ? "Romaji Lyrics: on" : "Romaji Lyrics: off";
      }
      api.showNotification?.(`Romaji Lyrics: ${controller.enabled ? "on" : "off"}`);
    };
    menu = new api.Menu.Item("Romaji Lyrics", enabled, toggle, icon);
    menu.register();
    if (api.Playbar?.Button) {
      button = new api.Playbar.Button(enabled ? "Romaji Lyrics: on" : "Romaji Lyrics: off", icon, toggle, false, enabled);
    }
    api.Player.addEventListener("songchange", onSongChange);
    window.addEventListener("pagehide", dispose);
    controller.start();
  }
  init();
})();
