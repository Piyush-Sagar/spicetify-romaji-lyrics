import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { chromium } from "playwright";

const server = createServer(async (request, response) => {
  const isBundle = request.url === "/romaji_lyrics.js";
  response.setHeader("Content-Type", isBundle ? "text/javascript; charset=utf-8" : "text/html; charset=utf-8");
  response.end(await readFile(isBundle ? "romaji_lyrics.js" : "tests/fixture.html"));
});
await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
const url = `http://127.0.0.1:${server.address().port}`;
let browser;
try {
  for (const channel of [undefined, "msedge", "chrome"]) {
    try { browser = await chromium.launch({ headless: true, ...(channel ? { channel } : {}) }); break; }
    catch (error) { if (channel === "chrome") throw error; }
  }
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 });
  const errors = [];
  const dictionaryRequests = [];
  page.on("pageerror", error => errors.push(error.message));
  page.on("console", message => { if (message.type() === "warning") console.log("Browser:", message.text()); });
  page.on("request", request => {
    if (request.url().includes("cdn.jsdelivr.net")) dictionaryRequests.push(request.url());
  });
  page.on("requestfailed", request => console.log("Failed request:", request.url(), request.failure()?.errorText));
  await page.goto(url);
  const line = page.locator(".C8vlCbXzAR7qEMsoQG1r").first();
  try {
    await page.waitForFunction(() => document.querySelector(".C8vlCbXzAR7qEMsoQG1r").textContent.startsWith("yozora"), null, { timeout: 150000 });
  } catch (error) {
    console.log("Browser diagnostics:", { errors, dictionaryRequests, state: await page.evaluate(() => ({ notifications: testState.notifications, lines: Array.from(document.querySelectorAll(".C8vlCbXzAR7qEMsoQG1r"), line => line.textContent) })) });
    throw error;
  }
  const romaji = await line.textContent();
  assert.match(romaji, /^yozora ni chīsana hikari o egakō$/);
  assert.equal(dictionaryRequests.length, 12);
  assert.equal(await page.locator(".original p").textContent(), "夜空に小さな光を描こう");
  await mkdir("assets", { recursive: true });
  await page.screenshot({ path: "assets/preview.png" });
  await page.locator("#romaji-toggle").click();
  assert.equal(await line.textContent(), "夜空に小さな光を描こう");
  assert.equal(await page.evaluate(() => localStorage.getItem("romaji-lyrics:enabled")), "false");
  await page.reload();
  assert.equal(await line.textContent(), "夜空に小さな光を描こう");
  await page.locator("#romaji-toggle").click();
  await page.waitForFunction(() => document.querySelector(".C8vlCbXzAR7qEMsoQG1r").textContent.startsWith("yozora"), null, { timeout: 150000 });
  // Re-executing the bundle must dispose the old instance and avoid duplicate controls/listeners.
  await page.addScriptTag({ url: `${url}/romaji_lyrics.js` });
  await page.waitForFunction(() => document.querySelector(".C8vlCbXzAR7qEMsoQG1r").textContent.startsWith("yozora"), null, { timeout: 150000 });
  assert.equal(await page.locator("#romaji-toggle").count(), 1);
  assert.equal(await page.evaluate(() => testState.songListeners.size), 1);
  assert.equal(await page.evaluate(() => testState.menus.length), 1);
  assert.deepEqual(errors, []);

  const offline = await browser.newPage();
  await offline.route("https://cdn.jsdelivr.net/**", route => route.abort());
  await offline.goto(url);
  await offline.waitForFunction(() => testState.notifications.some(message => message.includes("unavailable")));
  assert.equal(await offline.locator(".C8vlCbXzAR7qEMsoQG1r").first().textContent(), "夜空に小さな光を描こう");
  assert.equal(await offline.locator(".C8vlCbXzAR7qEMsoQG1r").first().isVisible(), true);
  await offline.unroute("https://cdn.jsdelivr.net/**");
  await offline.locator("#romaji-toggle").click();
  await offline.locator("#romaji-toggle").click();
  await offline.waitForFunction(() => document.querySelector(".C8vlCbXzAR7qEMsoQG1r").textContent.startsWith("yozora"), null, { timeout: 150000 });
  await mkdir("artifacts", { recursive: true });
  const result = {
    browser: await browser.version(), realCdnDictionaryFiles: 12, romaji,
    verified: ["real bundled converter", "real CDN dictionary integrity", "original restoration", "saved toggle across reload", "hot-reload cleanup", "offline original visibility", "retry recovery"],
    liveSpotifyPlayback: false, errors,
  };
  await writeFile("artifacts/browser-smoke.json", JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
} finally {
  await browser?.close();
  await new Promise(resolve => server.close(resolve));
}
