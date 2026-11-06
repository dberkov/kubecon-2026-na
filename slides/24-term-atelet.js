export default {
  chapter: 4,
  short: "24. Term: Atelet",
  speaker: "TIM",
  kicker: "TERMINOLOGY (4 OF 5)",
  title: "Atelet — A per-node daemon which manages all Workers on a node",
  accent: "var(--s-green)",
  headline: "We need Atelet because the Control Plane doesn't talk directly to Workers",
  body1: "Runs once per Kubernetes Node (DaemonSet) and supervises every Worker Pod on that machine.",
  body2: "Receives assignments from ateapi and dispatches start, suspend, and restore commands locally.",
  notes: "Fourth, Atelet: a per-node manager for all the workers on that node. We need this because the control plane cannot talk directly to workers.",
  svg: `
  <rect x="104" y="330" width="308" height="148" rx="14" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2.6" />
  <text x="258" y="394" text-anchor="middle" font-size="27" font-weight="700" style="fill: var(--s-green-dark)">ateapi (gRPC)</text>
  <text x="258" y="430" text-anchor="middle" font-size="17" style="fill: var(--s-muted)">Control Plane</text>
  <line x1="416" y1="404" x2="552" y2="404" stroke="#1e293b" stroke-width="3.4" marker-end="url(#arr-dark)" />
  <rect x="430" y="346" width="112" height="40" rx="10" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 1.8" />
  <text x="486" y="372" text-anchor="middle" font-size="14.5" font-weight="700">Node RPC</text>
  <rect x="560" y="168" width="936" height="476" rx="22" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 2.2" />
  <text x="1028" y="212" text-anchor="middle" font-size="22" font-weight="700" style="fill: var(--s-muted)">Kubernetes Node</text>
  <rect id="term-atelet-box" class="smooth-box" x="604" y="322" width="276" height="164" rx="16" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 3" />
  <text x="742" y="388" text-anchor="middle" font-size="30" font-weight="700" style="fill: var(--s-green-dark)">Atelet</text>
  <text x="742" y="422" text-anchor="middle" font-size="17" font-weight="600">Per-Node Daemon</text>
  <text x="742" y="452" text-anchor="middle" font-size="14.5" style="fill: var(--s-muted)">Manages all node Workers</text>
  <path d="M 882 374 L 976 306" fill="none" stroke="#1e8e3e" stroke-width="3.2" marker-end="url(#arr-green)" />
  <path d="M 882 434 L 976 502" fill="none" stroke="#1e8e3e" stroke-width="3.2" marker-end="url(#arr-green)" />
  <rect x="984" y="236" width="468" height="164" rx="14" style="fill: var(--s-blue-box); stroke: var(--s-blue); stroke-width: 2.4" />
  <text x="1218" y="274" text-anchor="middle" font-size="21" font-weight="700">Worker 1</text>
  <rect x="1014" y="294" width="192" height="84" rx="10" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
  <text x="1110" y="334" text-anchor="middle" font-size="19" font-weight="700">Actor 1</text>
  <text x="1110" y="358" text-anchor="middle" font-size="14.5" style="fill: var(--s-muted)">Running</text>
  <rect x="1228" y="294" width="192" height="84" rx="10" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
  <text x="1324" y="334" text-anchor="middle" font-size="19" font-weight="700">Actor 2</text>
  <text x="1324" y="358" text-anchor="middle" font-size="14.5" style="fill: var(--s-muted)">Running</text>
  <rect x="984" y="428" width="468" height="164" rx="14" style="fill: var(--s-blue-box); stroke: var(--s-blue); stroke-width: 2.4" />
  <text x="1218" y="466" text-anchor="middle" font-size="21" font-weight="700">Worker 2</text>
  <rect x="1014" y="486" width="192" height="84" rx="10" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
  <text x="1110" y="526" text-anchor="middle" font-size="19" font-weight="700">Actor 3</text>
  <text x="1110" y="550" text-anchor="middle" font-size="14.5" style="fill: var(--s-muted)">Running</text>
  <rect x="1228" y="486" width="192" height="84" rx="10" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 2; stroke-dasharray: 6 4" />
  <text x="1324" y="526" text-anchor="middle" font-size="19" font-weight="700" style="fill: var(--s-muted)">Free slot</text>
  <text x="1324" y="550" text-anchor="middle" font-size="14.5" style="fill: var(--s-purple)">Ready</text>
  <g id="term-pkt" class="mover" style="opacity: 0; transform: translate(800px, 240px)">
    <rect id="term-pkt-bg" x="-84" y="-19" width="168" height="38" rx="19" style="fill: var(--s-amber); stroke: #ffffff; stroke-width: 2" />
    <text id="term-pkt-txt" x="0" y="5" text-anchor="middle" font-size="14" font-weight="700" class="mono" style="fill: #1e293b">Assign</text>
  </g>
  `,
  animate: (ctx) => {
    const runAtelet = () => {
      ctx.movePkt("term-pkt", "term-pkt-bg", "term-pkt-txt", "Assign Actor", "#fbbc04", "#1e293b", 380, 404, 742, 404, 162);
      ctx.later(760, () => {
        ctx.movePkt("term-pkt", "term-pkt-bg", "term-pkt-txt", "Manage Worker", "var(--s-green)", "#ffffff", 780, 388, 1080, 318, 168);
      });
      ctx.later(1520, () => {
        ctx.movePkt("term-pkt", "term-pkt-bg", "term-pkt-txt", "Manage Worker", "var(--s-green)", "#ffffff", 780, 420, 1080, 510, 168);
      });
      ctx.later(2280, () => { ctx.el("term-pkt").style.opacity = "0"; });
    };
    runAtelet();
    ctx.every(3100, runAtelet);
  }
};
