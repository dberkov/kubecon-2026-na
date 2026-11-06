export default {
  chapter: 5,
  short: "29. Snapshots v2",
  speaker: "DIMA",
  kicker: "GOAL: SPEED + DENSITY · LIFECYCLE V2",
  title: "Goal: Speed — Lifecycle v2: Layered Snapshots & Locality",
  accent: "var(--s-blue)",
  headline: "3 Keyed Snapshot Layers (Graceful Fallback)  +  2-Tier Locality Ladder (Local -> Cloud)",
  body1: "Left: Memory & Rootfs act as CPUID/runtime-keyed accelerators over portable Attached Volumes.",
  body2: "Right: Local Snapshot enables ~100ms same-node wake; async upload frees local disk for any-node resume.",
  notes: "Under the hood, Actor Lifecycle makes wakeups fast and resilient in two ways. First, snapshots are split into three layers: Memory State, Rootfs Delta, and Attached Volumes — if CPUID or runtime upgraded, upper layers degrade cleanly as a cache miss. Second, snapshots land locally first for ~100ms resumes, then upload asynchronously to durable cloud storage and release local disk so the actor can resume on any node.",
  svg: `
  <rect x="76" y="160" width="692" height="508" rx="48" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 2.2" />
  <text x="422" y="222" text-anchor="middle" font-size="29" font-weight="700">3 Snapshot Layers</text>
  <text id="s36-layer-mode" x="422" y="254" text-anchor="middle" font-size="16" font-weight="700" style="fill: var(--s-green-dark)">✓ Target node matches CPUID &amp; runtime -&gt; Layer 1 HIT (~100ms)</text>
  <g id="s36-l1" class="fade-group">
    <rect id="s36-l1-box" class="smooth-box" x="132" y="276" width="580" height="110" rx="8" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2.6" />
    <text x="422" y="324" text-anchor="middle" font-size="25" font-weight="700">1. Memory State</text>
    <text id="s36-l1-sub" x="422" y="358" text-anchor="middle" font-size="18" style="fill: var(--s-muted)">Process memory &amp; CPU registers (Key: CPUID + Runtime)</text>
  </g>
  <g id="s36-l2" class="fade-group">
    <rect id="s36-l2-box" class="smooth-box" x="132" y="406" width="580" height="110" rx="8" style="fill: var(--s-blue-box); stroke: var(--s-blue); stroke-width: 2.4" />
    <text x="422" y="454" text-anchor="middle" font-size="25" font-weight="700">2. Rootfs Delta</text>
    <text x="422" y="488" text-anchor="middle" font-size="18" style="fill: var(--s-muted)">Writable container filesystem layer (Key: Base OCI)</text>
  </g>
  <g id="s36-l3" class="fade-group">
    <rect x="132" y="536" width="580" height="110" rx="8" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.4" />
    <text x="422" y="584" text-anchor="middle" font-size="25" font-weight="700">3. Attached Volumes</text>
    <text x="422" y="618" text-anchor="middle" font-size="18" style="fill: var(--s-muted)">External persistent volumes (Always Portable)</text>
  </g>
  <rect x="832" y="160" width="692" height="508" rx="48" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 2.2" />
  <text x="1178" y="222" text-anchor="middle" font-size="29" font-weight="700">Snapshot Locality</text>
  <path id="s36-loc-top" class="smooth-box" d="M 912 296 C 912 268, 1444 268, 1444 296 L 1444 402 C 1444 430, 912 430, 912 402 Z" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2.6" />
  <ellipse cx="1178" cy="296" rx="266" ry="20" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2.6" />
  <text x="1178" y="352" text-anchor="middle" font-size="25" font-weight="700">Local Snapshot (Same Node)</text>
  <text x="1178" y="388" text-anchor="middle" font-size="20" font-weight="600" style="fill: var(--s-green)">Fast Resume (~100ms)</text>
  <line x1="1178" y1="424" x2="1178" y2="520" stroke="#1e293b" stroke-width="3.6" marker-end="url(#arr-dark)" />
  <rect x="944" y="440" width="468" height="56" rx="14" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.2" />
  <text x="1178" y="476" text-anchor="middle" font-size="20" font-weight="700">Async upload &amp; release local</text>
  <path id="s36-loc-bot" class="smooth-box" d="M 912 544 C 912 516, 1444 516, 1444 544 L 1444 634 C 1444 662, 912 662, 912 634 Z" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.6" />
  <ellipse cx="1178" cy="544" rx="266" ry="20" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.6" />
  <text x="1178" y="594" text-anchor="middle" font-size="25" font-weight="700">Durable Storage (Cloud)</text>
  <text x="1178" y="628" text-anchor="middle" font-size="20" font-weight="600" style="fill: var(--s-purple)">Resume on Any Node</text>
  <g id="s36-pkt" class="mover" style="opacity: 0; transform: translate(1178px, 360px)">
    <rect x="-92" y="-18" width="184" height="36" rx="18" style="fill: var(--s-purple); stroke: #ffffff; stroke-width: 2" />
    <text x="0" y="5" text-anchor="middle" font-size="13.5" font-weight="700" class="mono" style="fill: #ffffff">Upload -&gt; GCS / S3</text>
  </g>
  `,
  animate: (ctx) => {
    let upgradePhase = false;
    const l1Box = ctx.el("s36-l1-box");
    const l1Sub = ctx.el("s36-l1-sub");
    const modeTxt = ctx.el("s36-layer-mode");
    const pkt = ctx.el("s36-pkt");

    const runS36 = () => {
      if (!upgradePhase) {
        modeTxt.style.fill = "var(--s-green-dark)";
        modeTxt.textContent = "✓ Target node matches CPUID & runtime -> Layer 1 Memory HIT (~100ms)";
        l1Box.style.opacity = "1";
        l1Sub.textContent = "Process memory & CPU registers (HIT -> Instant Wake)";
      } else {
        modeTxt.style.fill = "var(--s-amber-dark)";
        modeTxt.textContent = "↷ Node upgraded -> Layer 1 clean cache miss, Rootfs + Volumes intact!";
        l1Box.style.opacity = "0.38";
        l1Sub.textContent = "Key mismatch -> Gracefully skipped (0 bricked actors)";
      }

      pkt.style.transition = "none";
      pkt.style.opacity = "1";
      pkt.style.transform = "translate(1178px, 376px)";
      pkt.getBoundingClientRect();
      pkt.style.transition = "transform 1.1s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease";
      pkt.style.transform = "translate(1178px, 585px)";

      ctx.later(1450, () => { pkt.style.opacity = "0"; });
      upgradePhase = !upgradePhase;
    };
    runS36();
    ctx.every(2900, runS36);
  }
};
