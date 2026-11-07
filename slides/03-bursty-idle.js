export default {
  chapter: 0,
  short: "3. Bursty & Idle",
  speaker: "DIMA",
  kicker: "AGENT WORKLOAD PROPERTIES · 1 OF 3",
  title: "What makes Agent workloads different?",
  accent: "var(--s-green)",
  headline: "1. Bursty & Idle: seconds of work, hours or days of sleep",
  body1: "Session state keeps the Pod reserved while idle.",
  body2: "Less than 2% CPU duty cycle across session lifetime.",
  notes: "Thanks, Tim. First, agentic apps tend to be very bursty.\nThey wake up, run for a bit, and then go idle.\nThey can be idle for minutes or hours or even days at a time.",
  svg: `
  <defs>
    <clipPath id="c1-wave-clip">
      <rect id="c1-clip-rect" x="114" y="404" width="370" height="214" />
    </clipPath>
  </defs>

  <!-- Card 1: Active & Animated -->
  <g id="tri-card-1" class="fade-group">
    <rect id="tri-border-1" x="64" y="176" width="468" height="628" rx="22" style="fill: var(--s-card); stroke: var(--s-green); stroke-width: 3" />
    <rect x="64" y="176" width="468" height="106" rx="22" style="fill: var(--s-green-fill)" />
    <rect x="64" y="260" width="468" height="22" style="fill: var(--s-green-fill)" />
    <circle cx="112" cy="229" r="22" style="fill: var(--s-green)" />
    <text x="112" y="236" text-anchor="middle" font-size="18" font-weight="800" style="fill: #ffffff">01</text>
    <text x="148" y="223" font-size="29" font-weight="800" style="fill: var(--s-green-dark)">Bursty &amp; Idle</text>
    <text x="148" y="253" font-size="16" style="fill: var(--s-muted)">Seconds active · Hours idle</text>

    <!-- Visual Stage -->
    <rect x="92" y="306" width="412" height="390" rx="16" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.4" />

    <!-- Live Agent State Pill -->
    <rect id="c1-state-bg" x="210" y="328" width="176" height="40" rx="20" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 1.8" />
    <circle id="c1-state-ring" cx="240" cy="348" r="12" style="fill: var(--s-green); opacity: 0" />
    <circle id="c1-state-dot" cx="240" cy="348" r="6.5" style="fill: var(--s-green)" />
    <text id="c1-state-txt" x="310" y="354" text-anchor="middle" font-size="15" font-weight="800" class="mono" style="fill: var(--s-green-dark)">ACTIVE</text>

    <!-- Reserved Ceiling -->
    <text x="480" y="402" text-anchor="end" font-size="13.5" font-weight="700" style="fill: var(--s-red)">Pod Reserved</text>
    <line x1="118" y1="414" x2="480" y2="414" style="stroke: var(--s-red); stroke-width: 2; stroke-dasharray: 7 5" />

    <!-- Idle Waste Hatch Zones -->
    <rect id="c1-idle-fill-1" x="158" y="418" width="0" height="188" style="fill: var(--s-red-fill); opacity: 0.65" />
    <rect id="c1-idle-hatch-1" x="158" y="418" width="0" height="188" fill="url(#waste-hatch)" />
    <rect id="c1-idle-fill-2" x="362" y="418" width="0" height="188" style="fill: var(--s-red-fill); opacity: 0.65" />
    <rect id="c1-idle-hatch-2" x="362" y="418" width="0" height="188" fill="url(#waste-hatch)" />

    <!-- Floating Sleep Zs -->
    <text id="c1-z1" x="238" y="556" text-anchor="middle" font-size="20" font-weight="800" class="mono" style="fill: var(--s-sleep); opacity: 0">z</text>
    <text id="c1-z2" x="262" y="532" text-anchor="middle" font-size="25" font-weight="800" class="mono" style="fill: var(--s-sleep); opacity: 0">Z</text>

    <!-- Baseline & Clipped Activity Waveform -->
    <line x1="118" y1="606" x2="480" y2="606" style="stroke: var(--s-border); stroke-width: 1.8" />
    <polyline id="c1-trace" clip-path="url(#c1-wave-clip)" points="118,606 130,606 140,420 148,420 158,606 334,606 344,428 352,428 362,606 478,606" fill="none" style="stroke: var(--s-green); stroke-width: 4.2" stroke-linecap="round" stroke-linejoin="round" />

    <!-- Live Playhead -->
    <circle id="c1-head-halo" cx="118" cy="606" r="15" style="fill: var(--s-green); opacity: 0.25" />
    <circle id="c1-head-dot" cx="118" cy="606" r="7" style="fill: var(--s-green); stroke: #ffffff; stroke-width: 2.2" />

    <!-- Minimal Time Axis Labels -->
    <text x="144" y="648" text-anchor="middle" font-size="15" font-weight="700" style="fill: var(--s-green)">3s</text>
    <text x="246" y="648" text-anchor="middle" font-size="15" font-weight="600" style="fill: var(--s-muted)">hours — days</text>
    <text x="348" y="648" text-anchor="middle" font-size="15" font-weight="700" style="fill: var(--s-green)">2s</text>

    <!-- Takeaway Pill -->
    <rect x="92" y="718" width="412" height="58" rx="14" style="fill: var(--s-green-fill)" />
    <text x="298" y="754" text-anchor="middle" font-size="19" font-weight="700" style="fill: var(--s-green-dark)">&lt; 2% CPU used · 100% reserved</text>
  </g>

  <!-- Quiet Placeholder Slots 02 & 03 (Zero Text Clutter) -->
  <g id="tri-slot-2" style="opacity: 0.36">
    <rect x="566" y="176" width="468" height="628" rx="22" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 2; stroke-dasharray: 10 8" />
    <circle cx="800" cy="490" r="28" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.8" />
    <text x="800" y="498" text-anchor="middle" font-size="20" font-weight="800" style="fill: var(--s-muted)">02</text>
  </g>
  <g id="tri-slot-3" style="opacity: 0.36">
    <rect x="1068" y="176" width="468" height="628" rx="22" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 2; stroke-dasharray: 10 8" />
    <circle cx="1302" cy="490" r="28" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.8" />
    <text x="1302" y="498" text-anchor="middle" font-size="20" font-weight="800" style="fill: var(--s-muted)">03</text>
  </g>
  `,
  animate: (ctx) => {
    ctx.el("bottom-callout").classList.add("is-hidden");

    const card1 = ctx.el("tri-card-1");
    card1.style.opacity = "0";
    card1.style.transform = "translateY(14px)";
    ctx.later(40, () => {
      card1.style.opacity = "1";
      card1.style.transform = "translateY(0px)";
    });

    const pts = [
      [118, 606], [130, 606], [140, 420], [148, 420], [158, 606],
      [334, 606], [344, 428], [352, 428], [362, 606], [478, 606]
    ];
    const yAt = (x) => {
      for (let i = 0; i < pts.length - 1; i++) {
        const [x0, y0] = pts[i];
        const [x1, y1] = pts[i + 1];
        if (x <= x1) {
          const u = x1 === x0 ? 0 : (x - x0) / (x1 - x0);
          return y0 + u * (y1 - y0);
        }
      }
      return 606;
    };

    const clipRect = ctx.el("c1-clip-rect");
    const headDot = ctx.el("c1-head-dot");
    const headHalo = ctx.el("c1-head-halo");
    const stateBg = ctx.el("c1-state-bg");
    const stateDot = ctx.el("c1-state-dot");
    const stateRing = ctx.el("c1-state-ring");
    const stateTxt = ctx.el("c1-state-txt");
    const idleF1 = ctx.el("c1-idle-fill-1");
    const idleH1 = ctx.el("c1-idle-hatch-1");
    const idleF2 = ctx.el("c1-idle-fill-2");
    const idleH2 = ctx.el("c1-idle-hatch-2");
    const z1 = ctx.el("c1-z1");
    const z2 = ctx.el("c1-z2");

    const runSweep = () => {
      ctx.animateProgress(3000, (t) => {
        const x = 118 + 360 * t;
        const y = yAt(x);
        const active = (x >= 131 && x <= 157) || (x >= 335 && x <= 361);

        clipRect.setAttribute("width", String(Math.max(4, Math.round(x - 114))));
        headDot.setAttribute("cx", x.toFixed(1));
        headDot.setAttribute("cy", y.toFixed(1));
        headHalo.setAttribute("cx", x.toFixed(1));
        headHalo.setAttribute("cy", y.toFixed(1));

        const w1 = Math.max(0, Math.min(176, Math.round(x - 158)));
        const w2 = Math.max(0, Math.min(116, Math.round(x - 362)));
        idleF1.setAttribute("width", String(w1));
        idleH1.setAttribute("width", String(w1));
        idleF2.setAttribute("width", String(w2));
        idleH2.setAttribute("width", String(w2));

        if (active) {
          stateBg.style.fill = "var(--s-green-fill)";
          stateBg.style.stroke = "var(--s-green)";
          stateDot.style.fill = "var(--s-green)";
          stateRing.style.opacity = "0.35";
          stateTxt.style.fill = "var(--s-green-dark)";
          stateTxt.textContent = "ACTIVE";
          headDot.style.fill = "var(--s-green)";
          headHalo.style.fill = "var(--s-green)";
          headHalo.setAttribute("r", "18");
          z1.style.opacity = "0";
          z2.style.opacity = "0";
        } else {
          stateBg.style.fill = "var(--s-red-fill)";
          stateBg.style.stroke = "var(--s-red)";
          stateDot.style.fill = "var(--s-red)";
          stateRing.style.opacity = "0";
          stateTxt.style.fill = "var(--s-red-dark)";
          stateTxt.textContent = "IDLE";
          headDot.style.fill = "var(--s-sleep)";
          headHalo.style.fill = "var(--s-sleep)";
          headHalo.setAttribute("r", "12");

          if (w1 > 35) {
            const floatY = Math.sin(t * Math.PI * 6) * 6;
            z1.style.opacity = "0.75";
            z2.style.opacity = w1 > 85 ? "0.85" : "0";
            z1.setAttribute("transform", `translate(0, ${floatY.toFixed(1)})`);
            z2.setAttribute("transform", `translate(0, ${(-floatY).toFixed(1)})`);
          } else {
            z1.style.opacity = "0";
            z2.style.opacity = "0";
          }
        }
      });
    };

    runSweep();
    ctx.every(4300, runSweep);
  }
};
