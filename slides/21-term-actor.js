export default {
  chapter: 4,
  short: "21. Term: Actor",
  speaker: "TIM",
  kicker: "TERMINOLOGY (1 OF 5)",
  title: "Actor — An instance of an agent or sandbox (running or suspended)",
  accent: "var(--s-purple)",
  headline: "Think of an Actor as a single stateful agent session — the core abstraction of Substrate",
  body1: "Covers conversational agents, coding sandboxes, or stateful tool environments.",
  body2: "Crucially, an Actor keeps its identity whether it is RUNNING on CPU or SUSPENDED off-CPU.",
  notes: "Let's introduce five quick terms. First, Actor: an instance of an agent or sandbox environment — think a single agent session — which may be running or suspended.",
  svg: `
  <g id="term-actor-card" class="fade-group">
    <rect id="term-actor-box" class="smooth-box" x="472" y="344" width="656" height="122" rx="14" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.8" />
    <text id="term-actor-title" x="800" y="398" text-anchor="middle" font-size="28" font-weight="700">Actor 1 (Agent / Sandbox)</text>
    <text id="term-actor-sub" x="800" y="434" text-anchor="middle" font-size="18" font-weight="700" class="mono" style="fill: var(--s-purple)">RUNNING ON CPU</text>
  </g>
  `,
  animate: (ctx) => {
    const box = ctx.el("term-actor-box");
    const sub = ctx.el("term-actor-sub");
    ctx.el("term-actor-title").textContent = "Actor (Agent / Sandbox)";
    let running = true;
    const applyState = () => {
      if (running) {
        box.style.fill = "var(--s-purple-fill)";
        box.style.strokeDasharray = "none";
        sub.style.fill = "var(--s-purple)";
        sub.textContent = "RUNNING ON CPU";
      } else {
        box.style.fill = "var(--s-slot-fill)";
        box.style.strokeDasharray = "9 6";
        sub.style.fill = "var(--s-muted)";
        sub.textContent = "SUSPENDED (0 CPU / 0 RAM)";
      }
    };
    applyState();
    ctx.every(1250, () => {
      running = !running;
      applyState();
    });
  }
};
