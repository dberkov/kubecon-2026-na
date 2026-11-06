#!/usr/bin/env node
/**
 * Bundles the modular ES-module repository into a single standalone HTML file
 * (`dist/kubecon_slides_full_website.html`) with inlined CSS, base64 PNG assets,
 * and self-contained JavaScript for offline sharing or single-file previews.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const distDir = path.join(repoRoot, "dist");
fs.mkdirSync(distDir, { recursive: true });

const indexHtml = fs.readFileSync(path.join(repoRoot, "index.html"), "utf-8");
const css = fs.readFileSync(path.join(repoRoot, "styles/deck.css"), "utf-8");

// Convert ./assets/*.png into data:image/png;base64,... map
const assetsDir = path.join(repoRoot, "assets");
const assetDataUris = {};
for (const fname of fs.readdirSync(assetsDir)) {
  if (!fname.endsWith(".png")) continue;
  const b64 = fs.readFileSync(path.join(assetsDir, fname)).toString("base64");
  assetDataUris[`./assets/${fname}`] = `data:image/png;base64,${b64}`;
}

function replaceAssetHrefs(str) {
  let out = str;
  for (const [rel, uri] of Object.entries(assetDataUris)) {
    out = out.split(`href="${rel}"`).join(`href="${uri}"`);
  }
  return out;
}

const chaptersJs = fs
  .readFileSync(path.join(repoRoot, "app/chapters.js"), "utf-8")
  .replace(/^export\s+/gm, "");

const ctxJs = fs
  .readFileSync(path.join(repoRoot, "app/ctx.js"), "utf-8")
  .replace(/^export\s+/gm, "");

const manifestRaw = fs.readFileSync(path.join(repoRoot, "slides/manifest.js"), "utf-8");
const slideImports = Array.from(
  manifestRaw.matchAll(/^import\s+(\w+)\s+from\s+"\.\/([^"]+)";/gm)
);

const bundledSlides = slideImports.map(([_, varName, fileName]) => {
  const rawSlide = fs.readFileSync(path.join(repoRoot, "slides", fileName), "utf-8");
  const withInlinedAssets = replaceAssetHrefs(rawSlide);
  return withInlinedAssets.replace(/^export\s+default\s+/, `const ${varName} = `);
});

const slidesArrayDecl = `const SLIDES = [${slideImports.map((m) => m[1]).join(", ")}];`;

const deckJs = fs
  .readFileSync(path.join(repoRoot, "app/deck.js"), "utf-8")
  .replace(/^import\s+.*?;\s*$/gm, "")
  .trim();

const combinedJs = [
  "(function () {",
  chaptersJs,
  ctxJs,
  ...bundledSlides,
  slidesArrayDecl,
  deckJs,
  "})();"
].join("\n\n");

let outHtml = indexHtml
  // Relax script-src for standalone single-file HTML while keeping object-src 'none'
  .replace(
    /<meta http-equiv="Content-Security-Policy"[^>]*>\s*/,
    ""
  )
  .replace(
    /<link rel="stylesheet" href="\.\/styles\/deck\.css"\s*\/>/,
    `<style>\n${css}\n  </style>`
  )
  .replace(
    /<script type="module" src="\.\/app\/deck\.js"><\/script>/,
    `<script>\n${combinedJs}\n  </script>`
  );

const outPath = path.join(distDir, "kubecon_slides_full_website.html");
fs.writeFileSync(outPath, outHtml, "utf-8");
console.log(`✓ Bundled standalone single-file HTML -> ${outPath} (${(outHtml.length / 1024).toFixed(1)} KB)`);
