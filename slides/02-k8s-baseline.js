export default {
  chapter: 0,
  short: "2. K8s Baseline",
  speaker: "TIM",
  kicker: "THE KUBERNETES BASELINE",
  title: "Kubernetes runs modern cloud, including AI",
  accent: "var(--s-blue)",
  headline: "Kubernetes is the undisputed standard for services, AI training, inference, and RL",
  body1: "Stateless replicas, batch training, inference, and RL workloads amortize Pod overhead.",
  body2: "Naturally, teams deploy Stateful AI Agents on the same primitives — and three behaviors stand out.",
  notes: "Kubernetes is the undisputed standard for deploying container workloads — including AI inference servers, training jobs, and reinforcement learning (RL). Naturally, teams building AI agents want to run them on the same infrastructure. But over the course of this year we saw people struggling: three characteristics immediately stand out.",
  svg: `
  <g id="base-left">
    <rect x="64" y="176" width="886" height="628" rx="22" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.8" />
    <g id="base-k8s-icon" transform="translate(128, 232)">
      <polygon points="0,-36 28,-22 35,8 16,32 -16,32 -35,8 -28,-22" fill="#326ce5" stroke="#ffffff" stroke-width="2.5" stroke-linejoin="round" />
      <circle cx="0" cy="0" r="16" fill="none" stroke="#ffffff" stroke-width="3.2" />
      <circle cx="0" cy="0" r="6" fill="#ffffff" />
      <line x1="0" y1="-8" x2="0" y2="-25" stroke="#ffffff" stroke-width="3.2" stroke-linecap="round" />
      <line x1="6" y1="-5" x2="20" y2="-15" stroke="#ffffff" stroke-width="3.2" stroke-linecap="round" />
      <line x1="8" y1="2" x2="24" y2="6" stroke="#ffffff" stroke-width="3.2" stroke-linecap="round" />
      <line x1="4" y1="7" x2="11" y2="22" stroke="#ffffff" stroke-width="3.2" stroke-linecap="round" />
      <line x1="-4" y1="7" x2="-11" y2="22" stroke="#ffffff" stroke-width="3.2" stroke-linecap="round" />
      <line x1="-8" y1="2" x2="-24" y2="6" stroke="#ffffff" stroke-width="3.2" stroke-linecap="round" />
      <line x1="-6" y1="-5" x2="-20" y2="-15" stroke="#ffffff" stroke-width="3.2" stroke-linecap="round" />
    </g>
    <text x="184" y="226" font-size="26" font-weight="800">Where Kubernetes Is the Undisputed Standard</text>
    <text x="184" y="256" font-size="16.5" style="fill: var(--s-muted)">Long-lived, batch, and multi-tenant workloads amortize Pod overhead</text>

    <!-- Row 1: Services -->
    <rect x="96" y="288" width="822" height="108" rx="14" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.4" />
    <rect x="120" y="326" width="136" height="32" rx="8" style="fill: var(--s-green-fill)" />
    <text x="188" y="347" text-anchor="middle" font-size="13.5" font-weight="800" style="fill: var(--s-green-dark)">SERVICES</text>
    <text x="280" y="334" font-size="21" font-weight="700">Stateless Web &amp; Microservices</text>
    <text x="280" y="364" font-size="16" style="fill: var(--s-muted)">Long-running replicas · Multi-user request amortization</text>
    <line x1="756" y1="342" x2="892" y2="342" style="stroke: var(--s-green); stroke-width: 3.5" class="flow-dash" />

    <!-- Row 2: AI Training -->
    <rect x="96" y="414" width="822" height="108" rx="14" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.4" />
    <rect x="120" y="452" width="136" height="32" rx="8" style="fill: var(--s-green-fill)" />
    <text x="188" y="473" text-anchor="middle" font-size="13.5" font-weight="800" style="fill: var(--s-green-dark)">AI TRAINING</text>
    <text x="280" y="460" font-size="21" font-weight="700">Batch &amp; Distributed Pre-Training</text>
    <text x="280" y="490" font-size="16" style="fill: var(--s-muted)">Saturated GPUs/TPUs for hours or days · Startup cost is negligible</text>
    <line x1="756" y1="468" x2="892" y2="468" style="stroke: var(--s-green); stroke-width: 3.5" class="flow-dash" />

    <!-- Row 3: Inference -->
    <rect x="96" y="540" width="822" height="108" rx="14" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.4" />
    <rect x="120" y="578" width="136" height="32" rx="8" style="fill: var(--s-green-fill)" />
    <text x="188" y="599" text-anchor="middle" font-size="13.5" font-weight="800" style="fill: var(--s-green-dark)">INFERENCE</text>
    <text x="280" y="586" font-size="21" font-weight="700">Model Serving Endpoints</text>
    <text x="280" y="616" font-size="16" style="fill: var(--s-muted)">Warm weights pinned in VRAM · Stateless batching across users</text>
    <line x1="756" y1="594" x2="892" y2="594" style="stroke: var(--s-green); stroke-width: 3.5" class="flow-dash" />

    <!-- Row 4: Reinforcement Learning -->
    <rect x="96" y="666" width="822" height="108" rx="14" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.4" />
    <rect x="120" y="704" width="136" height="32" rx="8" style="fill: var(--s-green-fill)" />
    <text x="188" y="725" text-anchor="middle" font-size="13.5" font-weight="800" style="fill: var(--s-green-dark)">RL · POST-TRAIN</text>
    <text x="280" y="712" font-size="21" font-weight="700">Reinforcement Learning (RL)</text>
    <text x="280" y="742" font-size="16" style="fill: var(--s-muted)">Massive parallel rollouts · Reward &amp; policy training loops on K8s</text>
    <line x1="756" y1="720" x2="892" y2="720" style="stroke: var(--s-green); stroke-width: 3.5" class="flow-dash" />
  </g>

  <g id="base-arrow" class="fade-group">
    <line x1="968" y1="490" x2="1034" y2="490" style="stroke: var(--s-blue); stroke-width: 5" stroke-linecap="round" />
    <polygon points="1030,475 1054,490 1030,505" style="fill: var(--s-blue)" />
  </g>

  <g id="base-right" class="fade-group">
    <rect x="1070" y="176" width="466" height="628" rx="22" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.8" />
    <rect x="1104" y="212" width="166" height="32" rx="16" style="fill: var(--s-blue)" />
    <text x="1187" y="233" text-anchor="middle" font-size="13" font-weight="700" style="fill: #ffffff">NOW IN 2025–2026</text>
    <text x="1104" y="290" font-size="33" font-weight="800" style="fill: var(--s-blue-dark)">Stateful AI Agents</text>
    <text x="1104" y="328" font-size="18.5">Teams deploy them as Pods too...</text>
    <text x="1104" y="358" font-size="18.5" font-weight="700" style="fill: var(--s-red)">...and immediately hit friction.</text>

    <rect x="1104" y="396" width="398" height="368" rx="18" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.6" />
    <text x="1303" y="454" text-anchor="middle" font-size="21" font-weight="800">1 Agent Session = 1 Pod?</text>
    <g class="breathe-center">
      <circle cx="1303" cy="548" r="54" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.8" />
      <text x="1303" y="568" text-anchor="middle" font-size="54" font-weight="800" style="fill: var(--s-amber-dark)">?</text>
    </g>
    <text x="1303" y="658" text-anchor="middle" font-size="17" font-weight="700" style="fill: var(--s-blue-dark)">3 behaviors break standard Pods →</text>
    <text x="1303" y="694" text-anchor="middle" font-size="16" font-weight="600" style="fill: var(--s-muted)">1. Bursty  ·  2. Untrusted  ·  3. Interactive</text>
  </g>
  `,
  animate: (ctx) => {
    ctx.el("bottom-callout").classList.add("is-hidden");

    const arrow = ctx.el("base-arrow");
    const right = ctx.el("base-right");
    arrow.style.opacity = "0";
    right.style.opacity = "0";
    right.style.transform = "translateY(16px)";
    ctx.later(350, () => { arrow.style.opacity = "1"; });
    ctx.later(650, () => {
      right.style.opacity = "1";
      right.style.transform = "translateY(0px)";
    });
  }
};
