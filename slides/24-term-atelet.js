export default {
  chapter: 4,
  short: "24. Term: Atelet",
  speaker: "DIMA",
  kicker: "TERMINOLOGY · 4 OF 5",
  title: "Atelet: one manager per node",
  accent: "var(--s-green)",
  headline: "Atelet manages every worker on its node",
  body1: "The control plane can't talk to workers directly, so it goes through atelet.",
  body2: "Atelet also pulls OCI images and moves snapshots, since workers don't have permission to.",
  notes: "Fourth, Atelet:\nIt's a per-node manager (daemon) for all the workers on that node\nWe need this because the control plane can't talk directly to workers\nWhen an actor resumes, atelet pulls the OCI image and downloads the snapshot\nWhen an actor suspends, it takes the actor's snapshot and uploads it to object storage\nWorkers can't do this themselves, because they don't have permission",
  svg: `
  <!-- Terminology progress -->
  <rect x="64" y="176" width="272" height="46" rx="23" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.4" />
  <text x="200" y="206" text-anchor="middle" font-size="18" font-weight="700" style="fill: var(--s-muted)">✓ Actor</text>
  <rect x="364" y="176" width="272" height="46" rx="23" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.4" />
  <text x="500" y="206" text-anchor="middle" font-size="18" font-weight="700" style="fill: var(--s-muted)">✓ ActorTemplate</text>
  <rect x="664" y="176" width="272" height="46" rx="23" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.4" />
  <text x="800" y="206" text-anchor="middle" font-size="18" font-weight="700" style="fill: var(--s-muted)">✓ Worker</text>
  <rect x="964" y="176" width="272" height="46" rx="23" style="fill: var(--s-green)" />
  <text x="1100" y="206" text-anchor="middle" font-size="19" font-weight="800" style="fill: var(--s-card)">Atelet</text>
  <rect x="1264" y="176" width="272" height="46" rx="23" style="fill: none; stroke: var(--s-border); stroke-width: 1.4; stroke-dasharray: 6 5" />
  <text x="1400" y="206" text-anchor="middle" font-size="18" font-weight="700" style="fill: var(--s-muted); opacity: 0.55">Atenet</text>

  <!-- Control plane -->
  <rect x="64" y="292" width="280" height="126" rx="18" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 2" />
  <text x="204" y="334" text-anchor="middle" font-size="16" font-weight="700" style="fill: var(--s-muted)">control plane</text>
  <text x="204" y="380" text-anchor="middle" font-size="30" font-weight="800" class="mono">ateapi</text>

  <!-- No direct path from control plane to workers -->
  <path d="M 204 418 V 610 H 456" fill="none" style="stroke: var(--s-red); stroke-width: 2.6; stroke-dasharray: 8 6; opacity: 0.8" />
  <g transform="translate(330 610)">
    <line x1="-14" y1="-14" x2="14" y2="14" style="stroke: var(--s-red); stroke-width: 5" stroke-linecap="round" />
    <line x1="14" y1="-14" x2="-14" y2="14" style="stroke: var(--s-red); stroke-width: 5" stroke-linecap="round" />
  </g>
  <text x="330" y="656" text-anchor="middle" font-size="16" font-weight="700" style="fill: var(--s-red)">no direct access</text>

  <!-- Node -->
  <rect x="420" y="250" width="760" height="554" rx="22" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 2" />
  <text x="1150" y="290" text-anchor="end" font-size="20" font-weight="800" style="fill: var(--s-muted)">Node</text>

  <line x1="344" y1="355" x2="446" y2="355" style="stroke: var(--s-text); stroke-width: 3" />
  <polygon points="444,345 460,355 444,365" style="fill: var(--s-text)" />

  <rect id="atelet" class="smooth-box" x="460" y="310" width="680" height="90" rx="16" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 3" />
  <text x="800" y="366" text-anchor="middle" font-size="32" font-weight="800" class="mono" style="fill: var(--s-green-dark)">atelet</text>

  <line x1="625" y1="400" x2="625" y2="436" style="stroke: var(--s-green); stroke-width: 3" />
  <polygon points="615,434 625,450 635,434" style="fill: var(--s-green)" />
  <line x1="975" y1="400" x2="975" y2="436" style="stroke: var(--s-green); stroke-width: 3" />
  <polygon points="965,434 975,450 985,434" style="fill: var(--s-green)" />

  <!-- Workers -->
  <rect x="460" y="450" width="330" height="320" rx="16" style="fill: var(--s-blue-box); stroke: var(--s-blue); stroke-width: 2.2" />
  <text x="484" y="490" font-size="20" font-weight="800">worker</text>
  <rect x="484" y="514" width="130" height="110" rx="12" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
  <circle cx="549" cy="556" r="15" style="fill: var(--s-purple)" />
  <rect x="527" y="577" width="44" height="22" rx="11" style="fill: var(--s-purple)" />
  <rect x="636" y="514" width="130" height="110" rx="12" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
  <circle cx="701" cy="556" r="15" style="fill: var(--s-purple)" />
  <rect x="679" y="577" width="44" height="22" rx="11" style="fill: var(--s-purple)" />
  <rect x="484" y="640" width="130" height="110" rx="12" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
  <circle cx="549" cy="682" r="15" style="fill: var(--s-purple)" />
  <rect x="527" y="703" width="44" height="22" rx="11" style="fill: var(--s-purple)" />
  <rect x="636" y="640" width="130" height="110" rx="12" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.6; stroke-dasharray: 7 5; opacity: 0.6" />
  <g id="tgt" class="fade-group" style="opacity: 0">
    <rect id="tgt-r" class="smooth-box" x="636" y="640" width="130" height="110" rx="12" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.4" />
    <circle cx="701" cy="682" r="15" style="fill: var(--s-purple)" />
    <rect x="679" y="703" width="44" height="22" rx="11" style="fill: var(--s-purple)" />
  </g>

  <rect x="810" y="450" width="330" height="320" rx="16" style="fill: var(--s-blue-box); stroke: var(--s-blue); stroke-width: 2.2" />
  <text x="834" y="490" font-size="20" font-weight="800">worker</text>
  <rect x="834" y="514" width="130" height="110" rx="12" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
  <circle cx="899" cy="556" r="15" style="fill: var(--s-purple)" />
  <rect x="877" y="577" width="44" height="22" rx="11" style="fill: var(--s-purple)" />
  <rect x="986" y="514" width="130" height="110" rx="12" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.6; stroke-dasharray: 7 5; opacity: 0.6" />
  <rect x="834" y="640" width="130" height="110" rx="12" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
  <circle cx="899" cy="682" r="15" style="fill: var(--s-purple)" />
  <rect x="877" y="703" width="44" height="22" rx="11" style="fill: var(--s-purple)" />
  <rect x="986" y="640" width="130" height="110" rx="12" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.6; stroke-dasharray: 7 5; opacity: 0.6" />

  <!-- Storage atelet talks to (workers can't) -->
  <line x1="1140" y1="335" x2="1250" y2="335" style="stroke: var(--s-amber); stroke-width: 2.6; stroke-dasharray: 7 5" />
  <path d="M 1140 375 H 1200 V 508 H 1250" fill="none" style="stroke: var(--s-amber); stroke-width: 2.6; stroke-dasharray: 7 5" />
  <path d="M 1250 300 V 364 A 125 16 0 0 0 1500 364 V 300" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.4" />
  <ellipse cx="1375" cy="300" rx="125" ry="16" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.4" />
  <text x="1375" y="350" text-anchor="middle" font-size="20" font-weight="800" style="fill: var(--s-amber-dark)">OCI images</text>
  <path d="M 1250 476 V 540 A 125 16 0 0 0 1500 540 V 476" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.4" />
  <ellipse cx="1375" cy="476" rx="125" ry="16" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.4" />
  <text x="1375" y="526" text-anchor="middle" font-size="20" font-weight="800" style="fill: var(--s-amber-dark)">object storage</text>

  <!-- Lifecycle phase indicator -->
  <g id="ph-0" class="fade-group" style="opacity: 0.4">
    <rect id="ph-r-0" class="smooth-box" x="1250" y="630" width="250" height="44" rx="22" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.6" />
    <text x="1276" y="659" font-size="18" font-weight="800">1  resume</text>
  </g>
  <g id="ph-1" class="fade-group" style="opacity: 0.4">
    <rect id="ph-r-1" class="smooth-box" x="1250" y="690" width="250" height="44" rx="22" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.6" />
    <text x="1276" y="719" font-size="18" font-weight="800">2  running</text>
  </g>
  <g id="ph-2" class="fade-group" style="opacity: 0.4">
    <rect id="ph-r-2" class="smooth-box" x="1250" y="750" width="250" height="44" rx="22" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.6" />
    <text x="1276" y="779" font-size="18" font-weight="800">3  suspend</text>
  </g>

  <g id="pkt" class="mover" style="opacity: 0; transform: translate(0px, 0px)">
    <rect id="pkt-bg" x="-80" y="-19" width="160" height="38" rx="19" style="fill: var(--s-amber); stroke: #ffffff; stroke-width: 2" />
    <text id="pkt-txt" x="0" y="5" text-anchor="middle" font-size="14.5" font-weight="700" class="mono" style="fill: #1e293b">start</text>
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
    const atelet = ctx.el("atelet");
    const flash = () => {
      atelet.style.strokeWidth = "5";
      ctx.later(380, () => { atelet.style.strokeWidth = "3"; });
    };
    const send = (label, fill, txt, x1, y1, x2, y2) =>
      ctx.movePkt("pkt", "pkt-bg", "pkt-txt", label, fill, txt, x1, y1, x2, y2, 160);

    const PHASE_ACCENT = ["var(--s-blue)", "var(--s-purple)", "var(--s-red)"];
    const PHASE_FILL = ["var(--s-blue-fill)", "var(--s-purple-fill)", "var(--s-red-fill)"];
    const phase = (active) => {
      for (let k = 0; k < 3; k++) {
        const r = ctx.el(`ph-r-${k}`);
        const on = k === active;
        ctx.el(`ph-${k}`).style.opacity = on ? "1" : "0.4";
        r.style.stroke = on ? PHASE_ACCENT[k] : "var(--s-border)";
        r.style.fill = on ? PHASE_FILL[k] : "var(--s-surface-2)";
        r.style.strokeWidth = on ? "2.6" : "1.6";
      }
    };
    const hidePkt = () => { ctx.el("pkt").style.opacity = "0"; };

    const cycle = () => {
      const tgt = ctx.el("tgt");
      const tgtR = ctx.el("tgt-r");
      tgt.style.opacity = "0";
      tgtR.style.strokeDasharray = "none";
      tgtR.style.fill = "var(--s-purple-fill)";
      tgtR.style.strokeWidth = "2.4";
      phase(-1);

      // 1. Resume: atelet downloads the OCI image and the snapshot, then restores the actor
      ctx.later(300, () => { phase(0); send("resume", "var(--s-blue)", "#ffffff", 210, 355, 640, 355); });
      ctx.later(1000, flash);
      ctx.later(1300, () => send("OCI image", "var(--s-amber)", "#1e293b", 1330, 335, 980, 355));
      ctx.later(2000, flash);
      ctx.later(2300, () => send("snapshot", "var(--s-amber)", "#1e293b", 1330, 508, 1000, 375));
      ctx.later(3000, flash);
      ctx.later(3300, () => send("restore", "var(--s-green)", "#ffffff", 700, 400, 701, 680));

      // 2. Running: the actor is live on the worker
      ctx.later(4000, () => { hidePkt(); phase(1); pop(tgt, "scale(0.6)"); });
      [4500, 5100, 5700].forEach((t) => {
        ctx.later(t, () => { tgtR.style.strokeWidth = "4.5"; });
        ctx.later(t + 300, () => { tgtR.style.strokeWidth = "2.4"; });
      });

      // 3. Suspend: atelet uploads the snapshot to object storage and frees the slot
      ctx.later(6300, () => { phase(2); send("suspend", "var(--s-red)", "#ffffff", 210, 355, 640, 355); });
      ctx.later(7000, () => {
        flash();
        tgtR.style.strokeDasharray = "7 5";
        tgtR.style.fill = "var(--s-slot-fill)";
        send("snapshot", "var(--s-amber)", "#1e293b", 701, 690, 1000, 375);
      });
      ctx.later(7700, () => { flash(); send("snapshot", "var(--s-amber)", "#1e293b", 1000, 375, 1330, 508); });
      ctx.later(8500, () => { hidePkt(); tgt.style.opacity = "0"; });
    };
    cycle();
    ctx.every(9800, cycle);
  }
};
