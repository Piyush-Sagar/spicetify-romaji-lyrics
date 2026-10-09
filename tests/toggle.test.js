import test from "node:test";
import assert from "node:assert/strict";
import { JSDOM } from "jsdom";
import { readFile } from "node:fs/promises";
import { createLyricsToggle } from "../src/toggle.js";

const tick = () => new Promise(resolve => setTimeout(resolve, 0));
const player = '<aside data-testid="now-playing-bar"><div><button data-testid="lyrics-button">Lyrics</button></div></aside>';

test("toggle mounts next to lyrics when the player appears and survives player replacement", async () => {
  const dom = new JSDOM("<body></body>");
  const { document } = dom.window;
  let clicks = 0;
  const toggle = createLyricsToggle({ document, enabled: true, onToggle: () => clicks++, icon: "" });
  try {
    document.body.innerHTML = player;
    await tick();
    const button = document.querySelector("#romaji-toggle");
    assert.equal(button.nextElementSibling.dataset.testid, "lyrics-button");
    assert.equal(button.textContent, "Romaji");
    assert.equal(button.getAttribute("aria-label"), "Show Japanese lyrics");
    button.click();
    assert.equal(clicks, 1);
    toggle.update(false);
    assert.equal(button.textContent, "日本語");
    assert.equal(button.getAttribute("aria-pressed"), "false");
    document.body.innerHTML = player;
    await tick();
    assert.equal(document.querySelector("#romaji-toggle"), button);
    assert.equal(document.querySelectorAll("#romaji-toggle").length, 1);
    toggle.dispose();
    document.body.innerHTML = player;
    await tick();
    assert.equal(document.querySelector("#romaji-toggle"), null);
  } finally { toggle.dispose(); dom.window.close(); }
});

test("player and profile toggles share the saved preference and bundle reload keeps one toggle", async () => {
  const dom = new JSDOM(`<body>${player}</body>`, { runScripts: "outside-only", url: "https://xpui.app.spotify.com" });
  const { window } = dom;
  let menu;
  const saved = new Map([["romaji-lyrics:enabled", "false"]]);
  window.Spicetify = {
    React: { createElement() {} },
    Player: { addEventListener() {}, removeEventListener() {} },
    LocalStorage: { get: key => saved.get(key), set: (key, value) => saved.set(key, value) },
    Menu: { Item: class {
      constructor(name, enabled, click) { menu = this; this.enabled = enabled; this.click = click; }
      register() {}
      deregister() {}
      setState(enabled) { this.enabled = enabled; }
    } },
  };
  try {
    const bundle = await readFile("romaji_lyrics.js", "utf8");
    window.eval(bundle);
    let button = window.document.querySelector("#romaji-toggle");
    assert.equal(button.textContent, "日本語");
    button.click();
    assert.equal(saved.get("romaji-lyrics:enabled"), "true");
    assert.equal(menu.enabled, true);
    menu.click();
    assert.equal(button.textContent, "日本語");
    assert.equal(saved.get("romaji-lyrics:enabled"), "false");
    window.eval(bundle);
    button = window.document.querySelector("#romaji-toggle");
    assert.equal(window.document.querySelectorAll("#romaji-toggle").length, 1);
    assert.equal(button.textContent, "日本語");
  } finally { window.__spicetifyRomajiLyrics?.dispose(); window.close(); }
});
