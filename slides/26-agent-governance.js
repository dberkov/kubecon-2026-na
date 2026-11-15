export default {
  chapter: 5,
  short: "26. Agent Governance",
  speaker: "DIMA",
  kicker: "GOAL: SECURITY & GOVERNANCE",
  title: "Assume the agent is already compromised",
  accent: "var(--s-red)",
  headline: "Prompts and skills can be hijacked, so governance lives outside the sandbox",
  body1: "Sandbox holds zero raw secrets, intercepts syscalls and FS, and forces every call through external gates.",
  body2: "Open Substrate integrates 1P Gemini Agent Platform and 3P agentgateway and OpenShell.",
  notes: "Let's go deeper on that first goal: Security and Governance.\nWhen an agent reads untrusted repos, web pages, or MCP tool outputs, a single prompt injection can hijack the turn.\nSo our starting rule is simple: assume the agent inside the sandbox is already compromised.\nOn the left, the sandbox holds zero raw credentials, contains syscalls and filesystem access inside gVisor or a microVM, and forces every outbound call out of process.\nOn the right, four deterministic controls sit outside the agent loop so the model cannot talk its way past them:\nFirst, cryptographic Identity per actor via SPIFFE and scoped user OAuth.\nSecond, a Registry of verified agents, MCP tools, and skills.\nThird, deterministic Policy guardrails using CEL RBAC, semantic rules, and Model Armor DLP.\nFourth, an Agent Gateway that governs LLM, MCP, and A2A traffic and swaps real tokens on the wire.\nBest of all, Substrate is open: you can mix first-party Gemini Agent Platform controls with open-source CNCF agentgateway for traffic, LLM, and MCP/A2A routing, and OpenShell for sandbox syscall intercept, out-of-process supervisor, and cluster gateway.",
  svg: `
  <!-- Left: Compromised Sandbox Zone -->
  <g id="gov-sandbox" class="fade-group" style="opacity: 0">
    <rect x="64" y="154" width="552" height="456" rx="18" style="fill: var(--s-red-fill); stroke: var(--s-red); stroke-width: 2.6; stroke-dasharray: 10 6" />
    <circle cx="96" cy="186" r="8" style="fill: var(--s-red)" />
    <text x="114" y="192" font-size="15.5" font-weight="800" letter-spacing="1.2" style="fill: var(--s-red-dark)">AGENTS RUNNING IN A SANDBOX</text>

    <!-- Compromised turn box -->
    <rect x="88" y="210" width="504" height="114" rx="14" style="fill: var(--s-card); stroke: var(--s-red); stroke-width: 2" />
    <rect x="108" y="224" width="174" height="24" rx="12" style="fill: var(--s-red)" />
    <text x="195" y="241" text-anchor="middle" font-size="11.5" font-weight="800" letter-spacing="0.8" style="fill: var(--s-card)">COMPROMISED TURN</text>
    <text class="mono" x="572" y="241" text-anchor="end" font-size="12.5" font-weight="700" style="fill: var(--s-muted)">gVisor · microVM</text>
    <text x="108" y="276" font-size="19.5" font-weight="800">Untrusted or hijacked agent loop</text>
    <text x="108" y="304" font-size="14.5" style="fill: var(--s-muted)">Prompt injection · poisoned MCP output · rogue shell code</text>

    <!-- Invariant 1 -->
    <rect x="88" y="338" width="504" height="76" rx="12" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.6" />
    <rect x="88" y="338" width="8" height="76" rx="4" style="fill: var(--s-red)" />
    <text x="112" y="369" font-size="17" font-weight="800">Zero Raw Secrets in Env or Memory</text>
    <text x="112" y="395" font-size="14" style="fill: var(--s-muted)">Real API keys &amp; OAuth tokens never enter the sandbox</text>

    <!-- Invariant 2 -->
    <rect x="88" y="426" width="504" height="76" rx="12" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.6" />
    <rect x="88" y="426" width="8" height="76" rx="4" style="fill: var(--s-red)" />
    <text x="112" y="457" font-size="17" font-weight="800">Kernel &amp; Syscall Contained</text>
    <text x="112" y="483" font-size="14" style="fill: var(--s-muted)">gVisor / microVM isolation + syscall &amp; filesystem rules</text>

    <!-- Invariant 3 -->
    <rect x="88" y="514" width="504" height="76" rx="12" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.6" />
    <rect x="88" y="514" width="8" height="76" rx="4" style="fill: var(--s-amber)" />
    <text x="112" y="545" font-size="17" font-weight="800">All Calls Forced Out-of-Process →</text>
    <text x="112" y="571" font-size="14" style="fill: var(--s-muted)">Every LLM, MCP, A2A &amp; HTTP call mediated externally</text>
  </g>

  <!-- Center Zero-Trust Boundary & Wires -->
  <g id="gov-wire" class="fade-group" style="opacity: 0">
    <line x1="676" y1="188" x2="676" y2="598" style="stroke: var(--s-red); stroke-width: 2; stroke-dasharray: 6 5" />
    <rect x="622" y="158" width="108" height="26" rx="13" style="fill: var(--s-red)" />
    <text x="676" y="175" text-anchor="middle" font-size="11" font-weight="800" letter-spacing="0.8" style="fill: var(--s-card)">ZERO TRUST</text>

    <line x1="616" y1="382" x2="722" y2="382" style="stroke: var(--s-blue); stroke-width: 3.5" stroke-linecap="round" />
    <polygon points="720,372 736,382 720,392" style="fill: var(--s-blue)" />

    <line x1="676" y1="382" x2="676" y2="510" style="stroke: var(--s-red); stroke-width: 2.4; stroke-dasharray: 5 4" />
    <g id="gov-blk" class="fade-group" style="opacity: 0.35">
      <rect x="628" y="514" width="96" height="34" rx="17" style="fill: var(--s-red)" />
      <text class="mono" x="676" y="536" text-anchor="middle" font-size="13" font-weight="800" style="fill: var(--s-card)">✕ DENIED</text>
    </g>
  </g>

  <!-- Right: Enforced Outside the Agent Loop -->
  <g id="gov-gates" class="fade-group" style="opacity: 0">
    <rect x="736" y="154" width="800" height="456" rx="18" style="fill: var(--s-surface); stroke: var(--s-blue); stroke-width: 2.6" />
    <text x="764" y="192" font-size="15.5" font-weight="800" letter-spacing="1.1" style="fill: var(--s-blue-dark)">ENFORCED OUTSIDE THE AGENT LOOP (CANNOT TALK ITS WAY OUT)</text>

    <!-- Gate 1: Identity -->
    <rect id="gate-0" class="smooth-box" x="762" y="212" width="362" height="182" rx="14" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 2" />
    <rect x="782" y="228" width="132" height="26" rx="13" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 1.4" />
    <text x="848" y="246" text-anchor="middle" font-size="12" font-weight="800" letter-spacing="0.8" style="fill: var(--s-blue-dark)">1 · IDENTITY</text>
    <text x="782" y="282" font-size="20" font-weight="800">Per-Actor Cryptographic ID</text>
    <text x="782" y="312" font-size="14.5" style="fill: var(--s-muted)">SPIFFE workload ID per sandbox actor</text>
    <text x="782" y="336" font-size="14.5" style="fill: var(--s-muted)">Scoped user OAuth delegation (OBO)</text>
    <text class="mono" x="782" y="372" font-size="13" font-weight="700" style="fill: var(--s-blue-dark)">mTLS · SPIFFE · Scoped OAuth</text>

    <!-- Gate 2: Registry -->
    <rect id="gate-1" class="smooth-box" x="1146" y="212" width="364" height="182" rx="14" style="fill: var(--s-card); stroke: var(--s-purple); stroke-width: 2" />
    <rect x="1166" y="228" width="136" height="26" rx="13" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 1.4" />
    <text x="1234" y="246" text-anchor="middle" font-size="12" font-weight="800" letter-spacing="0.8" style="fill: var(--s-purple-dark)">2 · REGISTRY</text>
    <text x="1166" y="282" font-size="20" font-weight="800">Governed Agents &amp; Tools</text>
    <text x="1166" y="312" font-size="14.5" style="fill: var(--s-muted)">Catalogs verified agents, MCP tools &amp; skills</text>
    <text x="1166" y="336" font-size="14.5" style="fill: var(--s-muted)">Blocks unverified endpoints &amp; tool poisoning</text>
    <text class="mono" x="1166" y="372" font-size="13" font-weight="700" style="fill: var(--s-purple-dark)">Verified MCP · A2A · Skills</text>

    <!-- Gate 3: Policy -->
    <rect id="gate-2" class="smooth-box" x="762" y="410" width="362" height="182" rx="14" style="fill: var(--s-card); stroke: var(--s-amber); stroke-width: 2" />
    <rect x="782" y="426" width="124" height="26" rx="13" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 1.4" />
    <text x="844" y="444" text-anchor="middle" font-size="12" font-weight="800" letter-spacing="0.8" style="fill: var(--s-amber-dark)">3 · POLICY</text>
    <text x="782" y="480" font-size="20" font-weight="800">Deterministic Guardrails</text>
    <text x="782" y="510" font-size="14.5" style="fill: var(--s-muted)">L7 tool RBAC, CEL rules &amp; argument checks</text>
    <text x="782" y="534" font-size="14.5" style="fill: var(--s-muted)">Semantic policy &amp; Model Armor DLP scan</text>
    <text class="mono" x="782" y="570" font-size="13" font-weight="700" style="fill: var(--s-amber-dark)">CEL RBAC · Model Armor · Audit</text>

    <!-- Gate 4: Agent Gateway -->
    <rect id="gate-3" class="smooth-box" x="1146" y="410" width="364" height="182" rx="14" style="fill: var(--s-card); stroke: var(--s-green); stroke-width: 2" />
    <rect x="1166" y="426" width="184" height="26" rx="13" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 1.4" />
    <text x="1258" y="444" text-anchor="middle" font-size="12" font-weight="800" letter-spacing="0.8" style="fill: var(--s-green-dark)">4 · AGENT GATEWAY</text>
    <text x="1166" y="480" font-size="20" font-weight="800">Mediated Traffic &amp; Secrets</text>
    <text x="1166" y="510" font-size="14.5" style="fill: var(--s-muted)">Governs LLM, MCP &amp; A2A calls + budgets</text>
    <text x="1166" y="534" font-size="14.5" style="fill: var(--s-muted)">Swaps short-lived credentials on the wire</text>
    <text class="mono" x="1166" y="570" font-size="13" font-weight="700" style="fill: var(--s-green-dark)">Token Swap · Rate &amp; Cost Caps</text>
  </g>

  <!-- Bottom: Open Ecosystem (1P + 3P on Substrate) -->
  <g id="gov-eco" class="fade-group" style="opacity: 0">
    <rect x="64" y="628" width="1472" height="222" rx="18" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.8" />
    <text x="90" y="660" font-size="15" font-weight="800" letter-spacing="1.2" style="fill: var(--s-muted)">OPEN ECOSYSTEM · INTEGRATING SUBSTRATE WITH 1P &amp; 3P SOLUTIONS</text>

    <!-- Card 1: Gemini Agent Platform -->
    <rect x="88" y="676" width="458" height="156" rx="14" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 2" />
    <text x="112" y="710" font-size="20" font-weight="800" style="fill: var(--s-blue-dark)">Gemini Agent Platform</text>
    <text x="112" y="742" font-size="14.5"><tspan font-weight="700">Gateway &amp; ID:</tspan> <tspan style="fill: var(--s-muted)">Managed Agent Gateway, SPIFFE &amp; OAuth</tspan></text>
    <text x="112" y="772" font-size="14.5"><tspan font-weight="700">Registry:</tspan> <tspan style="fill: var(--s-muted)">Governed Agent, MCP Tool &amp; Skill catalog</tspan></text>
    <text x="112" y="802" font-size="14.5"><tspan font-weight="700">Policy:</tspan> <tspan style="fill: var(--s-muted)">Semantic policy &amp; Model Armor DLP</tspan></text>

    <!-- Card 2: agentgateway -->
    <a href="https://github.com/agentgateway/agentgateway#key-features" target="_blank" rel="noopener noreferrer">
      <rect x="571" y="676" width="458" height="156" rx="14" style="fill: var(--s-card); stroke: var(--s-purple); stroke-width: 2" />
      <text x="595" y="710" font-size="20" font-weight="800" style="fill: var(--s-purple-dark)">agentgateway</text>
      <text class="mono" x="1005" y="708" text-anchor="end" font-size="12" font-weight="700" style="fill: var(--s-purple)">github.com/agentgateway ↗</text>
      <text x="595" y="742" font-size="14.5"><tspan font-weight="700">Traffic Mgmt:</tspan> <tspan style="fill: var(--s-muted)">K8s Gateway API, CEL RBAC &amp; OTel</tspan></text>
      <text x="595" y="772" font-size="14.5"><tspan font-weight="700">LLM Gateway:</tspan> <tspan style="fill: var(--s-muted)">Model routing, budgets &amp; failover</tspan></text>
      <text x="595" y="802" font-size="14.5"><tspan font-weight="700">MCP/A2A Gateway:</tspan> <tspan style="fill: var(--s-muted)">Tool federation, OAuth &amp; A2A</tspan></text>
    </a>

    <!-- Card 3: OpenShell -->
    <rect x="1054" y="676" width="458" height="156" rx="14" style="fill: var(--s-card); stroke: var(--s-green); stroke-width: 2" />
    <text x="1078" y="710" font-size="20" font-weight="800" style="fill: var(--s-green-dark)">OpenShell</text>
    <text x="1078" y="742" font-size="14.5"><tspan font-weight="700">OpenShell Sandbox:</tspan> <tspan style="fill: var(--s-muted)">Syscall &amp; FS intercept</tspan></text>
    <text x="1078" y="772" font-size="14.5"><tspan font-weight="700">Supervisor:</tspan> <tspan style="fill: var(--s-muted)">Out-of-process egress &amp; token swap</tspan></text>
    <text x="1078" y="802" font-size="14.5"><tspan font-weight="700">Gateway:</tspan> <tspan style="fill: var(--s-muted)">Cluster policy plane &amp; mTLS identity</tspan></text>
  </g>

  <!-- Animated Packet -->
  <g id="gov-pkt" class="mover" style="opacity: 0; transform: translate(0px, 0px)">
    <rect id="gov-pkt-bg" x="-78" y="-18" width="156" height="36" rx="18" style="fill: var(--s-blue); stroke: var(--s-card); stroke-width: 2" />
    <text id="gov-pkt-txt" class="mono" x="0" y="5" text-anchor="middle" font-size="13.5" font-weight="800" style="fill: var(--s-card)">mcp:github</text>
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

    ctx.later(120, () => pop(ctx.el("gov-sandbox"), "translateX(-22px)"));
    ctx.later(420, () => { ctx.el("gov-wire").style.opacity = "1"; });
    ctx.later(560, () => pop(ctx.el("gov-gates"), "translateX(22px)"));
    ctx.later(920, () => pop(ctx.el("gov-eco"), "translateY(18px)"));

    const gates = [ctx.el("gate-0"), ctx.el("gate-1"), ctx.el("gate-2"), ctx.el("gate-3")];
    const resetGates = () => {
      gates.forEach((g) => { g.style.strokeWidth = "2"; });
      ctx.el("gov-blk").style.opacity = "0.35";
    };
    const pulseGate = (idx) => {
      gates.forEach((g, i) => { g.style.strokeWidth = i === idx ? "4.5" : "2"; });
    };
    const send = (label, fill, x1, y1, x2, y2) => {
      ctx.movePkt("gov-pkt", "gov-pkt-bg", "gov-pkt-txt", label, fill, "var(--s-card)", x1, y1, x2, y2, 156);
    };
    const hide = () => { ctx.el("gov-pkt").style.opacity = "0"; };

    const cycle = () => {
      resetGates();
      // Allowed governed MCP call: passes Identity -> Registry -> Policy -> Gateway (+ token)
      send("mcp:github.pr", "var(--s-blue)", 560, 382, 1028, 241);
      ctx.later(680, () => { pulseGate(0); send("SPIFFE verified", "var(--s-purple)", 1028, 241, 1414, 241); });
      ctx.later(1360, () => { pulseGate(1); send("CEL + DLP pass", "var(--s-amber)", 1414, 241, 1028, 439); });
      ctx.later(2040, () => { pulseGate(2); send("+ OAuth swapped", "var(--s-green)", 1028, 439, 1424, 439); });
      ctx.later(2720, () => { pulseGate(3); });
      ctx.later(3250, () => { hide(); resetGates(); });

      // Compromised exfil call: blocked deterministically at boundary
      ctx.later(3750, () => { send("exfil:evil.site", "var(--s-red)", 560, 382, 676, 382); });
      ctx.later(4450, () => {
        pulseGate(1);
        pulseGate(2);
        send("policy deny", "var(--s-red)", 676, 382, 676, 496);
      });
      ctx.later(5100, () => {
        hide();
        ctx.el("gov-blk").style.opacity = "1";
      });
      ctx.later(6100, resetGates);
    };

    ctx.later(1350, () => {
      cycle();
      ctx.every(6600, cycle);
    });
  }
};
