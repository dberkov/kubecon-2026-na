export default {
  chapter: 3,
  short: "20. 2-Layer CRDs",
  speaker: "TIM",
  kicker: "TWO-LAYER ARCHITECTURE",
  title: "Two layers of management",
  accent: "var(--s-green)",
  headline: "Infra Admins manage warm WorkerPool CRDs · App Developers schedule Actors via gRPC",
  body1: "Layer 1 (Bottom): WorkerPool & SandboxConfig CRDs -> ate-controller -> Warm Worker Pods & DaemonSets.",
  body2: "Layer 2 (Top): ateapi (gRPC) + Postgres + atenet/PEP schedule & wake Actors with zero etcd overhead.",
  notes: "Agent Substrate is a two-layer system: Platform Admins use Kubernetes CRDs (WorkerPool, SandboxConfig) and ate-controller to provision warm Worker Pods. App Developers use Substrate's gRPC API backed by Postgres to run Actors inside those warm workers with zero etcd bottlenecks.\nTo make the rest of this easier to follow, Dima will give us five quick terms.",
  svg: `
  <!-- =================================================================== -->
  <!-- LAYER 1 (BOTTOM FOUNDATION): KUBERNETES INFRASTRUCTURE (SLOW PATH)  -->
  <!-- =================================================================== -->
  <g id="l1-band" style="opacity: 0">
    <rect x="64" y="518" width="1472" height="302" rx="24" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.6" />
    <rect x="92" y="536" width="114" height="32" rx="16" style="fill: var(--s-blue)" />
    <text x="149" y="557" text-anchor="middle" font-size="13.5" font-weight="800" letter-spacing="1" style="fill: #ffffff">LAYER 1</text>
    <text x="222" y="559" font-size="22" font-weight="800" style="fill: var(--s-blue-dark)">Kubernetes &amp; CRDs — Infrastructure Foundation (Slow Path)</text>
  </g>

  <!-- Node 1A: Platform Admin -->
  <g id="l1-admin" style="opacity: 0">
    <rect x="92" y="586" width="204" height="208" rx="18" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 2.2" />
    <circle cx="194" cy="656" r="38" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.2" />
    <!-- Hard-hat Admin Avatar -->
    <path d="M 168 650 A 26 26 0 0 1 220 650 Z" fill="#fbbc04" stroke="#e37400" stroke-width="2" />
    <rect x="163" y="648" width="62" height="6" rx="3" fill="#e37400" />
    <circle cx="194" cy="666" r="16" fill="#fde68a" stroke="#e37400" stroke-width="1.8" />
    <circle cx="188" cy="664" r="2.3" fill="#1e293b" />
    <circle cx="200" cy="664" r="2.3" fill="#1e293b" />
    <path d="M 188 673 Q 194 677 200 673" fill="none" stroke="#1e293b" stroke-width="2" stroke-linecap="round" />
    <text x="194" y="732" text-anchor="middle" font-size="19" font-weight="800" style="fill: var(--s-blue-dark)">Platform Admin</text>
    <text x="194" y="758" text-anchor="middle" font-size="14" font-weight="600" style="fill: var(--s-muted)">kubectl / GitOps</text>
  </g>

  <!-- Arrow 1A -> 1B -->
  <g id="l1-arr-1" class="fade-group" style="opacity: 0">
    <line x1="298" y1="690" x2="338" y2="690" style="stroke: var(--s-blue); stroke-width: 3.5" stroke-dasharray="7 5" marker-end="url(#arr-blue)" />
  </g>

  <!-- Node 1B: CRDs -->
  <g id="l1-crds" style="opacity: 0">
    <rect x="346" y="586" width="332" height="208" rx="18" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 2.2" />
    <rect x="372" y="608" width="280" height="68" rx="12" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 1.8" />
    <text x="512" y="638" text-anchor="middle" font-size="19" font-weight="800" class="mono" style="fill: var(--s-blue-dark)">WorkerPool CRD</text>
    <text x="512" y="661" text-anchor="middle" font-size="13.5" font-weight="600" style="fill: var(--s-muted)">Pool size &amp; node placement</text>
    <rect x="372" y="692" width="280" height="68" rx="12" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 1.8" />
    <text x="512" y="722" text-anchor="middle" font-size="19" font-weight="800" class="mono" style="fill: var(--s-blue-dark)">SandboxConfig CRD</text>
    <text x="512" y="745" text-anchor="middle" font-size="13.5" font-weight="600" style="fill: var(--s-muted)">gVisor / Cloud Hypervisor</text>
  </g>

  <!-- Arrow 1B -> 1C -->
  <g id="l1-arr-2" class="fade-group" style="opacity: 0">
    <line x1="680" y1="690" x2="720" y2="690" style="stroke: var(--s-blue); stroke-width: 3.5" stroke-dasharray="7 5" marker-end="url(#arr-blue)" />
  </g>

  <!-- Node 1C: ate-controller -->
  <g id="l1-ctrl" style="opacity: 0">
    <rect x="728" y="586" width="312" height="208" rx="18" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 2.2" />
    <circle cx="884" cy="654" r="34" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.4" />
    <circle cx="884" cy="654" r="14" style="fill: var(--s-blue)" />
    <line x1="884" y1="612" x2="884" y2="624" style="stroke: var(--s-blue); stroke-width: 4" stroke-linecap="round" />
    <line x1="884" y1="684" x2="884" y2="696" style="stroke: var(--s-blue); stroke-width: 4" stroke-linecap="round" />
    <line x1="842" y1="654" x2="854" y2="654" style="stroke: var(--s-blue); stroke-width: 4" stroke-linecap="round" />
    <line x1="914" y1="654" x2="926" y2="654" style="stroke: var(--s-blue); stroke-width: 4" stroke-linecap="round" />
    <text x="884" y="728" text-anchor="middle" font-size="22" font-weight="800" class="mono" style="fill: var(--s-blue-dark)">ate-controller</text>
    <text x="884" y="756" text-anchor="middle" font-size="15" font-weight="600" style="fill: var(--s-muted)">Kubernetes Operator</text>
  </g>

  <!-- Arrow 1C -> 1D -->
  <g id="l1-arr-3" class="fade-group" style="opacity: 0">
    <line x1="1042" y1="690" x2="1082" y2="690" style="stroke: var(--s-green); stroke-width: 3.5" stroke-dasharray="7 5" marker-end="url(#arr-green)" />
  </g>

  <!-- Node 1D: Warm Worker Pods & DaemonSets -->
  <g id="l1-pool" style="opacity: 0">
    <rect x="1090" y="586" width="416" height="208" rx="18" style="fill: var(--s-card); stroke: var(--s-green); stroke-width: 2.8" />
    <text x="1298" y="618" text-anchor="middle" font-size="19" font-weight="800" style="fill: var(--s-green-dark)">Warm Worker Pods &amp; DaemonSets</text>

    <!-- 3 Warm Worker Slots that pop in -->
    <g id="w-slot-0" style="opacity: 0">
      <rect x="1114" y="634" width="110" height="92" rx="12" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2.2" />
      <circle cx="1169" cy="666" r="14" style="fill: #60d46c" />
      <text x="1169" y="708" text-anchor="middle" font-size="14" font-weight="800" style="fill: var(--s-green-dark)">Worker 1</text>
    </g>
    <g id="w-slot-1" style="opacity: 0">
      <rect x="1243" y="634" width="110" height="92" rx="12" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2.2" />
      <circle cx="1298" cy="666" r="14" style="fill: #64b8dc" />
      <text x="1298" y="708" text-anchor="middle" font-size="14" font-weight="800" style="fill: var(--s-green-dark)">Worker 2</text>
    </g>
    <g id="w-slot-2" style="opacity: 0">
      <rect x="1372" y="634" width="110" height="92" rx="12" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2.2" />
      <circle cx="1427" cy="666" r="14" style="fill: #e47cb0" />
      <text x="1427" y="708" text-anchor="middle" font-size="14" font-weight="800" style="fill: var(--s-green-dark)">Worker 3</text>
    </g>

    <rect x="1114" y="740" width="368" height="36" rx="10" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.4" />
    <text x="1298" y="764" text-anchor="middle" font-size="14.5" font-weight="700" class="mono" style="fill: var(--s-muted)">atelet  ·  ateworker  ·  atenet</text>
  </g>

  <!-- =================================================================== -->
  <!-- LAYER 2 (TOP FAST PATH): SUBSTRATE HOT PATH (ZERO ETCD OVERHEAD)    -->
  <!-- =================================================================== -->
  <g id="l2-band" style="opacity: 0">
    <rect x="64" y="158" width="1472" height="302" rx="24" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2.6" />
    <rect x="92" y="176" width="114" height="32" rx="16" style="fill: var(--s-green)" />
    <text x="149" y="197" text-anchor="middle" font-size="13.5" font-weight="800" letter-spacing="1" style="fill: #ffffff">LAYER 2</text>
    <text x="222" y="199" font-size="22" font-weight="800" style="fill: var(--s-green-dark)">Substrate Fast Path — Dynamic Actors (No etcd on Hot Path)</text>
  </g>

  <!-- Node 2A: App Developer -->
  <g id="l2-dev" style="opacity: 0">
    <rect x="92" y="226" width="204" height="208" rx="18" style="fill: var(--s-card); stroke: var(--s-green); stroke-width: 2.2" />
    <circle cx="194" cy="296" r="38" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2.2" />
    <!-- App Dev Laptop/Code Icon -->
    <rect x="170" y="276" width="48" height="32" rx="5" fill="#1e293b" stroke="var(--s-green)" stroke-width="2" />
    <path d="M 183 287 L 177 292 L 183 297 M 205 287 L 211 292 L 205 297 M 197 284 L 191 300" fill="none" stroke="#60d46c" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
    <rect x="162" y="308" width="64" height="6" rx="3" style="fill: var(--s-green)" />
    <text x="194" y="372" text-anchor="middle" font-size="19" font-weight="800" style="fill: var(--s-green-dark)">App Developer</text>
    <text x="194" y="398" text-anchor="middle" font-size="14" font-weight="600" style="fill: var(--s-muted)">gRPC / HTTP Client</text>
  </g>

  <!-- Arrow 2A -> 2B -->
  <g id="l2-arr-1" class="fade-group" style="opacity: 0">
    <line x1="298" y1="330" x2="338" y2="330" style="stroke: var(--s-green); stroke-width: 3.5" class="flow-dash" marker-end="url(#arr-green)" />
  </g>

  <!-- Node 2B: ateapi + Postgres -->
  <g id="l2-api" style="opacity: 0">
    <rect x="346" y="226" width="332" height="208" rx="18" style="fill: var(--s-card); stroke: var(--s-green); stroke-width: 2.2" />
    <rect x="366" y="252" width="166" height="156" rx="14" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2" />
    <text x="449" y="314" text-anchor="middle" font-size="22" font-weight="800" class="mono" style="fill: var(--s-green-dark)">ateapi</text>
    <text x="449" y="342" text-anchor="middle" font-size="14" font-weight="700" style="fill: var(--s-muted)">gRPC Scheduler</text>
    <text x="449" y="366" text-anchor="middle" font-size="13" font-weight="600" style="fill: var(--s-green-dark)">Actors &amp; Templates</text>

    <!-- Postgres Database Cylinder (pops in separately) -->
    <g id="l2-pg" style="opacity: 0">
      <line x1="532" y1="330" x2="554" y2="330" style="stroke: var(--s-purple); stroke-width: 3" />
      <path d="M 556 278 C 556 264, 658 264, 658 278 L 658 380 C 658 394, 556 394, 556 380 Z" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.2" />
      <ellipse cx="607" cy="278" rx="51" ry="11" style="fill: var(--s-card); stroke: var(--s-purple); stroke-width: 2.2" />
      <path d="M 556 312 C 556 324, 658 324, 658 312" fill="none" style="stroke: var(--s-purple); stroke-width: 1.8" />
      <text x="607" y="352" text-anchor="middle" font-size="17" font-weight="800" style="fill: var(--s-purple-dark)">Postgres</text>
      <text x="607" y="372" text-anchor="middle" font-size="12.5" font-weight="700" style="fill: var(--s-muted)">1B+ Records</text>
    </g>
  </g>

  <!-- Arrow 2B -> 2C -->
  <g id="l2-arr-2" class="fade-group" style="opacity: 0">
    <line x1="680" y1="330" x2="720" y2="330" style="stroke: var(--s-green); stroke-width: 3.5" class="flow-dash" marker-end="url(#arr-green)" />
  </g>

  <!-- Node 2C: atenet-router & PEP -->
  <g id="l2-net" style="opacity: 0">
    <rect x="728" y="226" width="312" height="208" rx="18" style="fill: var(--s-card); stroke: var(--s-green); stroke-width: 2.2" />
    <rect x="752" y="250" width="264" height="72" rx="12" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2" />
    <text x="884" y="284" text-anchor="middle" font-size="18.5" font-weight="800" class="mono" style="fill: var(--s-amber-dark)">atenet-router</text>
    <text x="884" y="308" text-anchor="middle" font-size="13.5" font-weight="600" style="fill: var(--s-muted)">On-demand ingress wakeup</text>

    <rect x="752" y="338" width="264" height="72" rx="12" style="fill: var(--s-red-fill); stroke: var(--s-red); stroke-width: 2" />
    <text x="884" y="372" text-anchor="middle" font-size="18.5" font-weight="800" style="fill: var(--s-red-dark)">PEP Egress Proxy</text>
    <text x="884" y="396" text-anchor="middle" font-size="13.5" font-weight="600" style="fill: var(--s-muted)">Policy &amp; credential injection</text>
  </g>

  <!-- Arrow 2C -> 2D -->
  <g id="l2-arr-3" class="fade-group" style="opacity: 0">
    <line x1="1042" y1="330" x2="1082" y2="330" style="stroke: var(--s-purple); stroke-width: 3.5" class="flow-dash" marker-end="url(#arr-purple)" />
  </g>

  <!-- Node 2D: Actor Sandboxes -->
  <g id="l2-actors" style="opacity: 0">
    <rect x="1090" y="226" width="416" height="208" rx="18" style="fill: var(--s-card); stroke: var(--s-purple); stroke-width: 2.8" />
    <text x="1298" y="258" text-anchor="middle" font-size="19" font-weight="800" style="fill: var(--s-purple-dark)">Actor Sandboxes</text>

    <!-- 3 Actor Sandbox Chips that pop in -->
    <g id="a-chip-0" style="opacity: 0">
      <rect x="1114" y="274" width="110" height="92" rx="12" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.2" />
      <rect x="1151" y="290" width="36" height="32" rx="7" style="fill: var(--s-purple)" />
      <circle cx="1162" cy="306" r="3" fill="#ffffff" />
      <circle cx="1169" cy="306" r="3" fill="#ffffff" />
      <circle cx="1176" cy="306" r="3" fill="#ffffff" />
      <text x="1169" y="348" text-anchor="middle" font-size="14" font-weight="800" style="fill: var(--s-purple-dark)">Actor A</text>
    </g>
    <g id="a-chip-1" style="opacity: 0">
      <rect x="1243" y="274" width="110" height="92" rx="12" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.2" />
      <rect x="1280" y="290" width="36" height="32" rx="7" style="fill: var(--s-purple)" />
      <circle cx="1291" cy="306" r="3" fill="#ffffff" />
      <circle cx="1298" cy="306" r="3" fill="#ffffff" />
      <circle cx="1305" cy="306" r="3" fill="#ffffff" />
      <text x="1298" y="348" text-anchor="middle" font-size="14" font-weight="800" style="fill: var(--s-purple-dark)">Actor B</text>
    </g>
    <g id="a-chip-2" style="opacity: 0">
      <rect x="1372" y="274" width="110" height="92" rx="12" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.2" />
      <rect x="1409" y="290" width="36" height="32" rx="7" style="fill: var(--s-purple)" />
      <circle cx="1420" cy="306" r="3" fill="#ffffff" />
      <circle cx="1427" cy="306" r="3" fill="#ffffff" />
      <circle cx="1434" cy="306" r="3" fill="#ffffff" />
      <text x="1427" y="348" text-anchor="middle" font-size="14" font-weight="800" style="fill: var(--s-purple-dark)">Actor C</text>
    </g>

    <rect x="1114" y="380" width="368" height="36" rx="10" style="fill: var(--s-red-fill); stroke: var(--s-red); stroke-width: 1.4" />
    <text x="1298" y="404" text-anchor="middle" font-size="14.5" font-weight="700" style="fill: var(--s-red-dark)">gVisor  /  Cloud Hypervisor microVM</text>
  </g>

  <!-- =================================================================== -->
  <!-- VERTICAL DOCKING BRIDGE (ACTORS RUN INSIDE WARM WORKER PODS)        -->
  <!-- =================================================================== -->
  <g id="layer-bridge" style="opacity: 0">
    <line x1="1169" y1="434" x2="1169" y2="586" style="stroke: var(--s-green); stroke-width: 4" class="flow-dash" />
    <line x1="1298" y1="434" x2="1298" y2="586" style="stroke: var(--s-green); stroke-width: 4" class="flow-dash" />
    <line x1="1427" y1="434" x2="1427" y2="586" style="stroke: var(--s-green); stroke-width: 4" class="flow-dash" />
    <rect x="1158" y="472" width="280" height="36" rx="18" style="fill: var(--s-green); stroke: #ffffff; stroke-width: 2" />
    <text x="1298" y="495" text-anchor="middle" font-size="13.5" font-weight="800" letter-spacing="0.8" style="fill: #ffffff">SCHEDULED ONTO WARM POOL</text>
  </g>

  <!-- Pop Burst Ring Effect -->
  <circle id="pop-ring" cx="800" cy="450" r="20" fill="none" style="stroke: var(--s-green); stroke-width: 4; opacity: 0; pointer-events: none" />
  `,
  animate: (ctx) => {
    ctx.el("bottom-callout").classList.add("is-hidden");

    const popRing = ctx.el("pop-ring");

    // Elastic spring pop-in helper
    const springPop = (id, cx, cy, ringColor) => {
      const el = ctx.el(id);
      el.style.transformBox = "fill-box";
      el.style.transformOrigin = "center";

      if (cx && cy) {
        popRing.setAttribute("cx", String(cx));
        popRing.setAttribute("cy", String(cy));
        popRing.style.stroke = ringColor || "var(--s-blue)";
        ctx.animateProgress(420, (rt) => {
          popRing.setAttribute("r", (24 + 86 * rt).toFixed(1));
          popRing.style.opacity = (0.75 * (1 - rt)).toFixed(2);
        });
      }

      ctx.animateProgress(420, (t) => {
        // Overshoot spring curve: 0.25 -> 1.09 -> 1.0
        const s =
          t < 0.65
            ? 0.25 + (1.09 - 0.25) * ctx.easeOutCubic(t / 0.65)
            : 1.09 - 0.09 * ((t - 0.65) / 0.35);
        el.style.opacity = Math.min(1, t * 2.8).toFixed(2);
        el.style.transform = `scale(${s.toFixed(3)})`;
      });
    };

    // --- PHASE 1: Layer 1 (Bottom Kubernetes Foundation) pops into existence ---
    ctx.later(120, () => springPop("l1-band", 800, 669, "var(--s-blue)"));
    ctx.later(380, () => springPop("l1-admin", 194, 690, "var(--s-blue)"));
    ctx.later(640, () => {
      ctx.el("l1-arr-1").style.opacity = "1";
      springPop("l1-crds", 512, 690, "var(--s-blue)");
    });
    ctx.later(920, () => {
      ctx.el("l1-arr-2").style.opacity = "1";
      springPop("l1-ctrl", 884, 690, "var(--s-blue)");
    });
    ctx.later(1200, () => {
      ctx.el("l1-arr-3").style.opacity = "1";
      springPop("l1-pool", 1298, 690, "var(--s-green)");
    });
    ctx.later(1420, () => springPop("w-slot-0", 1169, 680, "#60d46c"));
    ctx.later(1540, () => springPop("w-slot-1", 1298, 680, "#64b8dc"));
    ctx.later(1660, () => springPop("w-slot-2", 1427, 680, "#e47cb0"));

    // --- PHASE 2: Layer 2 (Top Substrate Fast Path) pops into existence ---
    ctx.later(2020, () => springPop("l2-band", 800, 309, "var(--s-green)"));
    ctx.later(2280, () => springPop("l2-dev", 194, 330, "var(--s-green)"));
    ctx.later(2540, () => {
      ctx.el("l2-arr-1").style.opacity = "1";
      springPop("l2-api", 449, 330, "var(--s-green)");
    });
    ctx.later(2740, () => springPop("l2-pg", 607, 330, "var(--s-purple)"));
    ctx.later(2980, () => {
      ctx.el("l2-arr-2").style.opacity = "1";
      springPop("l2-net", 884, 330, "var(--s-amber)");
    });
    ctx.later(3260, () => {
      ctx.el("l2-arr-3").style.opacity = "1";
      springPop("l2-actors", 1298, 330, "var(--s-purple)");
    });
    ctx.later(3460, () => springPop("a-chip-0", 1169, 320, "var(--s-purple)"));
    ctx.later(3580, () => springPop("a-chip-1", 1298, 320, "var(--s-purple)"));
    ctx.later(3700, () => springPop("a-chip-2", 1427, 320, "var(--s-purple)"));

    // --- PHASE 3: Dock Layer 2 Actors onto Layer 1 Warm Worker Pool ---
    ctx.later(3950, () => springPop("layer-bridge", 1298, 490, "var(--s-green)"));
  }
};
