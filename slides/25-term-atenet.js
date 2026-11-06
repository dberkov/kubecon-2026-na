export default {
  chapter: 4,
  short: "25. Term: Atenet",
  speaker: "TIM",
  kicker: "TERMINOLOGY (5 OF 5)",
  title: "Atenet — An enlightened proxy which awakens Actors on demand",
  accent: "var(--s-green)",
  headline: "Traffic arrives for a sleeping Actor -> Atenet parks it, wakes the Actor, and streams!",
  body1: "Ate-enlightened Envoy proxy sitting in front of Actors with zero dropped requests during wakeup.",
  body2: "Now let's look at how these building blocks deliver Density, Speed, and Security in practice.",
  notes: "Fifth, Atenet: an ate-enlightened proxy which can trigger actor wakeups upon receipt of traffic. Now, let's look at how those pieces fit together.",
  svg: `
  <rect x="88" y="366" width="236" height="116" rx="14" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 2.2" />
  <text x="206" y="418" text-anchor="middle" font-size="22" font-weight="700">Client Traffic</text>
  <text x="206" y="448" text-anchor="middle" font-size="16" style="fill: var(--s-muted)">HTTP / gRPC</text>
  <line x1="328" y1="424" x2="458" y2="424" stroke="#1e293b" stroke-width="3.4" marker-end="url(#arr-dark)" />
  <rect id="term-atenet-box" class="smooth-box" x="466" y="330" width="348" height="188" rx="18" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 3" />
  <text x="640" y="398" text-anchor="middle" font-size="32" font-weight="700" style="fill: var(--s-green-dark)">Atenet</text>
  <text x="640" y="434" text-anchor="middle" font-size="18.5" font-weight="600">Enlightened Envoy Proxy</text>
  <text id="term-atenet-status" x="640" y="472" text-anchor="middle" font-size="15.5" font-weight="700" style="fill: var(--s-amber-dark)">1. Holds traffic &amp; triggers wakeup</text>
  <rect x="690" y="168" width="280" height="92" rx="12" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2.2" />
  <text x="830" y="210" text-anchor="middle" font-size="23" font-weight="700" style="fill: var(--s-green-dark)">ateapi (gRPC)</text>
  <text x="830" y="238" text-anchor="middle" font-size="15" style="fill: var(--s-muted)">Wakes target Actor</text>
  <line x1="686" y1="330" x2="774" y2="264" stroke="#e37400" stroke-width="3" marker-end="url(#arr-amber)" />
  <line x1="924" y1="260" x2="1022" y2="309" stroke="#1a73e8" stroke-width="3" marker-end="url(#arr-blue)" />
  <line id="term-atenet-stream" x1="816" y1="424" x2="1018" y2="424" stroke="#1e8e3e" stroke-width="4" marker-end="url(#arr-green)" />
  <rect x="1028" y="286" width="468" height="276" rx="18" style="fill: var(--s-blue-box); stroke: var(--s-blue); stroke-width: 2.6" />
  <text x="1262" y="334" text-anchor="middle" font-size="24" font-weight="700">Worker</text>
  <rect id="term-atenet-actor" class="smooth-box" x="1076" y="362" width="372" height="162" rx="14" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 2.6; stroke-dasharray: 8 5" />
  <text x="1262" y="432" text-anchor="middle" font-size="28" font-weight="700">Actor</text>
  <text id="term-atenet-actor-lbl" x="1262" y="472" text-anchor="middle" font-size="18" font-weight="700" style="fill: var(--s-purple)">Awakened on demand!</text>
  <g id="term-pkt" class="mover" style="opacity: 0; transform: translate(800px, 240px)">
    <rect id="term-pkt-bg" x="-84" y="-19" width="168" height="38" rx="19" style="fill: var(--s-amber); stroke: #ffffff; stroke-width: 2" />
    <text id="term-pkt-txt" x="0" y="5" text-anchor="middle" font-size="14" font-weight="700" class="mono" style="fill: #1e293b">Assign</text>
  </g>
  `,
  animate: (ctx) => {
    const actBox = ctx.el("term-atenet-actor");
    const actLbl = ctx.el("term-atenet-actor-lbl");
    const streamLine = ctx.el("term-atenet-stream");
    const runAtenet = () => {
      actBox.style.fill = "var(--s-slot-fill)";
      actBox.style.strokeDasharray = "8 5";
      actLbl.textContent = "Suspended (Sleeping)";
      actLbl.style.fill = "var(--s-muted)";
      streamLine.classList.remove("flow-dash");
      ctx.el("term-atenet-status").textContent = "1. Holds incoming HTTP request";

      ctx.movePkt("term-pkt", "term-pkt-bg", "term-pkt-txt", "HTTP Request", "#fbbc04", "#1e293b", 260, 424, 640, 424, 158);
      ctx.later(760, () => {
        ctx.el("term-atenet-status").textContent = "2. Triggers wakeup via ateapi";
        ctx.movePkt("term-pkt", "term-pkt-bg", "term-pkt-txt", "Wake Actor!", "var(--s-amber)", "#1e293b", 686, 330, 830, 214, 152);
      });
      ctx.later(1480, () => {
        actBox.style.fill = "var(--s-purple-fill)";
        actBox.style.strokeDasharray = "none";
        actLbl.textContent = "Awake & Ready!";
        actLbl.style.fill = "var(--s-purple)";
        streamLine.classList.add("flow-dash");
        ctx.el("term-atenet-status").textContent = "3. Streams traffic seamlessly!";
        ctx.movePkt("term-pkt", "term-pkt-bg", "term-pkt-txt", "Stream HTTP", "var(--s-green)", "#ffffff", 740, 424, 1220, 424, 158);
      });
      ctx.later(2350, () => { ctx.el("term-pkt").style.opacity = "0"; });
    };
    runAtenet();
    ctx.every(3300, runAtenet);
  }
};
