export default {
  chapter: 5,
  isBookend: true,
  short: "32. Thank You!",
  upNextTitle: "Thank You & Q&A (http://ate.dev)",
  speaker: "TIM",
  notes: "Thank you! Agent Substrate is 100% Apache 2.0 open source at http://ate.dev — we would love for you to try it, break it, and build with us. Happy to take your questions!",
  takeaways: {"main": "Closing & Q&A — http://ate.dev (100% Apache 2.0 Open Source)", "sub1": "Security (gVisor/uVM + PEP)  ·  Density (Off-CPU Snapshots)  ·  Speed (~100ms Wakeups).", "sub2": "Use Quick Jump pills below to pull up any architecture diagram immediately during Q&A."},
  svg: `
  <g id="thanks-octo-wrap" class="fade-group float-slow">
    <image id="img-thanks-octo" x="576" y="42" width="448" height="448" preserveAspectRatio="xMidYMid meet" href="./assets/yolo-mic.png" />
  </g>
  <text x="800" y="566" text-anchor="middle" font-size="72" font-weight="800">Thank you!</text>
  <rect x="380" y="612" width="840" height="88" rx="18" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.5" />
  <text x="800" y="667" text-anchor="middle" font-size="29" font-weight="700" style="fill: var(--s-blue)">http://ate.dev   ·   Apache 2.0 Open Source</text>
  <g transform="translate(800, 764)">
    <text x="0" y="0" text-anchor="middle" font-size="20" font-weight="600" style="fill: var(--s-muted)">
              Security (gVisor/uVM + PEP)   ·   Density (Off-CPU Snapshots)   ·   Speed (~100ms Wakeups)
            </text>
  </g>
  <text x="1518" y="864" text-anchor="end" font-size="18" font-weight="700" style="fill: var(--s-muted); opacity: 0.75">Google Cloud</text>
  <rect x="0" y="890" width="424" height="10" fill="#ea4335" />
  <rect x="424" y="890" width="676" height="10" fill="#4285f4" />
  <rect x="1100" y="890" width="170" height="10" fill="#34a853" />
  <rect x="1270" y="890" width="330" height="10" fill="#fbbc04" />
  `,
  animate: (ctx) => {
    const wrap = ctx.el("thanks-octo-wrap");
    wrap.style.opacity = "0";
    ctx.later(60, () => { wrap.style.opacity = "1"; });
  }
};
