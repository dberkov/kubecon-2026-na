export default {
  chapter: 3,
  short: "20. 2-Layer CRDs",
  speaker: "TIM / DIMA",
  kicker: "TWO-LAYER ARCHITECTURE",
  title: "Kubernetes CRDs (Slow Infra Path) vs. Substrate Fast Path",
  accent: "var(--s-green)",
  headline: "Infra Admins manage warm WorkerPool CRDs · App Developers schedule Actors via gRPC",
  body1: "Layer 1 (Left): WorkerPool & SandboxConfig CRDs -> ate-controller -> Warm Worker Pods & DaemonSets.",
  body2: "Layer 2 (Right): ateapi (gRPC) + Postgres + atenet/PEP schedule & wake Actors with zero etcd overhead.",
  notes: "Agent Substrate is a two-layer system: Platform Admins use Kubernetes CRDs (WorkerPool, SandboxConfig) and ate-controller to provision warm Worker Pods. App Developers use Substrate's gRPC API backed by Postgres to run Actors inside those warm workers with zero etcd bottlenecks.",
  svg: `
  <rect x="64" y="152" width="1472" height="516" rx="22" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 2" />
  <text x="800" y="654" text-anchor="middle" font-size="16" font-weight="700" style="fill: var(--s-muted)">KUBERNETES CLUSTER</text>
  <g id="layer-k8s-col" class="fade-group">
    <rect x="96" y="176" width="648" height="454" rx="20" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.4" />
    <rect x="134" y="194" width="24" height="6" rx="2" fill="#e37400" />
    <rect x="124" y="200" width="44" height="38" rx="10" fill="#fbbc04" stroke="#e37400" stroke-width="1.8" />
    <circle cx="138" cy="214" r="3" fill="#1e293b" />
    <circle cx="154" cy="214" r="3" fill="#1e293b" />
    <path d="M 133 225 Q 140 220 146 224 Q 152 220 159 225" fill="none" stroke="#6d3b1a" stroke-width="3.2" stroke-linecap="round" />
    <path d="M 139 228 Q 146 233 153 228" fill="none" stroke="#1e293b" stroke-width="2" stroke-linecap="round" />
    <text x="184" y="216" font-size="21" font-weight="700" style="fill: var(--s-blue-dark)">Layer 1: Kubernetes &amp; CRDs (Infra)</text>
    <text x="184" y="240" font-size="15" style="fill: var(--s-muted)">Platform Admin provisions warm capacity pools</text>
    <rect x="132" y="262" width="576" height="82" rx="12" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 1.8" />
    <text x="420" y="300" text-anchor="middle" font-size="21" font-weight="700">WorkerPool &amp; SandboxConfig CRDs</text>
    <text x="420" y="326" text-anchor="middle" font-size="14.5" style="fill: var(--s-muted)">Declarative K8s APIs</text>
    <line x1="420" y1="344" x2="420" y2="376" stroke="#1a73e8" stroke-width="2.8" marker-end="url(#arr-blue)" />
    <rect x="132" y="382" width="576" height="78" rx="12" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 1.8" />
    <text x="420" y="428" text-anchor="middle" font-size="21" font-weight="700" style="fill: var(--s-blue)">ate-controller (K8s Operator)</text>
    <line x1="420" y1="460" x2="420" y2="492" stroke="#1a73e8" stroke-width="2.8" marker-end="url(#arr-blue)" />
    <rect x="132" y="498" width="576" height="106" rx="12" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2.2" />
    <text x="420" y="542" text-anchor="middle" font-size="21" font-weight="700" style="fill: var(--s-green-dark)">Warm Worker Pods &amp; DaemonSets</text>
    <text x="420" y="574" text-anchor="middle" font-size="16" style="fill: var(--s-muted)">atelet  ·  ateworker  ·  atenet Envoy</text>
  </g>
  <g id="layer-bridge" class="fade-group">
    <line x1="748" y1="551" x2="846" y2="551" stroke="#1e8e3e" stroke-width="4" class="flow-dash" marker-end="url(#arr-green)" />
    <rect x="752" y="502" width="96" height="34" rx="10" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 1.5" />
    <text x="800" y="524" text-anchor="middle" font-size="13" font-weight="700" style="fill: var(--s-green-dark)">Warm Pool</text>
  </g>
  <g id="layer-fast-col" class="fade-group">
    <rect x="856" y="176" width="648" height="454" rx="20" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2.4" />
    <rect x="894" y="194" width="24" height="6" rx="2" fill="#e37400" />
    <rect x="884" y="200" width="44" height="38" rx="10" fill="#fbbc04" stroke="#e37400" stroke-width="1.8" />
    <circle cx="898" cy="215" r="3" fill="#1e293b" />
    <circle cx="914" cy="215" r="3" fill="#1e293b" />
    <path d="M 896 226 Q 906 233 916 226" fill="none" stroke="#b91c1c" stroke-width="2.8" stroke-linecap="round" />
    <text x="944" y="216" font-size="21" font-weight="700" style="fill: var(--s-green-dark)">Layer 2: Substrate Fast Path (No etcd)</text>
    <text x="944" y="240" font-size="15" style="fill: var(--s-muted)">App Developer creates, wakes &amp; suspends Actors</text>
    <rect x="892" y="262" width="368" height="86" rx="12" style="fill: var(--s-card); stroke: var(--s-green); stroke-width: 2" />
    <text x="1076" y="300" text-anchor="middle" font-size="21" font-weight="700" style="fill: var(--s-green-dark)">ateapi (gRPC Scheduler)</text>
    <text x="1076" y="328" text-anchor="middle" font-size="15" style="fill: var(--s-muted)">Actors &amp; ActorTemplates</text>
    <line x1="1262" y1="305" x2="1302" y2="305" stroke="#1a73e8" stroke-width="2.5" marker-end="url(#arr-blue)" />
    <path d="M 1310 276 C 1310 262, 1468 262, 1468 276 L 1468 334 C 1468 348, 1310 348, 1310 334 Z" style="fill: var(--s-blue-box); stroke: var(--s-blue); stroke-width: 2" />
    <ellipse cx="1389" cy="276" rx="79" ry="11" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2" />
    <text x="1389" y="315" text-anchor="middle" font-size="19" font-weight="700">postgres</text>
    <rect x="892" y="378" width="576" height="86" rx="12" style="fill: var(--s-card); stroke: var(--s-green); stroke-width: 2" />
    <text x="1180" y="416" text-anchor="middle" font-size="21" font-weight="700" style="fill: var(--s-green-dark)">atenet-router &amp; PEP (Envoy)</text>
    <text x="1180" y="444" text-anchor="middle" font-size="15.5" style="fill: var(--s-muted)">On-demand ingress wakeup  ·  Out-of-band egress token injection</text>
    <rect x="892" y="494" width="576" height="110" rx="12" style="fill: var(--s-red-fill); stroke: var(--s-red); stroke-width: 2.4" />
    <text x="1180" y="540" text-anchor="middle" font-size="22" font-weight="700" style="fill: var(--s-red-dark)">Actor Sandboxes (OCI) — ~100ms Wake</text>
    <text x="1180" y="572" text-anchor="middle" font-size="16" style="fill: var(--s-muted)">gVisor  /  Cloud Hypervisor microVM</text>
  </g>
  `,
  animate: (ctx) => {
    ctx.el("layer-k8s-col").style.opacity = "1";
    ctx.el("layer-bridge").style.opacity = "0";
    ctx.el("layer-fast-col").style.opacity = "0.18";
    ctx.later(420, () => { ctx.el("layer-bridge").style.opacity = "1"; });
    ctx.later(720, () => { ctx.el("layer-fast-col").style.opacity = "1"; });
  }
};
