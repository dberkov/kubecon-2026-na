export default {
  chapter: 0,
  short: "5. Human Oriented",
  speaker: "DIMA",
  kicker: "AGENT WORKLOAD PROPERTIES · 3 OF 3",
  title: "What makes Agent workloads different?",
  accent: "var(--s-blue)",
  headline: "3. Human-in-the-Loop: cold-start latency breaks interactive flow",
  body1: "Humans wait interactively on every turn (<200ms target).",
  body2: "5–15s Pod scheduling, image pull, and boot feel broken.",
  notes: "Third, they tend to have humans in the loop, which makes them very sensitive to perceived latency.\nSo: bursty, untrusted, and a human waiting on every turn. Tim, what happens when you run that on Kubernetes?",
  svg: `
  <!-- Card 1: Settled Completed Context -->
  <g id="tri-card-1" class="fade-group" style="opacity: 0.78">
    <rect x="64" y="176" width="468" height="628" rx="22" style="fill: var(--s-card); stroke: var(--s-green); stroke-width: 1.8" />
    <rect x="64" y="176" width="468" height="106" rx="22" style="fill: var(--s-green-fill)" />
    <rect x="64" y="260" width="468" height="22" style="fill: var(--s-green-fill)" />
    <circle cx="112" cy="229" r="22" style="fill: var(--s-green)" />
    <text x="112" y="236" text-anchor="middle" font-size="18" font-weight="800" style="fill: #ffffff">01</text>
    <text x="148" y="223" font-size="29" font-weight="800" style="fill: var(--s-green-dark)">Bursty &amp; Idle</text>
    <text x="148" y="253" font-size="16" style="fill: var(--s-muted)">Seconds active · Hours idle</text>

    <rect x="92" y="306" width="412" height="390" rx="16" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.4" />
    <rect x="210" y="328" width="176" height="40" rx="20" style="fill: var(--s-red-fill); stroke: var(--s-red); stroke-width: 1.6" />
    <circle cx="240" cy="348" r="6.5" style="fill: var(--s-red)" />
    <text x="310" y="354" text-anchor="middle" font-size="15" font-weight="800" class="mono" style="fill: var(--s-red-dark)">IDLE</text>

    <text x="480" y="402" text-anchor="end" font-size="13.5" font-weight="700" style="fill: var(--s-red)">Pod Reserved</text>
    <line x1="118" y1="414" x2="480" y2="414" style="stroke: var(--s-red); stroke-width: 2; stroke-dasharray: 7 5" />
    <rect x="158" y="418" width="176" height="188" style="fill: var(--s-red-fill); opacity: 0.65" />
    <rect x="158" y="418" width="176" height="188" fill="url(#waste-hatch)" />
    <rect x="362" y="418" width="116" height="188" style="fill: var(--s-red-fill); opacity: 0.65" />
    <rect x="362" y="418" width="116" height="188" fill="url(#waste-hatch)" />
    <line x1="118" y1="606" x2="480" y2="606" style="stroke: var(--s-border); stroke-width: 1.8" />
    <polyline points="118,606 130,606 140,420 148,420 158,606 334,606 344,428 352,428 362,606 478,606" fill="none" style="stroke: var(--s-green); stroke-width: 4.2" stroke-linecap="round" stroke-linejoin="round" />
    <text x="144" y="648" text-anchor="middle" font-size="15" font-weight="700" style="fill: var(--s-green)">3s</text>
    <text x="246" y="648" text-anchor="middle" font-size="15" font-weight="600" style="fill: var(--s-muted)">hours — days</text>
    <text x="348" y="648" text-anchor="middle" font-size="15" font-weight="700" style="fill: var(--s-green)">2s</text>

    <rect x="92" y="718" width="412" height="58" rx="14" style="fill: var(--s-green-fill)" />
    <text x="298" y="754" text-anchor="middle" font-size="19" font-weight="700" style="fill: var(--s-green-dark)">&lt; 2% CPU used · 100% reserved</text>
  </g>

  <!-- Card 2: Settled Completed Context -->
  <g id="tri-card-2" class="fade-group" style="opacity: 0.78">
    <rect x="566" y="176" width="468" height="628" rx="22" style="fill: var(--s-card); stroke: var(--s-red); stroke-width: 1.8" />
    <rect x="566" y="176" width="468" height="106" rx="22" style="fill: var(--s-red-fill)" />
    <rect x="566" y="260" width="468" height="22" style="fill: var(--s-red-fill)" />
    <circle cx="614" cy="229" r="22" style="fill: var(--s-red)" />
    <text x="614" y="236" text-anchor="middle" font-size="18" font-weight="800" style="fill: #ffffff">02</text>
    <text x="650" y="223" font-size="29" font-weight="800" style="fill: var(--s-red-dark)">Untrusted Code</text>
    <text x="650" y="253" font-size="16" style="fill: var(--s-muted)">Unseen LLM-generated code</text>

    <rect x="594" y="306" width="412" height="390" rx="16" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.4" />
    <rect x="616" y="352" width="208" height="252" rx="18" style="fill: var(--s-card); stroke: var(--s-red); stroke-width: 3.2" />
    <rect x="626" y="362" width="188" height="232" rx="12" fill="none" style="stroke: var(--s-red); stroke-width: 1.4; stroke-dasharray: 6 4; opacity: 0.4" />
    <circle cx="720" cy="352" r="20" style="fill: var(--s-red)" />
    <path d="M 714 350 V 345 A 6 6 0 0 1 726 345 V 350" fill="none" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" />
    <rect x="711" y="350" width="18" height="13" rx="3" fill="#ffffff" />
    <rect x="636" y="394" width="168" height="42" rx="9" style="fill: var(--s-dark-box)" />
    <text x="720" y="421" text-anchor="middle" font-size="14.5" font-weight="700" class="mono" style="fill: #fbae40">&gt; exec(ai.py)</text>
    <circle cx="720" cy="516" r="24" style="fill: var(--s-red-fill); stroke: var(--s-red); stroke-width: 2.4" />
    <text x="720" y="522" text-anchor="middle" font-size="15.5" font-weight="800" style="fill: var(--s-red-dark)">AI</text>
    <text x="720" y="648" text-anchor="middle" font-size="16.5" font-weight="700" style="fill: var(--s-green-dark)">✓ 1 Agent = 1 Box</text>

    <rect x="846" y="352" width="138" height="252" rx="18" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 2; stroke-dasharray: 7 5" />
    <line x1="915" y1="454" x2="915" y2="424" style="stroke: var(--s-red); stroke-width: 3; stroke-dasharray: 4 3" />
    <line x1="915" y1="502" x2="915" y2="532" style="stroke: var(--s-red); stroke-width: 3; stroke-dasharray: 4 3" />
    <circle cx="915" cy="400" r="21" style="fill: var(--s-red-fill); stroke: var(--s-red); stroke-width: 2" />
    <circle cx="915" cy="400" r="6" style="fill: var(--s-muted)" />
    <circle cx="915" cy="478" r="21" style="fill: var(--s-red-fill); stroke: var(--s-red); stroke-width: 2.2" />
    <text x="915" y="484" text-anchor="middle" font-size="13.5" font-weight="800" style="fill: var(--s-red-dark)">AI</text>
    <circle cx="915" cy="556" r="21" style="fill: var(--s-red-fill); stroke: var(--s-red); stroke-width: 2" />
    <circle cx="915" cy="556" r="6" style="fill: var(--s-muted)" />
    <line x1="864" y1="372" x2="966" y2="584" style="stroke: var(--s-red); stroke-width: 5.5" stroke-linecap="round" />
    <line x1="966" y1="372" x2="864" y2="584" style="stroke: var(--s-red); stroke-width: 5.5" stroke-linecap="round" />
    <text x="915" y="648" text-anchor="middle" font-size="16.5" font-weight="700" style="fill: var(--s-red)">✕ Shared Pod</text>

    <rect x="594" y="718" width="412" height="58" rx="14" style="fill: var(--s-red-fill)" />
    <text x="800" y="754" text-anchor="middle" font-size="19" font-weight="700" style="fill: var(--s-red-dark)">Single-tenant · No sharing</text>
  </g>

  <!-- Card 3: Active & Animated -->
  <g id="tri-card-3" class="fade-group">
    <rect id="tri-border-3" x="1068" y="176" width="468" height="628" rx="22" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 3" />
    <rect x="1068" y="176" width="468" height="106" rx="22" style="fill: var(--s-blue-fill)" />
    <rect x="1068" y="260" width="468" height="22" style="fill: var(--s-blue-fill)" />
    <circle cx="1116" cy="229" r="22" style="fill: var(--s-blue)" />
    <text x="1116" y="236" text-anchor="middle" font-size="18" font-weight="800" style="fill: #ffffff">03</text>
    <text x="1152" y="223" font-size="28" font-weight="800" style="fill: var(--s-blue-dark)">Human-in-the-Loop</text>
    <text x="1152" y="253" font-size="16" style="fill: var(--s-muted)">Sensitive to startup latency</text>

    <!-- Visual Stage -->
    <rect x="1096" y="306" width="412" height="390" rx="16" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.4" />

    <!-- Waiting Human + Typing Bubble + Live Stopwatch -->
    <circle cx="1148" cy="368" r="24" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.2" />
    <circle cx="1148" cy="361" r="7" style="fill: var(--s-blue)" />
    <path d="M 1136 381 C 1136 372, 1160 372, 1160 381" fill="none" style="stroke: var(--s-blue); stroke-width: 3" stroke-linecap="round" />

    <rect x="1184" y="342" width="150" height="52" rx="16" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.6" />
    <circle id="c3-dot-1" cx="1235" cy="368" r="6" style="fill: var(--s-blue)" />
    <circle id="c3-dot-2" cx="1259" cy="368" r="6" style="fill: var(--s-blue)" />
    <circle id="c3-dot-3" cx="1283" cy="368" r="6" style="fill: var(--s-blue)" />

    <rect x="1350" y="342" width="132" height="52" rx="14" style="fill: var(--s-red-fill); stroke: var(--s-red); stroke-width: 2" />
    <text id="c3-timer" x="1416" y="375" text-anchor="middle" font-size="21" font-weight="800" class="mono" style="fill: var(--s-red)">0.0s</text>

    <!-- Track 1: Interactive Target (<200ms) -->
    <text x="1124" y="462" font-size="16.5" font-weight="700" style="fill: var(--s-green)">Interactive (&lt;200ms)</text>
    <rect x="1124" y="476" width="358" height="34" rx="10" style="fill: var(--s-surface-2)" />
    <rect id="c3-green-bar" x="1124" y="476" width="12" height="34" rx="10" style="fill: var(--s-green)" />
    <text id="c3-instant-lbl" x="1190" y="499" font-size="16.5" font-weight="800" style="fill: var(--s-green); opacity: 0">✓ Instant</text>

    <!-- Track 2: K8s Pod Cold Start -->
    <text x="1124" y="568" font-size="16.5" font-weight="700" style="fill: var(--s-red)">Pod Cold Start</text>
    <rect x="1124" y="582" width="358" height="38" rx="10" style="fill: var(--s-red-fill)" />
    <rect id="c3-red-bar" x="1124" y="582" width="12" height="38" rx="10" style="fill: var(--s-red)" />
    <line x1="1243" y1="582" x2="1243" y2="620" stroke="#ffffff" stroke-opacity="0.55" stroke-width="2" />
    <line x1="1362" y1="582" x2="1362" y2="620" stroke="#ffffff" stroke-opacity="0.55" stroke-width="2" />

    <text id="c3-st-1" x="1183" y="648" text-anchor="middle" font-size="14.5" font-weight="700" style="fill: var(--s-muted)">Schedule</text>
    <text id="c3-st-2" x="1302" y="648" text-anchor="middle" font-size="14.5" font-weight="700" style="fill: var(--s-muted)">Pull</text>
    <text id="c3-st-3" x="1422" y="648" text-anchor="middle" font-size="14.5" font-weight="700" style="fill: var(--s-muted)">Boot</text>

    <!-- Takeaway Pill -->
    <rect x="1096" y="718" width="412" height="58" rx="14" style="fill: var(--s-blue-fill)" />
    <text x="1302" y="754" text-anchor="middle" font-size="19" font-weight="700" style="fill: var(--s-blue-dark)">5–15s wait breaks flow</text>
  </g>
  `,
  animate: (ctx) => {
    ctx.el("bottom-callout").classList.add("is-hidden");

    const card3 = ctx.el("tri-card-3");
    card3.style.opacity = "0";
    card3.style.transform = "translateY(14px)";
    ctx.later(40, () => {
      card3.style.opacity = "1";
      card3.style.transform = "translateY(0px)";
    });

    const gBar = ctx.el("c3-green-bar");
    const instLbl = ctx.el("c3-instant-lbl");
    const rBar = ctx.el("c3-red-bar");
    const timer = ctx.el("c3-timer");
    const d1 = ctx.el("c3-dot-1");
    const d2 = ctx.el("c3-dot-2");
    const d3 = ctx.el("c3-dot-3");
    const st1 = ctx.el("c3-st-1");
    const st2 = ctx.el("c3-st-2");
    const st3 = ctx.el("c3-st-3");

    const runRace = () => {
      ctx.animateProgress(3100, (t) => {
        // Instant green target (<200ms)
        const gw = Math.max(10, Math.round(54 * ctx.easeOutCubic(t / 0.09)));
        gBar.setAttribute("width", String(gw));
        instLbl.style.opacity = gw >= 48 ? "1" : "0";

        // Slow crawling Pod cold start (0.0s -> 11.4s)
        const rp = Math.max(0, Math.min(1, (t - 0.03) / 0.94));
        const rw = Math.max(12, Math.round(358 * rp));
        rBar.setAttribute("width", String(rw));
        timer.textContent = `${(11.4 * rp).toFixed(1)}s`;

        st1.style.fill = rp > 0.02 ? "var(--s-red)" : "var(--s-muted)";
        st2.style.fill = rp > 0.34 ? "var(--s-red)" : "var(--s-muted)";
        st3.style.fill = rp > 0.67 ? "var(--s-red)" : "var(--s-muted)";

        // Bouncing waiting dots while human waits
        if (rp < 0.99) {
          const phase = t * Math.PI * 10;
          d1.setAttribute("cy", (368 - 5 * Math.max(0, Math.sin(phase))).toFixed(1));
          d2.setAttribute("cy", (368 - 5 * Math.max(0, Math.sin(phase - 1.1))).toFixed(1));
          d3.setAttribute("cy", (368 - 5 * Math.max(0, Math.sin(phase - 2.2))).toFixed(1));
          d1.style.opacity = "1";
          d2.style.opacity = "0.85";
          d3.style.opacity = "0.7";
        } else {
          d1.setAttribute("cy", "368");
          d2.setAttribute("cy", "368");
          d3.setAttribute("cy", "368");
        }
      });
    };

    runRace();
    ctx.every(4600, runRace);
  }
};
