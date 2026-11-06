export default {
  chapter: 5,
  short: "27. Cluster Multiplex",
  speaker: "DIMA",
  kicker: "GOAL: DENSITY · CLUSTER VIEW",
  title: "Goal: Density — Multiplexing Actors Across the Cluster",
  accent: "var(--s-purple)",
  headline: "Billions of Suspended Actors (0 CPU / 0 RAM) dynamically time-slice compact Warm Workers",
  body1: "Off-CPU (Left): Millions or billions of stateful sessions sit in storage at zero compute cost.",
  body2: "On-CPU (Right): Active Actors Resume into free Worker slots and Suspend back out when idle.",
  notes: "Stepping back to the cluster view: this lets you register millions or billions of stateful actors off-CPU in Postgres and durable storage at zero compute cost, while running a much smaller pool of warm Worker Pods across your Kubernetes nodes. As actors wake up and go idle, they dynamically hydrate onto warm workers and swap back out to storage.",
  svg: `
  <rect x="68" y="162" width="596" height="506" rx="54" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.6" />
  <text x="366" y="224" text-anchor="middle" font-size="29" font-weight="700" style="fill: var(--s-purple)">Suspended Actors (Off-CPU)</text>
  <text x="366" y="258" text-anchor="middle" font-size="18.5" style="fill: var(--s-muted)">0 CPU / 0 RAM  •  Billions in Storage</text>
  <g id="s34-offcpu-grid" />
  <rect x="696" y="302" width="188" height="62" rx="14" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.2" />
  <text x="790" y="341" text-anchor="middle" font-size="22" font-weight="700">Resume</text>
  <line id="s34-arr-resume" x1="690" y1="388" x2="886" y2="388" stroke="#1e8e3e" stroke-width="4.5" marker-end="url(#arr-green)" />
  <line id="s34-arr-suspend" x1="886" y1="496" x2="690" y2="496" stroke="#9334e6" stroke-width="4.5" marker-end="url(#arr-purple)" />
  <rect x="696" y="518" width="188" height="62" rx="14" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.2" />
  <text x="790" y="557" text-anchor="middle" font-size="22" font-weight="700">Suspend</text>
  <rect x="912" y="162" width="620" height="506" rx="54" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.6" />
  <text x="1222" y="224" text-anchor="middle" font-size="29" font-weight="700" style="fill: var(--s-blue)">Warm Workers (On-CPU)</text>
  <text x="1222" y="258" text-anchor="middle" font-size="18.5" style="fill: var(--s-muted)">Each Worker runs multiple Actors</text>
  <rect x="952" y="286" width="540" height="172" rx="8" style="fill: var(--s-blue-box); stroke: var(--s-blue); stroke-width: 2.2" />
  <text x="1222" y="324" text-anchor="middle" font-size="22" font-weight="700">Worker 1</text>
  <rect x="974" y="344" width="154" height="96" rx="6" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
  <text x="1051" y="400" text-anchor="middle" font-size="21" font-weight="700">Actor 7</text>
  <rect x="1145" y="344" width="154" height="96" rx="6" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
  <text x="1222" y="400" text-anchor="middle" font-size="21" font-weight="700">Actor 12</text>
  <rect x="1316" y="344" width="154" height="96" rx="6" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
  <text x="1393" y="400" text-anchor="middle" font-size="21" font-weight="700">Actor 35</text>
  <rect x="952" y="476" width="540" height="172" rx="8" style="fill: var(--s-blue-box); stroke: var(--s-blue); stroke-width: 2.2" />
  <text x="1222" y="514" text-anchor="middle" font-size="22" font-weight="700">Worker 2</text>
  <rect id="s34-w2-slot1" class="smooth-box" x="974" y="534" width="154" height="96" rx="6" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
  <text id="s34-w2-txt1" x="1051" y="590" text-anchor="middle" font-size="21" font-weight="700">Actor 42</text>
  <rect x="1145" y="534" width="154" height="96" rx="6" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
  <text x="1222" y="590" text-anchor="middle" font-size="21" font-weight="700">Actor 89</text>
  <rect id="s34-w2-slot3" class="smooth-box" x="1316" y="534" width="154" height="96" rx="6" style="fill: var(--s-slot-fill); stroke: var(--s-muted); stroke-width: 2.2; stroke-dasharray: 8 5" />
  <text id="s34-w2-txt3" x="1393" y="590" text-anchor="middle" font-size="21" font-weight="700" style="fill: var(--s-muted)">Free slot</text>
  <g id="s34-pkt" class="mover" style="opacity: 0; transform: translate(500px, 388px)">
    <rect id="s34-pkt-bg" x="-72" y="-20" width="144" height="40" rx="20" style="fill: var(--s-green); stroke: #ffffff; stroke-width: 2" />
    <text id="s34-pkt-txt" x="0" y="6" text-anchor="middle" font-size="15" font-weight="700" style="fill: #ffffff">Actor 3 →</text>
  </g>
  `,
  animate: (ctx) => {
    const offCpuGrid = ctx.el("s34-offcpu-grid");
    const offCpuCyls = [];
    const offLabels = ["Actor 1", "Actor 2", "Actor 3", "Actor 4", "Actor 5", "Actor N..."];
    for (let i = 0; i < 6; i++) {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const cx = 228 + col * 276;
      const cy = 328 + row * 116;
      const w = 236, h = 76;
      const x0 = cx - w / 2, x1 = cx + w / 2;
      const y0 = cy - h / 2 + 8, y1 = cy + h / 2;

      const g = ctx.svgEl("g");
      const body = ctx.svgEl("path", {
        d: `M ${x0} ${y0} L ${x0} ${y1} C ${x0} ${y1 + 14}, ${x1} ${y1 + 14}, ${x1} ${y1} L ${x1} ${y0} Z`,
        class: "smooth-box",
        style: "fill: var(--s-card); stroke: var(--s-purple); stroke-width: 2.2"
      });
      const cap = ctx.svgEl("ellipse", {
        cx, cy: y0, rx: w / 2, ry: 10,
        class: "smooth-box",
        style: "fill: var(--s-card); stroke: var(--s-purple); stroke-width: 2.2"
      });
      const txt = ctx.svgEl("text", {
        x: cx, y: cy + 16, "text-anchor": "middle", "font-size": 22, "font-weight": 700
      }, offLabels[i]);

      g.appendChild(body);
      g.appendChild(cap);
      g.appendChild(txt);
      offCpuGrid.appendChild(g);
      offCpuCyls.push({ body, cap, txt });
    }

    const w2s1 = ctx.el("s34-w2-slot1");
    const w2t1 = ctx.el("s34-w2-txt1");
    const w2s3 = ctx.el("s34-w2-slot3");
    const w2t3 = ctx.el("s34-w2-txt3");

    const resetCyls = (hiIdx) => {
      offCpuCyls.forEach((c, i) => {
        const hi = i === hiIdx;
        c.body.style.fill = hi ? "var(--s-green-fill)" : "var(--s-card)";
        c.cap.style.fill = hi ? "var(--s-green-fill)" : "var(--s-card)";
        c.body.style.stroke = hi ? "var(--s-green)" : "var(--s-purple)";
        c.cap.style.stroke = hi ? "var(--s-green)" : "var(--s-purple)";
      });
    };

    const runS34 = () => {
      resetCyls(-1);
      w2s1.style.fill = "var(--s-purple-fill)";
      w2s1.style.stroke = "var(--s-purple)";
      w2s1.style.strokeDasharray = "none";
      w2t1.textContent = "Actor 42";
      w2t1.style.fill = "var(--s-text)";

      w2s3.style.fill = "var(--s-slot-fill)";
      w2s3.style.stroke = "var(--s-muted)";
      w2s3.style.strokeDasharray = "8 5";
      w2t3.textContent = "Free slot";
      w2t3.style.fill = "var(--s-muted)";
      ctx.el("s34-pkt").style.opacity = "0";

      ctx.later(550, () => {
        resetCyls(2);
        ctx.movePkt("s34-pkt", "s34-pkt-bg", "s34-pkt-txt", "Resume Actor 3", "var(--s-green)", "#ffffff", 560, 388, 1340, 582, 168);
      });

      ctx.later(1300, () => {
        resetCyls(-1);
        w2s3.style.fill = "var(--s-purple-fill)";
        w2s3.style.stroke = "var(--s-purple)";
        w2s3.style.strokeDasharray = "none";
        w2t3.textContent = "Actor 3";
        w2t3.style.fill = "var(--s-text)";
        ctx.el("s34-pkt").style.opacity = "0";
      });

      ctx.later(2250, () => {
        w2s1.style.fill = "var(--s-slot-fill)";
        w2s1.style.stroke = "var(--s-muted)";
        w2s1.style.strokeDasharray = "8 5";
        w2t1.textContent = "Free slot";
        w2t1.style.fill = "var(--s-muted)";
        ctx.movePkt("s34-pkt", "s34-pkt-bg", "s34-pkt-txt", "<- Suspend #42", "var(--s-purple)", "#ffffff", 1020, 534, 560, 496, 168);
      });

      ctx.later(3050, () => {
        ctx.el("s34-pkt").style.opacity = "0";
      });
    };
    runS34();
    ctx.every(4000, runS34);
  }
};
