export default {
  chapter: 4,
  short: "21. Term: Actor",
  speaker: "DIMA",
  kicker: "TERMINOLOGY · 1 OF 5",
  title: "Actor: one agent session",
  accent: "var(--s-purple)",
  headline: "Actor is the main thing you run on Substrate",
  body1: "It covers agents, sandboxed environments, tools, and so on.",
  body2: "Think of one Actor as one agent session.",
  notes: "Thanks, Tim. First, Actor:\nThis is a sort of stand-in term to cover all the things that can run on Substrate\nThink agents, sandboxed environments, tools, etc.\nThis is the MAIN abstraction in Substrate\nYou can think of an Actor as a single agent session",
  svg: `
  <!-- Terminology progress -->
  <rect x="64" y="176" width="272" height="46" rx="23" style="fill: var(--s-purple)" />
  <text x="200" y="206" text-anchor="middle" font-size="19" font-weight="800" style="fill: var(--s-card)">Actor</text>
  <rect x="364" y="176" width="272" height="46" rx="23" style="fill: none; stroke: var(--s-border); stroke-width: 1.4; stroke-dasharray: 6 5" />
  <text x="500" y="206" text-anchor="middle" font-size="18" font-weight="700" style="fill: var(--s-muted); opacity: 0.55">ActorTemplate</text>
  <rect x="664" y="176" width="272" height="46" rx="23" style="fill: none; stroke: var(--s-border); stroke-width: 1.4; stroke-dasharray: 6 5" />
  <text x="800" y="206" text-anchor="middle" font-size="18" font-weight="700" style="fill: var(--s-muted); opacity: 0.55">Worker</text>
  <rect x="964" y="176" width="272" height="46" rx="23" style="fill: none; stroke: var(--s-border); stroke-width: 1.4; stroke-dasharray: 6 5" />
  <text x="1100" y="206" text-anchor="middle" font-size="18" font-weight="700" style="fill: var(--s-muted); opacity: 0.55">Atelet</text>
  <rect x="1264" y="176" width="272" height="46" rx="23" style="fill: none; stroke: var(--s-border); stroke-width: 1.4; stroke-dasharray: 6 5" />
  <text x="1400" y="206" text-anchor="middle" font-size="18" font-weight="700" style="fill: var(--s-muted); opacity: 0.55">Atenet</text>

  <!-- One actor, many shapes -->
  <g id="tile" class="fade-group" style="opacity: 0">
    <rect x="560" y="280" width="480" height="380" rx="28" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 3" />

    <g id="ic-0" class="fade-group">
      <rect x="730" y="392" width="140" height="96" rx="24" style="fill: var(--s-purple)" />
      <polygon points="760,484 748,522 794,486" style="fill: var(--s-purple)" />
      <circle cx="770" cy="440" r="9" style="fill: var(--s-card)" />
      <circle cx="800" cy="440" r="9" style="fill: var(--s-card)" />
      <circle cx="830" cy="440" r="9" style="fill: var(--s-card)" />
    </g>
    <g id="ic-1" class="fade-group" style="opacity: 0">
      <rect x="735" y="385" width="130" height="130" rx="16" style="fill: none; stroke: var(--s-purple); stroke-width: 8" />
      <rect x="767" y="417" width="66" height="66" rx="8" style="fill: none; stroke: var(--s-purple); stroke-width: 4; stroke-dasharray: 8 6" />
    </g>
    <g id="ic-2" class="fade-group" style="opacity: 0">
      <g transform="rotate(-45 800 450)">
        <rect x="789" y="452" width="22" height="92" rx="11" style="fill: var(--s-purple)" />
        <path d="M 819.5 400.2 A 34 34 0 1 1 780.5 400.2" fill="none" style="stroke: var(--s-purple); stroke-width: 16" stroke-linecap="round" />
      </g>
    </g>

    <text id="cap" class="fade-group" x="800" y="610" text-anchor="middle" font-size="30" font-weight="700" style="fill: var(--s-purple-dark)">an agent</text>
  </g>

  <text id="tagline" class="fade-group" x="800" y="740" text-anchor="middle" font-size="26" style="fill: var(--s-muted); opacity: 0">The main thing you run on Substrate</text>
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

    ctx.later(150, () => pop(ctx.el("tile"), "scale(0.85)"));
    ctx.later(900, () => { ctx.el("tagline").style.opacity = "1"; });

    // An Actor can be an agent, a sandbox, or a tool: cycle through them
    const CAPTIONS = ["an agent", "a sandbox", "a tool"];
    const cap = ctx.el("cap");
    let cur = 0;
    ctx.later(1600, () => {
      ctx.every(1700, () => {
        const next = (cur + 1) % 3;
        ctx.el(`ic-${cur}`).style.opacity = "0";
        cap.style.opacity = "0";
        ctx.later(260, () => {
          pop(ctx.el(`ic-${next}`), "scale(0.7)");
          cap.textContent = CAPTIONS[next];
          cap.style.opacity = "1";
          cur = next;
        });
      });
    });
  }
};
