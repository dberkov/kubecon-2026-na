export default {
  chapter: 5,
  short: "31. Serving LLMs (llm-d)",
  speaker: "TIM",
  kicker: "WORKLOAD: SERVING LLMS FOR AGENTS · LIVE DEMO",
  title: "Serving 1,000+ agents in production: Substrate + llm-d",
  accent: "var(--s-blue)",
  headline: "PyTorch Keynote Live Demo: 1,000 Hermes coding agents on Substrate hitting 1 llm-d endpoint",
  body1: "llm-d KV-cache-aware routing + disaggregated prefill/decode doubles throughput (~2x tok/s) and cuts TTFT 50%.",
  body2: "Priority flow control isolates bursty agent loops so interactive Pro users run ~7x faster under load.",
  notes: "Sandboxes are only half of running agents in production: those agents also hammer your LLM serving tier on every turn.\nAt the PyTorch Conference keynote, we ran a live production demo pairing Agent Substrate with llm-d 1.0: 1,000 concurrent Hermes coding agents inside Substrate sandboxes across 25 GKE nodes, all driving a single llm-d endpoint across vLLM and SGLang on Cloud TPUs with TorchTPU and GPUs.\nWalking through the three stages on the right:\nFirst, naive Kubernetes round-robin load balancing lands multi-turn agent requests on cold pods, dropping KV-cache hits to around 30 percent and wasting accelerators recomputing long shared repo prefixes.\nSecond, llm-d cache-aware routing plus disaggregated prefill and decode and tiered HBM to CPU RAM to Lustre offload sends turns to warm KV replicas, doubling token throughput and cutting time-to-first-token in half.\nThird, llm-d flow control separates Free, Standard, and Pro priority queues at the gateway so bursty background agent loops never starve interactive users, delivering roughly 7x faster Pro latency.",
  svg: `
  <!-- Left Column: PyTorch Keynote Live Demo Card -->
  <g id="llmd-demo" class="fade-group" style="opacity: 0">
    <rect x="64" y="152" width="776" height="602" rx="18" style="fill: var(--s-surface); stroke: var(--s-blue); stroke-width: 2.6" />
    <circle cx="94" cy="184" r="7" style="fill: var(--s-red)" />
    <text x="110" y="190" font-size="15" font-weight="800" letter-spacing="1.2" style="fill: var(--s-blue-dark)">PYTORCH KEYNOTE · LIVE DEMO</text>

    <a href="https://drive.google.com/file/d/1XjzDR18uuK980qDFp2W1ZWLJf52pCABQ/view?resourcekey=0-eNC1IF_xlc1C5lZ0a6Dvpg" target="_blank" rel="noopener noreferrer">
      <rect x="602" y="166" width="216" height="34" rx="17" style="fill: var(--s-blue)" />
      <text x="710" y="188" text-anchor="middle" font-size="13.5" font-weight="800" style="fill: var(--s-card)">▶ Watch Keynote Video ↗</text>
    </a>

    <!-- 16:9 Live Cluster Telemetry & Routing Monitor -->
    <rect x="88" y="214" width="728" height="388" rx="14" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.8" />
    <rect x="88" y="214" width="728" height="46" rx="14" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.4" />
    <rect id="sim-pill-bg" class="smooth-box" x="104" y="224" width="252" height="26" rx="13" style="fill: var(--s-red)" />
    <text id="sim-pill-txt" class="mono" x="230" y="242" text-anchor="middle" font-size="12" font-weight="800" style="fill: var(--s-card)">STAGE 1 · K8S ROUND-ROBIN</text>
    <text id="sim-kpi" class="mono" x="798" y="242" text-anchor="end" font-size="13" font-weight="800" style="fill: var(--s-red-dark)">KV Hit: ~30% · 1.0x tok/s</text>

    <!-- Monitor Left: 1,000 Hermes Agents on Substrate -->
    <rect x="106" y="276" width="206" height="248" rx="12" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 1.8" />
    <image x="118" y="286" width="40" height="40" preserveAspectRatio="xMidYMid meet" href="./assets/octopus.png" />
    <text x="166" y="304" font-size="15" font-weight="800" style="fill: var(--s-purple-dark)">Agent Substrate</text>
    <text x="166" y="322" font-size="12.5" style="fill: var(--s-muted)">25 GKE Nodes</text>
    <text x="209" y="374" text-anchor="middle" font-size="38" font-weight="800" style="fill: var(--s-purple-dark)">1,000</text>
    <text x="209" y="399" text-anchor="middle" font-size="13.5" font-weight="700">Hermes Coding Agents</text>

    <rect x="122" y="416" width="174" height="26" rx="8" style="fill: var(--s-card); stroke: var(--s-green); stroke-width: 1.4" />
    <text class="mono" x="209" y="434" text-anchor="middle" font-size="11.5" font-weight="800" style="fill: var(--s-green-dark)">Pro · Interactive QoS</text>
    <rect x="122" y="450" width="174" height="26" rx="8" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 1.4" />
    <text class="mono" x="209" y="468" text-anchor="middle" font-size="11.5" font-weight="800" style="fill: var(--s-blue-dark)">Standard · Repo Turns</text>
    <rect x="122" y="484" width="174" height="26" rx="8" style="fill: var(--s-card); stroke: var(--s-amber); stroke-width: 1.4" />
    <text class="mono" x="209" y="502" text-anchor="middle" font-size="11.5" font-weight="800" style="fill: var(--s-amber-dark)">Free · Batch Fan-Out</text>

    <!-- Monitor Wires -->
    <line x1="312" y1="400" x2="358" y2="400" style="stroke: var(--s-border); stroke-width: 2.6" />
    <line x1="526" y1="368" x2="574" y2="314" style="stroke: var(--s-border); stroke-width: 2.6" />
    <line x1="526" y1="400" x2="574" y2="400" style="stroke: var(--s-border); stroke-width: 2.6" />
    <line x1="526" y1="432" x2="574" y2="486" style="stroke: var(--s-border); stroke-width: 2.6" />

    <!-- Monitor Center: 1 llm-d Endpoint -->
    <rect id="sim-gw" class="smooth-box" x="358" y="316" width="168" height="168" rx="14" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.2" />
    <text x="442" y="346" text-anchor="middle" font-size="12" font-weight="800" letter-spacing="0.8" style="fill: var(--s-muted)">1 ENDPOINT</text>
    <text class="mono" x="442" y="378" text-anchor="middle" font-size="23" font-weight="800" style="fill: var(--s-blue-dark)">llm-d 1.0</text>
    <text id="sim-gw-l1" x="442" y="410" text-anchor="middle" font-size="12.5" font-weight="700">KV Prefix Router</text>
    <text id="sim-gw-l2" x="442" y="434" text-anchor="middle" font-size="12.5" font-weight="700">QoS Flow Control</text>
    <text x="442" y="464" text-anchor="middle" font-size="11.5" style="fill: var(--s-muted)">GKE Inference GW</text>

    <!-- Monitor Right: 3 Serving Pools -->
    <rect id="sim-rep-0" class="smooth-box" x="574" y="276" width="224" height="74" rx="10" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.8" />
    <text x="590" y="303" font-size="14" font-weight="800">vLLM · Cloud TPU</text>
    <text x="590" y="325" font-size="12" style="fill: var(--s-muted)">TorchTPU · Prefill / KV</text>
    <text id="sim-tag-0" class="mono" x="786" y="340" text-anchor="end" font-size="11" font-weight="800" style="fill: var(--s-red-dark)">MISS</text>

    <rect id="sim-rep-1" class="smooth-box" x="574" y="363" width="224" height="74" rx="10" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.8" />
    <text x="590" y="390" font-size="14" font-weight="800">SGLang · GPU Pool</text>
    <text x="590" y="412" font-size="12" style="fill: var(--s-muted)">Disaggregated Decode</text>
    <text id="sim-tag-1" class="mono" x="786" y="427" text-anchor="end" font-size="11" font-weight="800" style="fill: var(--s-green-dark)">WARM KV</text>

    <rect id="sim-rep-2" class="smooth-box" x="574" y="450" width="224" height="74" rx="10" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.8" />
    <text x="590" y="477" font-size="14" font-weight="800">Tiered KV Cache</text>
    <text x="590" y="499" font-size="12" style="fill: var(--s-muted)">HBM → CPU RAM → Lustre</text>
    <text id="sim-tag-2" class="mono" x="786" y="514" text-anchor="end" font-size="11" font-weight="800" style="fill: var(--s-blue-dark)">OFFLOAD</text>

    <!-- Live Throughput Gauge Bar -->
    <text class="mono" x="108" y="554" font-size="12" font-weight="800" style="fill: var(--s-muted)">CLUSTER EFFECTIVE GOODPUT</text>
    <text id="sim-meter-lbl" class="mono" x="796" y="554" text-anchor="end" font-size="12" font-weight="800" style="fill: var(--s-blue-dark)">Baseline 1.0x</text>
    <rect x="108" y="564" width="690" height="18" rx="9" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.2" />
    <rect id="sim-meter-fill" x="108" y="564" width="210" height="18" rx="9" style="fill: var(--s-red); transition: width 0.65s ease, fill 0.35s ease" />

    <!-- Demo Setup 3-Column Strip -->
    <rect x="88" y="616" width="728" height="118" rx="12" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.6" />
    <line x1="330" y1="632" x2="330" y2="718" style="stroke: var(--s-border); stroke-width: 1.4" />
    <line x1="574" y1="632" x2="574" y2="718" style="stroke: var(--s-border); stroke-width: 1.4" />

    <text x="209" y="654" text-anchor="middle" font-size="21" font-weight="800" style="fill: var(--s-purple-dark)">1,000 Agents</text>
    <text x="209" y="680" text-anchor="middle" font-size="13.5" style="fill: var(--s-muted)">Hermes on 25 GKE nodes</text>
    <text x="209" y="704" text-anchor="middle" font-size="13" style="fill: var(--s-muted)">Multi-turn coding loops</text>

    <text x="452" y="654" text-anchor="middle" font-size="21" font-weight="800" style="fill: var(--s-blue-dark)">vLLM + SGLang</text>
    <text x="452" y="680" text-anchor="middle" font-size="13.5" style="fill: var(--s-muted)">1 unified llm-d endpoint</text>
    <text x="452" y="704" text-anchor="middle" font-size="13" style="fill: var(--s-muted)">Prefill &amp; decode pools</text>

    <text x="695" y="654" text-anchor="middle" font-size="21" font-weight="800" style="fill: var(--s-green-dark)">TPUs + GPUs</text>
    <text x="695" y="680" text-anchor="middle" font-size="13.5" style="fill: var(--s-muted)">Cloud TPUs (TorchTPU)</text>
    <text x="695" y="704" text-anchor="middle" font-size="13" style="fill: var(--s-muted)">+ GPU accelerator fleet</text>
  </g>

  <!-- Right Column: 3 PyTorch Keynote Progression Cards -->
  <g id="llmd-s1" class="fade-group" style="opacity: 0">
    <rect id="st-card-0" class="smooth-box" x="864" y="152" width="672" height="190" rx="16" style="fill: var(--s-card); stroke: var(--s-red); stroke-width: 2.2" />
    <rect x="888" y="172" width="206" height="28" rx="14" style="fill: var(--s-red-fill); stroke: var(--s-red); stroke-width: 1.4" />
    <text x="991" y="191" text-anchor="middle" font-size="12" font-weight="800" letter-spacing="0.8" style="fill: var(--s-red-dark)">1 · K8S ROUND-ROBIN</text>
    <rect x="1352" y="172" width="160" height="28" rx="14" style="fill: var(--s-red)" />
    <text class="mono" x="1432" y="191" text-anchor="middle" font-size="12.5" font-weight="800" style="fill: var(--s-card)">~30% KV Hit</text>
    <text x="888" y="236" font-size="21" font-weight="800">Duplicate prefill wastes accelerators</text>
    <text x="888" y="268" font-size="15" style="fill: var(--s-muted)">Multi-turn agent steps land on cold pods missing prior context,</text>
    <text x="888" y="294" font-size="15" style="fill: var(--s-muted)">recomputing long shared repo &amp; tool prefixes on every turn.</text>
    <text class="mono" x="888" y="324" font-size="13" font-weight="700" style="fill: var(--s-red-dark)">Cold pods · High TTFT · Recomputed prefixes</text>
  </g>

  <g id="llmd-s2" class="fade-group" style="opacity: 0">
    <rect id="st-card-1" class="smooth-box" x="864" y="358" width="672" height="190" rx="16" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 2.2" />
    <rect x="888" y="378" width="214" height="28" rx="14" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 1.4" />
    <text x="995" y="397" text-anchor="middle" font-size="12" font-weight="800" letter-spacing="0.8" style="fill: var(--s-blue-dark)">2 · LLM-D CACHE ROUTER</text>
    <rect x="1298" y="378" width="214" height="28" rx="14" style="fill: var(--s-blue)" />
    <text class="mono" x="1405" y="397" text-anchor="middle" font-size="12.5" font-weight="800" style="fill: var(--s-card)">~2x Tok/s · -50% TTFT</text>
    <text x="888" y="442" font-size="21" font-weight="800">Sticky KV context &amp; disaggregated pools</text>
    <text x="888" y="474" font-size="15" style="fill: var(--s-muted)">Routes turns to warm KV replicas with prefill/decode split</text>
    <text x="888" y="500" font-size="15" style="fill: var(--s-muted)">and tiered HBM → CPU RAM → Lustre KV cache offload.</text>
    <text class="mono" x="888" y="530" font-size="13" font-weight="700" style="fill: var(--s-blue-dark)">Global KV index · Prefill/Decode split · Tiered offload</text>
  </g>

  <g id="llmd-s3" class="fade-group" style="opacity: 0">
    <rect id="st-card-2" class="smooth-box" x="864" y="564" width="672" height="190" rx="16" style="fill: var(--s-card); stroke: var(--s-green); stroke-width: 2.2" />
    <rect x="888" y="584" width="218" height="28" rx="14" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 1.4" />
    <text x="997" y="603" text-anchor="middle" font-size="12" font-weight="800" letter-spacing="0.8" style="fill: var(--s-green-dark)">3 · LLM-D FLOW CONTROL</text>
    <rect x="1312" y="584" width="200" height="28" rx="14" style="fill: var(--s-green)" />
    <text class="mono" x="1412" y="603" text-anchor="middle" font-size="12.5" font-weight="800" style="fill: var(--s-card)">~7x Faster Pro QoS</text>
    <text x="888" y="648" font-size="21" font-weight="800">Priority lanes isolate bursty loops</text>
    <text x="888" y="680" font-size="15" style="fill: var(--s-muted)">Separates Free, Standard, and Pro queues at the gateway so</text>
    <text x="888" y="706" font-size="15" style="fill: var(--s-muted)">runaway agent fan-out never starves interactive users.</text>
    <text class="mono" x="888" y="736" font-size="13" font-weight="700" style="fill: var(--s-green-dark)">Fairness · Priority lanes · Interactive SLOs</text>
  </g>

  <!-- Bottom CNCF Banner -->
  <g id="llmd-bot" class="fade-group" style="opacity: 0">
    <rect x="64" y="772" width="1472" height="76" rx="16" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.8" />
    <rect x="64" y="772" width="10" height="76" rx="5" style="fill: var(--s-blue)" />
    <text x="96" y="817" font-size="17" font-weight="700">
      Full-Stack Open Agent Infrastructure (CNCF):
      <a href="http://ate.dev" target="_blank" rel="noopener noreferrer"><tspan class="mono" font-weight="800" style="fill: var(--s-purple-dark)">Agent Substrate (ate.dev) ↗</tspan></a>
      +
      <a href="https://llm-d.ai" target="_blank" rel="noopener noreferrer"><tspan class="mono" font-weight="800" style="fill: var(--s-blue)">llm-d 1.0 (llm-d.ai) ↗</tspan></a>
      on GKE Inference Gateway
    </text>
  </g>

  <!-- Animated Request Packet inside Demo Monitor -->
  <g id="llmd-pkt" class="mover" style="opacity: 0; transform: translate(0px, 0px)">
    <rect id="llmd-pkt-bg" x="-64" y="-15" width="128" height="30" rx="15" style="fill: var(--s-blue); stroke: var(--s-card); stroke-width: 1.8" />
    <text id="llmd-pkt-txt" class="mono" x="0" y="4" text-anchor="middle" font-size="11.5" font-weight="800" style="fill: var(--s-card)">turn #8</text>
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

    ctx.later(100, () => pop(ctx.el("llmd-demo"), "translateX(-20px)"));
    ctx.later(340, () => pop(ctx.el("llmd-s1"), "translateX(20px)"));
    ctx.later(540, () => pop(ctx.el("llmd-s2"), "translateX(20px)"));
    ctx.later(740, () => pop(ctx.el("llmd-s3"), "translateX(20px)"));
    ctx.later(960, () => pop(ctx.el("llmd-bot"), "translateY(14px)"));

    const cards = [ctx.el("st-card-0"), ctx.el("st-card-1"), ctx.el("st-card-2")];
    const reps = [ctx.el("sim-rep-0"), ctx.el("sim-rep-1"), ctx.el("sim-rep-2")];
    const pillBg = ctx.el("sim-pill-bg");
    const pillTxt = ctx.el("sim-pill-txt");
    const kpi = ctx.el("sim-kpi");
    const meterFill = ctx.el("sim-meter-fill");
    const meterLbl = ctx.el("sim-meter-lbl");
    const tag0 = ctx.el("sim-tag-0");

    const setStage = (idx) => {
      cards.forEach((c, i) => {
        c.style.strokeWidth = i === idx ? "4.5" : "2";
      });
      reps.forEach((r) => {
        r.style.stroke = "var(--s-border)";
        r.style.strokeWidth = "1.8";
      });

      if (idx === 0) {
        pillBg.style.fill = "var(--s-red)";
        pillTxt.textContent = "STAGE 1 · K8S ROUND-ROBIN";
        kpi.textContent = "KV Hit: ~30% · 1.0x tok/s";
        kpi.style.fill = "var(--s-red-dark)";
        meterFill.setAttribute("width", "210");
        meterFill.style.fill = "var(--s-red)";
        meterLbl.textContent = "Cold Prefill · 1.0x";
        tag0.textContent = "COLD MISS";
        tag0.style.fill = "var(--s-red-dark)";
        reps[0].style.stroke = "var(--s-red)";
        reps[0].style.strokeWidth = "3";
        ctx.movePkt("llmd-pkt", "llmd-pkt-bg", "llmd-pkt-txt", "cold miss", "var(--s-red)", "var(--s-card)", 312, 400, 548, 326, 120);
      } else if (idx === 1) {
        pillBg.style.fill = "var(--s-blue)";
        pillTxt.textContent = "STAGE 2 · LLM-D CACHE ROUTER";
        kpi.textContent = "KV Hit: 94% · ~2x tok/s · -50% TTFT";
        kpi.style.fill = "var(--s-blue-dark)";
        meterFill.setAttribute("width", "490");
        meterFill.style.fill = "var(--s-blue)";
        meterLbl.textContent = "~2x Tok/s · -50% TTFT";
        tag0.textContent = "WARM KV";
        tag0.style.fill = "var(--s-blue-dark)";
        reps[1].style.stroke = "var(--s-blue)";
        reps[1].style.strokeWidth = "3";
        reps[2].style.stroke = "var(--s-blue)";
        ctx.movePkt("llmd-pkt", "llmd-pkt-bg", "llmd-pkt-txt", "sticky KV", "var(--s-blue)", "var(--s-card)", 312, 400, 548, 400, 120);
      } else {
        pillBg.style.fill = "var(--s-green)";
        pillTxt.textContent = "STAGE 3 · LLM-D FLOW CONTROL";
        kpi.textContent = "Pro Lane: ~7x Faster QoS";
        kpi.style.fill = "var(--s-green-dark)";
        meterFill.setAttribute("width", "668");
        meterFill.style.fill = "var(--s-green)";
        meterLbl.textContent = "~7x Faster Pro QoS";
        tag0.textContent = "PRO LANE";
        tag0.style.fill = "var(--s-green-dark)";
        reps[0].style.stroke = "var(--s-green)";
        reps[0].style.strokeWidth = "3";
        reps[1].style.stroke = "var(--s-green)";
        ctx.movePkt("llmd-pkt", "llmd-pkt-bg", "llmd-pkt-txt", "Pro fast-lane", "var(--s-green)", "var(--s-card)", 312, 400, 548, 326, 128);
      }

      ctx.later(1050, () => {
        ctx.el("llmd-pkt").style.opacity = "0";
      });
    };

    let stageIdx = 0;
    ctx.later(1300, () => {
      setStage(0);
      ctx.every(3200, () => {
        stageIdx = (stageIdx + 1) % 3;
        setStage(stageIdx);
      });
    });
  }
};
