export default {
  chapter: 2,
  short: "15. Black-Box Tax",
  speaker: "DIMA",
  kicker: "THE COST OF GOING DIY",
  title: "You end up reinventing Kubernetes inside a black box",
  accent: "var(--s-red)",
  headline: "DIY means reinventing Kubernetes inside a black box",
  body1: "A bespoke control plane schedules sandboxes and manages their lifecycle.",
  body2: "Everything is opaque to Kubernetes, and it's a big lift for every team, especially small companies.",
  notes: "A bespoke control plane is responsible for scheduling agents into sandboxes\nThe manager manages the lifecycle of the sandboxes\nEverything is basically opaque\nYou end up reinventing large parts of kubernetes\nThis is pretty complex to build and manage\nEspecially for smaller companies\nLike startups",
  svg: `
  <!-- Node (same geometry as slide 14's final frame) -->
  <rect x="64" y="176" width="1000" height="628" rx="22" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.2" />
  <text x="100" y="224" font-size="25" font-weight="800" style="fill: var(--s-blue-dark)">Node</text>
  <text x="748" y="219" text-anchor="end" font-size="15" font-weight="700" style="fill: var(--s-muted)">claimed</text>
  <rect x="760" y="206" width="220" height="16" rx="8" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1" />
  <rect x="760" y="206" width="209" height="16" rx="8" style="fill: var(--s-blue)" />
  <text x="1028" y="220" text-anchor="end" font-size="18" font-weight="800" style="fill: var(--s-blue-dark)">95%</text>

  <!-- Giant Pod -->
  <rect x="100" y="246" width="928" height="522" rx="18" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 3" />
  <rect x="100" y="246" width="928" height="56" rx="18" style="fill: var(--s-blue)" />
  <rect x="100" y="284" width="928" height="18" style="fill: var(--s-blue)" />
  <text x="130" y="282" font-size="22" font-weight="800" style="fill: var(--s-card)">Giant Pod</text>

  <rect x="414" y="330" width="300" height="72" rx="14" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.6" />
  <text x="564" y="375" text-anchor="middle" font-size="25" font-weight="800" class="mono" style="fill: var(--s-purple-dark)">manager</text>
  <path d="M 564 402 V 426 M 231 426 H 897 M 231 426 V 450 M 453 426 V 450 M 675 426 V 450 M 897 426 V 450" fill="none" style="stroke: var(--s-purple); stroke-width: 2.4" />

  <g id="sb-0" class="fade-group">
    <rect x="136" y="450" width="190" height="120" rx="12" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.6" />
    <circle cx="231" cy="490" r="13" style="fill: var(--s-purple)" />
    <rect x="209" y="508" width="44" height="22" rx="11" style="fill: var(--s-purple)" />
    <text x="231" y="556" text-anchor="middle" font-size="14" class="mono" style="fill: var(--s-muted)">sandbox</text>
  </g>
  <g id="sb-1" class="fade-group">
    <rect x="358" y="450" width="190" height="120" rx="12" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.6" />
    <circle cx="453" cy="490" r="13" style="fill: var(--s-purple)" />
    <rect x="431" y="508" width="44" height="22" rx="11" style="fill: var(--s-purple)" />
    <text x="453" y="556" text-anchor="middle" font-size="14" class="mono" style="fill: var(--s-muted)">sandbox</text>
  </g>
  <g id="sb-2" class="fade-group">
    <rect x="580" y="450" width="190" height="120" rx="12" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.6" />
    <circle cx="675" cy="490" r="13" style="fill: var(--s-purple)" />
    <rect x="653" y="508" width="44" height="22" rx="11" style="fill: var(--s-purple)" />
    <text x="675" y="556" text-anchor="middle" font-size="14" class="mono" style="fill: var(--s-muted)">sandbox</text>
  </g>
  <g id="sb-3" class="fade-group">
    <rect x="802" y="450" width="190" height="120" rx="12" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.6" />
    <circle cx="897" cy="490" r="13" style="fill: var(--s-purple)" />
    <rect x="875" y="508" width="44" height="22" rx="11" style="fill: var(--s-purple)" />
    <text x="897" y="556" text-anchor="middle" font-size="14" class="mono" style="fill: var(--s-muted)">sandbox</text>
  </g>
  <g id="sb-4" class="fade-group">
    <rect x="136" y="600" width="190" height="120" rx="12" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.6" />
    <circle cx="231" cy="640" r="13" style="fill: var(--s-purple)" />
    <rect x="209" y="658" width="44" height="22" rx="11" style="fill: var(--s-purple)" />
    <text x="231" y="706" text-anchor="middle" font-size="14" class="mono" style="fill: var(--s-muted)">sandbox</text>
  </g>
  <g id="sb-5" class="fade-group">
    <rect x="358" y="600" width="190" height="120" rx="12" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.6" />
    <circle cx="453" cy="640" r="13" style="fill: var(--s-purple)" />
    <rect x="431" y="658" width="44" height="22" rx="11" style="fill: var(--s-purple)" />
    <text x="453" y="706" text-anchor="middle" font-size="14" class="mono" style="fill: var(--s-muted)">sandbox</text>
  </g>
  <g id="sb-6" class="fade-group">
    <rect x="580" y="600" width="190" height="120" rx="12" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.6" />
    <circle cx="675" cy="640" r="13" style="fill: var(--s-purple)" />
    <rect x="653" y="658" width="44" height="22" rx="11" style="fill: var(--s-purple)" />
    <text x="675" y="706" text-anchor="middle" font-size="14" class="mono" style="fill: var(--s-muted)">sandbox</text>
  </g>
  <g id="sb-7" class="fade-group">
    <rect x="802" y="600" width="190" height="120" rx="12" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.6" />
    <circle cx="897" cy="640" r="13" style="fill: var(--s-purple)" />
    <rect x="875" y="658" width="44" height="22" rx="11" style="fill: var(--s-purple)" />
    <text x="897" y="706" text-anchor="middle" font-size="14" class="mono" style="fill: var(--s-muted)">sandbox</text>
  </g>

  <!-- Black box: the Pod body goes opaque to Kubernetes -->
  <g id="blackbox" style="opacity: 0">
    <rect x="100" y="302" width="928" height="466" rx="18" style="fill: var(--s-dark-box)" />
    <rect x="100" y="302" width="928" height="24" style="fill: var(--s-dark-box)" />
    <path d="M 504 500 Q 564 446 624 500 Q 564 554 504 500 Z" fill="none" stroke="#ffffff" stroke-width="5" stroke-linejoin="round" />
    <circle cx="564" cy="500" r="14" fill="#ffffff" />
    <line x1="516" y1="548" x2="612" y2="452" style="stroke: var(--s-red); stroke-width: 7" stroke-linecap="round" />
    <text x="564" y="612" text-anchor="middle" font-size="34" font-weight="800" style="fill: #ffffff">Opaque to Kubernetes</text>
  </g>

  <!-- Custom control plane, wired into the manager -->
  <g id="cp-link" class="fade-group" style="opacity: 0">
    <path d="M 1100 274 H 900 V 366 H 728" fill="none" style="stroke: var(--s-purple); stroke-width: 3.5" class="flow-dash" />
    <polygon points="730,356 712,366 730,376" style="fill: var(--s-purple)" />
  </g>
  <!-- The DIY system: the box grows as Kubernetes pieces get rebuilt inside it -->
  <g id="cp" class="fade-group" style="opacity: 0">
    <rect id="cp-rect" x="1100" y="176" width="436" height="150" rx="18" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.6" />
    <text x="1132" y="240" font-size="26" font-weight="800" style="fill: var(--s-purple-dark)">Custom control plane</text>
    <text x="1132" y="274" font-size="17" style="fill: var(--s-muted)">schedules every sandbox</text>

    <g id="re-head" class="fade-group" style="opacity: 0">
      <line x1="1124" y1="300" x2="1512" y2="300" style="stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.6" />
      <text x="1124" y="332" font-size="14" font-weight="800" letter-spacing="1.5" style="fill: var(--s-purple-dark)">REINVENTED KUBERNETES</text>
    </g>
    <g id="chip-0" class="fade-group" style="opacity: 0">
      <rect x="1124" y="350" width="388" height="60" rx="12" style="fill: var(--s-card); stroke: var(--s-purple); stroke-width: 1.8" />
      <text x="1318" y="387" text-anchor="middle" font-size="21" font-weight="800" style="fill: var(--s-purple-dark)">Scheduling</text>
    </g>
    <g id="chip-1" class="fade-group" style="opacity: 0">
      <rect x="1124" y="422" width="388" height="60" rx="12" style="fill: var(--s-card); stroke: var(--s-purple); stroke-width: 1.8" />
      <text x="1318" y="459" text-anchor="middle" font-size="21" font-weight="800" style="fill: var(--s-purple-dark)">Lifecycle</text>
    </g>
    <g id="chip-2" class="fade-group" style="opacity: 0">
      <rect x="1124" y="494" width="388" height="60" rx="12" style="fill: var(--s-card); stroke: var(--s-purple); stroke-width: 1.8" />
      <text x="1318" y="531" text-anchor="middle" font-size="21" font-weight="800" style="fill: var(--s-purple-dark)">Routing</text>
    </g>
    <g id="chip-3" class="fade-group" style="opacity: 0">
      <rect x="1124" y="566" width="388" height="60" rx="12" style="fill: var(--s-card); stroke: var(--s-purple); stroke-width: 1.8" />
      <text x="1318" y="603" text-anchor="middle" font-size="21" font-weight="800" style="fill: var(--s-purple-dark)">Node drain</text>
    </g>
  </g>

  <!-- Takeaway -->
  <g id="pill" class="fade-group" style="opacity: 0">
    <rect id="pill-bg" class="smooth-box" x="1100" y="704" width="436" height="100" rx="18" style="fill: var(--s-red-fill); stroke: var(--s-red); stroke-width: 2" />
    <text id="pill-txt" class="smooth-box" x="1318" y="750" text-anchor="middle" font-size="24" font-weight="800" style="fill: var(--s-red-dark)">A big lift for every team</text>
    <text id="pill-sub" class="smooth-box" x="1318" y="782" text-anchor="middle" font-size="17" font-weight="600" style="fill: var(--s-red-dark)">especially small companies</text>
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

    // Beat 1: a bespoke control plane schedules agents into sandboxes
    ctx.later(400, () => pop(ctx.el("cp"), "translateX(48px)"));
    ctx.later(1000, () => { ctx.el("cp-link").style.opacity = "1"; });

    // Beat 2: the manager churns sandbox lifecycles (stop one, start it again)
    ctx.later(1700, () => {
      let i = 0;
      const order = [2, 5, 0, 7, 3, 4, 1, 6];
      ctx.every(750, () => {
        const sb = ctx.el(`sb-${order[i % order.length]}`);
        i += 1;
        sb.style.opacity = "0.12";
        ctx.later(380, () => pop(sb, "scale(0.7)"));
      });
    });

    // Beat 3: everything is basically opaque
    ctx.later(3100, () => {
      const box = ctx.el("blackbox");
      box.style.transition = "opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1)";
      box.style.opacity = "0.95";
    });

    // Beat 4: you end up reinventing large parts of Kubernetes,
    // so the DIY control plane swells and each rebuilt piece stacks up inside it
    ctx.later(4200, () => {
      const rect = ctx.el("cp-rect");
      ctx.animateProgress(700, (t) => {
        rect.setAttribute("height", String(Math.round(150 + 326 * ctx.easeOutCubic(t))));
      });
    });
    ctx.later(4650, () => { ctx.el("re-head").style.opacity = "1"; });
    for (let k = 0; k < 4; k++) {
      ctx.later(4850 + k * 260, () => pop(ctx.el(`chip-${k}`), "translateY(-18px) scale(1.08)"));
    }

    // Beat 5: complex to build and manage for anyone, especially small companies
    ctx.later(6200, () => pop(ctx.el("pill"), "translateY(14px)"));
    ctx.later(6800, () => {
      ctx.el("pill-bg").style.fill = "var(--s-red)";
      ctx.el("pill-txt").style.fill = "var(--s-card)";
      ctx.el("pill-sub").style.fill = "var(--s-card)";
    });
  }
};
