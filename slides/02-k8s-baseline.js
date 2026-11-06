export default {
  chapter: 0,
  short: "2. K8s Baseline",
  speaker: "TIM",
  kicker: "THE KUBERNETES BASELINE",
  title: "Kubernetes runs modern cloud & AI — so teams naturally bring Agents",
  accent: "var(--s-blue)",
  headline: "Kubernetes is the undisputed standard for container services, AI training, and inference",
  body1: "Stateless replicas, batch training, and multi-user inference servers all amortize Pod startup and memory.",
  body2: "Naturally, teams deploy Stateful AI Agents on the same primitives — and three production behaviors stand out.",
  notes: "Kubernetes is the undisputed standard for deploying container workloads — including AI inference servers and training jobs. Naturally, teams building AI agents want to run them on the same infrastructure. But over the course of this year we saw people struggling: three characteristics immediately stand out.",
  svg: `
  <g id="base-left">
    <rect x="64" y="152" width="886" height="516" rx="20" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.8" />
    <g id="base-k8s-icon" transform="translate(128, 208)">
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
    <text x="184" y="202" font-size="25" font-weight="700">Where Kubernetes Is the Undisputed Standard</text>
    <text x="184" y="230" font-size="16.5" style="fill: var(--s-muted)">Long-lived, batch, or multi-tenant workloads amortize Pod overhead</text>
    <rect x="96" y="258" width="822" height="118" rx="14" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.4" />
    <rect x="120" y="280" width="128" height="30" rx="8" style="fill: var(--s-green-fill)" />
    <text x="184" y="300" text-anchor="middle" font-size="13.5" font-weight="700" style="fill: var(--s-green-dark)">SERVICES</text>
    <text x="268" y="301" font-size="21" font-weight="700">Stateless Web &amp; Microservices</text>
    <text x="268" y="331" font-size="16" style="fill: var(--s-muted)">Long-running replicas · Concurrent requests · Smooth HPA scaling</text>
    <text x="268" y="357" font-size="15" font-weight="700" style="fill: var(--s-green)">✓ High utilization &amp; multi-user amortization</text>
    <line x1="748" y1="295" x2="892" y2="295" style="stroke: var(--s-green); stroke-width: 3.5" class="flow-dash" />
    <rect x="96" y="392" width="822" height="118" rx="14" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.4" />
    <rect x="120" y="414" width="128" height="30" rx="8" style="fill: var(--s-green-fill)" />
    <text x="184" y="434" text-anchor="middle" font-size="13.5" font-weight="700" style="fill: var(--s-green-dark)">AI TRAINING</text>
    <text x="268" y="435" font-size="21" font-weight="700">Batch &amp; Distributed Training Jobs</text>
    <text x="268" y="465" font-size="16" style="fill: var(--s-muted)">Scheduled to completion · Saturated GPUs/TPUs for hours or days</text>
    <text x="268" y="491" font-size="15" font-weight="700" style="fill: var(--s-green)">✓ Startup time is negligible vs. job duration</text>
    <line x1="748" y1="429" x2="892" y2="429" style="stroke: var(--s-green); stroke-width: 3.5" class="flow-dash" />
    <rect x="96" y="526" width="822" height="118" rx="14" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.4" />
    <rect x="120" y="548" width="128" height="30" rx="8" style="fill: var(--s-green-fill)" />
    <text x="184" y="568" text-anchor="middle" font-size="13.5" font-weight="700" style="fill: var(--s-green-dark)">INFERENCE</text>
    <text x="268" y="569" font-size="21" font-weight="700">Model Serving Endpoints</text>
    <text x="268" y="599" font-size="16" style="fill: var(--s-muted)">Warm weights pinned in VRAM · Many users share one pool</text>
    <text x="268" y="625" font-size="15" font-weight="700" style="fill: var(--s-green)">✓ Stateless per-token batching across tenants</text>
    <line x1="748" y1="563" x2="892" y2="563" style="stroke: var(--s-green); stroke-width: 3.5" class="flow-dash" />
  </g>
  <g id="base-arrow" class="fade-group">
    <line x1="968" y1="410" x2="1034" y2="410" style="stroke: var(--s-blue); stroke-width: 5" stroke-linecap="round" />
    <polygon points="1030,395 1054,410 1030,425" style="fill: var(--s-blue)" />
  </g>
  <g id="base-right" class="fade-group">
    <rect x="1070" y="152" width="466" height="516" rx="20" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.8" />
    <rect x="1104" y="184" width="166" height="32" rx="16" style="fill: var(--s-blue)" />
    <text x="1187" y="205" text-anchor="middle" font-size="13" font-weight="700" style="fill: #ffffff">NOW IN 2025–2026</text>
    <text x="1104" y="256" font-size="31" font-weight="800" style="fill: var(--s-blue-dark)">Stateful AI Agents</text>
    <text x="1104" y="290" font-size="18">Teams deploy them as Pods too...</text>
    <text x="1104" y="318" font-size="18" font-weight="700" style="fill: var(--s-red)">...and immediately hit friction.</text>
    <rect x="1104" y="346" width="398" height="212" rx="16" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.6" />
    <text x="1303" y="388" text-anchor="middle" font-size="17" font-weight="700" style="fill: var(--s-muted)">1 Agent Session = 1 Pod?</text>
    <g class="breathe-center">
      <circle cx="1303" cy="448" r="42" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.5" />
      <text x="1303" y="464" text-anchor="middle" font-size="44" font-weight="800" style="fill: var(--s-amber-dark)">?</text>
    </g>
    <text x="1303" y="524" text-anchor="middle" font-size="15.5" style="fill: var(--s-muted)">3 production behaviors break standard Pods →</text>
    <rect x="1104" y="576" width="398" height="68" rx="12" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 1.5" />
    <text x="1303" y="604" text-anchor="middle" font-size="15.5" font-weight="700" style="fill: var(--s-blue-dark)">What makes Agents different?</text>
    <text x="1303" y="628" text-anchor="middle" font-size="15" style="fill: var(--s-muted)">1. Bursty · 2. Untrusted · 3. Interactive</text>
  </g>
  `,
  animate: (ctx) => {
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
