export default {
  chapter: 4,
  short: "23. Term: Worker",
  speaker: "DIMA",
  kicker: "TERMINOLOGY · 3 OF 5",
  title: "Worker: a Pod that runs actors",
  accent: "var(--s-blue)",
  headline: "A Worker is the Pod that actually uses Kubernetes resources",
  body1: "It waits to be told when to start or stop an actor.",
  body2: "One worker runs many actors, and a cluster has many workers.",
  notes: "Third, Worker:\nA worker is a Pod running in Kubernetes, which runs actors\nThis is the thing that actually consumes resources from Kubernetes\nIt sits around waiting to be told when to start or stop running an actor\nA given worker can run many actors\nA cluster can have many workers",
  svg: `
  <!-- Terminology progress -->
  <rect x="64" y="176" width="272" height="46" rx="23" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.4" />
  <text x="200" y="206" text-anchor="middle" font-size="18" font-weight="700" style="fill: var(--s-muted)">✓ Actor</text>
  <rect x="364" y="176" width="272" height="46" rx="23" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.4" />
  <text x="500" y="206" text-anchor="middle" font-size="18" font-weight="700" style="fill: var(--s-muted)">✓ ActorTemplate</text>
  <rect x="664" y="176" width="272" height="46" rx="23" style="fill: var(--s-blue)" />
  <text x="800" y="206" text-anchor="middle" font-size="19" font-weight="800" style="fill: var(--s-card)">Worker</text>
  <rect x="964" y="176" width="272" height="46" rx="23" style="fill: none; stroke: var(--s-border); stroke-width: 1.4; stroke-dasharray: 6 5" />
  <text x="1100" y="206" text-anchor="middle" font-size="18" font-weight="700" style="fill: var(--s-muted); opacity: 0.55">Atelet</text>
  <rect x="1264" y="176" width="272" height="46" rx="23" style="fill: none; stroke: var(--s-border); stroke-width: 1.4; stroke-dasharray: 6 5" />
  <text x="1400" y="206" text-anchor="middle" font-size="18" font-weight="700" style="fill: var(--s-muted); opacity: 0.55">Atenet</text>

  <rect x="64" y="250" width="1472" height="554" rx="22" style="fill: var(--s-surface); stroke: var(--s-blue); stroke-width: 1.6; stroke-dasharray: 9 7" />
  <text x="96" y="290" font-size="20" font-weight="800" style="fill: var(--s-blue-dark)">Kubernetes cluster</text>

  <g id="w-0" class="fade-group" style="opacity: 0">
    <rect x="104" y="316" width="440" height="460" rx="18" style="fill: var(--s-blue-box); stroke: var(--s-blue); stroke-width: 2.4" />
    <text x="132" y="362" font-size="23" font-weight="800">worker pod</text>
    <text x="516" y="361" text-anchor="end" font-size="15" class="mono" style="fill: var(--s-muted)">4 CPU · 16 GiB</text>
    <rect x="134" y="388" width="180" height="160" rx="14" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.6; stroke-dasharray: 7 5; opacity: 0.55" />
    <g id="a-0-0" class="fade-group" style="opacity: 0">
      <rect x="134" y="388" width="180" height="160" rx="14" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.2" />
      <circle cx="224" cy="450" r="20" style="fill: var(--s-purple)" />
      <rect x="194" y="478" width="60" height="30" rx="15" style="fill: var(--s-purple)" />
    </g>
    <rect x="334" y="388" width="180" height="160" rx="14" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.6; stroke-dasharray: 7 5; opacity: 0.55" />
    <g id="a-0-1" class="fade-group" style="opacity: 0">
      <rect x="334" y="388" width="180" height="160" rx="14" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.2" />
      <circle cx="424" cy="450" r="20" style="fill: var(--s-purple)" />
      <rect x="394" y="478" width="60" height="30" rx="15" style="fill: var(--s-purple)" />
    </g>
    <rect x="134" y="572" width="180" height="160" rx="14" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.6; stroke-dasharray: 7 5; opacity: 0.55" />
    <g id="a-0-2" class="fade-group" style="opacity: 0">
      <rect x="134" y="572" width="180" height="160" rx="14" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.2" />
      <circle cx="224" cy="634" r="20" style="fill: var(--s-purple)" />
      <rect x="194" y="662" width="60" height="30" rx="15" style="fill: var(--s-purple)" />
    </g>
    <rect x="334" y="572" width="180" height="160" rx="14" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.6; stroke-dasharray: 7 5; opacity: 0.55" />
    <g id="a-0-3" class="fade-group" style="opacity: 0">
      <rect x="334" y="572" width="180" height="160" rx="14" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.2" />
      <circle cx="424" cy="634" r="20" style="fill: var(--s-purple)" />
      <rect x="394" y="662" width="60" height="30" rx="15" style="fill: var(--s-purple)" />
    </g>
  </g>
  <g id="w-1" class="fade-group" style="opacity: 0">
    <rect x="580" y="316" width="440" height="460" rx="18" style="fill: var(--s-blue-box); stroke: var(--s-blue); stroke-width: 2.4" />
    <text x="608" y="362" font-size="23" font-weight="800">worker pod</text>
    <text x="992" y="361" text-anchor="end" font-size="15" class="mono" style="fill: var(--s-muted)">4 CPU · 16 GiB</text>
    <rect x="610" y="388" width="180" height="160" rx="14" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.6; stroke-dasharray: 7 5; opacity: 0.55" />
    <g id="a-1-0" class="fade-group" style="opacity: 0">
      <rect x="610" y="388" width="180" height="160" rx="14" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.2" />
      <circle cx="700" cy="450" r="20" style="fill: var(--s-purple)" />
      <rect x="670" y="478" width="60" height="30" rx="15" style="fill: var(--s-purple)" />
    </g>
    <rect x="810" y="388" width="180" height="160" rx="14" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.6; stroke-dasharray: 7 5; opacity: 0.55" />
    <g id="a-1-1" class="fade-group" style="opacity: 0">
      <rect x="810" y="388" width="180" height="160" rx="14" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.2" />
      <circle cx="900" cy="450" r="20" style="fill: var(--s-purple)" />
      <rect x="870" y="478" width="60" height="30" rx="15" style="fill: var(--s-purple)" />
    </g>
    <rect x="610" y="572" width="180" height="160" rx="14" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.6; stroke-dasharray: 7 5; opacity: 0.55" />
    <g id="a-1-2" class="fade-group" style="opacity: 0">
      <rect x="610" y="572" width="180" height="160" rx="14" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.2" />
      <circle cx="700" cy="634" r="20" style="fill: var(--s-purple)" />
      <rect x="670" y="662" width="60" height="30" rx="15" style="fill: var(--s-purple)" />
    </g>
    <rect x="810" y="572" width="180" height="160" rx="14" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.6; stroke-dasharray: 7 5; opacity: 0.55" />
    <g id="a-1-3" class="fade-group" style="opacity: 0">
      <rect x="810" y="572" width="180" height="160" rx="14" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.2" />
      <circle cx="900" cy="634" r="20" style="fill: var(--s-purple)" />
      <rect x="870" y="662" width="60" height="30" rx="15" style="fill: var(--s-purple)" />
    </g>
  </g>
  <g id="w-2" class="fade-group" style="opacity: 0">
    <rect x="1056" y="316" width="440" height="460" rx="18" style="fill: var(--s-blue-box); stroke: var(--s-blue); stroke-width: 2.4" />
    <text x="1084" y="362" font-size="23" font-weight="800">worker pod</text>
    <text x="1468" y="361" text-anchor="end" font-size="15" class="mono" style="fill: var(--s-muted)">4 CPU · 16 GiB</text>
    <rect x="1086" y="388" width="180" height="160" rx="14" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.6; stroke-dasharray: 7 5; opacity: 0.55" />
    <g id="a-2-0" class="fade-group" style="opacity: 0">
      <rect x="1086" y="388" width="180" height="160" rx="14" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.2" />
      <circle cx="1176" cy="450" r="20" style="fill: var(--s-purple)" />
      <rect x="1146" y="478" width="60" height="30" rx="15" style="fill: var(--s-purple)" />
    </g>
    <rect x="1286" y="388" width="180" height="160" rx="14" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.6; stroke-dasharray: 7 5; opacity: 0.55" />
    <g id="a-2-1" class="fade-group" style="opacity: 0">
      <rect x="1286" y="388" width="180" height="160" rx="14" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.2" />
      <circle cx="1376" cy="450" r="20" style="fill: var(--s-purple)" />
      <rect x="1346" y="478" width="60" height="30" rx="15" style="fill: var(--s-purple)" />
    </g>
    <rect x="1086" y="572" width="180" height="160" rx="14" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.6; stroke-dasharray: 7 5; opacity: 0.55" />
    <g id="a-2-2" class="fade-group" style="opacity: 0">
      <rect x="1086" y="572" width="180" height="160" rx="14" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.2" />
      <circle cx="1176" cy="634" r="20" style="fill: var(--s-purple)" />
      <rect x="1146" y="662" width="60" height="30" rx="15" style="fill: var(--s-purple)" />
    </g>
    <rect x="1286" y="572" width="180" height="160" rx="14" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.6; stroke-dasharray: 7 5; opacity: 0.55" />
    <g id="a-2-3" class="fade-group" style="opacity: 0">
      <rect x="1286" y="572" width="180" height="160" rx="14" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.2" />
      <circle cx="1376" cy="634" r="20" style="fill: var(--s-purple)" />
      <rect x="1346" y="662" width="60" height="30" rx="15" style="fill: var(--s-purple)" />
    </g>
  </g>
  `,
  animate: (ctx) => {
    ctx.el("bottom-callout").classList.add("is-hidden");

    const pop = (node, from) => {
      node.style.transformBox = "fill-box";
      node.style.transformOrigin = "center";
      node.style.transition = "none";
      node.style.opacity = "0";
      node.style.transform = from;
      node.getBoundingClientRect();
      node.style.transition = "";
      node.style.opacity = "1";
      node.style.transform = "none";
    };

    // Workers come up first, empty and waiting
    for (let w = 0; w < 3; w++) {
      ctx.later(150 + w * 220, () => pop(ctx.el(`w-${w}`), "translateY(16px)"));
    }

    // Then they get told to start actors
    const filled = new Set();
    const start = (key) => { filled.add(key); pop(ctx.el(`a-${key}`), "scale(0.6)"); };
    const stop = (key) => { filled.delete(key); ctx.el(`a-${key}`).style.opacity = "0"; };
    ["0-0", "1-0", "1-1", "2-0", "0-3", "2-2", "1-3"].forEach((key, i) => {
      ctx.later(1100 + i * 180, () => start(key));
    });

    // Ongoing: actors start and stop as sessions come and go
    const ALL = [];
    for (let w = 0; w < 3; w++) for (let s = 0; s < 4; s++) ALL.push(`${w}-${s}`);
    ctx.later(2800, () => {
      ctx.every(900, () => {
        const key = ALL[Math.floor(Math.random() * ALL.length)];
        if (filled.has(key) && filled.size > 4) stop(key);
        else if (!filled.has(key)) start(key);
      });
    });
  }
};
