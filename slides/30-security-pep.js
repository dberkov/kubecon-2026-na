export default {
  chapter: 5,
  short: "30. Security: PEP",
  speaker: "DIMA",
  kicker: "GOAL: SECURITY · ZERO AMBIENT CREDENTIALS",
  title: "Goal: Security — Zero-Trust Sandbox & Gateways",
  accent: "var(--s-red)",
  headline: "No Direct Access · gVisor/uVM Sandbox · Credentials Injected Outside Actor in PEP",
  body1: "All ingress & egress traverse authenticated Envoy tunnels — Actors have zero open network access.",
  body2: "Zero secrets in Actor RAM or snapshots! Egress Gateway (PEP) injects tokens from Secret Store.",
  notes: "Finally, Security. Actors run untrusted code inside a gVisor or microVM sandbox with no direct network access — all ingress goes through the Envoy gateway over a tunnel. Most importantly, we store zero credentials inside the actor itself, so prompt injection cannot steal keys and snapshots never leak secrets. Outbound traffic tunnels to the Egress Gateway (PEP), which injects credentials from the Secret Store before forwarding to External APIs.",
  svg: `
  <rect x="64" y="232" width="300" height="68" rx="14" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.2" />
  <text x="214" y="274" text-anchor="middle" font-size="22" font-weight="700">No direct access</text>
  <rect x="72" y="338" width="284" height="176" rx="6" style="fill: var(--s-blue-box); stroke: var(--s-blue); stroke-width: 2.6" />
  <text x="214" y="416" text-anchor="middle" font-size="26" font-weight="700">Ingress Gateway</text>
  <text x="214" y="454" text-anchor="middle" font-size="21" style="fill: var(--s-muted)">(Envoy)</text>
  <text x="416" y="406" text-anchor="middle" font-size="20" style="fill: var(--s-muted)">tunnel</text>
  <line x1="358" y1="426" x2="472" y2="426" stroke="#1e293b" stroke-width="4" marker-end="url(#arr-dark)" />
  <rect x="480" y="268" width="440" height="316" rx="6" style="fill: var(--s-red-fill); stroke: var(--s-red); stroke-width: 2.8" />
  <text x="700" y="318" text-anchor="middle" font-size="28" font-weight="700" style="fill: var(--s-red)">gVisor / uVM Sandbox</text>
  <rect x="530" y="356" width="340" height="186" rx="6" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.4" />
  <text x="700" y="438" text-anchor="middle" font-size="29" font-weight="700">Actor</text>
  <text x="700" y="478" text-anchor="middle" font-size="20" font-weight="600" style="fill: var(--s-red)">No Credentials Inside</text>
  <text x="978" y="406" text-anchor="middle" font-size="20" style="fill: var(--s-muted)">tunnel</text>
  <line x1="922" y1="426" x2="1032" y2="426" stroke="#1e293b" stroke-width="4" marker-end="url(#arr-dark)" />
  <rect id="s37-inject-call" class="smooth-box" x="1024" y="232" width="320" height="68" rx="14" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.2" />
  <text x="1184" y="274" text-anchor="middle" font-size="22" font-weight="700">Injects credentials</text>
  <rect id="s37-pep-box" class="smooth-box" x="1040" y="338" width="288" height="176" rx="6" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2.6" />
  <text x="1184" y="416" text-anchor="middle" font-size="26" font-weight="700" style="fill: var(--s-green-dark)">Egress Gateway</text>
  <text x="1184" y="454" text-anchor="middle" font-size="21" style="fill: var(--s-muted)">(PEP)</text>
  <line x1="1184" y1="582" x2="1184" y2="520" stroke="#e37400" stroke-width="4" marker-end="url(#arr-amber)" />
  <path d="M 1064 596 C 1064 576, 1304 576, 1304 596 L 1304 656 C 1304 676, 1064 676, 1064 656 Z" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.5" />
  <ellipse cx="1184" cy="596" rx="120" ry="14" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.5" />
  <text x="1184" y="640" text-anchor="middle" font-size="23" font-weight="700">Secret Store</text>
  <line x1="1330" y1="426" x2="1384" y2="426" stroke="#1e293b" stroke-width="4" marker-end="url(#arr-dark)" />
  <rect x="1390" y="352" width="150" height="148" rx="6" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 2.4" />
  <text x="1465" y="416" text-anchor="middle" font-size="23" font-weight="700">External</text>
  <text x="1465" y="452" text-anchor="middle" font-size="23" font-weight="700">APIs</text>
  <g id="s37-pkt" class="mover" style="opacity: 0; transform: translate(700px, 426px)">
    <rect id="s37-pkt-bg" x="-92" y="-19" width="184" height="38" rx="19" style="fill: var(--s-amber); stroke: #ffffff; stroke-width: 2" />
    <text id="s37-pkt-txt" x="0" y="5" text-anchor="middle" font-size="14" font-weight="700" class="mono" style="fill: #1e293b">API Call (0 keys)</text>
  </g>

  <!-- HIDDEN: proposed to cut (covered by slides 24-25); discuss with Tim before removing -->
  <g id="hidden-overlay">
    <rect x="64" y="148" width="1472" height="656" rx="18" style="fill: var(--s-bg); opacity: 0.82" />
    <rect x="460" y="372" width="680" height="196" rx="24" style="fill: var(--s-card); stroke: var(--s-red); stroke-width: 3; stroke-dasharray: 12 8" />
    <text x="800" y="446" text-anchor="middle" font-size="48" font-weight="800" letter-spacing="8" style="fill: var(--s-red-dark)">HIDDEN</text>
    <text x="800" y="494" text-anchor="middle" font-size="21" font-weight="700" style="fill: var(--s-text)">Proposed to cut: already covered by slides 24 and 25</text>
    <text x="800" y="530" text-anchor="middle" font-size="18" style="fill: var(--s-muted)">Keep for now, discuss with Tim before removing</text>
  </g>
  `,
  animate: (ctx) => {
    ctx.el("bottom-callout").classList.add("is-hidden");
    const pepBox = ctx.el("s37-pep-box");
    const runS37 = () => {
      pepBox.style.strokeWidth = "2.6";
      ctx.movePkt("s37-pkt", "s37-pkt-bg", "s37-pkt-txt", "Ingress (mTLS)", "var(--s-blue)", "#ffffff", 240, 426, 680, 426, 168);

      ctx.later(820, () => {
        ctx.movePkt("s37-pkt", "s37-pkt-bg", "s37-pkt-txt", "Egress (0 keys)", "#fbbc04", "#1e293b", 740, 426, 1184, 426, 168);
      });

      ctx.later(1580, () => {
        pepBox.style.strokeWidth = "4.4";
        ctx.movePkt("s37-pkt", "s37-pkt-bg", "s37-pkt-txt", "+ Inject Secret", "var(--s-amber)", "#1e293b", 1184, 608, 1184, 426, 168);
      });

      ctx.later(2300, () => {
        pepBox.style.strokeWidth = "2.6";
        ctx.movePkt("s37-pkt", "s37-pkt-bg", "s37-pkt-txt", "HTTPS + Key ✓", "var(--s-green)", "#ffffff", 1184, 426, 1465, 426, 168);
      });

      ctx.later(3100, () => {
        ctx.el("s37-pkt").style.opacity = "0";
      });
    };
    runS37();
    ctx.every(3900, runS37);
  }
};
