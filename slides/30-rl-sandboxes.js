export default {
  chapter: 5,
  short: "30. RL Sandboxes",
  speaker: "DIMA",
  kicker: "WORKLOAD: REINFORCEMENT LEARNING",
  title: "Scaling RL rollouts from 0 to 1M+ sandboxes",
  accent: "var(--s-purple)",
  headline: "Every RL step runs batch x group isolated rollouts in parallel; training blocks on slowest P99",
  body1: "sandboxenv-rl plugs Substrate into verl, Tunix, SkyRL, NeMo Gym, and Harbor with zero K8s plumbing.",
  body2: "Zero-rebuild @sha256 Golden Snapshots (0.53s p50 TTFI) and sub-pod actor bursts (4.7K/s) bypass etcd.",
  notes: "Now let's look at one of the most demanding workloads we run on Agent Substrate: Reinforcement Learning.\nIn agentic RL, every training step spawns batch times group isolated sandboxes in parallel to compile code, run tests, and execute shell commands.\nAnd your expensive GPU or TPU training cluster blocks on the slowest P99 rollout in every single step.\nAcross teams scaling RL, three challenges show up immediately:\nFirst, framework UX: ML researchers work in Python frameworks like verl, Tunix, SkyRL, NeMo Gym, and Harbor, not Kubernetes CRDs. Our open-source sandboxenv-rl SDK gives them a 10-line SandboxFleet interface that plugs into 40+ eval benchmarks like SWE-bench with zero trainer rewrites.\nSecond, massive OCI image sprawl: RL datasets pull tens of thousands to over a million distinct task repo images, where 109-second cold pulls stall training. Substrate mounts the guest agent onto unmodified sha256 images with Golden Snapshots, local SSD caching, and GKE Image Streaming for 0.53-second median startup across 36.8K images.\nThird, rapid scale-out from 0 to 1M+ sandboxes: synchronized burst waves saturate kube-apiserver and etcd around 50K pods. Substrate keeps etcd off the hot path, forking gVisor and microVM actors from warm pools at 4,700 sandboxes per second and 190ms fork latency.",
  svg: `
  <!-- Top Critical Path Banner -->
  <g id="rl-top" class="fade-group" style="opacity: 0">
    <rect x="64" y="152" width="1472" height="86" rx="16" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2" />
    <rect x="86" y="177" width="166" height="36" rx="18" style="fill: var(--s-amber)" />
    <text x="169" y="200" text-anchor="middle" font-size="13" font-weight="800" letter-spacing="1" style="fill: var(--s-card)">CRITICAL PATH</text>
    <text x="272" y="189" font-size="18" font-weight="800">Every RL step runs batch × group isolated rollouts in parallel (compile · test · bash)</text>
    <text x="272" y="216" font-size="14.5" style="fill: var(--s-muted)">GPUs &amp; TPUs block on the slowest P99 trajectory before weights update</text>

    <!-- Animated Rollout Wave Mini-Chart -->
    <rect x="1192" y="164" width="322" height="62" rx="10" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.4" />
    <text class="mono" x="1208" y="183" font-size="11.5" font-weight="800" style="fill: var(--s-muted)">STEP WAVE</text>
    <text id="rl-wave-lbl" class="mono" x="1498" y="183" text-anchor="end" font-size="11.5" font-weight="800" style="fill: var(--s-purple-dark)">forking 10K+...</text>
    <rect id="rl-w0" x="1208" y="191" width="60" height="7" rx="3.5" style="fill: var(--s-purple); transition: width 0.6s ease" />
    <rect id="rl-w1" x="1208" y="202" width="44" height="7" rx="3.5" style="fill: var(--s-blue); transition: width 0.6s ease" />
    <rect id="rl-w2" x="1208" y="213" width="76" height="7" rx="3.5" style="fill: var(--s-green); transition: width 0.6s ease" />
    <line x1="1494" y1="188" x2="1494" y2="222" style="stroke: var(--s-amber); stroke-width: 2; stroke-dasharray: 3 2" />
  </g>

  <!-- Pillar 01: Easy RL Framework UX -->
  <g id="rl-c1" class="fade-group" style="opacity: 0">
    <rect x="64" y="256" width="472" height="498" rx="18" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 2.4" />
    <rect x="64" y="256" width="472" height="94" rx="18" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2" />
    <rect x="88" y="278" width="48" height="48" rx="12" style="fill: var(--s-blue)" />
    <text class="mono" x="112" y="310" text-anchor="middle" font-size="20" font-weight="800" style="fill: var(--s-card)">01</text>
    <text x="152" y="298" font-size="22" font-weight="800" style="fill: var(--s-blue-dark)">Easy RL Framework UX</text>
    <text x="152" y="325" font-size="14.5" font-weight="700" style="fill: var(--s-muted)">Python-first · zero K8s plumbing</text>

    <!-- Challenge -->
    <rect x="88" y="368" width="424" height="122" rx="12" style="fill: var(--s-red-fill); stroke: var(--s-red); stroke-width: 1.5" />
    <text x="108" y="394" font-size="12" font-weight="800" letter-spacing="1.2" style="fill: var(--s-red-dark)">TOP CHALLENGE</text>
    <text x="108" y="422" font-size="15" font-weight="600">Researchers build in verl, Tunix, SkyRL,</text>
    <text x="108" y="446" font-size="15" font-weight="600">NeMo Gym &amp; Harbor, not K8s CRDs,</text>
    <text x="108" y="470" font-size="15" font-weight="600">pod lifecycles, or cluster networking.</text>

    <!-- Solution -->
    <rect x="88" y="506" width="424" height="162" rx="12" style="fill: var(--s-surface-2); stroke: var(--s-blue); stroke-width: 1.8" />
    <text x="108" y="532" font-size="12" font-weight="800" letter-spacing="1.2" style="fill: var(--s-blue-dark)">SUBSTRATE + SANDBOXENV-RL</text>
    <text x="108" y="560" font-size="15">Narrow-waist <tspan class="mono" font-weight="700">SandboxFleet</tspan> Python SDK</text>
    <text x="108" y="585" font-size="15">plugs directly into RL harnesses &amp; 40+</text>
    <text x="108" y="610" font-size="15">eval suites (SWE-bench, Terminal-Bench)</text>
    <text x="108" y="635" font-size="15">with zero trainer or loop rewrites.</text>

    <!-- Metric Pill -->
    <rect x="88" y="684" width="424" height="50" rx="12" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 1.8" />
    <text class="mono" x="300" y="715" text-anchor="middle" font-size="16" font-weight="800" style="fill: var(--s-blue-dark)">10-line Python SDK · Harbor &amp; verl</text>
  </g>

  <!-- Pillar 02: Massive OCI Image Sprawl -->
  <g id="rl-c2" class="fade-group" style="opacity: 0">
    <rect x="564" y="256" width="472" height="498" rx="18" style="fill: var(--s-card); stroke: var(--s-purple); stroke-width: 2.4" />
    <rect x="564" y="256" width="472" height="94" rx="18" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
    <rect x="588" y="278" width="48" height="48" rx="12" style="fill: var(--s-purple)" />
    <text class="mono" x="612" y="310" text-anchor="middle" font-size="20" font-weight="800" style="fill: var(--s-card)">02</text>
    <text x="652" y="298" font-size="22" font-weight="800" style="fill: var(--s-purple-dark)">Massive OCI Image Sprawl</text>
    <text x="652" y="325" font-size="14.5" font-weight="700" style="fill: var(--s-muted)">Thousands of unique task repos</text>

    <!-- Challenge -->
    <rect x="588" y="368" width="424" height="122" rx="12" style="fill: var(--s-red-fill); stroke: var(--s-red); stroke-width: 1.5" />
    <text x="608" y="394" font-size="12" font-weight="800" letter-spacing="1.2" style="fill: var(--s-red-dark)">TOP CHALLENGE</text>
    <text x="608" y="422" font-size="15" font-weight="600">RL datasets pull 20K to 1M+ distinct</text>
    <text x="608" y="446" font-size="15" font-weight="600">multi-GB task images; ~109s cold pulls</text>
    <text x="608" y="470" font-size="15" font-weight="600">&amp; Dockerfile rebuilds stall RL steps.</text>

    <!-- Solution -->
    <rect x="588" y="506" width="424" height="162" rx="12" style="fill: var(--s-surface-2); stroke: var(--s-purple); stroke-width: 1.8" />
    <text x="608" y="532" font-size="12" font-weight="800" letter-spacing="1.2" style="fill: var(--s-purple-dark)">ZERO-REBUILD GOLDEN SNAPSHOTS</text>
    <text x="608" y="560" font-size="15">Mounts guest agent onto unmodified</text>
    <text x="608" y="585" font-size="15"><tspan class="mono" font-weight="700">@sha256</tspan> images with 1x Golden Snapshots,</text>
    <text x="608" y="610" font-size="15">node-local SSD cache &amp; GKE Image</text>
    <text x="608" y="635" font-size="15">Streaming across arbitrary task repos.</text>

    <!-- Metric Pill -->
    <rect x="588" y="684" width="424" height="50" rx="12" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 1.8" />
    <text class="mono" x="800" y="715" text-anchor="middle" font-size="16" font-weight="800" style="fill: var(--s-purple-dark)">0.53s p50 TTFI · 36.8K OCI images</text>
  </g>

  <!-- Pillar 03: 0 to 1M+ Rapid Scale-Out -->
  <g id="rl-c3" class="fade-group" style="opacity: 0">
    <rect x="1064" y="256" width="472" height="498" rx="18" style="fill: var(--s-card); stroke: var(--s-green); stroke-width: 2.4" />
    <rect x="1064" y="256" width="472" height="94" rx="18" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2" />
    <rect x="1088" y="278" width="48" height="48" rx="12" style="fill: var(--s-green)" />
    <text class="mono" x="1112" y="310" text-anchor="middle" font-size="20" font-weight="800" style="fill: var(--s-card)">03</text>
    <text x="1152" y="298" font-size="22" font-weight="800" style="fill: var(--s-green-dark)">0 to 1M+ Rapid Scale-Out</text>
    <text x="1152" y="325" font-size="14.5" font-weight="700" style="fill: var(--s-muted)">Burst waves off K8s hot path</text>

    <!-- Challenge -->
    <rect x="1088" y="368" width="424" height="122" rx="12" style="fill: var(--s-red-fill); stroke: var(--s-red); stroke-width: 1.5" />
    <text x="1108" y="394" font-size="12" font-weight="800" letter-spacing="1.2" style="fill: var(--s-red-dark)">TOP CHALLENGE</text>
    <text x="1108" y="422" font-size="15" font-weight="600">Spawning 10K to 1M+ sandboxes in</text>
    <text x="1108" y="446" font-size="15" font-weight="600">synchronized waves saturates</text>
    <text x="1108" y="470" font-size="15" font-weight="600">kube-apiserver &amp; etcd (~50K pod cap).</text>

    <!-- Solution -->
    <rect x="1088" y="506" width="424" height="162" rx="12" style="fill: var(--s-surface-2); stroke: var(--s-green); stroke-width: 1.8" />
    <text x="1108" y="532" font-size="12" font-weight="800" letter-spacing="1.2" style="fill: var(--s-green-dark)">SUB-POD ACTOR ENGINE</text>
    <text x="1108" y="560" font-size="15">Bypasses <tspan class="mono" font-weight="700">etcd</tspan> on the hot path to fork</text>
    <text x="1108" y="585" font-size="15">isolated gVisor &amp; microVM actors</text>
    <text x="1108" y="610" font-size="15">directly from warm Worker pools across</text>
    <text x="1108" y="635" font-size="15">multi-cluster GKE fleets.</text>

    <!-- Metric Pill -->
    <rect x="1088" y="684" width="424" height="50" rx="12" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 1.8" />
    <text class="mono" x="1300" y="715" text-anchor="middle" font-size="16" font-weight="800" style="fill: var(--s-green-dark)">4.7K/s bursts · 190ms fork · 1M+ scale</text>
  </g>

  <!-- Bottom Open Source Banner -->
  <g id="rl-bot" class="fade-group" style="opacity: 0">
    <rect x="64" y="772" width="1472" height="76" rx="16" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.8" />
    <rect x="64" y="772" width="10" height="76" rx="5" style="fill: var(--s-purple)" />
    <text x="96" y="817" font-size="17" font-weight="700">
      Apache 2.0 Open Source:
      <a href="https://github.com/ai-on-gke/sandboxenv-rl" target="_blank" rel="noopener noreferrer"><tspan class="mono" font-weight="800" style="fill: var(--s-blue)">github.com/ai-on-gke/sandboxenv-rl ↗</tspan></a>
      +
      <a href="http://ate.dev" target="_blank" rel="noopener noreferrer"><tspan class="mono" font-weight="800" style="fill: var(--s-purple-dark)">Agent Substrate (ate.dev) ↗</tspan></a>
    </text>
    <rect x="1220" y="791" width="292" height="38" rx="19" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 1.5" />
    <text class="mono" x="1366" y="815" text-anchor="middle" font-size="14" font-weight="800" style="fill: var(--s-green-dark)">0.00% infra fault rate at scale</text>
  </g>
  `,
  animate: (ctx) => {
    ctx.el("bottom-callout").classList.add("is-hidden");

    const pop = (node, from) => {
      node.style.transformBox = "fill-box";
      node.style.transformOrigin = "center";
      node.style.transition = "none";
      node.style.opacity = "0";
      node.style.transform = from;
      node.getBoundingClientRect();
      node.style.transition = "";
      node.style.opacity = "1";
      node.style.transform = "none";
    };

    ctx.later(100, () => pop(ctx.el("rl-top"), "translateY(-14px)"));
    ctx.later(340, () => pop(ctx.el("rl-c1"), "translateY(22px)"));
    ctx.later(580, () => pop(ctx.el("rl-c2"), "translateY(22px)"));
    ctx.later(820, () => pop(ctx.el("rl-c3"), "translateY(22px)"));
    ctx.later(1080, () => pop(ctx.el("rl-bot"), "translateY(14px)"));

    // Animate synchronized RL step rollout wave in the top bar
    const w0 = ctx.el("rl-w0");
    const w1 = ctx.el("rl-w1");
    const w2 = ctx.el("rl-w2");
    const lbl = ctx.el("rl-wave-lbl");
    let stepNum = 1;

    const runWave = () => {
      lbl.textContent = `step #${stepNum}: 190ms fork`;
      w0.setAttribute("width", "48");
      w1.setAttribute("width", "36");
      w2.setAttribute("width", "54");

      ctx.later(650, () => {
        lbl.textContent = `step #${stepNum}: running...`;
        w0.setAttribute("width", "218");
        w1.setAttribute("width", "184");
        w2.setAttribute("width", "246");
      });
      ctx.later(1550, () => {
        lbl.textContent = `step #${stepNum}: P99 done ✓`;
        w0.setAttribute("width", "284");
        w1.setAttribute("width", "284");
        w2.setAttribute("width", "284");
        stepNum = (stepNum % 9) + 1;
      });
    };

    ctx.later(1300, () => {
      runWave();
      ctx.every(2800, runWave);
    });
  }
};
