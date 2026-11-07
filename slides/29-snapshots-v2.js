export default {
  chapter: 5,
  short: "29. Wake Up Fast, Anywhere",
  speaker: "DIMA",
  kicker: "GOAL: SPEED",
  title: "Wake up fast, anywhere",
  accent: "var(--s-blue)",
  headline: "An actor's truth is its image and volumes; memory and the container layer are accelerators",
  body1: "On resume, every layer that still matches is reused. A new CPU skips memory; a new image keeps only volumes.",
  body2: "Snapshots sit in the node's local cache, then upload in the background. No room on that node? A new worker downloads it.",
  notes: "Let's zoom in on a snapshot. This is where Speed comes from\nAn actor's truth is small: its image and its volumes. Memory and the container layer are just accelerators\nOn resume, we reuse every layer that still matches\nNew CPU? Memory is skipped. New image? Only the volumes come back. Either way, the actor wakes up\nNow, where does the snapshot live?\nFirst it stays in a local cache on the node. Later, in the background, it's uploaded to durable storage\nOn resume, we go back to the same node if the snapshot is still in its local cache and the node has room. That's the fastest path\nOtherwise, we pick a new worker, and it downloads the snapshot from durable storage",
  svg: `
  <!-- ============ Panel 1: inside a snapshot (static) ============ -->
  <rect x="64" y="208" width="696" height="510" rx="20" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.8" />
  <text x="96" y="250" font-size="16" font-weight="800" letter-spacing="1.5" style="fill: var(--s-muted)">1 · INSIDE A SNAPSHOT</text>

  <g id="ly-m" class="fade-group" style="opacity: 0">
    <rect x="96" y="276" width="632" height="124" rx="16" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.4" />
    <text x="124" y="326" font-size="26" font-weight="800" style="fill: var(--s-purple-dark)">Memory</text>
    <text x="124" y="360" font-size="17" style="fill: var(--s-muted)">running state</text>
    <rect x="586" y="294" width="122" height="30" rx="15" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.6" />
    <text x="647" y="314" text-anchor="middle" font-size="14" font-weight="800" style="fill: var(--s-muted)">accelerator</text>
    <text x="392" y="367" text-anchor="end" font-size="14" font-weight="700" style="fill: var(--s-muted)">needs the same:</text>
    <rect x="400" y="348" width="120" height="28" rx="14" style="fill: var(--s-card); stroke: var(--s-purple); stroke-width: 1.4" />
    <text class="mono" x="460" y="367" text-anchor="middle" font-size="13" font-weight="800" style="fill: var(--s-purple-dark)">CPU</text>
    <rect x="526" y="348" width="80" height="28" rx="14" style="fill: var(--s-card); stroke: var(--s-purple); stroke-width: 1.4" />
    <text class="mono" x="566" y="367" text-anchor="middle" font-size="13" font-weight="800" style="fill: var(--s-purple-dark)">sandbox</text>
    <rect x="612" y="348" width="96" height="28" rx="14" style="fill: var(--s-card); stroke: var(--s-purple); stroke-width: 1.4" />
    <text class="mono" x="660" y="367" text-anchor="middle" font-size="13" font-weight="800" style="fill: var(--s-purple-dark)">image</text>
  </g>
  <g id="ly-c" class="fade-group" style="opacity: 0">
    <rect x="96" y="416" width="632" height="124" rx="16" style="fill: var(--s-blue-fill); stroke: var(--s-blue); stroke-width: 2.4" />
    <text x="124" y="466" font-size="26" font-weight="800" style="fill: var(--s-blue-dark)">Container layer</text>
    <text x="124" y="500" font-size="17" style="fill: var(--s-muted)">writes on top of the image</text>
    <rect x="586" y="434" width="122" height="30" rx="15" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 1.6" />
    <text x="647" y="454" text-anchor="middle" font-size="14" font-weight="800" style="fill: var(--s-muted)">accelerator</text>
    <text x="604" y="507" text-anchor="end" font-size="14" font-weight="700" style="fill: var(--s-muted)">needs the same:</text>
    <rect x="612" y="488" width="96" height="28" rx="14" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 1.4" />
    <text class="mono" x="660" y="507" text-anchor="middle" font-size="13" font-weight="800" style="fill: var(--s-blue-dark)">image</text>
  </g>
  <g id="ly-v" class="fade-group" style="opacity: 0">
    <rect x="96" y="556" width="632" height="124" rx="16" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.4" />
    <text x="124" y="606" font-size="26" font-weight="800" style="fill: var(--s-amber-dark)">Volumes</text>
    <text x="124" y="640" font-size="17" style="fill: var(--s-muted)">your data, like the home directory</text>
    <rect x="608" y="574" width="100" height="30" rx="15" style="fill: var(--s-green)" />
    <text x="658" y="594" text-anchor="middle" font-size="14" font-weight="800" style="fill: var(--s-card)">truth</text>
    <text x="708" y="647" text-anchor="end" font-size="14" font-weight="700" style="fill: var(--s-muted)">works anywhere</text>
  </g>

  <!-- ============ Panel 2: where it wakes up ============ -->
  <g id="right" class="fade-group" style="opacity: 0">
    <rect x="792" y="208" width="744" height="510" rx="20" style="fill: var(--s-surface); stroke: var(--s-border); stroke-width: 1.8" />
    <text x="824" y="250" font-size="16" font-weight="800" letter-spacing="1.5" style="fill: var(--s-muted)">2 · WHERE IT WAKES UP</text>

    <!-- node A -->
    <rect x="824" y="274" width="300" height="196" rx="16" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 2" />
    <text x="848" y="308" font-size="18" font-weight="800" style="fill: var(--s-muted)">node A</text>
    <rect x="848" y="334" width="116" height="110" rx="14" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.6; stroke-dasharray: 7 5; opacity: 0.6" />
    <g id="a-act" class="fade-group" style="opacity: 0">
      <rect x="848" y="334" width="116" height="110" rx="14" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.4" />
      <circle cx="906" cy="378" r="15" style="fill: var(--s-purple)" />
      <rect x="886" y="398" width="40" height="20" rx="10" style="fill: var(--s-purple)" />
    </g>
    <path d="M 994 350 V 420 A 55 11 0 0 0 1104 420 V 350" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.2" />
    <ellipse cx="1049" cy="350" rx="55" ry="11" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.2" />
    <text x="1049" y="454" text-anchor="middle" font-size="14" font-weight="800" style="fill: var(--s-amber-dark)">local cache</text>
      <g id="a-snap" class="fade-group" style="opacity: 0">
        <path d="M 1029 362 h 28 l 12 12 v 36 h -40 Z" style="fill: var(--s-amber); stroke: var(--s-amber-dark); stroke-width: 1.4" />
        <path d="M 1057 362 v 12 h 12" fill="none" style="stroke: var(--s-amber-dark); stroke-width: 1.4" />
        <text id="a-snap-v" x="1049" y="398" text-anchor="middle" font-size="16" font-weight="800" style="fill: var(--s-card)">v1</text>
      </g>

    <!-- durable storage -->
    <line x1="1104" y1="390" x2="1186" y2="390" style="stroke: var(--s-amber); stroke-width: 2.2; stroke-dasharray: 7 5" />
    <path d="M 1190 300 V 392 A 150 18 0 0 0 1490 392 V 300" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.4" />
    <ellipse cx="1340" cy="300" rx="150" ry="18" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.4" />
    <text x="1300" y="356" text-anchor="middle" font-size="19" font-weight="800" style="fill: var(--s-amber-dark)">durable storage</text>
      <g id="s-snap" class="fade-group" style="opacity: 0">
        <path d="M 1426 326 h 28 l 12 12 v 36 h -40 Z" style="fill: var(--s-amber); stroke: var(--s-amber-dark); stroke-width: 1.4" />
        <path d="M 1454 326 v 12 h 12" fill="none" style="stroke: var(--s-amber-dark); stroke-width: 1.4" />
        <text id="s-snap-v" x="1446" y="362" text-anchor="middle" font-size="16" font-weight="800" style="fill: var(--s-card)">v1</text>
      </g>
    <line x1="1415" y1="410" x2="1415" y2="496" style="stroke: var(--s-amber); stroke-width: 2.2; stroke-dasharray: 7 5" />

    <!-- node B -->
    <rect x="1190" y="500" width="300" height="196" rx="16" style="fill: var(--s-card); stroke: var(--s-border); stroke-width: 2" />
    <text x="1214" y="534" font-size="18" font-weight="800" style="fill: var(--s-muted)">node B</text>
    <rect x="1214" y="560" width="116" height="110" rx="14" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.6; stroke-dasharray: 7 5; opacity: 0.6" />
    <g id="b-act" class="fade-group" style="opacity: 0">
      <rect x="1214" y="560" width="116" height="110" rx="14" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.4" />
      <circle cx="1272" cy="604" r="15" style="fill: var(--s-purple)" />
      <rect x="1252" y="624" width="40" height="20" rx="10" style="fill: var(--s-purple)" />
    </g>
    <path d="M 1360 576 V 646 A 55 11 0 0 0 1470 646 V 576" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.2" />
    <ellipse cx="1415" cy="576" rx="55" ry="11" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.2" />
    <text x="1415" y="680" text-anchor="middle" font-size="14" font-weight="800" style="fill: var(--s-amber-dark)">local cache</text>
      <g id="b-snap" class="fade-group" style="opacity: 0">
        <path d="M 1395 588 h 28 l 12 12 v 36 h -40 Z" style="fill: var(--s-amber); stroke: var(--s-amber-dark); stroke-width: 1.4" />
        <path d="M 1423 588 v 12 h 12" fill="none" style="stroke: var(--s-amber-dark); stroke-width: 1.4" />
        <text id="b-snap-v" x="1415" y="624" text-anchor="middle" font-size="16" font-weight="800" style="fill: var(--s-card)">v1</text>
      </g>

    <!-- idle clock -->
    <g id="clock" class="fade-group" style="opacity: 0">
      <circle cx="858" cy="642" r="24" style="fill: var(--s-card); stroke: var(--s-muted); stroke-width: 2.4" />
      <line x1="858" y1="642" x2="858" y2="626" style="stroke: var(--s-muted); stroke-width: 2.4" stroke-linecap="round" />
      <line id="clk-hand" x1="858" y1="642" x2="858" y2="622" style="stroke: var(--s-red); stroke-width: 2.4" stroke-linecap="round" />
      <text id="clk-txt" class="mono" x="894" y="649" font-size="18" font-weight="800" style="fill: var(--s-text)">idle 0 min</text>
    </g>

    <!-- one caption at a time -->
    <text id="cap" class="fade-group" x="980" y="560" text-anchor="middle" font-size="21" font-weight="800" style="fill: var(--s-text); opacity: 0">running on node A</text>
  </g>

  <g id="pkt" class="mover" style="opacity: 0; transform: translate(0px, 0px)">
    <rect id="pkt-bg" x="-58" y="-17" width="116" height="34" rx="17" style="fill: var(--s-amber); stroke: #ffffff; stroke-width: 2" />
    <text id="pkt-txt" class="mono" x="0" y="5" text-anchor="middle" font-size="14" font-weight="700" style="fill: #1e293b">snapshot</text>
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

    // Panel 1: build the three layers bottom to top, then hold still
    ["v", "c", "m"].forEach((k, i) => ctx.later(200 + i * 260, () => pop(ctx.el(`ly-${k}`), "translateY(24px)")));
    ctx.later(1300, () => { ctx.el("right").style.opacity = "1"; });

    // Panel 2: one actor's life: local cache back and forth, then durable storage, then node B
    const send = (x1, y1, x2, y2) => {
      ctx.movePkt("pkt", "pkt-bg", "pkt-txt", "snapshot", "var(--s-amber)", "#1e293b", x1, y1, x2, y2, 116);
      ctx.el("pkt").style.transition = "transform 0.95s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease";
    };
    const hidePkt = () => { ctx.el("pkt").style.opacity = "0"; };
    const show = (id) => pop(ctx.el(id), "scale(0.7)");
    const hide = (id) => { ctx.el(id).style.opacity = "0"; };
    const caption = (text, color) => {
      const cap = ctx.el("cap");
      cap.style.opacity = "0";
      ctx.later(200, () => {
        cap.textContent = text;
        cap.style.fill = color || "var(--s-text)";
        cap.style.opacity = "1";
      });
    };
    // Anchor points: actor slot, local cache, durable storage
    const A_SLOT = [906, 389], A_CACHE = [1049, 405];
    const STORE = [1340, 400];
    const B_SLOT = [1272, 615], B_CACHE = [1415, 631];
    const move = (from, to) => send(from[0], from[1], to[0], to[1]);

    const clockHand = ctx.el("clk-hand");
    const clockTxt = ctx.el("clk-txt");
    const TO_UPLOAD = ["idle 0 min", "idle 1 min", "idle 3 min", "idle 5 min"];
    const TO_FREE = ["idle 5 min", "idle 10 min", "idle 20 min", "idle 30 min"];

    const setVer = (id, v) => { ctx.el(`${id}-v`).textContent = v; };
    const bump = (id, v) => { setVer(id, v); show(id); };
    const runClock = (ms, labels) => {
      show("clock");
      ctx.animateProgress(ms, (t) => {
        const ang = 3 * t * 2 * Math.PI;
        clockHand.setAttribute("x2", (858 + 20 * Math.sin(ang)).toFixed(1));
        clockHand.setAttribute("y2", (642 - 20 * Math.cos(ang)).toFixed(1));
        clockTxt.textContent = labels[Math.min(labels.length - 1, Math.floor(t * labels.length))];
      });
    };
    const moveV = (from, to, v) => {
      move(from, to);
      ctx.el("pkt-txt").textContent = `snapshot ${v}`;
    };

    const cycle = () => {
      ["a-snap", "b-snap", "a-act", "b-act", "clock"].forEach(hide);
      bump("s-snap", "v1");
      caption("v1 in durable storage", "var(--s-amber-dark)");

      // Resume on node A: download v1 into the local cache, then run
      ctx.later(1800, () => { moveV(STORE, A_CACHE, "v1"); caption("resume: v1 downloaded to node A", "var(--s-blue-dark)"); });
      ctx.later(2800, () => { hidePkt(); bump("a-snap", "v1"); });
      ctx.later(3400, () => moveV(A_CACHE, A_SLOT, "v1"));
      ctx.later(4400, () => { hidePkt(); show("a-act"); caption("running on node A", "var(--s-purple-dark)"); });

      // Suspend: v2 in the local cache, storage still has v1
      ctx.later(5800, () => { hide("a-act"); moveV(A_SLOT, A_CACHE, "v2"); caption("suspend: v2 local, v1 in storage", "var(--s-amber-dark)"); });
      ctx.later(6800, () => { hidePkt(); bump("a-snap", "v2"); });

      // Resume on the same node from local v2
      ctx.later(8000, () => { moveV(A_CACHE, A_SLOT, "v2"); caption("resume: v2 from local cache", "var(--s-green-dark)"); });
      ctx.later(9000, () => { hidePkt(); show("a-act"); });

      // Suspend: v3 local; after a while, v3 is uploaded
      ctx.later(10200, () => { hide("a-act"); moveV(A_SLOT, A_CACHE, "v3"); caption("suspend: v3 local, v1 in storage", "var(--s-amber-dark)"); });
      ctx.later(11200, () => { hidePkt(); bump("a-snap", "v3"); });
      ctx.later(11800, () => { runClock(1400, TO_UPLOAD); caption("idle on node A", "var(--s-text)"); });
      ctx.later(13400, () => { moveV(A_CACHE, STORE, "v3"); caption("uploaded: v3 in storage", "var(--s-amber-dark)"); });
      ctx.later(14400, () => { hidePkt(); bump("s-snap", "v3"); hide("clock"); });

      // Resume: same node again, from local v3
      ctx.later(15400, () => { moveV(A_CACHE, A_SLOT, "v3"); caption("resume: v3 from local cache", "var(--s-green-dark)"); });
      ctx.later(16400, () => { hidePkt(); show("a-act"); });

      // Suspend: v4 local, v3 in storage; later v4 is uploaded
      ctx.later(17400, () => { hide("a-act"); moveV(A_SLOT, A_CACHE, "v4"); caption("suspend: v4 local, v3 in storage", "var(--s-amber-dark)"); });
      ctx.later(18400, () => { hidePkt(); bump("a-snap", "v4"); });
      ctx.later(19000, () => { runClock(1400, TO_UPLOAD); caption("idle on node A", "var(--s-text)"); });
      ctx.later(20600, () => { moveV(A_CACHE, STORE, "v4"); caption("uploaded: v4 in both places", "var(--s-amber-dark)"); });
      ctx.later(21600, () => { hidePkt(); bump("s-snap", "v4"); });
      ctx.later(22200, () => { runClock(1400, TO_FREE); caption("idle on node A", "var(--s-text)"); });

      // Local copy freed: v4 only in storage
      ctx.later(23800, () => { hide("a-snap"); caption("local copy freed: storage only", "var(--s-text)"); });
      ctx.later(25000, () => hide("clock"));

      // Resume on node B: same as the start, just on another node
      ctx.later(25600, () => { moveV(STORE, B_CACHE, "v4"); caption("resume: v4 downloaded to node B", "var(--s-blue-dark)"); });
      ctx.later(26600, () => { hidePkt(); bump("b-snap", "v4"); });
      ctx.later(27200, () => moveV(B_CACHE, B_SLOT, "v4"));
      ctx.later(28200, () => { hidePkt(); show("b-act"); caption("running on node B: cycle repeats", "var(--s-purple-dark)"); });
    };
    ctx.later(1900, () => {
      cycle();
      ctx.every(31200, cycle);
    });
  }
};
