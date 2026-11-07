export default {
  chapter: 0,
  short: "6. K8s Fractures",
  speaker: "TIM",
  kicker: "THE KUBERNETES AGENT TRILEMMA",
  title: "Straining Kubernetes",
  accent: "var(--s-blue)",
  headline: "Running agents on Kubernetes 'in the normal way' forces painful trade-offs",
  body1: "Before jumping into solutions, let's look at the two patterns we see teams building in production today.",
  body2: "Approach 1: One Pod per Agent   ·   Approach 2: Giant DIY Pod per Node.",
  notes: "Taken together, these properties can make it problematic to run agents on Kubernetes — at least in the normal way. Before jumping into solutions, let's talk about the state of the art. We have seen this pattern countless times with users.",
  svg: `
  <!-- Subtle Stress Halo & Tension Lines -->
  <g id="shatter-rings" class="fade-group">
    <circle id="shatter-halo" cx="800" cy="485" r="245" fill="none" style="stroke: var(--s-border); stroke-width: 1.6; stroke-dasharray: 8 8; opacity: 0.55" />
    <line id="tether-1" x1="464" y1="272" x2="590" y2="365" style="stroke: var(--s-green); stroke-width: 3.2" class="flow-dash" />
    <line id="tether-2" x1="1136" y1="272" x2="1010" y2="365" style="stroke: var(--s-red); stroke-width: 3.2" class="flow-dash" />
    <line id="tether-3" x1="464" y1="682" x2="590" y2="595" style="stroke: var(--s-blue); stroke-width: 3.2" class="flow-dash" />
    <line id="tether-4" x1="1010" y1="595" x2="1136" y2="682" style="stroke: var(--s-amber); stroke-width: 3.2" class="flow-dash" />
    <circle id="stress-pulse" cx="800" cy="485" r="8" style="fill: var(--s-blue); opacity: 0" />
  </g>

  <!-- Center Shattered Kubernetes Wheel -->
  <g id="shatter-art" class="fade-group">
    <image id="img-shattered-k8s" x="520" y="215" width="560" height="540" preserveAspectRatio="xMidYMid meet" href="./assets/shattered-k8s.png" />
  </g>

  <!-- 01 Top-Left: Keep Pods Warm? (Green) -->
  <g id="tri-c1" class="fade-group">
    <rect id="tri-box-1" x="76" y="206" width="388" height="132" rx="18" class="smooth-box" style="fill: var(--s-card); stroke: var(--s-green); stroke-width: 2.4" />
    <rect x="76" y="206" width="12" height="132" rx="6" style="fill: var(--s-green)" />
    <circle cx="122" cy="252" r="20" style="fill: var(--s-green)" />
    <text x="122" y="259" text-anchor="middle" font-size="16" font-weight="800" style="fill: #ffffff">01</text>
    <text x="156" y="259" font-size="22" font-weight="800" style="fill: var(--s-green-dark)">Keep Pods Warm?</text>
    <rect x="108" y="284" width="332" height="38" rx="10" style="fill: var(--s-green-fill)" />
    <text x="274" y="309" text-anchor="middle" font-size="17" font-weight="700" style="fill: var(--s-text)">→ 98% idle RAM &amp; CPU bill</text>
  </g>

  <!-- 02 Top-Right: Pack Multi-Tenant? (Red) -->
  <g id="tri-c2" class="fade-group">
    <rect id="tri-box-2" x="1136" y="206" width="388" height="132" rx="18" class="smooth-box" style="fill: var(--s-card); stroke: var(--s-red); stroke-width: 2.4" />
    <rect x="1512" y="206" width="12" height="132" rx="6" style="fill: var(--s-red)" />
    <circle cx="1178" cy="252" r="20" style="fill: var(--s-red)" />
    <text x="1178" y="259" text-anchor="middle" font-size="16" font-weight="800" style="fill: #ffffff">02</text>
    <text x="1212" y="259" font-size="22" font-weight="800" style="fill: var(--s-red-dark)">Pack Multi-Tenant?</text>
    <rect x="1164" y="284" width="332" height="38" rx="10" style="fill: var(--s-red-fill)" />
    <text x="1330" y="309" text-anchor="middle" font-size="17" font-weight="700" style="fill: var(--s-text)">→ Untrusted code escapes</text>
  </g>

  <!-- 03 Bottom-Left (Swapped): Scale Pods to Zero? (Blue) -->
  <g id="tri-c3" class="fade-group">
    <rect id="tri-box-3" x="76" y="616" width="388" height="132" rx="18" class="smooth-box" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 2.4" />
    <rect x="76" y="616" width="12" height="132" rx="6" style="fill: var(--s-blue)" />
    <circle cx="122" cy="662" r="20" style="fill: var(--s-blue)" />
    <text x="122" y="669" text-anchor="middle" font-size="16" font-weight="800" style="fill: #ffffff">03</text>
    <text x="156" y="669" font-size="22" font-weight="800" style="fill: var(--s-blue-dark)">Scale Pods to Zero?</text>
    <rect x="108" y="694" width="332" height="38" rx="10" style="fill: var(--s-blue-fill)" />
    <text x="274" y="719" text-anchor="middle" font-size="17" font-weight="700" style="fill: var(--s-text)">→ 5–15s cold starts hurt UX</text>
  </g>

  <!-- 04 Bottom-Right (Swapped): State of the Art Today? (Amber) -->
  <g id="tri-c4" class="fade-group">
    <rect id="tri-box-4" x="1136" y="616" width="388" height="132" rx="18" class="smooth-box" style="fill: var(--s-card); stroke: var(--s-amber); stroke-width: 2.4" />
    <rect x="1512" y="616" width="12" height="132" rx="6" style="fill: var(--s-amber)" />
    <circle cx="1178" cy="662" r="20" style="fill: var(--s-amber)" />
    <text x="1178" y="669" text-anchor="middle" font-size="18" font-weight="800" style="fill: #ffffff">→</text>
    <text x="1212" y="669" font-size="22" font-weight="800" style="fill: var(--s-amber-dark)">State of the Art Today?</text>
    <rect x="1164" y="694" width="332" height="38" rx="10" style="fill: var(--s-amber-fill)" />
    <text x="1330" y="719" text-anchor="middle" font-size="17" font-weight="700" style="fill: var(--s-text)">→ Let's look at 2 user patterns</text>
  </g>
  `,
  animate: (ctx) => {
    ctx.el("bottom-callout").classList.add("is-hidden");

    const art = ctx.el("shatter-art");
    const rings = ctx.el("shatter-rings");
    const halo = ctx.el("shatter-halo");
    const pulse = ctx.el("stress-pulse");
    const cards = [ctx.el("tri-c1"), ctx.el("tri-c2"), ctx.el("tri-c3"), ctx.el("tri-c4")];
    const boxes = [ctx.el("tri-box-1"), ctx.el("tri-box-2"), ctx.el("tri-box-3"), ctx.el("tri-box-4")];

    rings.style.opacity = "0";
    cards.forEach((c) => {
      c.style.opacity = "0";
      c.style.transform = "translateY(14px)";
    });

    ctx.animateProgress(950, (t) => {
      const e = ctx.easeOutCubic(t);
      const sc = (0.82 + 0.18 * e).toFixed(3);
      art.setAttribute("transform", `translate(800, 485) scale(${sc}) translate(-800, -485)`);
      art.style.opacity = Math.min(1, t * 2.2).toFixed(2);
      rings.style.opacity = ctx.easeOutCubic((t - 0.25) / 0.75).toFixed(2);
    });

    [180, 380, 580, 820].forEach((delay, idx) => {
      ctx.later(delay, () => {
        cards[idx].style.opacity = "1";
        cards[idx].style.transform = "translateY(0px)";
      });
    });

    const endpoints = [
      { x1: 464, y1: 272, x2: 590, y2: 365, color: "var(--s-green)" },
      { x1: 1136, y1: 272, x2: 1010, y2: 365, color: "var(--s-red)" },
      { x1: 464, y1: 682, x2: 590, y2: 595, color: "var(--s-blue)" },
      { x1: 1010, y1: 595, x2: 1136, y2: 682, color: "var(--s-amber)" }
    ];

    let activeCorner = 0;
    const spotlightNext = () => {
      const idx = activeCorner % 4;
      activeCorner += 1;
      boxes.forEach((b, i) => {
        b.style.strokeWidth = i === idx ? "3.8" : "2.2";
      });
      halo.style.stroke = endpoints[idx].color;
      pulse.style.fill = endpoints[idx].color;

      const ep = endpoints[idx];
      ctx.animateProgress(900, (t) => {
        const e = ctx.easeOutCubic(t);
        const cx = ep.x1 + (ep.x2 - ep.x1) * e;
        const cy = ep.y1 + (ep.y2 - ep.y1) * e;
        pulse.setAttribute("cx", cx.toFixed(1));
        pulse.setAttribute("cy", cy.toFixed(1));
        pulse.style.opacity = Math.sin(t * Math.PI).toFixed(2);
      });
    };

    ctx.later(1300, () => {
      spotlightNext();
      ctx.every(1600, spotlightNext);
    });
  }
};
