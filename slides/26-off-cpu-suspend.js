export default {
  chapter: 5,
  short: "26. Off-CPU Suspend",
  speaker: "DIMA",
  kicker: "GOAL: DENSITY · BILLION-ACTOR REGISTRY & HIBERNATION",
  title: "Goal: Density — Off-CPU Suspend",
  accent: "var(--s-green)",
  headline: "1. Suspend via ateapi (Postgres)  ->  2. Snapshot (0 CPU / 0 RAM) & Evict from CPU",
  body1: "Postgres tracks billions of actor records with zero Kubernetes etcd overhead.",
  body2: "Idle Actor 3 checkpoints off-CPU immediately, freeing the Worker slot while Actors 1 & 2 keep running.",
  notes: "First, Density. We cannot store millions of actors in Kubernetes etcd — so ateapi uses Postgres to store billions of actor records with zero etcd overhead. When an actor goes idle, SuspendActor takes a snapshot, immediately removes the actor from CPU and memory, and returns the Worker slot to the idle pool so the actor costs zero compute while idle.",
  svg: `
  <rect id="s33-api-box" class="smooth-box" x="88" y="252" width="316" height="148" rx="8" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2.6" />
  <text x="246" y="336" text-anchor="middle" font-size="28" font-weight="700" style="fill: var(--s-green-dark)">ateapi (gRPC)</text>
  <line x1="246" y1="402" x2="246" y2="514" stroke="#64748b" stroke-width="3.2" marker-end="url(#arr-slate)" />
  <path d="M 88 544 C 88 518, 404 518, 404 544 L 404 644 C 404 670, 88 670, 88 644 Z" style="fill: var(--s-blue-box); stroke: var(--s-blue); stroke-width: 2.5" />
  <ellipse cx="246" cy="544" rx="158" ry="20" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.5" />
  <text x="246" y="604" text-anchor="middle" font-size="27" font-weight="700">postgres</text>
  <text id="s33-pg-sub" x="246" y="638" text-anchor="middle" font-size="18.5" style="fill: var(--s-muted)">Billions of actors</text>
  <g id="s33-call-1" class="fade-group">
    <rect x="414" y="220" width="192" height="68" rx="14" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.2" />
    <text x="510" y="262" text-anchor="middle" font-size="22" font-weight="700">1. Suspend</text>
  </g>
  <line id="s33-arr-1" x1="406" y1="324" x2="602" y2="324" stroke="#1e293b" stroke-width="4" marker-end="url(#arr-dark)" />
  <rect x="612" y="204" width="468" height="464" rx="8" style="fill: var(--s-blue-box); stroke: var(--s-blue); stroke-width: 2.6" />
  <text x="846" y="256" text-anchor="middle" font-size="30" font-weight="700">Worker</text>
  <rect x="646" y="294" width="188" height="128" rx="6" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.4" />
  <text x="740" y="352" text-anchor="middle" font-size="24" font-weight="700">Actor 1</text>
  <text x="740" y="386" text-anchor="middle" font-size="18" style="fill: var(--s-muted)">Running</text>
  <rect x="858" y="294" width="188" height="128" rx="6" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.4" />
  <text x="952" y="352" text-anchor="middle" font-size="24" font-weight="700">Actor 2</text>
  <text x="952" y="386" text-anchor="middle" font-size="18" style="fill: var(--s-muted)">Running</text>
  <rect id="s33-a3-box" class="smooth-box" x="646" y="456" width="400" height="180" rx="6" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 2.6; stroke-dasharray: 9 6" />
  <text id="s33-a3-title" x="846" y="538" text-anchor="middle" font-size="28" font-weight="700">Actor 3 (Idle)</text>
  <text id="s33-a3-sub" x="846" y="578" text-anchor="middle" font-size="21" font-weight="600" style="fill: var(--s-purple)">Evicted from CPU</text>
  <g id="s33-call-2" class="fade-group">
    <rect x="1094" y="454" width="186" height="68" rx="14" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.2" />
    <text x="1187" y="496" text-anchor="middle" font-size="21" font-weight="700">2. Snapshot</text>
  </g>
  <line id="s33-arr-2" x1="1048" y1="552" x2="1286" y2="552" stroke="#1e293b" stroke-width="4" marker-end="url(#arr-dark)" />
  <path id="s33-snap-cyl" class="smooth-box" d="M 1296 472 C 1296 442, 1532 442, 1532 472 L 1532 628 C 1532 658, 1296 658, 1296 628 Z" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.6" />
  <ellipse cx="1414" cy="472" rx="118" ry="22" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.6" />
  <text x="1414" y="554" text-anchor="middle" font-size="28" font-weight="700">Snapshot</text>
  <text x="1414" y="592" text-anchor="middle" font-size="20" style="fill: var(--s-muted)">0 CPU / 0 RAM</text>
  <g id="s33-pkt" class="mover" style="opacity: 0; transform: translate(420px, 324px)">
    <rect id="s33-pkt-bg" x="-86" y="-20" width="172" height="38" rx="19" style="fill: var(--s-amber); stroke: #ffffff; stroke-width: 2" />
    <text id="s33-pkt-txt" x="0" y="5" text-anchor="middle" font-size="14.5" font-weight="700" class="mono" style="fill: #1e293b">SuspendActor</text>
  </g>
  `,
  animate: (ctx) => {
    const a3Box = ctx.el("s33-a3-box");
    const a3Title = ctx.el("s33-a3-title");
    const a3Sub = ctx.el("s33-a3-sub");
    const pgSub = ctx.el("s33-pg-sub");
    const c1 = ctx.el("s33-call-1");
    const c2 = ctx.el("s33-call-2");

    const runS33 = () => {
      a3Box.style.fill = "var(--s-purple-fill)";
      a3Box.style.strokeDasharray = "none";
      a3Title.textContent = "Actor 3 (Idle)";
      a3Sub.textContent = "Still holding CPU & RAM...";
      a3Sub.style.fill = "var(--s-muted)";
      pgSub.textContent = "Billions of actors";
      c1.style.opacity = "0.35";
      c2.style.opacity = "0.35";
      ctx.el("s33-pkt").style.opacity = "0";

      ctx.later(650, () => {
        c1.style.opacity = "1";
        pgSub.textContent = "State -> SUSPENDED";
        ctx.movePkt("s33-pkt", "s33-pkt-bg", "s33-pkt-txt", "1. Suspend", "#fbbc04", "#1e293b", 360, 324, 620, 324, 156);
      });

      ctx.later(1480, () => {
        c2.style.opacity = "1";
        ctx.movePkt("s33-pkt", "s33-pkt-bg", "s33-pkt-txt", "2. Snapshot", "var(--s-purple)", "#ffffff", 980, 552, 1340, 552, 162);
      });

      ctx.later(2180, () => {
        a3Box.style.fill = "var(--s-slot-fill)";
        a3Box.style.strokeDasharray = "9 6";
        a3Title.textContent = "Actor 3 (Idle)";
        a3Sub.textContent = "Evicted from CPU (Slot Free!)";
        a3Sub.style.fill = "var(--s-purple)";
        pgSub.textContent = "Billions of actors (0 etcd)";
        ctx.el("s33-pkt").style.opacity = "0";
      });
    };
    runS33();
    ctx.every(3800, runS33);
  }
};
