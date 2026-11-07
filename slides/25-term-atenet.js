export default {
  chapter: 4,
  short: "25. Term: Atenet",
  speaker: "DIMA",
  kicker: "TERMINOLOGY · 5 OF 5",
  title: "Atenet: traffic in, traffic out",
  accent: "var(--s-green)",
  headline: "Atenet is Substrate's networking layer: one gateway in, one gateway out",
  body1: "atenet-router wakes a sleeping actor when a request arrives and routes it to the right worker.",
  body2: "atenet-egress checks every outbound call against policy and injects credentials outside the sandbox.",
  notes: "Fifth, Atenet:\nThis is the networking layer of Substrate\nIt has two parts\natenet-router sits in front of the actors\nWhen a request comes in for a sleeping actor, it wakes the actor up and routes the traffic to the right worker\natenet-egress sits on the way out\nEvery outbound call goes through it: it checks the actor's egress policy and can inject credentials\nSo secrets never live inside the sandbox\nNow, let’s look at how those pieces fit together (Handoff to Tim)",
  svg: `
  <!-- Terminology progress -->
  <rect x="64" y="176" width="272" height="46" rx="23" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.4" />
  <text x="200" y="206" text-anchor="middle" font-size="18" font-weight="700" style="fill: var(--s-muted)">✓ Actor</text>
  <rect x="364" y="176" width="272" height="46" rx="23" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.4" />
  <text x="500" y="206" text-anchor="middle" font-size="18" font-weight="700" style="fill: var(--s-muted)">✓ ActorTemplate</text>
  <rect x="664" y="176" width="272" height="46" rx="23" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.4" />
  <text x="800" y="206" text-anchor="middle" font-size="18" font-weight="700" style="fill: var(--s-muted)">✓ Worker</text>
  <rect x="964" y="176" width="272" height="46" rx="23" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.4" />
  <text x="1100" y="206" text-anchor="middle" font-size="18" font-weight="700" style="fill: var(--s-muted)">✓ Atelet</text>
  <rect x="1264" y="176" width="272" height="46" rx="23" style="fill: var(--s-green)" />
  <text x="1400" y="206" text-anchor="middle" font-size="19" font-weight="800" style="fill: var(--s-card)">Atenet</text>

  <text x="440" y="340" text-anchor="middle" font-size="15" font-weight="800" letter-spacing="1.5" style="fill: var(--s-muted)">TRAFFIC IN</text>
  <text x="1160" y="340" text-anchor="middle" font-size="15" font-weight="800" letter-spacing="1.5" style="fill: var(--s-muted)">TRAFFIC OUT</text>

  <!-- Wires -->
  <line x1="244" y1="470" x2="290" y2="470" style="stroke: var(--s-border); stroke-width: 3" />
  <line x1="590" y1="470" x2="640" y2="470" style="stroke: var(--s-border); stroke-width: 3" />
  <line x1="960" y1="470" x2="1010" y2="470" style="stroke: var(--s-border); stroke-width: 3" />
  <line x1="1310" y1="450" x2="1356" y2="428" style="stroke: var(--s-border); stroke-width: 3" />
  <line x1="1310" y1="500" x2="1356" y2="572" style="stroke: var(--s-border); stroke-width: 3" />

  <!-- Users -->
  <rect x="64" y="390" width="180" height="160" rx="18" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 2" />
  <circle cx="154" cy="446" r="18" style="fill: var(--s-muted)" />
  <rect x="128" y="470" width="52" height="26" rx="13" style="fill: var(--s-muted)" />
  <text x="154" y="530" text-anchor="middle" font-size="18" font-weight="700" style="fill: var(--s-muted)">users</text>

  <!-- atenet-router -->
  <rect id="rt" class="smooth-box" x="290" y="360" width="300" height="320" rx="20" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 3" />
  <text x="440" y="414" text-anchor="middle" font-size="25" font-weight="800" class="mono" style="fill: var(--s-green-dark)">atenet-router</text>
  <g id="rt-c0" class="fade-group" style="opacity: 0.35">
    <rect x="316" y="512" width="248" height="56" rx="12" style="fill: var(--s-card); stroke: var(--s-green); stroke-width: 1.6" />
    <text x="440" y="547" text-anchor="middle" font-size="19" font-weight="700">wakes the actor</text>
  </g>
  <g id="rt-c1" class="fade-group" style="opacity: 0.35">
    <rect x="316" y="584" width="248" height="56" rx="12" style="fill: var(--s-card); stroke: var(--s-green); stroke-width: 1.6" />
    <text x="440" y="619" text-anchor="middle" font-size="19" font-weight="700">routes to its worker</text>
  </g>

  <!-- Worker with a sandboxed actor -->
  <rect x="640" y="330" width="320" height="340" rx="20" style="fill: var(--s-blue-box); stroke: var(--s-blue); stroke-width: 2.2" />
  <text x="664" y="368" font-size="20" font-weight="800">worker</text>
  <rect x="680" y="392" width="240" height="242" rx="16" style="fill: var(--s-card); stroke: var(--s-red); stroke-width: 2.4" />
  <text x="800" y="420" text-anchor="middle" font-size="13" font-weight="800" letter-spacing="1.5" style="fill: var(--s-red-dark)">SANDBOX</text>
  <rect id="act" class="smooth-box" x="720" y="440" width="160" height="164" rx="14" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 2.4; stroke-dasharray: 8 5" />
  <circle id="act-head" class="smooth-box" cx="800" cy="498" r="18" style="fill: var(--s-purple); opacity: 0.4" />
  <rect id="act-body" class="smooth-box" x="773" y="522" width="54" height="26" rx="13" style="fill: var(--s-purple); opacity: 0.4" />
  <text id="act-st" x="800" y="584" text-anchor="middle" font-size="16" font-weight="700" class="mono" style="fill: var(--s-muted)">asleep</text>

  <!-- atenet-egress -->
  <rect id="eg" class="smooth-box" x="1010" y="360" width="300" height="320" rx="20" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 3" />
  <text x="1160" y="414" text-anchor="middle" font-size="25" font-weight="800" class="mono" style="fill: var(--s-green-dark)">atenet-egress</text>
  <g id="eg-c0" class="fade-group" style="opacity: 0.35">
    <rect x="1036" y="512" width="248" height="56" rx="12" style="fill: var(--s-card); stroke: var(--s-green); stroke-width: 1.6" />
    <text x="1160" y="547" text-anchor="middle" font-size="19" font-weight="700">checks policy</text>
  </g>
  <g id="eg-c1" class="fade-group" style="opacity: 0.35">
    <rect x="1036" y="584" width="248" height="56" rx="12" style="fill: var(--s-card); stroke: var(--s-green); stroke-width: 1.6" />
    <text x="1160" y="619" text-anchor="middle" font-size="19" font-weight="700">adds credentials</text>
  </g>

  <!-- Outside world -->
  <rect x="1356" y="384" width="180" height="88" rx="16" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 2" />
  <text x="1446" y="435" text-anchor="middle" font-size="18" font-weight="700" class="mono">github.com</text>
  <rect x="1356" y="528" width="180" height="88" rx="16" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 2" />
  <text x="1446" y="579" text-anchor="middle" font-size="18" font-weight="700" class="mono">evil.site</text>
  <g id="blk" class="fade-group" style="opacity: 0">
    <circle cx="1334" cy="536" r="20" style="fill: var(--s-red)" />
    <line x1="1325" y1="527" x2="1343" y2="545" style="stroke: var(--s-card); stroke-width: 4" stroke-linecap="round" />
    <line x1="1343" y1="527" x2="1325" y2="545" style="stroke: var(--s-card); stroke-width: 4" stroke-linecap="round" />
  </g>

  <g id="pkt" class="mover" style="opacity: 0; transform: translate(0px, 0px)">
    <rect id="pkt-bg" x="-80" y="-19" width="160" height="38" rx="19" style="fill: var(--s-amber); stroke: #ffffff; stroke-width: 2" />
    <text id="pkt-txt" x="0" y="5" text-anchor="middle" font-size="14.5" font-weight="700" class="mono" style="fill: #1e293b">request</text>
  </g>
  `,
  animate: (ctx) => {
    ctx.el("bottom-callout").classList.add("is-hidden");

    const act = ctx.el("act");
    const head = ctx.el("act-head");
    const body = ctx.el("act-body");
    const st = ctx.el("act-st");
    const chips = ["rt-c0", "rt-c1", "eg-c0", "eg-c1"];
    const light = (id) => { ctx.el(id).style.opacity = "1"; };
    const pulse = (id) => {
      const box = ctx.el(id);
      box.style.strokeWidth = "5";
      ctx.later(420, () => { box.style.strokeWidth = "3"; });
    };
    // PACE scales the whole sequence (1 = original speed, higher = slower)
    const PACE = 1.5;
    const at = (ms, fn) => ctx.later(Math.round(ms * PACE), fn);
    const send = (label, fill, txt, x1, y1, x2, y2) => {
      ctx.movePkt("pkt", "pkt-bg", "pkt-txt", label, fill, txt, x1, y1, x2, y2, 160);
      // Stretch the glide to match PACE (overrides movePkt's default 0.65s before the browser styles it)
      ctx.el("pkt").style.transition = `transform ${(0.65 * PACE).toFixed(2)}s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease`;
    };
    const hide = () => { ctx.el("pkt").style.opacity = "0"; };

    const cycle = () => {
      // Reset: actor asleep, both gateways idle
      chips.forEach((id) => { ctx.el(id).style.opacity = "0.35"; });
      ctx.el("blk").style.opacity = "0";
      act.style.fill = "var(--s-slot-fill)";
      act.style.strokeDasharray = "8 5";
      head.style.opacity = "0.4";
      body.style.opacity = "0.4";
      st.textContent = "asleep";
      st.style.fill = "var(--s-muted)";

      // Traffic in: a request for a sleeping actor
      at(300, () => send("request", "var(--s-amber)", "#1e293b", 154, 470, 300, 470));
      at(1000, () => {
        pulse("rt");
        light("rt-c0");
        act.style.fill = "var(--s-purple-fill)";
        act.style.strokeDasharray = "none";
        head.style.opacity = "1";
        body.style.opacity = "1";
        st.textContent = "awake";
        st.style.fill = "var(--s-purple-dark)";
      });
      at(1700, () => { light("rt-c1"); send("request", "var(--s-amber)", "#1e293b", 580, 470, 800, 470); });
      at(2450, hide);

      // Traffic out: an allowed call gets a credential added on the way
      at(2900, () => send("github.com", "var(--s-blue)", "#ffffff", 800, 470, 1020, 470));
      at(3600, () => { pulse("eg"); light("eg-c0"); });
      at(4000, () => { light("eg-c1"); send("+ token", "var(--s-green)", "#ffffff", 1300, 450, 1446, 428); });
      at(4800, hide);

      // Traffic out: a call the policy doesn't allow gets stopped
      at(5200, () => send("evil.site", "var(--s-blue)", "#ffffff", 800, 470, 1020, 470));
      at(5900, () => { pulse("eg"); send("evil.site", "var(--s-red)", "#ffffff", 1300, 500, 1334, 536); });
      at(6500, () => { hide(); ctx.el("blk").style.opacity = "1"; });
    };
    cycle();
    ctx.every(Math.round(8600 * PACE), cycle);
  }
};
