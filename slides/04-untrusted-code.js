export default {
  chapter: 0,
  short: "4. Untrusted",
  speaker: "DIMA",
  kicker: "AGENT WORKLOAD PROPERTIES · 2 OF 3",
  title: "What makes Agent workloads different?",
  accent: "var(--s-red)",
  headline: "2. Untrusted Code: agents invent and execute unseen code",
  body1: "Requires a hard single-tenant sandbox per session.",
  body2: "Eliminates multi-user Pod sharing and amortization.",
  notes: `Second: agentic workloads are generally untrusted.
One of the most significant aspects of agents is that they invent code and then run it
Code that no human has ever seen.
Because of that, they have to run in secure single-tenant sandboxes
which means we miss out on opportunities for amortization.`,
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

  <!-- Card 2: Active & Animated -->
  <g id="tri-card-2" class="fade-group">
    <rect id="tri-border-2" x="566" y="176" width="468" height="628" rx="22" style="fill: var(--s-card); stroke: var(--s-red); stroke-width: 3" />
    <rect x="566" y="176" width="468" height="106" rx="22" style="fill: var(--s-red-fill)" />
    <rect x="566" y="260" width="468" height="22" style="fill: var(--s-red-fill)" />
    <circle cx="614" cy="229" r="22" style="fill: var(--s-red)" />
    <text x="614" y="236" text-anchor="middle" font-size="18" font-weight="800" style="fill: #ffffff">02</text>
    <text x="650" y="223" font-size="29" font-weight="800" style="fill: var(--s-red-dark)">Untrusted Code</text>
    <text x="650" y="253" font-size="16" style="fill: var(--s-muted)">Unseen LLM-generated code</text>

    <!-- Visual Stage -->
    <rect x="594" y="306" width="412" height="390" rx="16" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.4" />

    <!-- Left: Hard Isolated Sandbox -->
    <rect id="c2-sandbox-wall" x="616" y="352" width="208" height="252" rx="18" style="fill: var(--s-card); stroke: var(--s-red); stroke-width: 3.4" />
    <rect x="626" y="362" width="188" height="232" rx="12" fill="none" style="stroke: var(--s-red); stroke-width: 1.4; stroke-dasharray: 6 4; opacity: 0.4" />
    <rect id="c2-wall-flash" x="616" y="352" width="208" height="252" rx="18" fill="none" style="stroke: var(--s-red); stroke-width: 8; opacity: 0" />

    <!-- Padlock Medallion -->
    <circle cx="720" cy="352" r="20" style="fill: var(--s-red)" />
    <path d="M 714 350 V 345 A 6 6 0 0 1 726 345 V 350" fill="none" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" />
    <rect x="711" y="350" width="18" height="13" rx="3" fill="#ffffff" />

    <!-- Mini Terminal Typing LLM Code -->
    <rect x="636" y="394" width="168" height="42" rx="9" style="fill: var(--s-dark-box)" />
    <text id="c2-typed-code" x="720" y="421" text-anchor="middle" font-size="14.5" font-weight="700" class="mono" style="fill: #fbae40">&gt; exec(ai.py)</text>

    <!-- Contained Escape Probes -->
    <circle id="c2-probe-l" cx="720" cy="516" r="5.5" style="fill: var(--s-red); opacity: 0" />
    <circle id="c2-probe-r" cx="720" cy="516" r="5.5" style="fill: var(--s-red); opacity: 0" />
    <circle id="c2-probe-u" cx="720" cy="516" r="5.5" style="fill: var(--s-red); opacity: 0" />
    <circle id="c2-probe-d" cx="720" cy="516" r="5.5" style="fill: var(--s-red); opacity: 0" />

    <!-- Single Agent Core -->
    <circle cx="720" cy="516" r="24" style="fill: var(--s-red-fill); stroke: var(--s-red); stroke-width: 2.4" />
    <text x="720" y="522" text-anchor="middle" font-size="15.5" font-weight="800" style="fill: var(--s-red-dark)">AI</text>
    <text x="720" y="648" text-anchor="middle" font-size="16.5" font-weight="700" style="fill: var(--s-green-dark)">✓ 1 Agent = 1 Box</text>

    <!-- Right: Shared Multi-Tenant Pod (Rejected) -->
    <rect id="c2-shared-box" x="846" y="352" width="138" height="252" rx="18" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 2; stroke-dasharray: 7 5" />
    <line id="c2-leak-up" x1="915" y1="454" x2="915" y2="424" style="stroke: var(--s-red); stroke-width: 3; stroke-dasharray: 4 3; opacity: 0" />
    <line id="c2-leak-dn" x1="915" y1="502" x2="915" y2="532" style="stroke: var(--s-red); stroke-width: 3; stroke-dasharray: 4 3; opacity: 0" />

    <circle id="c2-ten-top" cx="915" cy="400" r="21" class="smooth-box" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 2" />
    <circle cx="915" cy="400" r="6" style="fill: var(--s-muted)" />

    <circle cx="915" cy="478" r="21" style="fill: var(--s-red-fill); stroke: var(--s-red); stroke-width: 2.2" />
    <text x="915" y="484" text-anchor="middle" font-size="13.5" font-weight="800" style="fill: var(--s-red-dark)">AI</text>

    <circle id="c2-ten-bot" cx="915" cy="556" r="21" class="smooth-box" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 2" />
    <circle cx="915" cy="556" r="6" style="fill: var(--s-muted)" />

    <g id="c2-x-stamp" style="opacity: 0">
      <line x1="864" y1="372" x2="966" y2="584" style="stroke: var(--s-red); stroke-width: 5.5" stroke-linecap="round" />
      <line x1="966" y1="372" x2="864" y2="584" style="stroke: var(--s-red); stroke-width: 5.5" stroke-linecap="round" />
    </g>
    <text x="915" y="648" text-anchor="middle" font-size="16.5" font-weight="700" style="fill: var(--s-red)">✕ Shared Pod</text>

    <!-- Takeaway Pill -->
    <rect x="594" y="718" width="412" height="58" rx="14" style="fill: var(--s-red-fill)" />
    <text x="800" y="754" text-anchor="middle" font-size="19" font-weight="700" style="fill: var(--s-red-dark)">Single-tenant · No sharing</text>
  </g>

  <!-- Quiet Placeholder Slot 03 -->
  <g id="tri-slot-3" style="opacity: 0.36">
    <rect x="1068" y="176" width="468" height="628" rx="22" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 2; stroke-dasharray: 10 8" />
    <circle cx="1302" cy="490" r="28" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.8" />
    <text x="1302" y="498" text-anchor="middle" font-size="20" font-weight="800" style="fill: var(--s-muted)">03</text>
  </g>
  `,
  animate: (ctx) => {
    ctx.el("bottom-callout").classList.add("is-hidden");

    const card2 = ctx.el("tri-card-2");
    card2.style.opacity = "0";
    card2.style.transform = "translateY(14px)";
    ctx.later(40, () => {
      card2.style.opacity = "1";
      card2.style.transform = "translateY(0px)";
    });

    const fullCmd = "> exec(ai.py)";
    const typed = ctx.el("c2-typed-code");
    const flash = ctx.el("c2-wall-flash");
    const pL = ctx.el("c2-probe-l");
    const pR = ctx.el("c2-probe-r");
    const pU = ctx.el("c2-probe-u");
    const pD = ctx.el("c2-probe-d");
    const leakUp = ctx.el("c2-leak-up");
    const leakDn = ctx.el("c2-leak-dn");
    const tenTop = ctx.el("c2-ten-top");
    const tenBot = ctx.el("c2-ten-bot");
    const xStamp = ctx.el("c2-x-stamp");

    const runCycle = () => {
      tenTop.style.fill = "var(--s-card)";
      tenTop.style.stroke = "var(--s-border)";
      tenBot.style.fill = "var(--s-card)";
      tenBot.style.stroke = "var(--s-border)";
      leakUp.style.opacity = "0";
      leakDn.style.opacity = "0";
      xStamp.style.opacity = "0";
      flash.style.opacity = "0";

      ctx.animateProgress(3000, (t) => {
        const chars = Math.max(2, Math.round(fullCmd.length * ctx.easeOutCubic(t / 0.28)));
        typed.textContent = fullCmd.slice(0, chars);

        // Escape probes hit inner sandbox wall & bounce back blocked
        if (t >= 0.28 && t <= 0.68) {
          const u = (t - 0.28) / 0.40;
          const reach = u < 0.72 ? ctx.easeOutCubic(u / 0.72) : 1 - 0.22 * ((u - 0.72) / 0.28);
          const op = u < 0.8 ? 0.95 : Math.max(0, 1 - (u - 0.8) / 0.2);
          pL.setAttribute("cx", (720 - 84 * reach).toFixed(1));
          pR.setAttribute("cx", (720 + 84 * reach).toFixed(1));
          pU.setAttribute("cy", (516 - 58 * reach).toFixed(1));
          pD.setAttribute("cy", (516 + 68 * reach).toFixed(1));
          pL.style.opacity = op.toFixed(2);
          pR.style.opacity = op.toFixed(2);
          pU.style.opacity = op.toFixed(2);
          pD.style.opacity = op.toFixed(2);

          const impact = u > 0.62 ? Math.sin(((u - 0.62) / 0.38) * Math.PI) : 0;
          flash.style.opacity = (0.55 * Math.max(0, impact)).toFixed(2);
        } else {
          pL.style.opacity = "0";
          pR.style.opacity = "0";
          pU.style.opacity = "0";
          pD.style.opacity = "0";
          flash.style.opacity = "0";
        }

        // Contagion inside Shared Pod -> Rejected stamp
        if (t >= 0.46) {
          const c = Math.min(1, (t - 0.46) / 0.22);
          leakUp.style.opacity = c.toFixed(2);
          leakDn.style.opacity = c.toFixed(2);
          if (t >= 0.58) {
            tenTop.style.fill = "var(--s-red-fill)";
            tenTop.style.stroke = "var(--s-red)";
            tenBot.style.fill = "var(--s-red-fill)";
            tenBot.style.stroke = "var(--s-red)";
          }
        }
        if (t >= 0.68) {
          const sx = ctx.easeOutCubic((t - 0.68) / 0.22);
          xStamp.style.opacity = sx.toFixed(2);
        }
      });
    };

    runCycle();
    ctx.every(4400, runCycle);
  }
};
