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
    <rect x="64" y="176" width="1472" height="184" rx="20" style="fill: var(--s-red-fill); stroke: var(--s-red); stroke-width: 2.4" />
    <rect x="96" y="206" width="148" height="34" rx="17" style="fill: var(--s-red)" />
    <text x="170" y="229" text-anchor="middle" font-size="13.5" font-weight="700" style="fill: #ffffff">1 · SECURITY</text>
    <text x="96" y="278" font-size="24" font-weight="700" style="fill: var(--s-red-dark)">Every agent gets an identity — zero credentials, locked network, hard sandbox</text>
    <text x="96" y="318" font-size="17" style="fill: var(--s-muted)">gVisor or microVM isolation  ·  SPIFFE X.509 &amp; Actor JWT  ·  All egress mediated via PEP proxy</text>
    <rect x="1220" y="214" width="284" height="108" rx="16" style="fill: var(--s-card); stroke: var(--s-red); stroke-width: 1.8" />
    <text x="1362" y="258" text-anchor="middle" font-size="14" font-weight="700" style="fill: var(--s-muted)">SOLVES PROPERTY 02</text>
    <text x="1362" y="292" text-anchor="middle" font-size="18" font-weight="700" style="fill: var(--s-red)">✓ Untrusted LLM Code</text>
  </g>
  <g id="goal-row-2" class="fade-group">
    <rect x="64" y="396" width="1472" height="184" rx="20" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2.4" />
    <rect x="96" y="426" width="148" height="34" rx="17" style="fill: var(--s-green)" />
    <text x="170" y="449" text-anchor="middle" font-size="13.5" font-weight="700" style="fill: #ffffff">2 · DENSITY</text>
    <text x="96" y="498" font-size="24" font-weight="700" style="fill: var(--s-green-dark)">Run millions of agents, 100Ks live — and the rest suspended costing nothing</text>
    <text x="96" y="538" font-size="17" style="fill: var(--s-muted)">Instant checkpoint &amp; CPU/RAM release  ·  Postgres metadata registry  ·  Detached cloud storage</text>
    <rect x="1220" y="434" width="284" height="108" rx="16" style="fill: var(--s-card); stroke: var(--s-green); stroke-width: 1.8" />
    <text x="1362" y="478" text-anchor="middle" font-size="14" font-weight="700" style="fill: var(--s-muted)">SOLVES PROPERTY 01</text>
    <text x="1362" y="512" text-anchor="middle" font-size="18" font-weight="700" style="fill: var(--s-green)">✓ 98% Idle Waste -&gt; $0</text>
  </g>
  <g id="goal-row-3" class="fade-group">
    <rect x="64" y="616" width="1472" height="184" rx="20" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.4" />
    <rect x="96" y="646" width="148" height="34" rx="17" style="fill: var(--s-blue)" />
    <text x="170" y="669" text-anchor="middle" font-size="13.5" font-weight="700" style="fill: #ffffff">3 · SPEED</text>
    <text x="96" y="718" font-size="24" font-weight="700" style="fill: var(--s-blue-dark)">An idle agent wakes in a few hundred milliseconds — nobody notices it paused</text>
    <text x="96" y="758" font-size="17" style="fill: var(--s-muted)">Dedicated gRPC fast path  ·  Pre-warmed Worker Pods  ·  Node-local snapshot restore</text>
    <rect x="1220" y="654" width="284" height="108" rx="16" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 1.8" />
    <text x="1362" y="698" text-anchor="middle" font-size="14" font-weight="700" style="fill: var(--s-muted)">SOLVES PROPERTY 03</text>
    <text x="1362" y="732" text-anchor="middle" font-size="18" font-weight="700" style="fill: var(--s-blue)">✓ Sub-Second UX</text>
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
  }
};
