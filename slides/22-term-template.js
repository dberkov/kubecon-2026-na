export default {
  chapter: 4,
  short: "22. Term: ActorTemplate",
  speaker: "DIMA",
  kicker: "TERMINOLOGY · 2 OF 5",
  title: "ActorTemplate: the cookie cutter for actors",
  accent: "var(--s-blue)",
  headline: "If an Actor is a cookie, the ActorTemplate is the cookie cutter",
  body1: "It says which OCI image to run, with which arguments, in which sandbox.",
  body2: "You can have many templates, and each can pick gVisor or microVM.",
  notes: "Second, ActorTemplate:\nIf an actor is a cookie, this is the cookie cutter\nIt includes details like which sandbox tech, which OCI image to run, arguments, etc.\nNotably, there can be many different templates\nand they can use different sandbox technologies\nsuch as gVisor or microVMs",
  svg: `
  <!-- Terminology progress -->
  <rect x="64" y="176" width="272" height="46" rx="23" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.4" />
  <text x="200" y="206" text-anchor="middle" font-size="18" font-weight="700" style="fill: var(--s-muted)">✓ Actor</text>
  <rect x="364" y="176" width="272" height="46" rx="23" style="fill: var(--s-blue)" />
  <text x="500" y="206" text-anchor="middle" font-size="19" font-weight="800" style="fill: var(--s-card)">ActorTemplate</text>
  <rect x="664" y="176" width="272" height="46" rx="23" style="fill: none; stroke: var(--s-border); stroke-width: 1.4; stroke-dasharray: 6 5" />
  <text x="800" y="206" text-anchor="middle" font-size="18" font-weight="700" style="fill: var(--s-muted); opacity: 0.55">Worker</text>
  <rect x="964" y="176" width="272" height="46" rx="23" style="fill: none; stroke: var(--s-border); stroke-width: 1.4; stroke-dasharray: 6 5" />
  <text x="1100" y="206" text-anchor="middle" font-size="18" font-weight="700" style="fill: var(--s-muted); opacity: 0.55">Atelet</text>
  <rect x="1264" y="176" width="272" height="46" rx="23" style="fill: none; stroke: var(--s-border); stroke-width: 1.4; stroke-dasharray: 6 5" />
  <text x="1400" y="206" text-anchor="middle" font-size="18" font-weight="700" style="fill: var(--s-muted); opacity: 0.55">Atenet</text>

  <!-- Template A: gVisor -->
  <g id="tpl-a" class="fade-group" style="opacity: 0">
    <rect x="96" y="280" width="460" height="220" rx="20" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 3; stroke-dasharray: 12 8" />
    <text x="128" y="320" font-size="14" font-weight="800" letter-spacing="1.5" style="fill: var(--s-muted)">TEMPLATE</text>
    <text x="128" y="362" font-size="30" font-weight="800" class="mono" style="fill: var(--s-blue-dark)">chat-agent</text>
    <text x="128" y="402" font-size="18" class="mono" style="fill: var(--s-muted)">image: chat-agent:v3</text>
    <rect x="128" y="426" width="124" height="40" rx="20" style="fill: var(--s-blue)" />
    <text x="190" y="452" text-anchor="middle" font-size="18" font-weight="800" style="fill: var(--s-card)">gVisor</text>
  </g>
  <g id="arr-a" class="fade-group" style="opacity: 0">
    <line x1="572" y1="390" x2="626" y2="390" style="stroke: var(--s-blue); stroke-width: 4" stroke-linecap="round" />
    <polygon points="624,378 644,390 624,402" style="fill: var(--s-blue)" />
  </g>

  <!-- Template B: microVM -->
  <g id="tpl-b" class="fade-group" style="opacity: 0">
    <rect x="96" y="560" width="460" height="220" rx="20" style="fill: var(--s-card); stroke: var(--s-amber); stroke-width: 3; stroke-dasharray: 12 8" />
    <text x="128" y="600" font-size="14" font-weight="800" letter-spacing="1.5" style="fill: var(--s-muted)">TEMPLATE</text>
    <text x="128" y="642" font-size="30" font-weight="800" class="mono" style="fill: var(--s-amber-dark)">code-runner</text>
    <text x="128" y="682" font-size="18" class="mono" style="fill: var(--s-muted)">image: py-runner:1.2</text>
    <rect x="128" y="706" width="136" height="40" rx="20" style="fill: var(--s-amber)" />
    <text x="196" y="732" text-anchor="middle" font-size="18" font-weight="800" style="fill: var(--s-card)">microVM</text>
  </g>
  <g id="arr-b" class="fade-group" style="opacity: 0">
    <line x1="572" y1="670" x2="626" y2="670" style="stroke: var(--s-amber); stroke-width: 4" stroke-linecap="round" />
    <polygon points="624,658 644,670 624,682" style="fill: var(--s-amber)" />
  </g>

  <!-- Actors stamped out of each template -->
  <g id="act-a-0" class="fade-group" style="opacity: 0">
    <rect x="656" y="305" width="196" height="170" rx="16" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
    <circle cx="754" cy="365" r="20" style="fill: var(--s-purple)" />
    <rect x="724" y="393" width="60" height="30" rx="15" style="fill: var(--s-purple)" />
    <rect x="680" y="445" width="148" height="10" rx="5" style="fill: var(--s-blue)" />
  </g>
  <g id="act-a-1" class="fade-group" style="opacity: 0">
    <rect x="876" y="305" width="196" height="170" rx="16" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
    <circle cx="974" cy="365" r="20" style="fill: var(--s-purple)" />
    <rect x="944" y="393" width="60" height="30" rx="15" style="fill: var(--s-purple)" />
    <rect x="900" y="445" width="148" height="10" rx="5" style="fill: var(--s-blue)" />
  </g>
  <g id="act-a-2" class="fade-group" style="opacity: 0">
    <rect x="1096" y="305" width="196" height="170" rx="16" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
    <circle cx="1194" cy="365" r="20" style="fill: var(--s-purple)" />
    <rect x="1164" y="393" width="60" height="30" rx="15" style="fill: var(--s-purple)" />
    <rect x="1120" y="445" width="148" height="10" rx="5" style="fill: var(--s-blue)" />
  </g>
  <g id="act-a-3" class="fade-group" style="opacity: 0">
    <rect x="1316" y="305" width="196" height="170" rx="16" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
    <circle cx="1414" cy="365" r="20" style="fill: var(--s-purple)" />
    <rect x="1384" y="393" width="60" height="30" rx="15" style="fill: var(--s-purple)" />
    <rect x="1340" y="445" width="148" height="10" rx="5" style="fill: var(--s-blue)" />
  </g>
  <g id="act-b-0" class="fade-group" style="opacity: 0">
    <rect x="656" y="585" width="196" height="170" rx="16" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
    <circle cx="754" cy="645" r="20" style="fill: var(--s-purple)" />
    <rect x="724" y="673" width="60" height="30" rx="15" style="fill: var(--s-purple)" />
    <rect x="680" y="725" width="148" height="10" rx="5" style="fill: var(--s-amber)" />
  </g>
  <g id="act-b-1" class="fade-group" style="opacity: 0">
    <rect x="876" y="585" width="196" height="170" rx="16" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
    <circle cx="974" cy="645" r="20" style="fill: var(--s-purple)" />
    <rect x="944" y="673" width="60" height="30" rx="15" style="fill: var(--s-purple)" />
    <rect x="900" y="725" width="148" height="10" rx="5" style="fill: var(--s-amber)" />
  </g>
  <g id="act-b-2" class="fade-group" style="opacity: 0">
    <rect x="1096" y="585" width="196" height="170" rx="16" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
    <circle cx="1194" cy="645" r="20" style="fill: var(--s-purple)" />
    <rect x="1164" y="673" width="60" height="30" rx="15" style="fill: var(--s-purple)" />
    <rect x="1120" y="725" width="148" height="10" rx="5" style="fill: var(--s-amber)" />
  </g>
  <g id="act-b-3" class="fade-group" style="opacity: 0">
    <rect x="1316" y="585" width="196" height="170" rx="16" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
    <circle cx="1414" cy="645" r="20" style="fill: var(--s-purple)" />
    <rect x="1384" y="673" width="60" height="30" rx="15" style="fill: var(--s-purple)" />
    <rect x="1340" y="725" width="148" height="10" rx="5" style="fill: var(--s-amber)" />
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

    // Each template stamps out its own actors, left to right
    const stampRow = (row, startMs) => {
      ctx.later(startMs, () => pop(ctx.el(`tpl-${row}`), "translateX(-24px)"));
      ctx.later(startMs + 450, () => { ctx.el(`arr-${row}`).style.opacity = "1"; });
      for (let k = 0; k < 4; k++) {
        ctx.later(startMs + 700 + k * 230, () => pop(ctx.el(`act-${row}-${k}`), "translateX(-70px) scale(0.85)"));
      }
    };
    stampRow("a", 200);
    stampRow("b", 2000);
  }
};
