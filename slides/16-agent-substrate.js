export default {
  chapter: 2,
  isBookend: true,
  short: "16. Agent Substrate",
  upNextTitle: "Agent Substrate Hero Reveal",
  speaker: "DIMA & TIM",
  notes: "And so this is the point where we decided we need to do better. We do not think people who just want to run agents should have to choose between a decent UX or an affordable bill, or between hitting hard limits or maintaining a proprietary orchestrator. That is why we built and open-sourced Agent Substrate.",
  takeaways: {"main": "Agent Substrate Reveal — http://ate.dev (Apache 2.0 Open Source)", "sub1": "Teams shouldn't have to pick between bad UX, a 94%-idle bill, or reinventing K8s inside a Giant Pod.", "sub2": "Next click pivots into Design Goals, North-Star Targets, and Architecture (Slides 17–31)."},
  svg: `
  <g id="reveal-octo-wrap" class="fade-group">
    <image id="img-reveal-octo" x="490" y="38" width="620" height="476" preserveAspectRatio="xMidYMid meet" href="./assets/octopus.png" />
  </g>
  <text x="800" y="592" text-anchor="middle" font-size="66" font-weight="800">Agent Substrate</text>
  <text x="800" y="648" text-anchor="middle" font-size="28" style="fill: var(--s-muted)">Open-Source Runtime for Stateful, Zero-Trust Agents on Kubernetes</text>
  <rect x="380" y="690" width="840" height="90" rx="18" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.5" />
  <text x="800" y="746" text-anchor="middle" font-size="29" font-weight="700" style="fill: var(--s-blue)">http://ate.dev   ·   Apache 2.0 Open Source</text>
  <text x="1518" y="864" text-anchor="end" font-size="18" font-weight="700" style="fill: var(--s-muted); opacity: 0.75">Google Cloud</text>
  <rect x="0" y="890" width="424" height="10" fill="#ea4335" />
  <rect x="424" y="890" width="676" height="10" fill="#4285f4" />
  <rect x="1100" y="890" width="170" height="10" fill="#34a853" />
  <rect x="1270" y="890" width="330" height="10" fill="#fbbc04" />
  `,
  animate: (ctx) => {
    const wrap = ctx.el("reveal-octo-wrap");
    ctx.animateProgress(1000, (t) => {
      const e = ctx.easeOutCubic(t);
      const sc = (0.86 + 0.14 * e).toFixed(3);
      wrap.setAttribute("transform", `translate(800, 276) scale(${sc}) translate(-800, -276)`);
      wrap.style.opacity = e.toFixed(2);
    });
  }
};
