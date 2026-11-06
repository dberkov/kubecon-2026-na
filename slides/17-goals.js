export default {
  chapter: 3,
  short: "17. Goals",
  speaker: "TIM / DIMA",
  kicker: "SUBSTRATE DESIGN GOALS",
  title: "Substrate Goals — Directly Resolving the Agent Trilemma",
  accent: "var(--s-blue)",
  headline: "Security (Red) · Density (Green) · Speed (Blue) — without sacrificing Kubernetes",
  body1: "Every agent gets cryptographic identity (SPIFFE + JWT), zero ambient credentials, and a gVisor/uVM sandbox.",
  body2: "Idle agents checkpoint off-CPU in milliseconds so millions of sessions share compact warm pools.",
  notes: "Agent Substrate is designed around three core goals: Security (gVisor/microVM sandbox, SPIFFE ID, zero ambient credentials, locked egress), Density (checkpoint idle agents so they consume ~0 compute), and Speed (wake a suspended agent in hundreds of milliseconds via gRPC).",
  svg: `
  <g id="goal-row-1" class="fade-group">
    <rect x="64" y="156" width="1472" height="154" rx="18" style="fill: var(--s-red-fill); stroke: var(--s-red); stroke-width: 2.4" />
    <rect x="96" y="182" width="144" height="32" rx="16" style="fill: var(--s-red)" />
    <text x="168" y="203" text-anchor="middle" font-size="13" font-weight="700" style="fill: #ffffff">1 · SECURITY</text>
    <text x="96" y="248" font-size="22.5" font-weight="700" style="fill: var(--s-red-dark)">Every agent gets an identity — zero credentials, locked network, hard sandbox</text>
    <text x="96" y="284" font-size="16" style="fill: var(--s-muted)">gVisor or microVM isolation  ·  SPIFFE X.509 &amp; Actor JWT  ·  All egress mediated via PEP proxy</text>
    <rect x="1232" y="188" width="272" height="90" rx="14" style="fill: var(--s-card); stroke: var(--s-red); stroke-width: 1.8" />
    <text x="1368" y="226" text-anchor="middle" font-size="13.5" font-weight="700" style="fill: var(--s-muted)">SOLVES PROPERTY 02</text>
    <text x="1368" y="256" text-anchor="middle" font-size="16.5" font-weight="700" style="fill: var(--s-red)">✓ Untrusted LLM Code</text>
  </g>
  <g id="goal-row-2" class="fade-group">
    <rect x="64" y="330" width="1472" height="154" rx="18" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2.4" />
    <rect x="96" y="356" width="144" height="32" rx="16" style="fill: var(--s-green)" />
    <text x="168" y="377" text-anchor="middle" font-size="13" font-weight="700" style="fill: #ffffff">2 · DENSITY</text>
    <text x="96" y="422" font-size="22.5" font-weight="700" style="fill: var(--s-green-dark)">Run millions of agents, 100Ks live — and the rest suspended costing nothing</text>
    <text x="96" y="458" font-size="16" style="fill: var(--s-muted)">Instant checkpoint &amp; CPU/RAM release  ·  Postgres metadata registry  ·  Detached cloud storage</text>
    <rect x="1232" y="362" width="272" height="90" rx="14" style="fill: var(--s-card); stroke: var(--s-green); stroke-width: 1.8" />
    <text x="1368" y="400" text-anchor="middle" font-size="13.5" font-weight="700" style="fill: var(--s-muted)">SOLVES PROPERTY 01</text>
    <text x="1368" y="430" text-anchor="middle" font-size="16.5" font-weight="700" style="fill: var(--s-green)">✓ 98% Idle Waste -&gt; $0</text>
  </g>
  <g id="goal-row-3" class="fade-group">
    <rect x="64" y="504" width="1472" height="154" rx="18" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.4" />
    <rect x="96" y="530" width="144" height="32" rx="16" style="fill: var(--s-blue)" />
    <text x="168" y="551" text-anchor="middle" font-size="13" font-weight="700" style="fill: #ffffff">3 · SPEED</text>
    <text x="96" y="596" font-size="22.5" font-weight="700" style="fill: var(--s-blue-dark)">An idle agent wakes in a few hundred milliseconds — nobody notices it paused</text>
    <text x="96" y="632" font-size="16" style="fill: var(--s-muted)">Dedicated gRPC fast path  ·  Pre-warmed Worker Pods  ·  Node-local snapshot restore</text>
    <rect x="1232" y="536" width="272" height="90" rx="14" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 1.8" />
    <text x="1368" y="574" text-anchor="middle" font-size="13.5" font-weight="700" style="fill: var(--s-muted)">SOLVES PROPERTY 03</text>
    <text x="1368" y="604" text-anchor="middle" font-size="16.5" font-weight="700" style="fill: var(--s-blue)">✓ Sub-Second UX</text>
  </g>
  `,
  animate: (ctx) => {
    ["goal-row-1", "goal-row-2", "goal-row-3"].forEach((id, i) => {
      const row = ctx.el(id);
      row.style.opacity = "0";
      row.style.transform = "translateY(14px)";
      ctx.later(i * 210, () => {
        row.style.opacity = "1";
        row.style.transform = "translateY(0px)";
      });
    });
  }
};
