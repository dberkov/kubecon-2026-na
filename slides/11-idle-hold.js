export default {
  chapter: 1,
  short: "11. Idle Hold",
  speaker: "TIM",
  kicker: "THE 'JUST IN CASE' DILEMMA",
  title: "5. Waiting 'Just In Case' blocks resources",
  accent: "var(--s-amber)",
  headline: "Because Pod startup isn't free, teams keep idle Pods alive 'Just In Case'",
  body1: "Most teams prioritize UX over efficiency, setting idle timeouts from 30 seconds to 15+ minutes.",
  body2: "While waiting, CPU usage drops near zero — yet Reserved Memory & CPU remain 100% blocked.",
  notes: "Because pod startup is not free, the pod usually waits for another event Just In Case — from tens of seconds to tens of minutes. While it waits, the resources that pod consumes are blocked.",
  svg: `
  <g id="single-view" class="fade-group">
    <g id="k8s-cp" class="fade-group is-dim">
      <rect x="280" y="152" width="776" height="86" rx="14" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.5; stroke-dasharray: 6 5" />
      <text x="298" y="176" font-size="14" font-weight="700" style="fill: var(--s-muted)">KUBERNETES CONTROL PLANE (HOT PATH PER POD)</text>
      <g id="cp-0">
        <rect id="cp-box-0" x="298" y="188" width="116" height="36" rx="8" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 1.6" />
        <text x="356" y="211" font-size="13.5" font-weight="600" text-anchor="middle" class="mono">apiserver</text>
      </g>
      <line x1="416" y1="206" x2="434" y2="206" stroke="#64748b" stroke-width="2" marker-end="url(#arrow-muted)" />
      <g id="cp-1">
        <rect id="cp-box-1" x="438" y="188" width="168" height="36" rx="8" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 1.6" />
        <text x="522" y="211" font-size="13.5" font-weight="600" text-anchor="middle" class="mono">admission-control</text>
      </g>
      <line x1="608" y1="206" x2="626" y2="206" stroke="#64748b" stroke-width="2" marker-end="url(#arrow-muted)" />
      <g id="cp-2">
        <rect id="cp-box-2" x="630" y="188" width="116" height="36" rx="8" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 1.6" />
        <text x="688" y="211" font-size="13.5" font-weight="600" text-anchor="middle" class="mono">scheduler</text>
      </g>
      <line x1="748" y1="206" x2="766" y2="206" stroke="#64748b" stroke-width="2" marker-end="url(#arrow-muted)" />
      <g id="cp-3">
        <rect id="cp-box-3" x="770" y="188" width="116" height="36" rx="8" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 1.6" />
        <text x="828" y="211" font-size="13.5" font-weight="600" text-anchor="middle" class="mono">apiserver</text>
      </g>
      <line x1="888" y1="206" x2="906" y2="206" stroke="#64748b" stroke-width="2" marker-end="url(#arrow-muted)" />
      <g id="cp-4">
        <rect id="cp-box-4" x="910" y="188" width="126" height="36" rx="8" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 1.6" />
        <text x="973" y="211" font-size="13.5" font-weight="600" text-anchor="middle" class="mono">kubelet</text>
      </g>
      <path d="M 400 340 L 400 242" fill="none" stroke="#9334e6" stroke-width="2.5" stroke-dasharray="5 5" marker-end="url(#arrow-purple)" />
      <path d="M 973 240 L 973 292" fill="none" stroke="#1a73e8" stroke-width="2.5" stroke-dasharray="5 5" marker-end="url(#arrow-blue)" />
    </g>
    <g id="user-node">
      <rect x="64" y="340" width="164" height="164" rx="22" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.5" />
      <rect x="122" y="362" width="48" height="10" rx="4" style="fill: var(--s-amber)" />
      <rect x="106" y="370" width="80" height="68" rx="18" fill="#fbbc04" stroke="#e37400" stroke-width="2" />
      <circle cx="131" cy="398" r="5.5" fill="#1e293b" />
      <circle cx="161" cy="398" r="5.5" fill="#1e293b" />
      <circle cx="132.5" cy="396.5" r="1.8" fill="#ffffff" />
      <circle cx="162.5" cy="396.5" r="1.8" fill="#ffffff" />
      <path d="M 132 416 Q 146 428 160 416" fill="none" stroke="#1e293b" stroke-width="3.2" stroke-linecap="round" />
      <text x="146" y="468" font-size="20" font-weight="700" text-anchor="middle">User</text>
      <text id="user-sub" x="146" y="490" font-size="14" font-weight="600" text-anchor="middle" style="fill: var(--s-muted)">Opens chat UI</text>
    </g>
    <line x1="232" y1="422" x2="348" y2="422" stroke="#64748b" stroke-width="3" marker-end="url(#arrow-muted)" />
    <g id="svc-node">
      <rect x="356" y="340" width="236" height="164" rx="18" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.5" />
      <text x="474" y="412" font-size="23" font-weight="700" text-anchor="middle">Chat Agent</text>
      <text x="474" y="440" font-size="23" font-weight="700" text-anchor="middle">Service</text>
      <text x="474" y="474" font-size="14" font-weight="500" text-anchor="middle" style="fill: var(--s-muted)">Stateless front-end</text>
    </g>
    <g id="wire-svc-pod" class="fade-group">
      <line x1="596" y1="422" x2="708" y2="422" stroke="#64748b" stroke-width="3" marker-end="url(#arrow-muted)" />
    </g>
    <g id="pod-node" class="fade-group">
      <rect id="pod-outer" x="716" y="298" width="320" height="248" rx="18" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.5" />
      <text x="740" y="334" font-size="21" font-weight="700" style="fill: var(--s-blue)">K8s Pod</text>
      <text x="740" y="354" font-size="13" font-weight="600" style="fill: var(--s-muted)">Single-tenant sandbox</text>
      <rect id="pod-badge-bg" x="898" y="314" width="120" height="28" rx="14" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 1.5" />
      <text id="pod-badge-txt" x="958" y="333" font-size="13" font-weight="700" text-anchor="middle" class="mono" style="fill: var(--s-amber)">BOOTING</text>
      <rect id="agent-inner" x="740" y="372" width="272" height="104" rx="12" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
      <circle id="agent-dot" cx="772" cy="414" r="10" style="fill: var(--s-amber)" />
      <text x="794" y="421" font-size="22" font-weight="700">Chat Agent</text>
      <text id="agent-sub" x="762" y="454" font-size="14" font-weight="500" style="fill: var(--s-muted)">Pulling image &amp; starting runtime...</text>
      <rect x="740" y="494" width="272" height="34" rx="8" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.2" />
      <rect id="pod-prog-fill" x="742" y="496" width="0" height="30" rx="6" style="fill: var(--s-amber); opacity: 0.25; transition: width 0.2s linear" />
      <text id="pod-timer-txt" x="876" y="516" font-size="14" font-weight="700" text-anchor="middle" class="mono">Cold start: 0.0s</text>
    </g>
    <g id="state-node" class="fade-group is-hidden">
      <line x1="1040" y1="422" x2="1082" y2="422" stroke="#9334e6" stroke-width="2.5" marker-end="url(#arrow-purple)" />
      <path d="M 1090 382 C 1090 368, 1202 368, 1202 382 L 1202 462 C 1202 476, 1090 476, 1090 462 Z" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.2" />
      <ellipse cx="1146" cy="382" rx="56" ry="12" style="fill: var(--s-surface); stroke: var(--s-purple); stroke-width: 2.2" />
      <text x="1146" y="425" font-size="18" font-weight="700" text-anchor="middle">state</text>
      <text x="1146" y="446" font-size="13" font-weight="500" text-anchor="middle" style="fill: var(--s-muted)">chat history</text>
      <text x="1146" y="502" font-size="13" font-weight="600" text-anchor="middle" style="fill: var(--s-red)">/tmp &amp; RAM lost!</text>
    </g>
    <g id="turn-loop-badge" class="fade-group is-hidden">
      <rect x="535" y="252" width="230" height="34" rx="17" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 1.8" />
      <text id="turn-loop-txt" x="650" y="274" font-size="14" font-weight="700" text-anchor="middle" style="fill: var(--s-green)">↻ Multi-turn chat session</text>
    </g>
    <g id="packet" class="mover" style="opacity: 0; transform: translate(240px, 382px)">
      <rect id="packet-bg" x="-72" y="-22" width="144" height="40" rx="20" style="fill: var(--s-amber); stroke: #ffffff; stroke-width: 2" />
      <text id="packet-txt" x="0" y="4" font-size="15" font-weight="700" text-anchor="middle" class="mono" style="fill: #1e293b">New chat</text>
    </g>
  </g>
  <g id="telemetry-panel">
    <rect x="1228" y="148" width="308" height="518" rx="20" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.8" />
    <text id="gauge-title" x="1252" y="186" font-size="20" font-weight="700">Pod Resources</text>
    <text id="gauge-subtitle" x="1252" y="210" font-size="14" font-weight="500" style="fill: var(--s-muted)">Reserved vs. actually used</text>
    <rect x="1252" y="228" width="14" height="14" rx="3" style="fill: var(--s-res-bar); stroke: var(--s-res-stroke); stroke-width: 1.2" />
    <text x="1272" y="240" font-size="14" font-weight="600" style="fill: var(--s-muted)">Reserved</text>
    <rect x="1368" y="228" width="14" height="14" rx="3" style="fill: var(--s-used-bar); stroke: var(--s-used-stroke); stroke-width: 1.2" />
    <text x="1388" y="240" font-size="14" font-weight="600" style="fill: var(--s-muted)">Used</text>
    <line x1="1252" y1="286" x2="1512" y2="286" style="stroke: var(--s-border); stroke-width: 1.5; stroke-dasharray: 5 5" />
    <text x="1512" y="276" font-size="12" font-weight="700" text-anchor="end" style="fill: var(--s-muted)">CAPACITY</text>
    <g id="waste-overlay" class="fade-group">
      <text x="1252" y="276" font-size="12" font-weight="700" style="fill: var(--s-red)">⚠ IDLE WASTE</text>
      <rect id="waste-box-cpu" x="1318" y="378" width="44" height="178" rx="4" fill="url(#waste-hatch)" stroke="#d93025" stroke-width="1.2" stroke-dasharray="4 3" />
      <rect id="waste-box-mem" x="1448" y="356" width="44" height="18" rx="4" fill="url(#waste-hatch)" stroke="#d93025" stroke-width="1.2" stroke-dasharray="4 3" />
    </g>
    <rect id="bar-cpu-res" class="bar-rect" x="1268" y="568" width="44" height="2" rx="5" style="fill: var(--s-res-bar); stroke: var(--s-res-stroke); stroke-width: 1.5" />
    <rect id="bar-cpu-used" class="bar-rect" x="1318" y="568" width="44" height="2" rx="5" style="fill: var(--s-used-bar); stroke: var(--s-used-stroke); stroke-width: 1.5" />
    <rect id="bar-mem-res" class="bar-rect" x="1398" y="568" width="44" height="2" rx="5" style="fill: var(--s-res-bar); stroke: var(--s-res-stroke); stroke-width: 1.5" />
    <rect id="bar-mem-used" class="bar-rect" x="1448" y="568" width="44" height="2" rx="5" style="fill: var(--s-used-bar); stroke: var(--s-used-stroke); stroke-width: 1.5" />
    <line x1="1252" y1="568" x2="1512" y2="568" style="stroke: var(--s-muted); stroke-width: 2" />
    <text x="1315" y="596" font-size="16" font-weight="700" text-anchor="middle">CPU</text>
    <text x="1445" y="596" font-size="16" font-weight="700" text-anchor="middle">Memory</text>
    <text id="gauge-caption" x="1382" y="636" font-size="14" font-weight="600" text-anchor="middle" style="fill: var(--s-muted)">No pod allocated yet</text>
  </g>
  `,
  animate: (ctx) => {
    ctx.el("gauge-title").textContent = "Pod Resources";
    ctx.el("gauge-subtitle").textContent = "Idle 'Just In Case' tax";
    ctx.el("gauge-caption").textContent = "Reserved stays high · Used ~2%!";
    ctx.highlightCpBox(4);
    ctx.stylePodState("idle");
    ctx.el("user-sub").textContent = "Stepped away ☕";
    const progFill = ctx.el("pod-prog-fill");
    progFill.style.fill = "var(--s-amber)";

    let mins = 1;
    const tickIdle = () => {
      const pct = mins / 15;
      progFill.setAttribute("width", String(Math.round(268 * pct)));
      ctx.el("pod-timer-txt").textContent = `Idle TTL: ${String(mins).padStart(2, "0")}m 00s / 15m 00s`;
      ctx.setBars(68, 2 + Math.round(Math.random() * 2), 76, 70);
      mins = mins >= 14 ? 1 : mins + 1;
    };
    tickIdle();
    ctx.every(450, tickIdle);
  }
};
