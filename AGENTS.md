# AI Agent Guide — KubeCon NA 2026 Slide Deck (`kubecon-2026-na`)

This repository holds the interactive web presentation for **Dmitry Berkovich (`dberkov`)** and **Tim Hockin (`thockin`)**:
> **"Kubernetes Solutions for Agent-Shaped Problems"** (KubeCon North America 2026)

The deck is structured as **one self-contained ES module per slide** (`slides/01-*.js` through `slides/32-*.js`) with **zero build step** required during local editing, so Dima and Tim can edit different slides in parallel using separate AI sessions (Jetski, Gemini CLI, Claude Code) without Git merge conflicts.

---

## 1. Parallel Collaboration Rules (Preventing Merge Conflicts)

1. **Stay Scoped to Your Assigned Slide File(s)**:
   - Each slide lives in `slides/<NN>-<slug>.js` and owns its own metadata, `svg` markup, speaker `notes`, and `animate(ctx)` choreography.
   - Do **not** touch `index.html`, `styles/deck.css`, `app/deck.js`, or unassigned `slides/*.js` files when asked to edit specific slides.
2. **Adding, Deleting, or Reordering Slides**:
   - Only `slides/manifest.js` defines slide order. Keep edits to `slides/manifest.js` to 1-line imports/entries so Git auto-merges cleanly.
   - If you add a new slide between `26` and `27` while working on a feature branch, you can name the file `slides/26b-my-topic.js` and add a single import in `slides/manifest.js` (avoid renumbering all subsequent filenames mid-flight while your co-presenter is editing other files).
3. **Speaker Notes**:
   - Each slide file exports a `notes` string (fallback / source of truth per slide), and `notes/speaker-notes.md` provides live hot-reload overrides during `kind` or local rehearsals.
   - When modifying a slide's spoken script in Git, update **both** the `notes` field in `slides/<NN>-<slug>.js` and its matching `## Slide <N>` block in `notes/speaker-notes.md` (or ask before editing `notes/speaker-notes.md` if your co-presenter is actively editing notes).

---

## 2. Slide Module Contract (`slides/<NN>-<slug>.js`)

Every standard content slide exports a default object with this shape:

```js
export default {
  chapter: 5, // 0..5 (matches app/chapters.js)
  short: "26. Off-CPU Suspend",
  speaker: "DIMA", // "TIM" | "DIMA" | "TIM & DIMA" | "DIMA & TIM" | "TIM / DIMA"
  kicker: "GOAL: DENSITY · BILLION-ACTOR REGISTRY & HIBERNATION",
  title: "Goal: Density — Off-CPU Suspend",
  accent: "var(--s-green)", // Header kicker & bottom banner left-bar color
  headline: "1. Suspend via ateapi (Postgres)  ->  2. Snapshot (0 CPU / 0 RAM) & Evict from CPU",
  body1: "Postgres tracks billions of actor records with zero Kubernetes etcd overhead.",
  body2: "Idle Actor 3 checkpoints off-CPU immediately, freeing the Worker slot while Actors 1 & 2 keep running.",
  notes: "Spoken script shown in Presenter Console...",
  svg: `
    <!-- SVG child elements inside the 1600x900 viewBox (y=148..672 safe zone) -->
    <rect x="88" y="252" width="316" height="148" rx="8" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2.6" />
  `,
  animate: (ctx) => {
    // Optional animation choreography; all ctx timers auto-cancel on slide change!
  }
};
```

Bookend slides (`01-title.js`, `16-agent-substrate.js`, `32-thank-you.js`) set `isBookend: true` (hiding the shared top header and bottom callout banner) and provide `takeaways: { main, sub1, sub2 }` for the Presenter Console.

---

## 3. Stage Geometry (`viewBox="0 0 1600 900"`)

All slide SVG coordinates operate inside `<svg viewBox="0 0 1600 900">`:
- **Shared Top Header (`#slide-header`)**: Occupies `y = 0 .. 128` (divider line at `y = 128`, `x = 64 .. 1536`).
- **Slide Diagram Safe Zone (`#slide-mount`)**: Keep all non-bookend slide artwork strictly within **`x = 64 .. 1536`** and **`y = 148 .. 672`** so diagrams never collide with the header or bottom banner!
- **Shared Bottom Callout (`#bottom-callout`)**: Occupies `y = 694 .. 842` (`x = 64 .. 1536`).
- **Shared `<defs>` Markers Available Globally**:
  - `url(#arr-dark)`, `url(#arr-slate)`, `url(#arr-blue)`, `url(#arr-green)`, `url(#arr-purple)`, `url(#arr-amber)`
  - `url(#arrow-muted)`, `url(#arrow-blue)`, `url(#arrow-purple)`, `url(#waste-hatch)`

