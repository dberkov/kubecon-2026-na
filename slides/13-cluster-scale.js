export default {
  chapter: 1,
  short: "13. Cluster Scale",
  speaker: "TIM",
  kicker: "WHY APPROACH 1 BREAKS AT SCALE",
  title: "7. Multiply by thousands of agents: 94% idle waste + K8s limits",
  accent: "var(--s-red)",
  headline: "Three compounding walls: Poor Utilization · Long-Tail UX · K8s Scheduling & Pod Limits",
  body1: "1) Cluster capacity is locked up by idle Pods waiting for the next message (huge cost, <10% CPU used).",
  body2: "2) Traffic bursts overwhelm K8s pod scheduling throughput, and clusters top out at ~hundreds of thousands of Pods.",
  notes: "This happens for every agent instance: poor utilization, long-tail UX latency, K8s scheduling throughput struggles on bursts, and a single Kubernetes cluster can only host a few hundred thousand pods.\nThat's the simple approach. The teams who hit these walls first went a different way. Dima?",
  svg: `
  <g id="cluster-view" class="fade-group">
    <text x="64" y="162" font-size="16" font-weight="700" style="fill: var(--s-muted)">180 ACTIVE CHAT SESSIONS ACROSS 15 KUBERNETES NODES — ~94% OF PODS ARE JUST WAITING</text>
    <g id="cluster-nodes-grid" />
    <g transform="translate(64, 830)">
      <rect x="0" y="-14" width="16" height="16" rx="4" style="fill: #60d46c; stroke: #1e293b; stroke-width: 1.5" />
      <rect x="20" y="-14" width="16" height="16" rx="4" style="fill: #64b8dc; stroke: #1e293b; stroke-width: 1.5" />
      <rect x="40" y="-14" width="16" height="16" rx="4" style="fill: #f0f074; stroke: #1e293b; stroke-width: 1.5" />
      <rect x="60" y="-14" width="16" height="16" rx="4" style="fill: #e47cb0; stroke: #1e293b; stroke-width: 1.5" />
      <text x="86" y="0" font-size="15" font-weight="600">Active / cold-starting bursts (~6%)</text>
      <rect x="392" y="-14" width="16" height="16" rx="4" style="fill: var(--s-sleep-fill); stroke: var(--s-sleep); stroke-width: 1.5" />
      <text x="416" y="0" font-size="15" font-weight="600">Idle "Just In Case" — blocking CPU &amp; RAM (~94%)</text>
    </g>
  </g>
  <g id="telemetry-panel">
    <rect x="1228" y="180" width="308" height="612" rx="20" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.8" />
    <text id="gauge-title" x="1252" y="222" font-size="20" font-weight="700">Pod Resources</text>
    <text id="gauge-subtitle" x="1252" y="246" font-size="14" font-weight="500" style="fill: var(--s-muted)">Reserved vs. actually used</text>
    <rect x="1252" y="264" width="14" height="14" rx="3" style="fill: var(--s-res-bar); stroke: var(--s-res-stroke); stroke-width: 1.2" />
    <text x="1272" y="276" font-size="14" font-weight="600" style="fill: var(--s-muted)">Reserved</text>
    <rect x="1368" y="264" width="14" height="14" rx="3" style="fill: var(--s-used-bar); stroke: var(--s-used-stroke); stroke-width: 1.2" />
    <text x="1388" y="276" font-size="14" font-weight="600" style="fill: var(--s-muted)">Used</text>
    <line x1="1252" y1="292" x2="1512" y2="292" style="stroke: var(--s-border); stroke-width: 1.5; stroke-dasharray: 5 5" />
    <text x="1512" y="282" font-size="12" font-weight="700" text-anchor="end" style="fill: var(--s-muted)">CAPACITY</text>
    <g id="waste-overlay" class="fade-group">
      <rect id="waste-box-cpu" x="1318" y="378" width="44" height="178" rx="4" fill="url(#waste-hatch)" stroke="#d93025" stroke-width="1.2" stroke-dasharray="4 3" />
      <rect id="waste-box-mem" x="1448" y="356" width="44" height="18" rx="4" fill="url(#waste-hatch)" stroke="#d93025" stroke-width="1.2" stroke-dasharray="4 3" />
      <text x="1340" y="440" text-anchor="middle" font-size="15" font-weight="800" letter-spacing="2" transform="rotate(-90 1340 440)" style="fill: var(--s-red)">IDLE WASTE</text>
    </g>
    <rect id="bar-cpu-res" class="bar-rect" x="1268" y="568" width="44" height="2" rx="5" style="fill: var(--s-res-bar); stroke: var(--s-res-stroke); stroke-width: 1.5" />
    <rect id="bar-cpu-used" class="bar-rect" x="1318" y="568" width="44" height="2" rx="5" style="fill: var(--s-used-bar); stroke: var(--s-used-stroke); stroke-width: 1.5" />
    <rect id="bar-mem-res" class="bar-rect" x="1398" y="568" width="44" height="2" rx="5" style="fill: var(--s-res-bar); stroke: var(--s-res-stroke); stroke-width: 1.5" />
    <rect id="bar-mem-used" class="bar-rect" x="1448" y="568" width="44" height="2" rx="5" style="fill: var(--s-used-bar); stroke: var(--s-used-stroke); stroke-width: 1.5" />
    <line x1="1252" y1="568" x2="1512" y2="568" style="stroke: var(--s-muted); stroke-width: 2" />
    <text x="1315" y="602" font-size="16" font-weight="700" text-anchor="middle">CPU</text>
    <text x="1445" y="602" font-size="16" font-weight="700" text-anchor="middle">Memory</text>
    <text id="gauge-caption" x="1382" y="654" font-size="15" font-weight="700" text-anchor="middle" style="fill: var(--s-red)">No pod allocated yet</text>
  </g>
  `,
  animate: (ctx) => {
    ctx.el("bottom-callout").classList.add("is-hidden");

    ctx.el("gauge-title").textContent = "Cluster Total";
    ctx.el("gauge-subtitle").textContent = "15 Nodes · 180 Agent Pods";
    ctx.el("gauge-caption").textContent = "95% Reserved · ~6% CPU Used!";

    const clusterGridEl = ctx.el("cluster-nodes-grid");
    const clusterPods = [];
    const nodeW = 212, nodeH = 192, gapX = 18, gapY = 18, startX = 64, startY = 180;
    for (let n = 0; n < 15; n++) {
      const col = n % 5;
      const row = Math.floor(n / 5);
      const nx = startX + col * (nodeW + gapX);
      const ny = startY + row * (nodeH + gapY);

      const g = ctx.svgEl("g");
      g.appendChild(ctx.svgEl("rect", {
        x: nx, y: ny, width: nodeW, height: nodeH, rx: 12,
        style: "fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.5"
      }));
      g.appendChild(ctx.svgEl("text", {
        x: nx + 12, y: ny + 21, "font-size": 13, "font-weight": 700,
        style: "fill: var(--s-muted)"
      }, "K8s Node " + (n + 1)));

      for (let p = 0; p < 12; p++) {
        const pc = p % 4;
        const pr = Math.floor(p / 4);
        const px = nx + 14 + pc * 48;
        const py = ny + 33 + pr * 49;

        const cell = ctx.svgEl("rect", {
          x: px, y: py, width: 40, height: 40, rx: 8, class: "pod-cell",
          style: "fill: var(--s-sleep-fill); stroke: var(--s-sleep); stroke-width: 1.5"
        });
        const dot = ctx.svgEl("circle", {
          cx: px + 20, cy: py + 20, r: 7, class: "pod-cell",
          style: "fill: var(--s-sleep)"
        });
        g.appendChild(cell);
        g.appendChild(dot);
        clusterPods.push({ cell, dot });
      }
      clusterGridEl.appendChild(g);
    }

    const OCTO_COLORS = [
      { fill: "#60d46c", stroke: "#1e293b", dot: "#1e293b" }, // Octopus green
      { fill: "#64b8dc", stroke: "#1e293b", dot: "#1e293b" }, // Octopus blue
      { fill: "#f0f074", stroke: "#1e293b", dot: "#1e293b" }, // Octopus yellow
      { fill: "#e47cb0", stroke: "#1e293b", dot: "#1e293b" }  // Octopus pink
    ];

    const tickCluster = () => {
      clusterPods.forEach((p) => {
        p.cell.style.fill = "var(--s-sleep-fill)";
        p.cell.style.stroke = "var(--s-sleep)";
        p.cell.style.strokeWidth = "1.5";
        p.dot.style.fill = "var(--s-sleep)";
        p.dot.setAttribute("r", "6.5");
      });
      for (let k = 0; k < 11; k++) {
        const pick = clusterPods[Math.floor(Math.random() * clusterPods.length)];
        const c = OCTO_COLORS[k % OCTO_COLORS.length];
        pick.cell.style.fill = c.fill;
        pick.cell.style.stroke = c.stroke;
        pick.cell.style.strokeWidth = "2.4";
        pick.dot.style.fill = c.dot;
        pick.dot.setAttribute("r", "8");
      }
      ctx.setBars(93, 5 + Math.round(Math.random() * 5), 95, 83 + Math.round(Math.random() * 3));
    };
    tickCluster();
    ctx.every(750, tickCluster);
  }
};
