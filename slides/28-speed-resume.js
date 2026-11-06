export default {
  chapter: 5,
  short: "28. Speed: Resume",
  speaker: "DIMA",
  kicker: "GOAL: SPEED · SUB-SECOND WAKEUP",
  title: "Goal: Speed — On-Demand Wakeup (Resume)",
  accent: "var(--s-blue)",
  headline: "1. Holds request -> 2. Resume (ateapi) -> 3. Restore state (~100ms) -> 4. Forward traffic",
  body1: "Triggered automatically when HTTP hits Ingress Gateway (Envoy) or explicitly via gRPC.",
  body2: "Restores Snapshot into an already-warm Worker slot and streams the held request with zero cold start!",
  notes: "That brings us to Speed: if idle actors are removed from CPU, how do we put them back on CPU fast enough that nobody notices? A resume can be triggered automatically when traffic hits the Envoy ingress gateway — which holds the request while calling Resume on ateapi — or explicitly via gRPC. The Worker restores state from the snapshot and forwards the held traffic immediately.",
  svg: `
  <g id="s35-call-1" class="fade-group">
    <rect x="100" y="302" width="344" height="68" rx="14" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.2" />
    <text x="272" y="344" text-anchor="middle" font-size="22" font-weight="700">1. Holds request</text>
  </g>
  <rect id="s35-ing-box" class="smooth-box" x="100" y="396" width="344" height="152" rx="6" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2.6" />
  <text x="272" y="464" text-anchor="middle" font-size="27" font-weight="700" style="fill: var(--s-green-dark)">Ingress Gateway</text>
  <text id="s35-ing-sub" x="272" y="502" text-anchor="middle" font-size="21" style="fill: var(--s-muted)">(Envoy)</text>
  <g id="s35-call-2" class="fade-group">
    <rect x="352" y="190" width="190" height="64" rx="14" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.2" />
    <text x="447" y="230" text-anchor="middle" font-size="21" font-weight="700">2. Resume</text>
  </g>
  <rect x="590" y="164" width="364" height="118" rx="6" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2.6" />
  <text x="772" y="232" text-anchor="middle" font-size="28" font-weight="700" style="fill: var(--s-green-dark)">ateapi (gRPC)</text>
  <line x1="444" y1="422" x2="586" y2="232" stroke="#1e293b" stroke-width="3.8" marker-end="url(#arr-dark)" />
  <line x1="954" y1="224" x2="1072" y2="294" stroke="#1e293b" stroke-width="3.8" marker-end="url(#arr-dark)" />
  <rect x="1078" y="206" width="444" height="366" rx="6" style="fill: var(--s-blue-box); stroke: var(--s-blue); stroke-width: 2.6" />
  <text x="1300" y="250" text-anchor="middle" font-size="28" font-weight="700">Worker</text>
  <rect x="1110" y="276" width="182" height="102" rx="6" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.2" />
  <text x="1201" y="322" text-anchor="middle" font-size="21" font-weight="700">Actor 1</text>
  <text x="1201" y="350" text-anchor="middle" font-size="16" style="fill: var(--s-muted)">Running</text>
  <rect x="1308" y="276" width="182" height="102" rx="6" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.2" />
  <text x="1399" y="322" text-anchor="middle" font-size="21" font-weight="700">Actor 2</text>
  <text x="1399" y="350" text-anchor="middle" font-size="16" style="fill: var(--s-muted)">Running</text>
  <rect id="s35-a3-box" class="smooth-box" x="1110" y="398" width="380" height="148" rx="6" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.8" />
  <text id="s35-a3-title" x="1300" y="466" text-anchor="middle" font-size="26" font-weight="700">Actor 3 (Resumed)</text>
  <text id="s35-a3-sub" x="1300" y="502" text-anchor="middle" font-size="19.5" font-weight="600" style="fill: var(--s-purple)">Ready for traffic</text>
  <g id="s35-call-3" class="fade-group">
    <rect x="844" y="604" width="268" height="62" rx="14" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.2" />
    <text x="978" y="643" text-anchor="middle" font-size="21" font-weight="700">3. Restore state</text>
  </g>
  <path d="M 1140 604 C 1140 584, 1460 584, 1460 604 L 1460 662 C 1460 682, 1140 682, 1140 662 Z" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.5" />
  <ellipse cx="1300" cy="604" rx="160" ry="14" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.5" />
  <text x="1300" y="648" text-anchor="middle" font-size="24" font-weight="700">Snapshot</text>
  <line x1="1300" y1="590" x2="1300" y2="552" stroke="#e37400" stroke-width="4" marker-end="url(#arr-amber)" />
  <g id="s35-call-4" class="fade-group">
    <rect x="610" y="396" width="322" height="64" rx="14" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.2" />
    <text x="771" y="436" text-anchor="middle" font-size="21" font-weight="700">4. Forward traffic</text>
  </g>
  <line id="s35-stream-arr" x1="446" y1="476" x2="1104" y2="476" stroke="#1e8e3e" stroke-width="5" marker-end="url(#arr-green)" />
  <g id="s35-pkt" class="mover" style="opacity: 0; transform: translate(272px, 476px)">
    <rect id="s35-pkt-bg" x="-86" y="-19" width="172" height="38" rx="19" style="fill: var(--s-amber); stroke: #ffffff; stroke-width: 2" />
    <text id="s35-pkt-txt" x="0" y="5" text-anchor="middle" font-size="14.5" font-weight="700" class="mono" style="fill: #1e293b">HTTP Request</text>
  </g>
  `,
  animate: (ctx) => {
    const a3Box = ctx.el("s35-a3-box");
    const a3Title = ctx.el("s35-a3-title");
    const a3Sub = ctx.el("s35-a3-sub");
    const ingSub = ctx.el("s35-ing-sub");
    const streamArr = ctx.el("s35-stream-arr");
    const c1 = ctx.el("s35-call-1");
    const c2 = ctx.el("s35-call-2");
    const c3 = ctx.el("s35-call-3");
    const c4 = ctx.el("s35-call-4");

    const runS35 = () => {
      a3Box.style.fill = "var(--s-slot-fill)";
      a3Box.style.strokeDasharray = "9 6";
      a3Title.textContent = "Actor 3 (Suspended)";
      a3Sub.textContent = "Waking onto warm Worker...";
      a3Sub.style.fill = "var(--s-muted)";
      ingSub.textContent = "(Envoy · Holding HTTP)";
      streamArr.classList.remove("flow-dash");

      c1.style.opacity = "1";
      c2.style.opacity = "0.28";
      c3.style.opacity = "0.28";
      c4.style.opacity = "0.28";
      ctx.el("s35-pkt").style.opacity = "0";

      ctx.later(650, () => {
        c2.style.opacity = "1";
        ctx.movePkt("s35-pkt", "s35-pkt-bg", "s35-pkt-txt", "2. Resume RPC", "#fbbc04", "#1e293b", 444, 390, 772, 224, 162);
      });

      ctx.later(1380, () => {
        c3.style.opacity = "1";
        ctx.movePkt("s35-pkt", "s35-pkt-bg", "s35-pkt-txt", "3. Restore ~100ms", "var(--s-amber)", "#1e293b", 1300, 610, 1300, 480, 178);
      });

      ctx.later(2120, () => {
        a3Box.style.fill = "var(--s-purple-fill)";
        a3Box.style.strokeDasharray = "none";
        a3Title.textContent = "Actor 3 (Resumed)";
        a3Sub.textContent = "Ready for traffic";
        a3Sub.style.fill = "var(--s-purple)";
        ingSub.textContent = "(Envoy · Streaming!)";
        c4.style.opacity = "1";
        streamArr.classList.add("flow-dash");
        ctx.movePkt("s35-pkt", "s35-pkt-bg", "s35-pkt-txt", "4. Forward HTTP", "var(--s-green)", "#ffffff", 450, 476, 1140, 476, 172);
      });

      ctx.later(3050, () => {
        ctx.el("s35-pkt").style.opacity = "0";
        streamArr.classList.remove("flow-dash");
      });
    };
    runS35();
    ctx.every(4000, runS35);
  }
};