---

## 4. Theme Palette Variables (Light & Dark Mode Compatible)

Always style SVG fills/strokes using CSS variables (`style="fill: var(--s-blue-fill); stroke: var(--s-blue)"`) rather than hardcoded light-only hex colors so both **Light** and **Dark** themes work automatically:

| Role | Stroke / Primary | Soft Fill | Dark / Emphasis Text |
| :--- | :--- | :--- | :--- |
| **Canvas / Card** | `var(--s-border)` | `var(--s-bg)`, `var(--s-surface)`, `var(--s-surface-2)`, `var(--s-card)` | `var(--s-text)`, `var(--s-muted)` |
| **Kubernetes / Speed (Blue)** | `var(--s-blue)` | `var(--s-blue-fill)`, `var(--s-blue-box)` | `var(--s-blue-dark)` |
| **Actor / Session (Purple)** | `var(--s-purple)` | `var(--s-purple-fill)`, `var(--s-slot-fill)` | `var(--s-purple-dark)` |
| **Control / Density (Green)** | `var(--s-green)` | `var(--s-green-fill)` | `var(--s-green-dark)` |
| **Storage / Callout (Amber)** | `var(--s-amber)` | `var(--s-amber-fill)` | `var(--s-amber-dark)` |
| **Security / Sandbox (Red)** | `var(--s-red)` | `var(--s-red-fill)` | `var(--s-red-dark)` |

Useful CSS utility classes in `styles/deck.css`:
- `.mono` — Monospace font for technical identifiers (`ateapi`, `gRPC`, `exec(...)`)
- `.smooth-box` — Smooth CSS transition on `fill`, `stroke`, `stroke-width`, `opacity`
- `.fade-group` — Smooth opacity & transform transition
- `.mover` — Smooth packet translation (`transform` + `opacity`)
- `.flow-dash` — Animated dashed line flow (`stroke-dasharray: 9 7`)
- `.float-slow` / `.breathe-center` — Subtle idle motion for hero illustrations

---

## 5. Scoped Animation Context (`ctx`) & Security Rules (MANDATORY)

1. **Use `ctx` Exclusively for Timers & Lookups**:
   - `ctx.el("my-id")` — Queries inside `#slide-mount` first.
   - `ctx.svgEl(tag, attrs, textContent)` — Creates SVG elements cleanly (`http://www.w3.org/2000/svg`).
   - `ctx.later(ms, fn)` / `ctx.every(ms, fn)` / `ctx.animateProgress(durationMs, onTick)` — Automatically cancelled when leaving the slide. **Never** call raw `setTimeout`, `setInterval`, or `requestAnimationFrame` directly.
   - `ctx.movePkt(pktId, bgId, txtId, label, fillVar, txtFill, x1, y1, x2, y2, widthPx)` — Smoothly animates a labeled pill packet from `(x1, y1)` to `(x2, y2)`.
2. **Strict XML Well-Formedness in `svg` Strings**:
   - `app/deck.js` mounts `slide.svg` via `new DOMParser().parseFromString(..., "image/svg+xml")` + `replaceChildren(...)`.
   - Escape literal `<` and `&` in SVG `<text>` nodes (`&lt;`, `&gt;`, `&amp;`), and use UTF-8 characters (`·`, `→`, `✓`) or numeric entities (`&#10003;`) — **never** HTML-only named entities like `&middot;` or `&rarr;` inside `svg`.
3. **Zero Unsafe DOM Sinks & Loopback Binding**:
   - **Never** use `innerHTML`, `outerHTML`, `insertAdjacentHTML`, or `document.write` anywhere in `app/` or `slides/`.
   - Local preview servers (`./scripts/serve.sh`, `kind-deploy/kind-config.yaml`) must bind strictly to `127.0.0.1` (never `0.0.0.0`).
4. **Always Validate Before Committing**:
   ```bash
   node ./scripts/validate.mjs
   ```
