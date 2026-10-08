import test from "node:test";
import assert from "node:assert/strict";
import { JSDOM } from "jsdom";
import { LyricsController, isJapanese } from "../src/controller.js";

const tick = () => new Promise(resolve => setTimeout(resolve, 0));
function setup(t, html, convert = async () => "konnichiwa") {
  const dom = new JSDOM(`<body>${html}</body>`);
  const errors = [];
  const controller = new LyricsController({ document: dom.window.document, convert, onError: error => errors.push(error) });
  controller.start();
  t.after(() => { controller.dispose(); dom.window.close(); });
  return { document: dom.window.document, controller, errors };
}

test("detects kana, halfwidth kana and kanji without treating symbols or Latin as Japanese", () => {
  for (const value of ["こんにちは", "カタカナ", "ｶﾀｶﾅ", "青空"]) assert.equal(isJapanese(value), true);
  for (const value of ["Hello！ ★ →", "", "ＡＢＣ", "♪ 123"]) assert.equal(isJapanese(value), false);
});

test("converts current and legacy Spotify layouts, keeps unrelated text and restores originals", async t => {
  const { document, controller } = setup(t, '<h1>こんにちは</h1><div class="lyrics-lyricsContent-text">こんにちは</div><div class="C8vlCbXzAR7qEMsoQG1r">こんにちは</div>');
  await tick();
  assert.equal(document.querySelector("h1").textContent, "こんにちは");
  assert.equal(document.querySelector(".C8vlCbXzAR7qEMsoQG1r").textContent, "konnichiwa");
  controller.setEnabled(false);
  assert.equal(document.querySelector(".lyrics-lyricsContent-text").textContent, "こんにちは");
  controller.setEnabled(true);
  assert.equal(document.querySelector(".lyrics-lyricsContent-text").textContent, "konnichiwa");
});

test("preserves nested word elements, event listeners, and literal HTML characters", async t => {
  const { document } = setup(t, '<div data-testid="lyrics-line"><span id="word">こんにちは</span><span> world</span></div>', async () => '<img src=x onerror=alert(1)>');
  const span = document.querySelector("#word");
  let clicks = 0;
  span.addEventListener("click", () => clicks++);
  await tick();
  assert.equal(document.querySelector("#word"), span);
  assert.equal(span.textContent, '<img src=x onerror=alert(1)>');
  assert.equal(document.querySelector("img"), null);
  span.click();
  assert.equal(clicks, 1);
  assert.match(document.querySelector('[data-testid="lyrics-line"]').textContent, / world$/);
});

test("observes panels mounted later and text-node updates during playback", async t => {
  const { document } = setup(t, "", async text => `romaji:${text}`);
  const line = document.createElement("div");
  line.className = "lyrics-lyricsContent-text";
  line.textContent = "青空";
  document.body.append(line);
  await tick();
  assert.equal(line.textContent, "romaji:青空");
  line.firstChild.data = "こんにちは";
  await tick();
  assert.equal(line.textContent, "romaji:こんにちは");
});

test("does not overwrite a recycled lyric node with a stale conversion", async t => {
  const resolvers = new Map();
  const { document } = setup(t, '<div data-testid="lyrics-line">青空</div>', text => new Promise(resolve => resolvers.set(text, resolve)));
  await tick();
  const line = document.querySelector("div");
  line.firstChild.data = "夕空";
  await tick();
  resolvers.get("青空")("aozora");
  await tick();
  assert.equal(line.textContent, "夕空");
  resolvers.get("夕空")("yuuzora");
  await tick();
  assert.equal(line.textContent, "yuuzora");
});

test("disabling during conversion prevents later writes and can reuse the finished cache", async t => {
  let finish;
  const { document, controller } = setup(t, '<div data-testid="lyrics-line">青空</div>', () => new Promise(resolve => { finish = resolve; }));
  await tick();
  controller.setEnabled(false);
  finish("aozora");
  await tick();
  assert.equal(document.querySelector("div").textContent, "青空");
  controller.setEnabled(true);
  assert.equal(document.querySelector("div").textContent, "aozora");
});

test("song changes invalidate pending writes and preserve Spotify's newer text", async t => {
  const resolvers = new Map();
  const { document, controller } = setup(t, '<div data-testid="lyrics-line">青空</div>', text => new Promise(resolve => resolvers.set(text, resolve)));
  await tick();
  document.querySelector("div").textContent = "夕空";
  controller.songChanged();
  await tick();
  resolvers.get("青空")("aozora");
  await tick();
  assert.equal(document.querySelector("div").textContent, "夕空");
  resolvers.get("夕空")("yuuzora");
  await tick();
  controller.setEnabled(false);
  assert.equal(document.querySelector("div").textContent, "夕空");
});

test("keeps original lyrics visible on failure, reports once and retries after toggling", async t => {
  let fail = true;
  const { document, controller, errors } = setup(t, '<div data-testid="lyrics-line">青空</div><div data-testid="lyrics-line">こんにちは</div>', async () => {
    if (fail) throw new Error("offline");
    return "recovered";
  });
  await tick();
  assert.equal(errors.length, 1);
  assert.equal(document.querySelector("div").textContent, "青空");
  assert.equal(document.querySelector("div").style.visibility, "");
  fail = false;
  controller.setEnabled(false);
  controller.setEnabled(true);
  await tick();
  assert.equal(document.querySelector("div").textContent, "recovered");
});

test("deduplicates repeated lines and releases detached DOM nodes", async t => {
  let calls = 0;
  const { document, controller } = setup(t, '<div data-testid="lyrics-line">青空</div><div data-testid="lyrics-line">青空</div>', async () => { calls++; return "aozora"; });
  await tick();
  assert.equal(calls, 1);
  document.body.replaceChildren();
  await tick();
  assert.equal(controller.nodes.size, 0);
});

test("disposal restores text and prevents pending work from writing", async t => {
  const { document, controller } = setup(t, '<div data-testid="lyrics-line">青空</div>');
  await tick();
  controller.dispose();
  assert.equal(document.querySelector("div").textContent, "青空");
  document.querySelector("div").textContent = "夕空";
  await tick();
  assert.equal(document.querySelector("div").textContent, "夕空");
});

test("detached lyric nodes retain originals when reinserted after disabling", async t => {
  const { document, controller } = setup(t, '<div data-testid="lyrics-line">青空</div>');
  await tick();
  const line = document.querySelector("div");
  line.remove();
  await tick();
  controller.setEnabled(false);
  document.body.append(line);
  await tick();
  assert.equal(line.textContent, "青空");
});
