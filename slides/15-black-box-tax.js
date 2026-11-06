export default {
  chapter: 2,
  short: "15. Black-Box Tax",
  speaker: "TIM / DIMA",
  kicker: "THE COST OF GOING DIY",
  title: "You end up reinventing Kubernetes — inside an opaque black box",
  accent: "var(--s-red)",
  headline: "Today's False Choice: 1 Pod/Agent = Bad UX or Huge Bill   vs.   DIY Giant Pod = Reinvent K8s Yourself",
  body1: "A bespoke control plane schedules agents into sandboxes; everything inside is opaque to Kubernetes.",
  body2: "You reinvent bin-packing, lifecycle, routing, and node drain — far too complex for most teams and startups.",
  notes: "A bespoke control plane schedules agents into sandboxes and manages their lifecycle. Everything is basically opaque — you end up reinventing large parts of Kubernetes, which is complex to build and manage, especially for startups.",
  svg: `
  <rect x="64" y="284" width="204" height="114" rx="16" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.2" />
  <text x="166" y="334" text-anchor="middle" font-size="20" font-weight="700">Chat Agent</text>
  <text x="166" y="362" text-anchor="middle" font-size="20" font-weight="700">Service</text>
  <line x1="272" y1="341" x2="338" y2="341" stroke="#64748b" stroke-width="3.5" class="flow-dash" />
  <g id="diy-20-cp" class="fade-group">
    <rect x="346" y="258" width="356" height="164" rx="16" style="fill: var(--s-red-fill); stroke: var(--s-red); stroke-width: 2.8" />
    <rect x="372" y="280" width="222" height="28" rx="8" style="fill: var(--s-red)" />
    <text x="483" y="299" text-anchor="middle" font-size="12.5" font-weight="700" style="fill: #ffffff">BESPOKE ORCHESTRATOR</text>
    <text x="524" y="350" text-anchor="middle" font-size="26" font-weight="800" style="fill: var(--s-red-dark)">Custom Control Plane</text>
    <text x="524" y="384" text-anchor="middle" font-size="16">Schedules &amp; routes every session</text>
    <rect x="346" y="442" width="356" height="226" rx="14" style="fill: var(--s-card); stroke: var(--s-red); stroke-width: 1.8" />
    <text x="372" y="476" font-size="16.5" font-weight="700" style="fill: var(--s-red-dark)">Reinvented From Scratch:</text>
    <text x="372" y="510" font-size="16">• Bin-packing &amp; placement</text>
    <text x="372" y="542" font-size="16">• Warm pools &amp; snapshotting</text>
    <text x="372" y="574" font-size="16">• Session routing &amp; retries</text>
    <text x="372" y="606" font-size="16">• Node drain &amp; failover</text>
    <text x="372" y="644" font-size="15.5" font-weight="700" style="fill: var(--s-red)">✕ Huge burden for startups</text>
  </g>
  <line x1="706" y1="341" x2="778" y2="341" style="stroke: var(--s-red); stroke-width: 3.5" class="flow-dash" />
  <g id="diy-20-box" class="fade-group">
    <rect x="786" y="152" width="750" height="516" rx="18" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.2" />
    <text x="820" y="194" font-size="22" font-weight="700" style="fill: var(--s-blue-dark)">K8s Node</text>
    <text x="1502" y="194" text-anchor="end" font-size="16" font-weight="700" style="fill: var(--s-red)">Everything inside is opaque to K8s</text>
    <rect x="820" y="214" width="682" height="352" rx="16" style="fill: var(--s-dark-box); stroke: #0f172a; stroke-width: 2.5" />
    <text x="850" y="254" font-size="19" font-weight="700" style="fill: #f8fafc">Giant K8s Pod ("Black Box")</text>
    <rect x="1282" y="230" width="194" height="32" rx="16" style="fill: var(--s-dark-box-sub)" />
    <text x="1379" y="251" text-anchor="middle" font-size="13.5" font-weight="700" style="fill: #fbbc04">Opaque to kubectl</text>
    <rect x="1006" y="276" width="310" height="68" rx="12" fill="#f3e8fd" stroke="#c084fc" stroke-width="2.2" />
    <text x="1161" y="318" text-anchor="middle" font-size="21" font-weight="700" style="fill: #681da8">manager</text>
    <line x1="1161" y1="344" x2="1161" y2="384" stroke="#cbd5e1" stroke-width="3" />
    <g>
      <rect x="858" y="388" width="188" height="144" rx="12" style="fill: var(--s-dark-box-sub); stroke: #94a3b8; stroke-width: 1.6" />
      <text x="952" y="432" text-anchor="middle" font-size="18" font-weight="700" style="fill: #f8fafc">sandbox #1</text>
      <text x="952" y="462" text-anchor="middle" font-size="14.5" style="fill: #cbd5e1">Tenant Session</text>
      <text x="952" y="502" text-anchor="middle" font-size="13.5" font-weight="700" style="fill: #fca5a5">No K8s Identity</text>
      <rect x="1067" y="388" width="188" height="144" rx="12" style="fill: var(--s-dark-box-sub); stroke: #94a3b8; stroke-width: 1.6" />
      <text x="1161" y="432" text-anchor="middle" font-size="18" font-weight="700" style="fill: #f8fafc">sandbox #2</text>
      <text x="1161" y="462" text-anchor="middle" font-size="14.5" style="fill: #cbd5e1">Tenant Session</text>
      <text x="1161" y="502" text-anchor="middle" font-size="13.5" font-weight="700" style="fill: #fca5a5">No K8s Identity</text>
      <rect x="1276" y="388" width="188" height="144" rx="12" style="fill: var(--s-dark-box-sub); stroke: #94a3b8; stroke-width: 1.6" />
      <text x="1370" y="432" text-anchor="middle" font-size="18" font-weight="700" style="fill: #f8fafc">sandbox #3</text>
      <text x="1370" y="462" text-anchor="middle" font-size="14.5" style="fill: #cbd5e1">Tenant Session</text>
      <text x="1370" y="502" text-anchor="middle" font-size="13.5" font-weight="700" style="fill: #fca5a5">No K8s Identity</text>
    </g>
    <rect x="820" y="582" width="216" height="66" rx="10" style="fill: var(--s-card); stroke: var(--s-border)" />
    <text x="928" y="610" text-anchor="middle" font-size="15" font-weight="700" style="fill: var(--s-red)">✕ Blind Autoscaling</text>
    <text x="928" y="634" text-anchor="middle" font-size="13.5" style="fill: var(--s-muted)">HPA sees 1 static Pod</text>
    <rect x="1053" y="582" width="216" height="66" rx="10" style="fill: var(--s-card); stroke: var(--s-border)" />
    <text x="1161" y="610" text-anchor="middle" font-size="15" font-weight="700" style="fill: var(--s-red)">✕ No K8s NetPolicy</text>
    <text x="1161" y="634" text-anchor="middle" font-size="13.5" style="fill: var(--s-muted)">Custom egress &amp; auth</text>
    <rect x="1286" y="582" width="216" height="66" rx="10" style="fill: var(--s-card); stroke: var(--s-border)" />
    <text x="1394" y="610" text-anchor="middle" font-size="15" font-weight="700" style="fill: var(--s-red)">✕ Hard Node Drain</text>
    <text x="1394" y="634" text-anchor="middle" font-size="13.5" style="fill: var(--s-muted)">Evicts dozens of agents</text>
  </g>
  `,
  animate: (ctx) => {
    const cp = ctx.el("diy-20-cp");
    const bx = ctx.el("diy-20-box");
    cp.style.opacity = "0";
    bx.style.opacity = "0";
    ctx.later(120, () => { cp.style.opacity = "1"; });
    ctx.later(520, () => { bx.style.opacity = "1"; });
  }
};
