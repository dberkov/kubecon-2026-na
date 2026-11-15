export default {
  chapter: 5,
  short: "28. Wake Up Fast, Anywhere",
  speaker: "DIMA",
  kicker: "GOAL: SPEED",
  title: "Wake up fast, anywhere",
  accent: "var(--s-blue)",
  headline: "An actor's truth is its image and volumes; memory and the container layer are accelerators",
  body1: "On resume, every layer that still matches is reused. A new CPU skips memory; a new image keeps only volumes.",
  body2: "Either way, the actor wakes up: volumes are the truth, the rest just makes it faster.",
  notes: "Let's zoom in on a snapshot. This is where Speed comes from\nAn actor's truth is small: its image and its volumes. Memory and the container layer are just accelerators\nOn resume, we reuse every layer that still matches\nNew CPU? Memory is skipped. New image? Only the volumes come back. Either way, the actor wakes up.",
  svg: `
  <!-- Inside a snapshot (static), centred on the slide -->
  <g transform="translate(388 0)">
    <rect x="64" y="208" width="696" height="510" rx="20" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.8" />
    <text x="96" y="250" font-size="16" font-weight="800" letter-spacing="1.5" style="fill: var(--s-muted)">INSIDE A SNAPSHOT</text>

    <g id="ly-m" class="fade-group" style="opacity: 0">
      <rect x="96" y="276" width="632" height="124" rx="16" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.4" />
      <text x="124" y="326" font-size="26" font-weight="800" style="fill: var(--s-purple-dark)">Memory</text>
      <text x="124" y="360" font-size="17" style="fill: var(--s-muted)">running state</text>
      <rect x="586" y="294" width="122" height="30" rx="15" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.6" />
      <text x="647" y="314" text-anchor="middle" font-size="14" font-weight="800" style="fill: var(--s-muted)">accelerator</text>
      <text x="392" y="367" text-anchor="end" font-size="14" font-weight="700" style="fill: var(--s-muted)">needs the same:</text>
      <rect x="400" y="348" width="120" height="28" rx="14" style="fill: var(--s-card); stroke: var(--s-purple); stroke-width: 1.4" />
      <text class="mono" x="460" y="367" text-anchor="middle" font-size="13" font-weight="800" style="fill: var(--s-purple-dark)">CPU</text>
      <rect x="526" y="348" width="80" height="28" rx="14" style="fill: var(--s-card); stroke: var(--s-purple); stroke-width: 1.4" />
      <text class="mono" x="566" y="367" text-anchor="middle" font-size="13" font-weight="800" style="fill: var(--s-purple-dark)">sandbox</text>
      <rect x="612" y="348" width="96" height="28" rx="14" style="fill: var(--s-card); stroke: var(--s-purple); stroke-width: 1.4" />
      <text class="mono" x="660" y="367" text-anchor="middle" font-size="13" font-weight="800" style="fill: var(--s-purple-dark)">image</text>
    </g>
    <g id="ly-c" class="fade-group" style="opacity: 0">
      <rect x="96" y="416" width="632" height="124" rx="16" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.4" />
      <text x="124" y="466" font-size="26" font-weight="800" style="fill: var(--s-blue-dark)">Container layer</text>
      <text x="124" y="500" font-size="17" style="fill: var(--s-muted)">writes on top of the image</text>
      <rect x="586" y="434" width="122" height="30" rx="15" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.6" />
      <text x="647" y="454" text-anchor="middle" font-size="14" font-weight="800" style="fill: var(--s-muted)">accelerator</text>
      <text x="604" y="507" text-anchor="end" font-size="14" font-weight="700" style="fill: var(--s-muted)">needs the same:</text>
      <rect x="612" y="488" width="96" height="28" rx="14" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 1.4" />
      <text class="mono" x="660" y="507" text-anchor="middle" font-size="13" font-weight="800" style="fill: var(--s-blue-dark)">image</text>
    </g>
    <g id="ly-v" class="fade-group" style="opacity: 0">
      <rect x="96" y="556" width="632" height="124" rx="16" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.4" />
      <text x="124" y="606" font-size="26" font-weight="800" style="fill: var(--s-amber-dark)">Volumes</text>
      <text x="124" y="640" font-size="17" style="fill: var(--s-muted)">your data, like the home directory</text>
      <rect x="608" y="574" width="100" height="30" rx="15" style="fill: var(--s-green)" />
      <text x="658" y="594" text-anchor="middle" font-size="14" font-weight="800" style="fill: var(--s-card)">truth</text>
      <text x="708" y="647" text-anchor="end" font-size="14" font-weight="700" style="fill: var(--s-muted)">works anywhere</text>
    </g>
  </g>
  `,
  animate: (ctx) => {
    ctx.el("bottom-callout").classList.add("is-hidden");

    const pop = (node, from) => {
      node.style.transformBox = "fill-box";
      node.style.transformOrigin = "center";
      node.style.transition = "none";
      node.style.opacity = "0";
      node.style.transform = from;
      node.getBoundingClientRect();
      node.style.transition = "";
      node.style.opacity = "1";
      node.style.transform = "none";
    };

    // Build the three layers bottom to top, then hold still
    ["v", "c", "m"].forEach((k, i) => ctx.later(200 + i * 260, () => pop(ctx.el(`ly-${k}`), "translateY(24px)")));
  }
};
