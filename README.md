# KubeCon NA 2026 — Kubernetes Solutions for Agent-Shaped Problems

Interactive web presentation & dual-screen Presenter Console for **Dmitry Berkovich** (`<dberkov@google.com>`) and **Tim Hockin** (`<thockin@google.com>`).

---

## Quickstart (Zero Install)

Serve the deck locally on `127.0.0.1:8080` using Python 3 (no `npm install` or build step required):

```bash
./scripts/serve.sh
```

Then open in Chrome:
- **Overview + Chapter/Slide Strip**: http://127.0.0.1:8080/
- **Laptop Presenter Console (Notes + Stopwatch + Next Slide Preview)**: http://127.0.0.1:8080/?mode=speaker
- **External Monitor / Projector Stage (Clean 16:9 — press `F` for fullscreen)**: http://127.0.0.1:8080/?mode=stage

Both browser windows synchronize automatically in real time via `BroadcastChannel` + `localStorage` (`0ms` lag, 100% offline).

---

## Repository Structure (Built for Parallel Editing)

Each of the **28 slides** is an independent ES module in [`slides/`](./slides) owning its own SVG diagram, metadata, speaker script, and animation function:

```text
├── index.html                  # Presentation stage, Presenter Console & inline note editor
├── styles/deck.css             # Light & Dark stage themes + responsive Presenter Console UI
├── assets/                     # Shared PNG artwork (Octopus mascot, K8s hex, fractured wheel)
├── app/
│   ├── chapters.js             # 6 narrative chapters
│   ├── ctx.js                  # Auto-cleaned animation timers & SVG helpers passed to slide.animate(ctx)
│   └── deck.js                 # XML DOMParser slide mounter, keyboard shortcuts & dual-screen sync
├── slides/
│   ├── manifest.js             # Ordered list of all slides
│   ├── 01-title.js             # Chapters I–VI: 1 self-contained file per slide!
│   ├── ...
│   └── 28-thank-you.js
├── notes/
│   └── speaker-notes.md        # Live-polled Markdown speaker script (~2.5s auto-reload)
├── kind-deploy/                # Offline-safe Kubernetes (kind) laptop deployment for live stage
├── scripts/
│   ├── serve.sh                # Local HTTP server bound strictly to 127.0.0.1:8080
│   ├── validate.mjs            # Validates all slides (ES imports, XML syntax, assets & security)
│   └── bundle-single-html.mjs  # Packs everything into dist/kubecon_slides_full_website.html
└── AGENTS.md                   # Shared layout, palette & animation rules for AI sessions (Jetski/Gemini/Claude)
```

---

## Editing Slides in Parallel (Dima & Tim + AI Agents)

Because every slide is isolated in `slides/<NN>-<slug>.js` and `AGENTS.md` (plus `GEMINI.md` / `CLAUDE.md`) is checked into the repo root:

1. **Pull latest `main`** (or create a short branch):
   ```bash
   git pull --rebase
   ```
2. **Point your Jetski / Gemini / Claude session at specific slides**:
   - Example prompt: *"Update `slides/26-off-cpu-suspend.js` to make the Snapshot cylinder green and slow down packet animation by 20%."*
   - Your AI session automatically reads [`AGENTS.md`](./AGENTS.md) for the `1600x900` safe zones (`y = 148..672`), theme CSS variables, and `ctx` animation API.
3. **Validate & Push**:
   ```bash
   node ./scripts/validate.mjs
   git add slides/26-off-cpu-suspend.js
   git commit -m "slide 26: refine snapshot cylinder styling"
   git push
   ```

---

## Deploying to Local `kind` Cluster (Live Conference Mode)

To run the presentation inside a local `kind` Kubernetes cluster on your laptop (with `notes/speaker-notes.md` host-mounted so saving in VS Code/Vim updates the Presenter Console live with **zero** container rebuilds):

```bash
./kind-deploy/deploy.sh
```

---

## Optional: Bundle Into a Single Standalone `.html` File

Need a single self-contained HTML file (with CSS, JS, and base64 PNGs inlined) to attach or archive?

```bash
node ./scripts/bundle-single-html.mjs
# Outputs: dist/kubecon_slides_full_website.html
```

---

## Keyboard Shortcuts

| Key | Action |
| :--- | :--- |
| `Space` / `→` / `PageDown` | Next slide (syncs across Speaker & Stage windows) |
| `←` / `PageUp` | Previous slide |
| `Home` / `End` | Jump to the first / last slide |
| `S` | Open synced **Presenter Console** window (`?mode=speaker`) |
| `G` | Open clean **Audience Stage** window (`?mode=stage`) |
| `F` | Toggle fullscreen presentation mode |
| `R` | Replay current slide animation on all synced windows |
| `E` | Edit current slide's speaker badge & script inline |
