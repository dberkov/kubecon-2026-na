export default {
  chapter: 2,
  short: "14. DIY Giant Pod",
  speaker: "DIMA",
  kicker: "STATE OF THE ART · APPROACH 2: DIY",
  title: "Power users go DIY: one giant Pod per machine",
  accent: "var(--s-blue)",
  headline: "Approach 2: one giant Pod per machine, with a custom manager inside",
  body1: "The giant Pod claims ~95% of the Node up front.",
  body2: "Kubernetes sees one Pod; the manager runs every sandbox.",
  notes: "A second approach we saw, was mostly from very sophisticated users\nThey build a DIY system on top of Kubernetes\nTypically this looks like one giant workload per machine\nwhich consumes most of the resources\nInside that workload is a “manager” app",
  svg: `
  <!-- Node -->
  <g id="node">
    <rect id="node-box" class="smooth-box" x="64" y="176" width="1000" height="628" rx="22" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.2" />
    <text x="100" y="224" font-size="25" font-weight="800" style="fill: var(--s-blue-dark)">Node</text>
    <text x="748" y="219" text-anchor="end" font-size="15" font-weight="700" style="fill: var(--s-muted)">claimed</text>
    <rect x="760" y="206" width="220" height="16" rx="8" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1" />
    <rect id="node-bar" x="760" y="206" width="0" height="16" rx="8" style="fill: var(--s-blue)" />
    <text id="node-pct" x="1028" y="220" text-anchor="end" font-size="18" font-weight="800" style="fill: var(--s-blue-dark)">0%</text>
  </g>

  <!-- Giant Pod (grows to fill the Node) -->
  <g id="pod" style="opacity: 0">
    <rect x="100" y="246" width="928" height="522" rx="18" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 3" />
    <rect x="100" y="246" width="928" height="56" rx="18" style="fill: var(--s-blue)" />
    <rect x="100" y="284" width="928" height="18" style="fill: var(--s-blue)" />
    <text x="130" y="282" font-size="22" font-weight="800" style="fill: var(--s-card)">Giant Pod</text>

    <g id="mgr" class="fade-group" style="opacity: 0">
      <rect x="414" y="330" width="300" height="72" rx="14" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.6" />
      <text x="564" y="375" text-anchor="middle" font-size="25" font-weight="800" class="mono" style="fill: var(--s-purple-dark)">manager</text>
    </g>
    <path id="mgr-bus" class="fade-group" d="M 564 402 V 426 M 231 426 H 897 M 231 426 V 450 M 453 426 V 450 M 675 426 V 450 M 897 426 V 450" fill="none" style="stroke: var(--s-purple); stroke-width: 2.4; opacity: 0" />

      <g id="sb-0" class="fade-group" style="opacity: 0">
        <rect id="sb-r-0" class="smooth-box" x="136" y="450" width="190" height="120" rx="12" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.6" />
        <circle cx="231" cy="490" r="13" style="fill: var(--s-purple)" />
        <rect x="209" y="508" width="44" height="22" rx="11" style="fill: var(--s-purple)" />
        <text x="231" y="556" text-anchor="middle" font-size="14" class="mono" style="fill: var(--s-muted)">sandbox</text>
      </g>
      <g id="sb-1" class="fade-group" style="opacity: 0">
        <rect id="sb-r-1" class="smooth-box" x="358" y="450" width="190" height="120" rx="12" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.6" />
        <circle cx="453" cy="490" r="13" style="fill: var(--s-purple)" />
        <rect x="431" y="508" width="44" height="22" rx="11" style="fill: var(--s-purple)" />
        <text x="453" y="556" text-anchor="middle" font-size="14" class="mono" style="fill: var(--s-muted)">sandbox</text>
      </g>
      <g id="sb-2" class="fade-group" style="opacity: 0">
        <rect id="sb-r-2" class="smooth-box" x="580" y="450" width="190" height="120" rx="12" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.6" />
        <circle cx="675" cy="490" r="13" style="fill: var(--s-purple)" />
        <rect x="653" y="508" width="44" height="22" rx="11" style="fill: var(--s-purple)" />
        <text x="675" y="556" text-anchor="middle" font-size="14" class="mono" style="fill: var(--s-muted)">sandbox</text>
      </g>
      <g id="sb-3" class="fade-group" style="opacity: 0">
        <rect id="sb-r-3" class="smooth-box" x="802" y="450" width="190" height="120" rx="12" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.6" />
        <circle cx="897" cy="490" r="13" style="fill: var(--s-purple)" />
        <rect x="875" y="508" width="44" height="22" rx="11" style="fill: var(--s-purple)" />
        <text x="897" y="556" text-anchor="middle" font-size="14" class="mono" style="fill: var(--s-muted)">sandbox</text>
      </g>
      <g id="sb-4" class="fade-group" style="opacity: 0">
        <rect id="sb-r-4" class="smooth-box" x="136" y="600" width="190" height="120" rx="12" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.6" />
        <circle cx="231" cy="640" r="13" style="fill: var(--s-purple)" />
        <rect x="209" y="658" width="44" height="22" rx="11" style="fill: var(--s-purple)" />
        <text x="231" y="706" text-anchor="middle" font-size="14" class="mono" style="fill: var(--s-muted)">sandbox</text>
      </g>
      <g id="sb-5" class="fade-group" style="opacity: 0">
        <rect id="sb-r-5" class="smooth-box" x="358" y="600" width="190" height="120" rx="12" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.6" />
        <circle cx="453" cy="640" r="13" style="fill: var(--s-purple)" />
        <rect x="431" y="658" width="44" height="22" rx="11" style="fill: var(--s-purple)" />
        <text x="453" y="706" text-anchor="middle" font-size="14" class="mono" style="fill: var(--s-muted)">sandbox</text>
      </g>
      <g id="sb-6" class="fade-group" style="opacity: 0">
        <rect id="sb-r-6" class="smooth-box" x="580" y="600" width="190" height="120" rx="12" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.6" />
        <circle cx="675" cy="640" r="13" style="fill: var(--s-purple)" />
        <rect x="653" y="658" width="44" height="22" rx="11" style="fill: var(--s-purple)" />
        <text x="675" y="706" text-anchor="middle" font-size="14" class="mono" style="fill: var(--s-muted)">sandbox</text>
      </g>
      <g id="sb-7" class="fade-group" style="opacity: 0">
        <rect id="sb-r-7" class="smooth-box" x="802" y="600" width="190" height="120" rx="12" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.6" />
        <circle cx="897" cy="640" r="13" style="fill: var(--s-purple)" />
        <rect x="875" y="658" width="44" height="22" rx="11" style="fill: var(--s-purple)" />
        <text x="897" y="706" text-anchor="middle" font-size="14" class="mono" style="fill: var(--s-muted)">sandbox</text>
      </g>
  </g>

  <!-- Story steps (one per spoken line) -->
  <g id="step-0" class="fade-group" style="opacity: 0.3">
    <rect id="step-r-0" class="smooth-box" x="1100" y="176" width="436" height="160" rx="18" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.6" />
    <circle cx="1150" cy="256" r="24" style="fill: var(--s-blue)" />
    <text x="1150" y="263" text-anchor="middle" font-size="20" font-weight="800" style="fill: var(--s-card)">1</text>
    <text x="1192" y="250" font-size="24" font-weight="800">Power users go DIY</text>
    <text x="1192" y="280" font-size="17" style="fill: var(--s-muted)">on top of Kubernetes</text>
  </g>
  <g id="step-1" class="fade-group" style="opacity: 0.3">
    <rect id="step-r-1" class="smooth-box" x="1100" y="350" width="436" height="160" rx="18" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.6" />
    <circle cx="1150" cy="430" r="24" style="fill: var(--s-blue)" />
    <text x="1150" y="437" text-anchor="middle" font-size="20" font-weight="800" style="fill: var(--s-card)">2</text>
    <text x="1192" y="424" font-size="24" font-weight="800">One giant Pod per node</text>
    <text x="1192" y="454" font-size="17" style="fill: var(--s-muted)">claims most of the resources</text>
  </g>
  <g id="step-2" class="fade-group" style="opacity: 0.3">
    <rect id="step-r-2" class="smooth-box" x="1100" y="524" width="436" height="160" rx="18" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.6" />
    <circle cx="1150" cy="604" r="24" style="fill: var(--s-purple)" />
    <text x="1150" y="611" text-anchor="middle" font-size="20" font-weight="800" style="fill: var(--s-card)">3</text>
    <text x="1192" y="598" font-size="24" font-weight="800">Custom “manager” inside</text>
    <text x="1192" y="628" font-size="17" style="fill: var(--s-muted)">runs every sandbox</text>
  </g>

  <!-- Takeaway -->
  <g id="pill" class="fade-group" style="opacity: 0">
    <rect x="1100" y="704" width="436" height="100" rx="18" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2" />
    <text x="1318" y="763" text-anchor="middle" font-size="24" font-weight="800" style="fill: var(--s-amber-dark)">Kubernetes sees just 1 Pod</text>
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
    const STEP_ACCENTS = [
      ["var(--s-blue)", "var(--s-blue-fill)"],
      ["var(--s-blue)", "var(--s-blue-fill)"],
      ["var(--s-purple)", "var(--s-purple-fill)"]
    ];
    const activateStep = (i) => {
      for (let k = 0; k < 3; k++) {
        const g = ctx.el(`step-${k}`);
        const r = ctx.el(`step-r-${k}`);
        if (k === i) {
          g.style.opacity = "1";
          r.style.stroke = STEP_ACCENTS[k][0];
          r.style.fill = STEP_ACCENTS[k][1];
          r.style.strokeWidth = "2.6";
        } else if (k < i) {
          g.style.opacity = "0.75";
          r.style.stroke = "var(--s-border)";
          r.style.fill = "var(--s-surface)";
          r.style.strokeWidth = "1.6";
        }
      }
    };

    // Beat 1: "very sophisticated users ... DIY on top of Kubernetes"
    ctx.later(300, () => {
      activateStep(0);
      ctx.el("node-box").style.strokeWidth = "3.2";
    });

    // Beat 2: one giant workload per machine, consuming most of the resources
    ctx.later(1300, () => {
      activateStep(1);
      ctx.el("node-box").style.strokeWidth = "2.2";
      const pod = ctx.el("pod");
      const bar = ctx.el("node-bar");
      const pct = ctx.el("node-pct");
      ctx.animateProgress(1300, (t) => {
        const e = ctx.easeOutCubic(t);
        const sc = (0.3 + 0.7 * e).toFixed(3);
        pod.setAttribute("transform", `translate(564, 507) scale(${sc}) translate(-564, -507)`);
        pod.style.opacity = Math.min(1, t * 3).toFixed(2);
        bar.setAttribute("width", String(Math.round(209 * e)));
        pct.textContent = `${Math.round(95 * e)}%`;
      });
    });

    // Beat 3: a "manager" app inside spawns the sandboxes
    ctx.later(3000, () => {
      activateStep(2);
      pop(ctx.el("mgr"), "scale(1.5)");
    });
    ctx.later(3450, () => { ctx.el("mgr-bus").style.opacity = "1"; });
    for (let i = 0; i < 8; i++) {
      ctx.later(3650 + i * 110, () => pop(ctx.el(`sb-${i}`), "scale(0.6)"));
    }

    // Takeaway
    ctx.later(4900, () => pop(ctx.el("pill"), "translateY(14px)"));

    // Ambient: sandboxes flicker busy, so the box feels alive
    ctx.later(4700, () => {
      let last = -1;
      ctx.every(700, () => {
        let i = Math.floor(Math.random() * 8);
        if (i === last) i = (i + 3) % 8;
        last = i;
        const r = ctx.el(`sb-r-${i}`);
        r.style.stroke = "var(--s-purple)";
        r.style.strokeWidth = "3";
        ctx.later(600, () => {
          r.style.stroke = "var(--s-border)";
          r.style.strokeWidth = "1.6";
        });
      });
    });
  }
};
