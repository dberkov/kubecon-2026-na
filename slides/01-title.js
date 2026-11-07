export default {
  chapter: 0,
  isBookend: true,
  short: "1. Title",
  speaker: "TIM",
  notes: "Late last year and early this year, we both started looking at the same set of problems from slightly different angles — and came to the same conclusions. In the next 30 minutes, we'll look at why agents challenge standard Kubernetes and how Agent Substrate fits in.",
  takeaways: {"main": "Opening Title — Introduce Tim & Dima + framing question: 'Is Kubernetes Good For Agents?'", "sub1": "Both started from different angles (K8s core vs. Cloud agent infra) and converged on the same conclusion.", "sub2": "Next click transitions to Tim on Slide 2 (The Kubernetes Baseline)."},
  svg: `
  <g transform="translate(88, 108)">
    <text x="0" y="0" font-size="38" font-weight="700">
      <tspan fill="#4285f4">G</tspan>
      <tspan fill="#ea4335">o</tspan>
      <tspan fill="#fbbc04">o</tspan>
      <tspan fill="#4285f4">g</tspan>
      <tspan fill="#34a853">l</tspan>
      <tspan fill="#ea4335">e</tspan>
      <tspan dx="6" style="fill: var(--s-muted)" font-weight="500">Cloud</tspan>
    </text>
  </g>
  <text x="88" y="266" font-size="74" font-weight="700" style="fill: var(--s-blue)">Kubernetes Solutions for</text>
  <text x="88" y="358" font-size="74" font-weight="700" style="fill: var(--s-blue)">Agent-Shaped Problems</text>
  <text x="88" y="454" font-size="40" font-weight="500" style="fill: var(--s-muted)">Is Kubernetes Good For Agents?</text>
  <text x="88" y="654" font-size="26" font-weight="500" style="fill: var(--s-blue)">Dmitry Berkovich &lt;dberkov@google.com&gt;</text>
  <text x="88" y="696" font-size="26" font-weight="500" style="fill: var(--s-blue)">Tim Hockin &lt;thockin@google.com&gt;</text>
  <g id="title-sticker" transform="translate(1156, 456)">
    <image id="img-title-hex" x="0" y="0" width="410" height="410" preserveAspectRatio="xMidYMid meet" href="./assets/k8s-hex.png" />
    <image id="img-title-octo" x="48" y="74" width="316" height="270" preserveAspectRatio="xMidYMid meet" href="./assets/octopus.png" />
  </g>
  <rect x="0" y="890" width="424" height="10" fill="#ea4335" />
  <rect x="424" y="890" width="676" height="10" fill="#4285f4" />
  <rect x="1100" y="890" width="170" height="10" fill="#34a853" />
  <rect x="1270" y="890" width="330" height="10" fill="#fbbc04" />
  `,
  animate: (ctx) => {
    const st = ctx.el("title-sticker");
    ctx.animateProgress(900, (t) => {
      const e = ctx.easeOutCubic(t);
      const sc = (0.88 + 0.12 * e).toFixed(3);
      st.setAttribute("transform", `translate(1361, 661) scale(${sc}) translate(-205, -205)`);
      st.style.opacity = e.toFixed(2);
    });
  }
};
