export default {
  chapter: 4,
  short: "23. Term: Worker",
  speaker: "TIM",
  kicker: "TERMINOLOGY (3 OF 5)",
  title: "Worker — A running application that receives Actor assignments & runs them",
  accent: "var(--s-blue)",
  headline: "Workers are the warm Kubernetes Pods that claim cluster CPU & Memory",
  body1: "Pre-warmed Pods wait to receive Actor assignments and hydrate them in milliseconds.",
  body2: "One warm Worker Pod can host a single Actor or multiplex multiple isolated Actors.",
  notes: "Third, Worker: a running Pod in Kubernetes that actually consumes K8s resources and waits to be told when to start or stop running actors. A worker can run one or many actors.",
  svg: `
  <g id="term-worker-wrap" class="fade-group">
    <rect x="420" y="218" width="760" height="422" rx="18" style="fill: var(--s-blue-box); stroke: var(--s-blue); stroke-width: 2.8" />
    <text x="800" y="268" text-anchor="middle" font-size="30" font-weight="700">Worker (Warm K8s Pod)</text>
    <text x="800" y="300" text-anchor="middle" font-size="17" style="fill: var(--s-muted)">Consumes K8s resources &amp; receives Actor assignments</text>
    <rect x="472" y="492" width="308" height="112" rx="12" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.2" />
    <text x="626" y="542" text-anchor="middle" font-size="22" font-weight="700">Actor 2</text>
    <text x="626" y="574" text-anchor="middle" font-size="16" style="fill: var(--s-muted)">Running</text>
    <rect x="820" y="492" width="308" height="112" rx="12" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 2.2; stroke-dasharray: 7 5" />
    <text x="974" y="542" text-anchor="middle" font-size="22" font-weight="700" style="fill: var(--s-muted)">Free Slot</text>
    <text x="974" y="574" text-anchor="middle" font-size="16" style="fill: var(--s-purple)">Ready for assignment</text>
  </g>
  <g id="term-actor-card" class="fade-group">
    <rect id="term-actor-box" class="smooth-box" x="472" y="344" width="656" height="122" rx="14" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.8" />
    <text id="term-actor-title" x="800" y="398" text-anchor="middle" font-size="28" font-weight="700">Actor 1 (Agent / Sandbox)</text>
    <text id="term-actor-sub" x="800" y="434" text-anchor="middle" font-size="18" font-weight="700" class="mono" style="fill: var(--s-purple)">RUNNING ON CPU</text>
  </g>
  `,
  animate: (ctx) => {
    const box = ctx.el("term-actor-box");
    box.style.fill = "var(--s-purple-fill)";
    box.style.strokeDasharray = "none";
    ctx.el("term-actor-title").textContent = "Actor 1";
    ctx.el("term-actor-sub").style.fill = "var(--s-purple)";
    ctx.el("term-actor-sub").textContent = "Running";
  }
};
