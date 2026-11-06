export default {
  chapter: 0,
  short: "6. K8s Fractures",
  speaker: "TIM",
  kicker: "THE KUBERNETES AGENT TRILEMMA",
  title: "Taken together, these 3 properties strain standard Kubernetes",
  accent: "var(--s-blue)",
  headline: "Running agents on Kubernetes 'in the normal way' forces painful trade-offs",
  body1: "Before jumping into solutions, let's look at the two patterns we see teams building in production today.",
  body2: "Approach 1: One Pod per Agent   ·   Approach 2: Giant DIY Pod per Node.",
  notes: "Taken together, these properties can make it problematic to run agents on Kubernetes — at least in the normal way. Before jumping into solutions, let's talk about the state of the art. We have seen this pattern countless times with users.",
  svg: `
  <g id="shatter-art" class="fade-group">
    <image id="img-shattered-k8s" x="530" y="158" width="540" height="504" preserveAspectRatio="xMidYMid meet" href="./assets/shattered-k8s.png" />
  </g>
  <g id="shatter-callouts" class="fade-group">
    <rect x="88" y="206" width="360" height="96" rx="14" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2" />
    <text x="114" y="244" font-size="19" font-weight="700" style="fill: var(--s-green-dark)">Keep Pods Warm?</text>
    <text x="114" y="276" font-size="16.5">→ 98% idle RAM &amp; CPU bill</text>
    <rect x="1152" y="206" width="360" height="96" rx="14" style="fill: var(--s-red-fill); stroke: var(--s-red); stroke-width: 2" />
    <text x="1178" y="244" font-size="19" font-weight="700" style="fill: var(--s-red-dark)">Pack Multi-Tenant?</text>
    <text x="1178" y="276" font-size="16.5">→ Untrusted code escapes</text>
    <rect x="1152" y="520" width="360" height="96" rx="14" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2" />
    <text x="1178" y="558" font-size="19" font-weight="700" style="fill: var(--s-blue-dark)">Scale Pods to Zero?</text>
    <text x="1178" y="590" font-size="16.5">→ 5–15s cold starts hurt UX</text>
    <rect x="88" y="520" width="360" height="96" rx="14" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2" />
    <text x="114" y="558" font-size="19" font-weight="700" style="fill: var(--s-amber-dark)">State of the Art Today?</text>
    <text x="114" y="590" font-size="16.5">→ Let's look at 2 user patterns</text>
  </g>
  `,
  animate: (ctx) => {
    const art = ctx.el("shatter-art");
    const calls = ctx.el("shatter-callouts");
    calls.style.opacity = "0";
    ctx.animateProgress(1200, (t) => {
      const e = ctx.easeOutCubic(t);
      const sc = (0.82 + 0.18 * e).toFixed(3);
      art.setAttribute("transform", `translate(800, 410) scale(${sc}) translate(-800, -410)`);
      art.style.opacity = Math.min(1, t * 2.2).toFixed(2);
      calls.style.opacity = ctx.easeOutCubic((t - 0.35) / 0.65).toFixed(2);
    });
  }
};
