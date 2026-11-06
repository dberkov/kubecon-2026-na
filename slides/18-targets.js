export default {
  chapter: 3,
  short: "18. Targets",
  speaker: "TIM",
  kicker: "AUDACIOUS NORTH-STAR TARGETS",
  title: "Setting Audacious Destination Targets for Cluster Scale",
  accent: "var(--s-green)",
  headline: "Aspirational North Star: 1 Billion Agents · 10,000 Activations/s · 100ms Warm Wakeups",
  body1: "Numbers convey architectural intent: Kubernetes etcd alone cannot sit on this hot path.",
  body2: "Explicitly framed on-slide as our destination target — guiding every fast-path design choice.",
  notes: "Everyone loves numbers, so we set audacious aspirational targets: up to 1 billion sessions under management, 10,000 activations per second, and 100ms wakeups. These are our destination, not current state — and they explain why our architecture looks the way it does.",
  svg: `
  <rect x="1196" y="146" width="340" height="32" rx="16" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 1.5" />
  <text x="1366" y="167" text-anchor="middle" font-size="12.5" font-weight="700" style="fill: var(--s-amber-dark)">ASPIRATIONAL NORTH-STAR DESTINATION</text>
  <rect x="64" y="194" width="468" height="464" rx="22" style="fill: var(--s-card); stroke: var(--s-green); stroke-width: 2.6" />
  <rect x="64" y="194" width="468" height="84" rx="22" style="fill: var(--s-green-fill)" />
  <rect x="64" y="258" width="468" height="20" style="fill: var(--s-green-fill)" />
  <text x="298" y="245" text-anchor="middle" font-size="16" font-weight="800" letter-spacing="1.2" style="fill: var(--s-green-dark)">1 · STATEFUL SCALE</text>
  <text id="odo-1" x="298" y="392" text-anchor="middle" font-size="78" font-weight="800" style="fill: var(--s-green)">1 Billion</text>
  <text x="298" y="446" text-anchor="middle" font-size="27" font-weight="700">agents / cluster</text>
  <line x1="114" y1="492" x2="482" y2="492" style="stroke: var(--s-border); stroke-width: 1.5" />
  <text x="298" y="540" text-anchor="middle" font-size="17" style="fill: var(--s-muted)">Sessions under management in Postgres</text>
  <text x="298" y="572" text-anchor="middle" font-size="17" font-weight="700" style="fill: var(--s-green-dark)">Off-CPU checkpoints cost ~0 compute</text>
  <rect x="566" y="194" width="468" height="464" rx="22" style="fill: var(--s-card); stroke: var(--s-purple); stroke-width: 2.6" />
  <rect x="566" y="194" width="468" height="84" rx="22" style="fill: var(--s-purple-fill)" />
  <rect x="566" y="258" width="468" height="20" style="fill: var(--s-purple-fill)" />
  <text x="800" y="245" text-anchor="middle" font-size="16" font-weight="800" letter-spacing="1.2" style="fill: var(--s-purple-dark)">2 · BURST THROUGHPUT</text>
  <text id="odo-2" x="800" y="392" text-anchor="middle" font-size="78" font-weight="800" style="fill: var(--s-purple)">10K / s</text>
  <text x="800" y="446" text-anchor="middle" font-size="27" font-weight="700">activations / second</text>
  <line x1="616" y1="492" x2="984" y2="492" style="stroke: var(--s-border); stroke-width: 1.5" />
  <text x="800" y="540" text-anchor="middle" font-size="17" style="fill: var(--s-muted)">Dedicated gRPC control plane</text>
  <text x="800" y="572" text-anchor="middle" font-size="17" font-weight="700" style="fill: var(--s-purple-dark)">Bypasses K8s etcd &amp; Pod watch path</text>
  <rect x="1068" y="194" width="468" height="464" rx="22" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 2.6" />
  <rect x="1068" y="194" width="468" height="84" rx="22" style="fill: var(--s-blue-fill)" />
  <rect x="1068" y="258" width="468" height="20" style="fill: var(--s-blue-fill)" />
  <text x="1302" y="245" text-anchor="middle" font-size="16" font-weight="800" letter-spacing="1.2" style="fill: var(--s-blue-dark)">3 · INTERACTIVE LATENCY</text>
  <text id="odo-3" x="1302" y="392" text-anchor="middle" font-size="78" font-weight="800" style="fill: var(--s-blue)">100 ms</text>
  <text x="1302" y="446" text-anchor="middle" font-size="27" font-weight="700">warm wakeups</text>
  <line x1="1118" y1="492" x2="1486" y2="492" style="stroke: var(--s-border); stroke-width: 1.5" />
  <text x="1302" y="540" text-anchor="middle" font-size="17" style="fill: var(--s-muted)">Restore into pre-warmed Workers</text>
  <text x="1302" y="572" text-anchor="middle" font-size="17" font-weight="700" style="fill: var(--s-blue-dark)">Human in the loop never feels a pause</text>
  `,
  animate: (ctx) => {
    ctx.animateProgress(1500, (t) => {
      const e = ctx.easeOutCubic(t);
      ctx.el("odo-1").textContent = e >= 0.96 ? "1 Billion" : `${Math.max(10, Math.round(1000 * e))}M`;
      ctx.el("odo-2").textContent = e >= 0.96 ? "10K / s" : `${(10 * e).toFixed(1)}K / s`;
      const ms = Math.round(950 - 850 * e);
      ctx.el("odo-3").textContent = `${ms} ms`;
    });
  }
};
