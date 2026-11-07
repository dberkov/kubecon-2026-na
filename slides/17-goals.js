export default {
  chapter: 3,
  short: "17. Goals",
  speaker: "TIM",
  kicker: "SUBSTRATE DESIGN GOALS",
  title: "Substrate Goals — Directly Resolving the Agent Trilemma",
  accent: "var(--s-blue)",
  headline: "Security (Red) · Density (Green) · Speed (Blue) — without sacrificing Kubernetes",
  body1: "Every agent gets cryptographic identity (SPIFFE + JWT), zero ambient credentials, and a gVisor/uVM sandbox.",
  body2: "Idle agents checkpoint off-CPU in milliseconds so millions of sessions share compact warm pools.",
  notes: "Agent Substrate is designed around three core goals: Security (gVisor/microVM sandbox, SPIFFE ID, zero ambient credentials, locked egress), Density (checkpoint idle agents so they consume ~0 compute), and Speed (wake a suspended agent in hundreds of milliseconds via gRPC).",
  svg: `
  <!-- Goal 1: Security -->
  <g id="goal-row-1" class="fade-group">
    <rect x="64" y="176" width="1472" height="184" rx="22" style="fill: var(--s-red-fill); stroke: var(--s-red); stroke-width: 2.6" />

    <!-- Left Shield + Lock Medallion -->
    <circle cx="144" cy="268" r="46" style="fill: var(--s-card); stroke: var(--s-red); stroke-width: 2.5" />
    <path d="M 144 236 L 168 246 V 268 C 168 285 157 296 144 302 C 131 296 120 285 120 268 V 246 Z" style="fill: var(--s-red)" />
    <path d="M 138 266 V 260 A 6 6 0 0 1 150 260 V 266" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" />
    <rect x="135" y="266" width="18" height="14" rx="3" fill="#ffffff" />

    <rect x="216" y="216" width="154" height="34" rx="17" style="fill: var(--s-red)" />
    <text x="293" y="239" text-anchor="middle" font-size="14" font-weight="800" style="fill: #ffffff">1 · SECURITY</text>
    <text x="216" y="296" font-size="25.5" font-weight="800" style="fill: var(--s-red-dark)">Every agent gets an identity — zero credentials, locked network, hard sandbox</text>

    <!-- Right Visual Stage: Contained Sandbox (Zero Text) -->
    <rect x="1220" y="200" width="284" height="136" rx="18" style="fill: var(--s-card); stroke: var(--s-red); stroke-width: 2" />
    <rect x="1296" y="216" width="132" height="104" rx="16" style="fill: var(--s-red-fill); stroke: var(--s-red); stroke-width: 3" />
    <rect id="g1-wall-flash" x="1296" y="216" width="132" height="104" rx="16" fill="none" style="stroke: var(--s-red); stroke-width: 7; opacity: 0" />
    <circle id="g1-p-l" cx="1362" cy="268" r="5" style="fill: var(--s-red); opacity: 0" />
    <circle id="g1-p-r" cx="1362" cy="268" r="5" style="fill: var(--s-red); opacity: 0" />
    <circle id="g1-p-u" cx="1362" cy="268" r="5" style="fill: var(--s-red); opacity: 0" />
    <circle id="g1-p-d" cx="1362" cy="268" r="5" style="fill: var(--s-red); opacity: 0" />
    <circle cx="1362" cy="268" r="16" style="fill: var(--s-red)" />
    <circle cx="1362" cy="268" r="6" fill="#ffffff" />
  </g>

  <!-- Goal 2: Density -->
  <g id="goal-row-2" class="fade-group">
    <rect x="64" y="396" width="1472" height="184" rx="22" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2.6" />

    <!-- Left Density Stack Medallion -->
    <circle cx="144" cy="488" r="46" style="fill: var(--s-card); stroke: var(--s-green); stroke-width: 2.5" />
    <polygon points="144,456 174,471 144,486 114,471" style="fill: var(--s-green)" />
    <polyline points="116,484 144,499 172,484" fill="none" style="stroke: var(--s-green); stroke-width: 4.5" stroke-linecap="round" stroke-linejoin="round" />
    <polyline points="116,498 144,513 172,498" fill="none" style="stroke: var(--s-green); stroke-width: 4.5" stroke-linecap="round" stroke-linejoin="round" />

    <rect x="216" y="436" width="154" height="34" rx="17" style="fill: var(--s-green)" />
    <text x="293" y="459" text-anchor="middle" font-size="14" font-weight="800" style="fill: #ffffff">2 · DENSITY</text>
    <text x="216" y="516" font-size="25.5" font-weight="800" style="fill: var(--s-green-dark)">Run millions of agents, 100Ks live — and the rest suspended costing nothing</text>

    <!-- Right Visual Stage: Multiplexed Density Grid (Zero Text) -->
    <rect x="1220" y="420" width="284" height="136" rx="18" style="fill: var(--s-card); stroke: var(--s-green); stroke-width: 2" />
    <g id="g2-density-grid" />
  </g>

  <!-- Goal 3: Speed -->
  <g id="goal-row-3" class="fade-group">
    <rect x="64" y="616" width="1472" height="184" rx="22" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.6" />

    <!-- Left Speed Bolt Medallion -->
    <circle cx="144" cy="708" r="46" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 2.5" />
    <polygon points="150,674 124,710 144,710 138,742 164,706 144,706" style="fill: var(--s-blue)" stroke-linejoin="round" />

    <rect x="216" y="656" width="154" height="34" rx="17" style="fill: var(--s-blue)" />
    <text x="293" y="679" text-anchor="middle" font-size="14" font-weight="800" style="fill: #ffffff">3 · SPEED</text>
    <text x="216" y="736" font-size="25.5" font-weight="800" style="fill: var(--s-blue-dark)">An idle agent wakes in a few hundred milliseconds — nobody notices it paused</text>

    <!-- Right Visual Stage: Instant Wakeup Pulse (Zero Text) -->
    <rect x="1220" y="640" width="284" height="136" rx="18" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 2" />
    <line x1="1268" y1="708" x2="1456" y2="708" style="stroke: var(--s-border); stroke-width: 6" stroke-linecap="round" />
    <line id="g3-fast-line" x1="1268" y1="708" x2="1268" y2="708" style="stroke: var(--s-blue); stroke-width: 6" stroke-linecap="round" />
    <circle cx="1268" cy="708" r="16" style="fill: var(--s-sleep-fill); stroke: var(--s-sleep); stroke-width: 2.5" />
    <circle id="g3-wake-ring" cx="1456" cy="708" r="22" style="fill: var(--s-blue); opacity: 0" />
    <circle id="g3-wake-node" cx="1456" cy="708" r="18" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 3" />
    <circle id="g3-spark" cx="1268" cy="708" r="9" style="fill: var(--s-blue); stroke: #ffffff; stroke-width: 2" />
  </g>
  `,
  animate: (ctx) => {
    ctx.el("bottom-callout").classList.add("is-hidden");

    ["goal-row-1", "goal-row-2", "goal-row-3"].forEach((id, i) => {
      const row = ctx.el(id);
      row.style.opacity = "0";
      row.style.transform = "translateY(14px)";
      ctx.later(i * 210, () => {
        row.style.opacity = "1";
        row.style.transform = "translateY(0px)";
      });
    });

    // 1. Security sandbox containment animation
    const pL = ctx.el("g1-p-l");
    const pR = ctx.el("g1-p-r");
    const pU = ctx.el("g1-p-u");
    const pD = ctx.el("g1-p-d");
    const wallFlash = ctx.el("g1-wall-flash");
    const runSec = () => {
      ctx.animateProgress(1600, (t) => {
        const reach = t < 0.65 ? ctx.easeOutCubic(t / 0.65) : 1 - 0.35 * ((t - 0.65) / 0.35);
        const op = t < 0.75 ? 0.95 : Math.max(0, 1 - (t - 0.75) / 0.25);
        pL.setAttribute("cx", (1362 - 52 * reach).toFixed(1));
        pR.setAttribute("cx", (1362 + 52 * reach).toFixed(1));
        pU.setAttribute("cy", (268 - 38 * reach).toFixed(1));
        pD.setAttribute("cy", (268 + 38 * reach).toFixed(1));
        pL.style.opacity = op.toFixed(2);
        pR.style.opacity = op.toFixed(2);
        pU.style.opacity = op.toFixed(2);
        pD.style.opacity = op.toFixed(2);
        const impact = t > 0.5 && t < 0.9 ? Math.sin(((t - 0.5) / 0.4) * Math.PI) : 0;
        wallFlash.style.opacity = (0.65 * impact).toFixed(2);
      });
    };
    ctx.later(500, () => {
      runSec();
      ctx.every(2400, runSec);
    });

    // 2. Density grid multiplexing animation
    const gridEl = ctx.el("g2-density-grid");
    const cells = [];
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 6; c++) {
        const cell = ctx.svgEl("rect", {
          x: 1244 + c * 40,
          y: 438 + r * 36,
          width: 30,
          height: 28,
          rx: 7,
          class: "smooth-box",
          style: "fill: var(--s-sleep-fill); stroke: var(--s-border); stroke-width: 1.5"
        });
        gridEl.appendChild(cell);
        cells.push(cell);
      }
    }
    const tickDensity = () => {
      cells.forEach((c) => {
        c.style.fill = "var(--s-sleep-fill)";
        c.style.stroke = "var(--s-border)";
      });
      for (let k = 0; k < 4; k++) {
        const pick = cells[Math.floor(Math.random() * cells.length)];
        pick.style.fill = "var(--s-green)";
        pick.style.stroke = "var(--s-green-dark)";
      }
    };
    tickDensity();
    ctx.every(650, tickDensity);

    // 3. Speed fast-wakeup animation
    const fastLine = ctx.el("g3-fast-line");
    const spark = ctx.el("g3-spark");
    const wakeNode = ctx.el("g3-wake-node");
    const wakeRing = ctx.el("g3-wake-ring");
    const runSpeed = () => {
      ctx.animateProgress(1100, (t) => {
        const p = Math.min(1, ctx.easeOutCubic(t / 0.45));
        const x = 1268 + 188 * p;
        fastLine.setAttribute("x2", x.toFixed(1));
        spark.setAttribute("cx", x.toFixed(1));
        if (t >= 0.42) {
          wakeNode.style.fill = "var(--s-green)";
          wakeNode.style.stroke = "var(--s-green-dark)";
          const ringP = Math.min(1, (t - 0.42) / 0.58);
          wakeRing.setAttribute("r", (18 + 20 * ringP).toFixed(1));
          wakeRing.style.fill = "var(--s-green)";
          wakeRing.style.opacity = (0.55 * (1 - ringP)).toFixed(2);
        } else {
          wakeNode.style.fill = "var(--s-blue-fill)";
          wakeNode.style.stroke = "var(--s-blue)";
          wakeRing.style.opacity = "0";
        }
      });
    };
    ctx.later(700, () => {
      runSpeed();
      ctx.every(1900, runSpeed);
    });
  }
};
