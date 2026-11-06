export default {
  chapter: 0,
  short: "5. Human Latency",
  speaker: "DIMA",
  kicker: "AGENT WORKLOAD PROPERTIES (3 OF 3)",
  title: "3) Humans in the loop make cold-start latency painful",
  accent: "var(--s-blue)",
  headline: "The Pod Trilemma: Keep Warm = Expensive · Share Pods = Unsafe · Scale to Zero = Too Slow",
  body1: "With a human waiting interactively on every turn, 5–15s Pod scheduling and image pulls break UX flow.",
  body2: "All three properties collide simultaneously when you map 1 Agent Session to 1 standard Kubernetes Pod.",
  notes: "Third, they tend to have humans in the loop, which makes them very sensitive to perceived latency.",
  svg: `
  <g id="tri-card-1" class="fade-group">
    <rect id="tri-border-1" x="64" y="152" width="468" height="516" rx="18" style="fill: var(--s-card); stroke: var(--s-green); stroke-width: 2.8" />
    <rect x="64" y="152" width="468" height="90" rx="18" style="fill: var(--s-green-fill)" />
    <rect x="64" y="222" width="468" height="20" style="fill: var(--s-green-fill)" />
    <rect x="92" y="170" width="132" height="26" rx="13" style="fill: var(--s-green)" />
    <text x="158" y="188" text-anchor="middle" font-size="12.5" font-weight="700" style="fill: #ffffff">PROPERTY 01</text>
    <text x="92" y="226" font-size="25" font-weight="700" style="fill: var(--s-green-dark)">Very bursty, frequently idle</text>
    <rect x="92" y="264" width="412" height="198" rx="12" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.2" />
    <text id="c1-duty-hdr" x="112" y="292" font-size="13.5" font-weight="700" style="fill: var(--s-muted)">DUTY CYCLE (&lt;2%) · IDLE: 14h</text>
    <line x1="112" y1="322" x2="482" y2="322" style="stroke: var(--s-red); stroke-width: 1.8; stroke-dasharray: 6 5" />
    <text x="482" y="314" text-anchor="end" font-size="12.5" font-weight="700" style="fill: var(--s-red)">Pod Reserved 24/7</text>
    <rect id="c1-idle-box-1" x="152" y="326" width="184" height="94" style="fill: var(--s-red-fill)" />
    <text id="c1-idle-lbl-1" x="244" y="378" text-anchor="middle" font-size="14" font-weight="700" style="fill: var(--s-red)">IDLE WASTE</text>
    <rect id="c1-idle-box-2" x="372" y="326" width="110" height="94" style="fill: var(--s-red-fill)" />
    <text id="c1-idle-lbl-2" x="427" y="378" text-anchor="middle" font-size="13.5" font-weight="700" style="fill: var(--s-red)">IDLE</text>
    <polyline id="c1-trace" points="112,420 126,420 134,326 144,326 152,420 336,420 346,330 358,330 368,420 482,420" fill="none" style="stroke: var(--s-green); stroke-width: 3.8" stroke-linejoin="round" stroke-dasharray="680" stroke-dashoffset="0" />
    <text x="112" y="448" font-size="13" style="fill: var(--s-muted)">Wake (3s)</text>
    <text x="322" y="448" font-size="13" style="fill: var(--s-muted)">Wake (2s)</text>
    <text x="92" y="500" font-size="16.5" font-weight="600">• Wakes briefly, sleeps for hours or days</text>
    <text x="92" y="534" font-size="16.5" font-weight="600">• Stateful session keeps Pod allocated</text>
    <text x="92" y="568" font-size="16.5" font-weight="600">• Huge gap between reserved vs. used</text>
    <rect x="92" y="600" width="412" height="44" rx="10" style="fill: var(--s-green-fill)" />
    <text x="298" y="628" text-anchor="middle" font-size="15.5" font-weight="700" style="fill: var(--s-green-dark)">Sets up Goal: Extreme Density</text>
  </g>
  <g id="tri-card-2" class="fade-group">
    <rect id="tri-border-2" x="566" y="152" width="468" height="516" rx="18" style="fill: var(--s-card); stroke: var(--s-red); stroke-width: 2" />
    <rect x="566" y="152" width="468" height="90" rx="18" style="fill: var(--s-red-fill)" />
    <rect x="566" y="222" width="468" height="20" style="fill: var(--s-red-fill)" />
    <rect x="594" y="170" width="132" height="26" rx="13" style="fill: var(--s-red)" />
    <text x="660" y="188" text-anchor="middle" font-size="12.5" font-weight="700" style="fill: #ffffff">PROPERTY 02</text>
    <text x="594" y="226" font-size="25" font-weight="700" style="fill: var(--s-red-dark)">Untrusted, single-tenant</text>
    <rect x="594" y="264" width="412" height="198" rx="12" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.2" />
    <text x="614" y="292" font-size="13.5" font-weight="700" style="fill: var(--s-muted)">UNSEEN GENERATED CODE EXECUTION</text>
    <rect id="c2-sandbox-wall" x="614" y="310" width="224" height="132" rx="10" style="fill: var(--s-card); stroke: var(--s-red); stroke-width: 3" />
    <rect x="630" y="322" width="192" height="28" rx="6" style="fill: var(--s-red-fill)" />
    <text x="726" y="341" text-anchor="middle" font-size="13" font-weight="700" style="fill: var(--s-red-dark)">HARD SANDBOX WALL</text>
    <text id="c2-typed-code" x="726" y="376" text-anchor="middle" font-size="15.5" font-weight="700" class="mono">exec(llm_code.py)</text>
    <text x="726" y="402" text-anchor="middle" font-size="13.5" style="fill: var(--s-muted)">1 User Session = 1 Box</text>
    <text x="726" y="426" text-anchor="middle" font-size="13" font-weight="700" style="fill: var(--s-red)">Zero credential sharing</text>
    <rect x="854" y="310" width="132" height="132" rx="10" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.6; stroke-dasharray: 5 4" />
    <text x="920" y="358" text-anchor="middle" font-size="14" font-weight="700" style="fill: var(--s-muted)">Shared</text>
    <text x="920" y="380" text-anchor="middle" font-size="14" font-weight="700" style="fill: var(--s-muted)">Multi-User</text>
    <text x="920" y="402" text-anchor="middle" font-size="14" font-weight="700" style="fill: var(--s-muted)">Pod</text>
    <g id="c2-x-stamp" class="fade-group">
      <line x1="868" y1="322" x2="972" y2="428" style="stroke: var(--s-red); stroke-width: 4.5" stroke-linecap="round" />
      <line x1="972" y1="322" x2="868" y2="428" style="stroke: var(--s-red); stroke-width: 4.5" stroke-linecap="round" />
    </g>
    <text x="594" y="500" font-size="16.5" font-weight="600">• Runs unseen LLM-invented code</text>
    <text x="594" y="534" font-size="16.5" font-weight="600">• Needs hard sandbox per session</text>
    <text x="594" y="568" font-size="16.5" font-weight="600">• No co-tenancy to amortize idle cost</text>
    <rect x="594" y="600" width="412" height="44" rx="10" style="fill: var(--s-red-fill)" />
    <text x="800" y="628" text-anchor="middle" font-size="15.5" font-weight="700" style="fill: var(--s-red-dark)">Sets up Goal: Zero-Trust Security</text>
  </g>
  <g id="tri-card-3" class="fade-group">
    <rect id="tri-border-3" x="1068" y="152" width="468" height="516" rx="18" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 2" />
    <rect x="1068" y="152" width="468" height="90" rx="18" style="fill: var(--s-blue-fill)" />
    <rect x="1068" y="222" width="468" height="20" style="fill: var(--s-blue-fill)" />
    <rect x="1096" y="170" width="132" height="26" rx="13" style="fill: var(--s-blue)" />
    <text x="1162" y="188" text-anchor="middle" font-size="12.5" font-weight="700" style="fill: #ffffff">PROPERTY 03</text>
    <text x="1096" y="226" font-size="25" font-weight="700" style="fill: var(--s-blue-dark)">Human-in-the-loop latency</text>
    <rect x="1096" y="264" width="412" height="198" rx="12" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.2" />
    <text x="1116" y="292" font-size="13.5" font-weight="700" style="fill: var(--s-muted)">LIVE WAKEUP LATENCY RACE</text>
    <text x="1116" y="328" font-size="15" font-weight="700" style="fill: var(--s-green)">Interactive target (&lt;200ms)</text>
    <rect id="c3-green-bar" x="1116" y="338" width="56" height="28" rx="6" style="fill: var(--s-green)" />
    <text id="c3-instant-lbl" x="1182" y="358" font-size="14.5" font-weight="700" style="fill: var(--s-green)">✓ Instant</text>
    <text id="c3-cold-hdr" x="1116" y="396" font-size="15" font-weight="700" style="fill: var(--s-red)">K8s Pod cold start: 11.4s</text>
    <rect x="1116" y="406" width="372" height="30" rx="6" style="fill: var(--s-red-fill)" />
    <rect id="c3-red-bar" x="1116" y="406" width="372" height="30" rx="6" style="fill: var(--s-red)" />
    <text id="c3-cold-lbl" x="1302" y="426" text-anchor="middle" font-size="13.5" font-weight="700" style="fill: #ffffff">Schedule → Pull → Boot</text>
    <text x="1096" y="500" font-size="16.5" font-weight="600">• Humans wait interactively each turn</text>
    <text x="1096" y="534" font-size="16.5" font-weight="600">• Scale-to-zero adds 5–15s cold start</text>
    <text x="1096" y="568" font-size="16.5" font-weight="600">• K8s etcd/watch isn't a fast wakeup path</text>
    <rect x="1096" y="600" width="412" height="44" rx="10" style="fill: var(--s-blue-fill)" />
    <text x="1302" y="628" text-anchor="middle" font-size="15.5" font-weight="700" style="fill: var(--s-blue-dark)">Sets up Goal: Sub-Second Speed</text>
  </g>
  `,
  animate: (ctx) => {
    ctx.el("tri-card-1").style.opacity = "0.72";
    ctx.el("tri-card-2").style.opacity = "0.72";
    ctx.el("tri-card-3").style.opacity = "1";
    ctx.el("tri-border-1").style.strokeWidth = "1.5";
    ctx.el("tri-border-2").style.strokeWidth = "1.5";
    ctx.el("tri-border-3").style.strokeWidth = "3";
    ctx.el("c2-x-stamp").style.opacity = "1";

    ctx.animateProgress(2600, (t) => {
      const gw = Math.max(8, Math.round(56 * ctx.easeOutCubic(t / 0.16)));
      ctx.el("c3-green-bar").setAttribute("width", String(gw));
      ctx.el("c3-instant-lbl").style.opacity = gw >= 48 ? "1" : "0";

      const rp = Math.max(0, Math.min(1, (t - 0.05) / 0.88));
      const rw = Math.max(12, Math.round(372 * rp));
      ctx.el("c3-red-bar").setAttribute("width", String(rw));
      ctx.el("c3-cold-hdr").textContent = `K8s Pod cold start: ${(11.4 * rp).toFixed(1)}s`;
      ctx.el("c3-cold-lbl").style.opacity = rw > 220 ? "1" : "0";
    });
  }
};
