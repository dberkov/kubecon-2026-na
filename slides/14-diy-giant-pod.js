export default {
  chapter: 2,
  short: "14. DIY Giant Pod",
  speaker: "TIM / DIMA",
  kicker: "STATE OF THE ART · APPROACH 2: DIY MONOLITH",
  title: "Sophisticated teams go DIY: one giant Pod per machine",
  accent: "var(--s-blue)",
  headline: "Bypassing Kubernetes per-agent scheduling by claiming the entire Node upfront",
  body1: "Typically one giant static Pod per machine consumes ~95% of Node CPU & memory.",
  body2: "Inside that giant Pod runs a custom 'manager' app that carves out sandboxes on its own.",
  notes: "A second approach we saw was mostly from very sophisticated users. They build a DIY system on top of Kubernetes: typically one giant workload per machine which consumes most of the resources, with a custom 'manager' app inside.",
  svg: `
  <rect x="64" y="152" width="536" height="516" rx="18" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.8" />
  <rect x="96" y="182" width="184" height="30" rx="8" style="fill: var(--s-red-fill)" />
  <text x="188" y="202" text-anchor="middle" font-size="13" font-weight="700" style="fill: var(--s-red-dark)">APPROACH 1 RECAP</text>
  <text x="96" y="246" font-size="24" font-weight="700">1 Agent = 1 K8s Pod Hit a Wall</text>
  <text x="96" y="284" font-size="17" style="fill: var(--s-muted)">• O(seconds) cold starts hurt multi-turn UX</text>
  <text x="96" y="318" font-size="17" style="fill: var(--s-muted)">• 30s–15m idle hold burns cluster RAM &amp; CPU</text>
  <text x="96" y="352" font-size="17" style="fill: var(--s-muted)">• K8s scheduler &amp; Pod count ceilings at scale</text>
  <line x1="96" y1="386" x2="568" y2="386" style="stroke: var(--s-border); stroke-width: 1.5" />
  <rect x="96" y="412" width="224" height="30" rx="8" style="fill: var(--s-blue-fill)" />
  <text x="208" y="432" text-anchor="middle" font-size="13" font-weight="700" style="fill: var(--s-blue-dark)">SO POWER USERS GO DIY</text>
  <text x="96" y="476" font-size="24" font-weight="700" style="fill: var(--s-blue-dark)">Treat K8s as Dumb Bare Metal</text>
  <text x="96" y="514" font-size="17" font-weight="600">1. Schedule 1 giant static Pod per Node</text>
  <text x="96" y="548" font-size="17" font-weight="600">2. Claim ~95% of Node CPU &amp; Memory upfront</text>
  <text x="96" y="582" font-size="17" font-weight="600">3. Run a proprietary "manager" daemon inside</text>
  <rect x="96" y="606" width="472" height="44" rx="10" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 1.5" />
  <text x="332" y="634" text-anchor="middle" font-size="15" font-weight="700" style="fill: var(--s-amber-dark)">K8s only sees 1 Pod — everything inside is custom</text>
  <rect x="636" y="152" width="900" height="516" rx="20" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.2" />
  <text x="674" y="196" font-size="23" font-weight="700" style="fill: var(--s-blue-dark)">K8s Node (e.g. 64 vCPU · 256 GiB RAM)</text>
  <text x="1500" y="196" text-anchor="end" font-size="15.5" font-weight="700" style="fill: var(--s-muted)">DaemonSet / Static Pool</text>
  <g id="diy-19-giant-pod" class="fade-group">
    <rect x="672" y="218" width="828" height="422" rx="16" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 3.2" />
    <rect x="672" y="218" width="828" height="62" rx="16" style="fill: var(--s-blue)" />
    <rect x="672" y="260" width="828" height="20" style="fill: var(--s-blue)" />
    <text x="704" y="258" font-size="21" font-weight="700" style="fill: #ffffff">Giant K8s Pod</text>
    <text x="1468" y="258" text-anchor="end" font-size="16" font-weight="700" style="fill: #e8f0fe">requests: 95% of Node CPU &amp; Memory</text>
    <rect x="836" y="314" width="500" height="104" rx="14" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.4" />
    <text x="1086" y="360" text-anchor="middle" font-size="25" font-weight="700" style="fill: var(--s-purple-dark)">Custom Sandbox Manager</text>
    <text x="1086" y="392" text-anchor="middle" font-size="15.5" style="fill: var(--s-muted)">Proprietary daemon managing sub-processes / microVMs</text>
    <rect x="714" y="446" width="744" height="166" rx="14" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.6; stroke-dasharray: 6 5" />
    <text x="1086" y="518" text-anchor="middle" font-size="19" font-weight="700" style="fill: var(--s-muted)">Pre-claimed Node Capacity Managed Outside Kubernetes</text>
    <text x="1086" y="552" text-anchor="middle" font-size="16" style="fill: var(--s-muted)">(Private warm pools, custom cgroups, local state mounts)</text>
  </g>
  `,
  animate: (ctx) => {
    const gp = ctx.el("diy-19-giant-pod");
    ctx.animateProgress(1100, (t) => {
      const e = ctx.easeOutCubic(t);
      const sc = (0.76 + 0.24 * e).toFixed(3);
      gp.setAttribute("transform", `translate(1086, 429) scale(${sc}) translate(-1086, -429)`);
      gp.style.opacity = Math.min(1, t * 2.5).toFixed(2);
    });
  }
};
