import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import vm from "node:vm";

const manifest = JSON.parse(await readFile("manifest.json", "utf8"));
for (const field of ["name", "description", "preview", "main", "readme"]) {
  assert.equal(typeof manifest[field], "string", `Missing ${field}`);
  assert.ok(manifest[field].trim(), `Empty ${field}`);
}
for (const field of ["preview", "main", "readme"]) {
  assert.match(manifest[field], /^[a-zA-Z0-9_./-]+$/);
  assert.ok(!manifest[field].startsWith("/") && !manifest[field].includes(".."));
  assert.ok((await stat(manifest[field])).size > 0, `Missing ${field} file`);
}
assert.ok(manifest.main.endsWith(".js"));
assert.ok(manifest.preview.endsWith(".png"));
const preview = await readFile(manifest.preview);
assert.equal(preview.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
assert.ok(preview.readUInt32BE(16) >= 640);
assert.ok(preview.readUInt32BE(20) >= 360);
const bundle = await readFile(manifest.main, "utf8");
new vm.Script(bundle);
assert.ok(bundle.includes("cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict/"));
assert.ok(!bundle.includes("XMLHttpRequest.prototype"));
assert.ok(!bundle.includes("kuroshiro-analyzer-kuromoji.min.js"));
for (const file of ["LICENSE", "THIRD_PARTY_NOTICES.md", "README.md"]) assert.ok((await stat(file)).size > 0);
assert.ok(bundle.includes("Apache License"));
assert.ok(bundle.includes("Nara Institute"));
console.log("Marketplace manifest, referenced files, PNG preview, JavaScript syntax and bundled notices are valid.");
