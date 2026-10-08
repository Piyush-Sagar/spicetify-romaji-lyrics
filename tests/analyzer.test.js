import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createRomanizer, downloadDictionary, DICTIONARY_BASE } from "../src/analyzer.js";

const localFetch = async url => {
  const filename = new URL(url).pathname.split("/").pop();
  return new Response(await readFile(`node_modules/kuromoji/dict/${filename}`));
};

test("real dictionary romanizes kana, kanji, particles and mixed English using Hepburn", async () => {
  const romanizer = createRomanizer({ loadTokenizer: () => downloadDictionary(DICTIONARY_BASE, localFetch) });
  assert.equal(await romanizer.convert("こんにちは"), "konnichiwa");
  assert.equal(await romanizer.convert("今日はいい天気"), "kyō wa ii tenki");
  assert.equal(await romanizer.convert("カタカナ"), "katakana");
  assert.equal(await romanizer.convert("ｶﾀｶﾅ"), "katakana");
  assert.equal(await romanizer.convert("青空  Hello\nこんにちは"), "aozora  Hello\nkonnichiwa");
  assert.equal(await romanizer.convert("青空 Hello"), "aozora Hello");
});

test("dictionary URLs keep https:// and exclude credentials", async () => {
  const urls = [];
  await assert.rejects(downloadDictionary(DICTIONARY_BASE, async (url, options) => {
    urls.push(url);
    assert.equal(options.credentials, "omit");
    assert.equal(options.referrerPolicy, "no-referrer");
    return new Response("unavailable", { status: 503 });
  }), /503/);
  assert.equal(urls.length, 3);
  for (const url of urls) assert.match(url, /^https:\/\/cdn\.jsdelivr\.net\/npm\/kuromoji@0\.1\.2\/dict\/[a-z_]+\.dat\.gz$/);
});

test("rejects corrupted dictionary bytes before decompression", async () => {
  await assert.rejects(downloadDictionary(DICTIONARY_BASE, async () => new Response("bad data")), /integrity/);
});

test("failed initialization can be retried and simultaneous calls share initialization", async () => {
  let attempts = 0;
  const romanizer = createRomanizer({ loadTokenizer: async () => {
    if (++attempts === 1) throw new Error("offline");
    return downloadDictionary(DICTIONARY_BASE, localFetch);
  } });
  await assert.rejects(romanizer.convert("こんにちは"), /offline/);
  assert.deepEqual(await Promise.all([romanizer.convert("こんにちは"), romanizer.convert("カタカナ")]), ["konnichiwa", "katakana"]);
  assert.equal(attempts, 2);
});
