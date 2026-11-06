#!/usr/bin/env node
/**
 * Zero-dependency validator for KubeCon NA 2026 modular slides.
 * Verifies:
 *   1. All slide modules & chapters import cleanly as standard ES modules.
 *   2. Required metadata fields, animate(ctx) function, and asset paths exist.
 *   3. Every slide's `svg` string is well-formed XML (via python3 ElementTree if present,
 *      plus forbidden HTML-only entity & unescaped ampersand checks).
 *   4. Zero unsafe DOM sinks (`innerHTML`, `outerHTML`, `insertAdjacentHTML`, `document.write`)
 *      across `app/` and `slides/`.
 */

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");

const { CHAPTERS } = await import(pathToFileURL(path.join(repoRoot, "app/chapters.js")).href);
const { SLIDES } = await import(pathToFileURL(path.join(repoRoot, "slides/manifest.js")).href);

let errors = 0;
const fail = (msg) => {
  console.error(`ERROR: ${msg}`);
  errors += 1;
};

if (!Array.isArray(SLIDES) || SLIDES.length === 0) {
  fail("slides/manifest.js exported an empty SLIDES array.");
}

const indexHtmlRaw = fs.readFileSync(path.join(repoRoot, "index.html"), "utf-8");
const shellIds = new Set(Array.from(indexHtmlRaw.matchAll(/\bid="([^"]+)"/g), (m) => m[1]));
const deckJsRaw = fs.readFileSync(path.join(repoRoot, "app/deck.js"), "utf-8");
for (const m of deckJsRaw.matchAll(/\bel\(\s*"([^"]+)"\s*\)/g)) {
  if (!shellIds.has(m[1])) {
    fail(`app/deck.js: el("${m[1]}") not found in index.html`);
  }
}
const validChapterIds = new Set(CHAPTERS.map((c) => c.id));

SLIDES.forEach((s, i) => {
  const label = `Slide ${i + 1} (${s?.short || "unnamed"})`;
  if (!validChapterIds.has(s.chapter)) {
    fail(`${label}: invalid chapter=${s.chapter}`);
  }
  for (const key of ["short", "speaker", "notes", "svg"]) {
    if (typeof s[key] !== "string" || s[key].trim().length === 0) {
      fail(`${label}: missing or empty string property '${key}'`);
    }
  }
  if (!s.isBookend) {
    for (const key of ["kicker", "title", "accent", "headline", "body1", "body2"]) {
      if (typeof s[key] !== "string" || s[key].trim().length === 0) {
        fail(`${label}: non-bookend slide requires '${key}'`);
      }
    }
  }
  if (s.animate !== undefined && typeof s.animate !== "function") {
    fail(`${label}: 'animate' must be a function receiving (ctx)`);
  }

  // Verify every static ctx.el("foo") lookup resolves to an id="foo" in slide.svg or index.html
  if (typeof s.animate === "function") {
    const slideIds = new Set(Array.from(s.svg.matchAll(/\bid="([^"]+)"/g), (m) => m[1]));
    const fnSrc = s.animate.toString();
    for (const m of fnSrc.matchAll(/\bctx\.el\(\s*"([^"]+)"\s*\)/g)) {
      const targetId = m[1];
      if (!slideIds.has(targetId) && !shellIds.has(targetId)) {
        fail(`${label}: ctx.el("${targetId}") not found in slide.svg or index.html`);
      }
    }
  }

  // Verify referenced ./assets/* files exist on disk
  const hrefMatches = s.svg.matchAll(/href="(\.\/assets\/[^"]+)"/g);
  for (const m of hrefMatches) {
    const assetRel = m[1].replace(/^\.\//, "");
    if (!fs.existsSync(path.join(repoRoot, assetRel))) {
      fail(`${label}: missing referenced asset '${assetRel}'`);
    }
  }

  // Check for HTML-only named entities that break XML DOMParser("image/svg+xml")
  const badEntities = s.svg.match(/&(?!amp;|lt;|gt;|quot;|apos;|#\d+;|#x[0-9a-fA-F]+;)[a-zA-Z0-9]+;/g);
  if (badEntities) {
    fail(`${label}: HTML-only entity ${badEntities.join(", ")} breaks XML DOMParser; use UTF-8 or numeric entity`);
  }
});

// Run strict XML 1.0 check via python3 xml.etree.ElementTree if available
const pyCheck = spawnSync(
  "python3",
  [
    "-c",
    `
import json, sys, xml.etree.ElementTree as ET
slides = json.loads(sys.stdin.read())
for idx, svg in enumerate(slides, 1):
    try:
        ET.fromstring('<svg xmlns="http://www.w3.org/2000/svg">' + svg + '</svg>')
    except Exception as exc:
        print(f"Slide {idx}: XML parse error: {exc}", file=sys.stderr)
        sys.exit(1)
`
  ],
  { input: JSON.stringify(SLIDES.map((s) => s.svg)), encoding: "utf-8" }
);
if (pyCheck.status !== 0) {
  fail(pyCheck.stderr.trim() || "XML validation failed");
}

// Security scan: forbid unsafe DOM sinks in app/ and slides/
const FORBIDDEN_SINKS = /\b(innerHTML|outerHTML|insertAdjacentHTML|document\.write)\b/;
for (const dir of ["app", "slides"]) {
  const fullDir = path.join(repoRoot, dir);
  for (const entry of fs.readdirSync(fullDir)) {
    if (!entry.endsWith(".js") && !entry.endsWith(".mjs")) continue;
    const fp = path.join(fullDir, entry);
    const content = fs
      .readFileSync(fp, "utf-8")
      .replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, "");
    const m = content.match(FORBIDDEN_SINKS);
    if (m) {
      fail(`${dir}/${entry}: forbidden DOM sink '${m[1]}' detected`);
    }
  }
}

if (errors > 0) {
  console.error(`\nValidation failed with ${errors} error(s).`);
  process.exit(1);
}

console.log(`✓ Validated ${SLIDES.length} slides across ${CHAPTERS.length} chapters (XML + assets + security checks passed).`);
