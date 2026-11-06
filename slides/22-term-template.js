export default {
  chapter: 4,
  short: "22. Term: Template",
  speaker: "TIM",
  kicker: "TERMINOLOGY (2 OF 5)",
  title: "ActorTemplate — A description of how to run a particular 'shape' of Actor",
  accent: "var(--s-blue)",
  headline: "If an Actor is a cookie, ActorTemplate is the cookie cutter",
  body1: "Specifies OCI container image, command/args, resource sizing, and EgressPolicy.",
  body2: "Different templates in the same cluster can choose gVisor or Cloud Hypervisor microVMs.",
  notes: "Second, ActorTemplate: if an actor is a cookie, this is the cookie cutter. It defines which OCI image to run, arguments, and which sandbox technology to use — such as gVisor or microVMs.",
  svg: `
  <g id="term-tpl-card" class="fade-group">
    <rect x="560" y="162" width="480" height="106" rx="16" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.6; stroke-dasharray: 8 5" />
    <text x="800" y="206" text-anchor="middle" font-size="23" font-weight="700" style="fill: var(--s-blue-dark)">ActorTemplate ("Cookie Cutter")</text>
    <text x="800" y="240" text-anchor="middle" font-size="16" style="fill: var(--s-muted)">OCI Image · Command/Args · gVisor or microVM</text>
    <line x1="800" y1="270" x2="800" y2="338" stroke="#1a73e8" stroke-width="3" stroke-dasharray="6 5" marker-end="url(#arr-blue)" />
  </g>
  <g id="term-actor-card" class="fade-group">
    <rect id="term-actor-box" class="smooth-box" x="472" y="344" width="656" height="122" rx="14" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.8" />
    <text id="term-actor-title" x="800" y="398" text-anchor="middle" font-size="28" font-weight="700">Actor 1 (Agent / Sandbox)</text>
    <text id="term-actor-sub" x="800" y="434" text-anchor="middle" font-size="18" font-weight="700" class="mono" style="fill: var(--s-purple)">RUNNING ON CPU</text>
  </g>
  <g id="term-pkt" class="mover" style="opacity: 0; transform: translate(800px, 240px)">
    <rect id="term-pkt-bg" x="-84" y="-19" width="168" height="38" rx="19" style="fill: var(--s-amber); stroke: #ffffff; stroke-width: 2" />
    <text id="term-pkt-txt" x="0" y="5" text-anchor="middle" font-size="14" font-weight="700" class="mono" style="fill: #1e293b">Assign</text>
  </g>
  `,
  animate: (ctx) => {
    const box = ctx.el("term-actor-box");
    box.style.fill = "var(--s-purple-fill)";
    box.style.strokeDasharray = "none";
    ctx.el("term-actor-title").textContent = "Actor (Stamped from Template)";
    ctx.el("term-actor-sub").style.fill = "var(--s-purple)";
    ctx.el("term-actor-sub").textContent = "OCI + gVisor / microVM";
    ctx.movePkt("term-pkt", "term-pkt-bg", "term-pkt-txt", "Stamp Shape", "var(--s-blue)", "#ffffff", 800, 250, 800, 355, 160);
    ctx.later(900, () => { ctx.el("term-pkt").style.opacity = "0"; });
  }
};
