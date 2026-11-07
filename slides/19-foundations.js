export default {
  chapter: 3,
  short: "19. Foundations",
  speaker: "TIM",
  kicker: "AGENT SUBSTRATE: FOUNDATIONS",
  title: "Agent Substrate + Kubernetes",
  accent: "var(--s-blue)",
  headline: "We take the best parts of Kubernetes — while keeping K8s off the per-turn hot path",
  body1: "Workers are K8s Pods (drain-aware), and the Control Plane & PEP run as standard K8s workloads.",
  body2: "Database, object storage, proxy, and sandbox runtime (gVisor / microVM) are cleanly pluggable.",
  notes: "This whole system is built ON and WITH Kubernetes — Workers are Pods, our control plane and PEP run on Kubernetes, and when a K8s node drains, workers cleanly evict agents. At the same time, everything is pluggable and we never put Kubernetes on the hot path.",
  svg: `
  <rect x="64" y="156" width="948" height="508" rx="20" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.8" />
  <text x="100" y="204" font-size="24" font-weight="700" style="fill: var(--s-blue)">Built to Work ON and WITH Kubernetes</text>
  <text x="100" y="232" font-size="16" style="fill: var(--s-muted)">Augment Kubernetes where needed — and keep K8s off the per-turn hot path</text>
  <g id="f24-row-1" class="fade-group">
    <rect x="100" y="256" width="876" height="86" rx="14" style="fill: var(--s-card); stroke: var(--s-green); stroke-width: 2" />
    <rect x="124" y="282" width="144" height="34" rx="8" style="fill: var(--s-green-fill)" />
    <text x="196" y="304" text-anchor="middle" font-size="14" font-weight="700" style="fill: var(--s-green-dark)">WORKERS</text>
    <text x="292" y="295" font-size="19.5" font-weight="700">Workers are standard Kubernetes Pods</text>
    <text x="292" y="323" font-size="15.5" style="fill: var(--s-muted)">Standard resource requests, node autoscaling &amp; graceful node-drain eviction</text>
  </g>
  <g id="f24-row-2" class="fade-group">
    <rect x="100" y="358" width="876" height="86" rx="14" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 2" />
    <rect x="124" y="384" width="144" height="34" rx="8" style="fill: var(--s-blue-fill)" />
    <text x="196" y="406" text-anchor="middle" font-size="14" font-weight="700" style="fill: var(--s-blue-dark)">CONTROL &amp; PEP</text>
    <text x="292" y="397" font-size="19.5" font-weight="700">Control Plane &amp; PEP Gateways run on Kubernetes</text>
    <text x="292" y="425" font-size="15.5" style="fill: var(--s-muted)">ateapi, Envoy routers, and (optionally) Postgres deploy cleanly as K8s workloads</text>
  </g>
  <g id="f24-row-3" class="fade-group">
    <rect x="100" y="460" width="876" height="86" rx="14" style="fill: var(--s-card); stroke: var(--s-purple); stroke-width: 2" />
    <rect x="124" y="486" width="144" height="34" rx="8" style="fill: var(--s-purple-fill)" />
    <text x="196" y="508" text-anchor="middle" font-size="14" font-weight="700" style="fill: var(--s-purple-dark)">PLUGGABLE</text>
    <text x="292" y="499" font-size="19.5" font-weight="700">Storage, DB, proxy &amp; sandboxes are pluggable</text>
    <text x="292" y="527" font-size="15.5" style="fill: var(--s-muted)">gVisor or Cloud Hypervisor microVM  ·  GCS / S3  ·  Feeding learnings back upstream</text>
  </g>
  <g id="f24-row-4" class="fade-group">
    <rect x="100" y="564" width="876" height="72" rx="14" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2" />
    <text x="538" y="608" text-anchor="middle" font-size="20" font-weight="700" style="fill: var(--s-amber-dark)">Golden Rule: Never put Kubernetes on the hot path</text>
  </g>
  <rect x="1044" y="156" width="492" height="508" rx="20" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.2" />
  <g class="float-slow">
    <image id="img-found-octo" x="1096" y="182" width="388" height="298" preserveAspectRatio="xMidYMid meet" href="./assets/octopus.png" />
  </g>
  <rect x="1084" y="508" width="412" height="122" rx="16" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 1.8" />
  <text x="1290" y="552" text-anchor="middle" font-size="22" font-weight="700" style="fill: var(--s-blue-dark)">Kubernetes manages Capacity</text>
  <text x="1290" y="592" text-anchor="middle" font-size="22" font-weight="700" style="fill: var(--s-green-dark)">Substrate manages Actors</text>
  `,
  animate: (ctx) => {
    ["f24-row-1", "f24-row-2", "f24-row-3", "f24-row-4"].forEach((id, i) => {
      const r = ctx.el(id);
      r.style.opacity = "0";
      r.style.transform = "translateX(-14px)";
      ctx.later(i * 180, () => {
        r.style.opacity = "1";
        r.style.transform = "translateX(0px)";
      });
    });
  }
};
