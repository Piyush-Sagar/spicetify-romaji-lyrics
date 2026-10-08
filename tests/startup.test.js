import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { JSDOM } from "jsdom";

test("waits for React and ReactJSX before constructing the native Spicetify menu", async () => {
  const dom = new JSDOM("<body>English text</body>", { runScripts: "outside-only", url: "https://xpui.app.spotify.com" });
  const { window } = dom;
  const retries = [];
  window.setTimeout = callback => { retries.push(callback); return retries.length; };
  window.clearTimeout = () => {};
  let menuCalls = 0;
  window.Spicetify = {
    ContextMenuV2: {},
    Player: { addEventListener() {}, removeEventListener() {} },
    Menu: { Item: class {
      constructor() {
        assert.equal(typeof window.Spicetify.React.createElement, "function");
        assert.equal(typeof window.Spicetify.ReactJSX.jsx, "function");
        menuCalls++;
      }
      register() {}
      deregister() {}
    } },
  };
  try {
    window.eval(await readFile("romaji_lyrics.js", "utf8"));
    assert.equal(menuCalls, 0);
    assert.equal(retries.length, 1);
    window.Spicetify.React = { createElement() {} };
    retries.shift()();
    assert.equal(menuCalls, 0);
    window.Spicetify.ReactJSX = { jsx() {} };
    retries.shift()();
    assert.equal(menuCalls, 1);
    assert.equal(retries.length, 0);
  } finally {
    window.__spicetifyRomajiLyrics?.dispose();
    dom.window.close();
  }
});
