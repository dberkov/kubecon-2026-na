export default {
  chapter: 3,
  short: "19. Foundations",
  speaker: "TIM",
  kicker: "AGENT SUBSTRATE: FOUNDATIONS",
  title: "Agent Substrate + Kubernetes",
  accent: "var(--s-blue)",
  headline: "We take the best parts of Kubernetes — while keeping K8s off the per-turn hot path",
  body1: "Workers are K8s Pods (drain-aware), and the Control Plane & PEP run as standard K8s workloads.",
  body2: "Database, object storage, proxy, and sandbox runtime (gVisor / microVM) are cleanly pluggable.",
  notes: "This whole system is built ON and WITH Kubernetes — Workers are Pods, our control plane and PEP run on Kubernetes, and when a K8s node drains, workers cleanly evict agents. At the same time, everything is pluggable and we never put Kubernetes on the hot path.",
  svg: `
  <!-- Left Launchpad: Introducing Each Component -->
  <g id="launchpad">
    <rect x="64" y="166" width="380" height="564" rx="22" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.8" />
    <text x="94" y="210" font-size="16" font-weight="800" letter-spacing="1.4" style="fill: var(--s-muted)">INTRODUCING THE PIECES</text>

    <g id="launch-row-0" class="fade-group" style="opacity: 0.45">
      <rect id="launch-bg-0" x="88" y="232" width="332" height="82" rx="14" class="smooth-box" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.6" />
      <circle cx="132" cy="273" r="20" style="fill: var(--s-green)" />
      <text x="132" y="280" text-anchor="middle" font-size="16" font-weight="800" style="fill: #ffffff">1</text>
      <text x="170" y="281" font-size="23" font-weight="800">Workers</text>
    </g>

    <g id="launch-row-1" class="fade-group" style="opacity: 0.45">
      <rect id="launch-bg-1" x="88" y="328" width="332" height="82" rx="14" class="smooth-box" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.6" />
      <circle cx="132" cy="369" r="20" style="fill: var(--s-blue)" />
      <text x="132" y="376" text-anchor="middle" font-size="16" font-weight="800" style="fill: #ffffff">2</text>
      <text x="170" y="377" font-size="23" font-weight="800">Control Plane</text>
    </g>

    <g id="launch-row-2" class="fade-group" style="opacity: 0.45">
      <rect id="launch-bg-2" x="88" y="424" width="332" height="82" rx="14" class="smooth-box" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.6" />
      <circle cx="132" cy="465" r="20" style="fill: var(--s-purple)" />
      <text x="132" y="472" text-anchor="middle" font-size="16" font-weight="800" style="fill: #ffffff">3</text>
      <text x="170" y="473" font-size="23" font-weight="800">Database</text>
    </g>

    <g id="launch-row-3" class="fade-group" style="opacity: 0.45">
      <rect id="launch-bg-3" x="88" y="520" width="332" height="82" rx="14" class="smooth-box" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.6" />
      <circle cx="132" cy="561" r="20" style="fill: var(--s-red)" />
      <text x="132" y="568" text-anchor="middle" font-size="16" font-weight="800" style="fill: #ffffff">4</text>
      <text x="170" y="569" font-size="23" font-weight="800">PEP</text>
    </g>

    <g id="launch-row-4" class="fade-group" style="opacity: 0.45">
      <rect id="launch-bg-4" x="88" y="616" width="332" height="82" rx="14" class="smooth-box" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.6" />
      <circle cx="132" cy="657" r="20" style="fill: var(--s-amber)" />
      <text x="132" y="664" text-anchor="middle" font-size="16" font-weight="800" style="fill: #ffffff">5</text>
      <text x="170" y="665" font-size="23" font-weight="800">Ingress Router</text>
    </g>
  </g>

  <!-- Right Arena: Kubernetes Cluster -->
  <g id="k8s-cluster-box">
    <rect id="cluster-frame" x="480" y="252" width="1056" height="478" rx="26" class="smooth-box" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.8; stroke-dasharray: 10 6" />
    <text x="520" y="306" font-size="25" font-weight="800" style="fill: var(--s-blue-dark)">Kubernetes Cluster</text>

    <!-- Target Ghost Slots inside Cluster -->
    <rect x="520" y="346" width="296" height="156" rx="18" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.8; stroke-dasharray: 7 5; opacity: 0.45" />
    <rect x="860" y="346" width="296" height="156" rx="18" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.8; stroke-dasharray: 7 5; opacity: 0.45" />
    <rect x="520" y="538" width="296" height="156" rx="18" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.8; stroke-dasharray: 7 5; opacity: 0.45" />
    <rect x="860" y="538" width="296" height="156" rx="18" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.8; stroke-dasharray: 7 5; opacity: 0.45" />
    <rect x="1200" y="538" width="296" height="156" rx="18" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.8; stroke-dasharray: 7 5; opacity: 0.45" />

    <!-- Fast-Path Mesh Wires (fade in once all components land) -->
    <g id="cluster-wires" class="fade-group" style="opacity: 0">
      <!-- ingress router -> workers -->
      <line x1="668" y1="502" x2="668" y2="538" style="stroke: var(--s-amber); stroke-width: 3.5" class="flow-dash" />
      <!-- ingress router -> control-plane -->
      <line x1="816" y1="424" x2="860" y2="424" style="stroke: var(--s-blue); stroke-width: 3.5" class="flow-dash" />
      <!-- control-plane -> workers -->
      <line x1="880" y1="502" x2="790" y2="538" style="stroke: var(--s-green); stroke-width: 3.5" class="flow-dash" />
      <!-- control-plane <-> database -->
      <line x1="1130" y1="502" x2="1226" y2="538" style="stroke: var(--s-purple); stroke-width: 3.5" class="flow-dash" />
      <!-- workers -> pep -->
      <line x1="816" y1="616" x2="860" y2="616" style="stroke: var(--s-red); stroke-width: 3.5" class="flow-dash" />
    </g>

    <!-- Landing Shockwave Ring -->
    <circle id="land-ring" cx="668" cy="616" r="24" fill="none" style="stroke: var(--s-green); stroke-width: 4; opacity: 0" />
  </g>

  <!-- Floating Octopus Overseer (Top-Right above Cluster) -->
  <g id="octo-overseer">
    <ellipse id="octo-shadow" cx="1352" cy="492" rx="96" ry="18" style="fill: var(--s-blue); opacity: 0.14" />
    <line id="octo-beam" x1="1352" y1="340" x2="1008" y2="424" style="stroke: #60d46c; stroke-width: 4; stroke-dasharray: 8 6; opacity: 0" />
    <g class="float-slow">
      <image id="img-found-octo" x="1186" y="132" width="332" height="352" preserveAspectRatio="xMidYMid meet" href="./assets/octopus.png" />
    </g>
  </g>

  <!-- 5 Flying Component Cards (positioned at (0,0) and translated via JS) -->
  <!-- 0: Workers -> lands at (520, 538) -->
  <g id="fly-0" style="opacity: 0">
    <rect x="0" y="0" width="296" height="156" rx="18" style="fill: var(--s-card); stroke: var(--s-green); stroke-width: 3" />
    <rect x="0" y="0" width="296" height="50" rx="18" style="fill: var(--s-green)" />
    <rect x="0" y="32" width="296" height="18" style="fill: var(--s-green)" />
    <text x="148" y="33" text-anchor="middle" font-size="20" font-weight="800" style="fill: #ffffff">Workers</text>
    <rect x="24" y="68" width="72" height="66" rx="10" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2" />
    <circle cx="60" cy="101" r="12" style="fill: #60d46c" />
    <rect x="112" y="68" width="72" height="66" rx="10" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2" />
    <circle cx="148" cy="101" r="12" style="fill: #64b8dc" />
    <rect x="200" y="68" width="72" height="66" rx="10" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2" />
    <circle cx="236" cy="101" r="12" style="fill: #e47cb0" />
  </g>

  <!-- 1: Control Plane -> lands at (860, 346) -->
  <g id="fly-1" style="opacity: 0">
    <rect x="0" y="0" width="296" height="156" rx="18" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 3" />
    <rect x="0" y="0" width="296" height="50" rx="18" style="fill: var(--s-blue)" />
    <rect x="0" y="32" width="296" height="18" style="fill: var(--s-blue)" />
    <text x="148" y="33" text-anchor="middle" font-size="20" font-weight="800" style="fill: #ffffff">Control Plane</text>
    <circle cx="104" cy="102" r="20" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.2" />
    <circle cx="104" cy="102" r="7" style="fill: var(--s-blue)" />
    <line x1="124" y1="102" x2="172" y2="102" style="stroke: var(--s-blue); stroke-width: 3.5" stroke-linecap="round" />
    <circle cx="192" cy="102" r="20" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.2" />
    <circle cx="192" cy="102" r="7" style="fill: var(--s-blue)" />
  </g>

  <!-- 2: Database -> lands at (1200, 538) -->
  <g id="fly-2" style="opacity: 0">
    <rect x="0" y="0" width="296" height="156" rx="18" style="fill: var(--s-card); stroke: var(--s-purple); stroke-width: 3" />
    <rect x="0" y="0" width="296" height="50" rx="18" style="fill: var(--s-purple)" />
    <rect x="0" y="32" width="296" height="18" style="fill: var(--s-purple)" />
    <text x="148" y="33" text-anchor="middle" font-size="20" font-weight="800" style="fill: #ffffff">Database</text>
    <path d="M 96 80 C 96 70, 200 70, 200 80 L 200 126 C 200 136, 96 136, 96 126 Z" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.4" />
    <ellipse cx="148" cy="80" rx="52" ry="11" style="fill: var(--s-card); stroke: var(--s-purple); stroke-width: 2.4" />
    <path d="M 96 103 C 96 113, 200 113, 200 103" fill="none" style="stroke: var(--s-purple); stroke-width: 2" />
  </g>

  <!-- 3: PEP -> lands at (860, 538) -->
  <g id="fly-3" style="opacity: 0">
    <rect x="0" y="0" width="296" height="156" rx="18" style="fill: var(--s-card); stroke: var(--s-red); stroke-width: 3" />
    <rect x="0" y="0" width="296" height="50" rx="18" style="fill: var(--s-red)" />
    <rect x="0" y="32" width="296" height="18" style="fill: var(--s-red)" />
    <text x="148" y="33" text-anchor="middle" font-size="20" font-weight="800" style="fill: #ffffff">PEP</text>
    <path d="M 148 68 L 176 80 V 104 C 176 123 163 135 148 142 C 133 135 120 123 120 104 V 80 Z" style="fill: var(--s-red-fill); stroke: var(--s-red); stroke-width: 2.4" />
    <path d="M 142 103 V 97 A 6 6 0 0 1 154 97 V 103" fill="none" style="stroke: var(--s-red); stroke-width: 2.4" stroke-linecap="round" />
    <rect x="139" y="103" width="18" height="14" rx="3" style="fill: var(--s-red)" />
  </g>

  <!-- 4: Ingress Router -> lands at (520, 346) -->
  <g id="fly-4" style="opacity: 0">
    <rect x="0" y="0" width="296" height="156" rx="18" style="fill: var(--s-card); stroke: var(--s-amber); stroke-width: 3" />
    <rect x="0" y="0" width="296" height="50" rx="18" style="fill: var(--s-amber)" />
    <rect x="0" y="32" width="296" height="18" style="fill: var(--s-amber)" />
    <text x="148" y="33" text-anchor="middle" font-size="20" font-weight="800" style="fill: #ffffff">Ingress Router</text>
    <circle cx="92" cy="102" r="14" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.4" />
    <line x1="108" y1="102" x2="184" y2="82" style="stroke: var(--s-amber); stroke-width: 3" stroke-linecap="round" />
    <line x1="108" y1="102" x2="184" y2="122" style="stroke: var(--s-amber); stroke-width: 3" stroke-linecap="round" />
    <circle cx="198" cy="82" r="11" style="fill: var(--s-amber)" />
    <circle cx="198" cy="122" r="11" style="fill: var(--s-amber)" />
  </g>

  <!-- Bottom Golden Rule Banner -->
  <g id="f24-row-4" class="fade-group" style="opacity: 0">
    <rect x="64" y="752" width="1472" height="72" rx="16" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.2" />
    <text x="800" y="796" text-anchor="middle" font-size="22" font-weight="800" style="fill: var(--s-amber-dark)">Golden Rule: Never put Kubernetes on the hot path</text>
  </g>
  `,
  animate: (ctx) => {
    ctx.el("bottom-callout").classList.add("is-hidden");

    const items = [
      {
        fly: ctx.el("fly-0"),
        row: ctx.el("launch-row-0"),
        bg: ctx.el("launch-bg-0"),
        fromX: 106, fromY: 200,
        toX: 520, toY: 538,
        arcY: -130,
        color: "var(--s-green)",
        fill: "var(--s-green-fill)"
      },
      {
        fly: ctx.el("fly-1"),
        row: ctx.el("launch-row-1"),
        bg: ctx.el("launch-bg-1"),
        fromX: 106, fromY: 296,
        toX: 860, toY: 346,
        arcY: -120,
        color: "var(--s-blue)",
        fill: "var(--s-blue-fill)"
      },
      {
        fly: ctx.el("fly-2"),
        row: ctx.el("launch-row-2"),
        bg: ctx.el("launch-bg-2"),
        fromX: 106, fromY: 392,
        toX: 1200, toY: 538,
        arcY: -160,
        color: "var(--s-purple)",
        fill: "var(--s-purple-fill)"
      },
      {
        fly: ctx.el("fly-3"),
        row: ctx.el("launch-row-3"),
        bg: ctx.el("launch-bg-3"),
        fromX: 106, fromY: 488,
        toX: 860, toY: 538,
        arcY: -120,
        color: "var(--s-red)",
        fill: "var(--s-red-fill)"
      },
      {
        fly: ctx.el("fly-4"),
        row: ctx.el("launch-row-4"),
        bg: ctx.el("launch-bg-4"),
        fromX: 106, fromY: 584,
        toX: 520, toY: 346,
        arcY: -110,
        color: "var(--s-amber)",
        fill: "var(--s-amber-fill)"
      }
    ];

    const landRing = ctx.el("land-ring");
    const octoBeam = ctx.el("octo-beam");
    const wires = ctx.el("cluster-wires");
    const clusterFrame = ctx.el("cluster-frame");
    const goldenRule = ctx.el("f24-row-4");

    items.forEach((it, idx) => {
      it.fly.setAttribute("transform", `translate(${it.fromX}, ${it.fromY}) scale(0.75)`);
      const startMs = 250 + idx * 820;

      ctx.later(startMs, () => {
        // Highlight launchpad row
        it.row.style.opacity = "1";
        it.bg.style.stroke = it.color;
        it.bg.style.fill = it.fill;
        it.bg.style.strokeWidth = "2.6";

        // Aim octopus beam at target slot
        const targetCx = it.toX + 148;
        const targetCy = it.toY + 78;
        octoBeam.setAttribute("x2", String(targetCx));
        octoBeam.setAttribute("y2", String(targetCy));
        octoBeam.style.stroke = it.color;
        octoBeam.style.opacity = "0.75";

        // Fly component along curved arc into Kubernetes cluster
        ctx.animateProgress(680, (t) => {
          const e = ctx.easeOutCubic(t);
          const parabola = Math.sin(t * Math.PI);
          const x = it.fromX + (it.toX - it.fromX) * e;
          const y = it.fromY + (it.toY - it.fromY) * e + it.arcY * parabola;
          const sc = 0.78 + 0.22 * e + 0.08 * parabola;
          const rot = -8 * parabola;
          it.fly.style.opacity = Math.min(1, t * 3.5).toFixed(2);
          it.fly.setAttribute(
            "transform",
            `translate(${x.toFixed(1)}, ${y.toFixed(1)}) rotate(${rot.toFixed(1)}, 148, 78) scale(${sc.toFixed(3)})`
          );
        });

        // Landing impact pulse
        ctx.later(660, () => {
          it.fly.setAttribute("transform", `translate(${it.toX}, ${it.toY})`);
          landRing.setAttribute("cx", String(targetCx));
          landRing.setAttribute("cy", String(targetCy));
          landRing.style.stroke = it.color;
          ctx.animateProgress(420, (rt) => {
            landRing.setAttribute("r", (24 + 90 * rt).toFixed(1));
            landRing.style.opacity = (0.85 * (1 - rt)).toFixed(2);
          });
        });
      });
    });

    // All 5 landed: solidify cluster frame, light up fast-path wires & Golden Rule
    ctx.later(4450, () => {
      octoBeam.style.opacity = "0";
      clusterFrame.style.strokeDasharray = "none";
      wires.style.opacity = "1";
      goldenRule.style.opacity = "1";
    });
  }
};
