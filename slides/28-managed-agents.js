export default {
  chapter: 5,
  short: "28. Managed Agents",
  speaker: "DIMA",
  kicker: "A COMMON USE CASE",
  title: "Managed brains, your own hands",
  accent: "var(--s-blue)",
  headline: "Keep the managed agentic loop, run the untrusted work inside your own perimeter",
  body1: "Managed agent products (the brains) send their tasks to Agent Substrate (the hands).",
  body2: "Substrate runs in your environment, VPC and security perimeter, next to your data.",
  notes: "Let's look at a common use-case.\nThis year we have seen a number of managed agent products hit the market\nFor example, Managed Agents for Gemini - it's awesome but there's a big problem\nBut if you are an enterprise - you almost certainly have rules around who can access your data and how\nAgent Substrate lets you separate the agentic loop (the brains) from the actual untrusted workloads (the hands)\nSo, for example, you can get the Gemini managed agents to run its tasks in your own agent substrate\nYou run the substrate in your own environment, VPC network, security perimeter\nWe showed off Claude Managed Agents using this mode this morning.\nOf course, it's not the ONLY way to run substrate, but it is resonating for a lot of people already",
  svg: `
  <!-- The brains: a managed agent product -->
  <g id="brains" class="fade-group" style="opacity: 0">
    <rect x="64" y="300" width="460" height="400" rx="22" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.6" />
    <text x="96" y="348" font-size="15" font-weight="800" letter-spacing="1.5" style="fill: var(--s-muted)">THE BRAINS</text>
    <text x="96" y="388" font-size="28" font-weight="800" style="fill: var(--s-purple-dark)">Managed agent</text>
    <text x="96" y="420" font-size="17" style="fill: var(--s-muted)">the agentic loop, run by a vendor</text>
    <g id="loop" transform="rotate(0 182 536)">
      <path d="M 182 478 A 58 58 0 1 1 124 536" fill="none" style="stroke: var(--s-purple); stroke-width: 9" stroke-linecap="round" />
      <polygon points="182,462 206,478 182,494" style="fill: var(--s-purple)" />
    </g>
    <text x="182" y="544" text-anchor="middle" font-size="16" font-weight="800" style="fill: var(--s-purple-dark)">loop</text>

    <!-- QR code to the docs: dark modules on a white tile so it scans in both themes -->
    <rect x="316" y="444" width="184" height="184" rx="12" fill="#ffffff" style="stroke: var(--s-purple); stroke-width: 1.6" />
    <path d="M335.4 463.4h30.8v4.4h-30.8zM379.4 463.4h4.4v4.4h-4.4zM392.6 463.4h4.4v4.4h-4.4zM405.8 463.4h22.0v4.4h-22.0zM436.6 463.4h4.4v4.4h-4.4zM449.8 463.4h30.8v4.4h-30.8zM335.4 467.8h4.4v4.4h-4.4zM361.8 467.8h4.4v4.4h-4.4zM375.0 467.8h4.4v4.4h-4.4zM392.6 467.8h13.2v4.4h-13.2zM410.2 467.8h4.4v4.4h-4.4zM423.4 467.8h4.4v4.4h-4.4zM432.2 467.8h4.4v4.4h-4.4zM449.8 467.8h4.4v4.4h-4.4zM476.2 467.8h4.4v4.4h-4.4zM335.4 472.2h4.4v4.4h-4.4zM344.2 472.2h13.2v4.4h-13.2zM361.8 472.2h4.4v4.4h-4.4zM370.6 472.2h4.4v4.4h-4.4zM379.4 472.2h8.8v4.4h-8.8zM392.6 472.2h4.4v4.4h-4.4zM401.4 472.2h35.2v4.4h-35.2zM449.8 472.2h4.4v4.4h-4.4zM458.6 472.2h13.2v4.4h-13.2zM476.2 472.2h4.4v4.4h-4.4zM335.4 476.6h4.4v4.4h-4.4zM344.2 476.6h13.2v4.4h-13.2zM361.8 476.6h4.4v4.4h-4.4zM370.6 476.6h8.8v4.4h-8.8zM388.2 476.6h4.4v4.4h-4.4zM397.0 476.6h13.2v4.4h-13.2zM423.4 476.6h4.4v4.4h-4.4zM432.2 476.6h4.4v4.4h-4.4zM441.0 476.6h4.4v4.4h-4.4zM449.8 476.6h4.4v4.4h-4.4zM458.6 476.6h13.2v4.4h-13.2zM476.2 476.6h4.4v4.4h-4.4zM335.4 481.0h4.4v4.4h-4.4zM344.2 481.0h13.2v4.4h-13.2zM361.8 481.0h4.4v4.4h-4.4zM370.6 481.0h17.6v4.4h-17.6zM392.6 481.0h4.4v4.4h-4.4zM401.4 481.0h4.4v4.4h-4.4zM410.2 481.0h8.8v4.4h-8.8zM427.8 481.0h4.4v4.4h-4.4zM436.6 481.0h4.4v4.4h-4.4zM449.8 481.0h4.4v4.4h-4.4zM458.6 481.0h13.2v4.4h-13.2zM476.2 481.0h4.4v4.4h-4.4zM335.4 485.4h4.4v4.4h-4.4zM361.8 485.4h4.4v4.4h-4.4zM370.6 485.4h4.4v4.4h-4.4zM379.4 485.4h30.8v4.4h-30.8zM423.4 485.4h13.2v4.4h-13.2zM441.0 485.4h4.4v4.4h-4.4zM449.8 485.4h4.4v4.4h-4.4zM476.2 485.4h4.4v4.4h-4.4zM335.4 489.8h30.8v4.4h-30.8zM370.6 489.8h4.4v4.4h-4.4zM379.4 489.8h4.4v4.4h-4.4zM388.2 489.8h4.4v4.4h-4.4zM397.0 489.8h4.4v4.4h-4.4zM405.8 489.8h4.4v4.4h-4.4zM414.6 489.8h4.4v4.4h-4.4zM423.4 489.8h4.4v4.4h-4.4zM432.2 489.8h4.4v4.4h-4.4zM441.0 489.8h4.4v4.4h-4.4zM449.8 489.8h30.8v4.4h-30.8zM370.6 494.2h4.4v4.4h-4.4zM379.4 494.2h4.4v4.4h-4.4zM397.0 494.2h8.8v4.4h-8.8zM414.6 494.2h4.4v4.4h-4.4zM427.8 494.2h4.4v4.4h-4.4zM436.6 494.2h8.8v4.4h-8.8zM335.4 498.6h4.4v4.4h-4.4zM344.2 498.6h22.0v4.4h-22.0zM375.0 498.6h30.8v4.4h-30.8zM410.2 498.6h4.4v4.4h-4.4zM432.2 498.6h4.4v4.4h-4.4zM449.8 498.6h22.0v4.4h-22.0zM339.8 503.0h22.0v4.4h-22.0zM366.2 503.0h4.4v4.4h-4.4zM388.2 503.0h4.4v4.4h-4.4zM405.8 503.0h4.4v4.4h-4.4zM414.6 503.0h13.2v4.4h-13.2zM436.6 503.0h4.4v4.4h-4.4zM449.8 503.0h8.8v4.4h-8.8zM463.0 503.0h8.8v4.4h-8.8zM476.2 503.0h4.4v4.4h-4.4zM339.8 507.4h4.4v4.4h-4.4zM361.8 507.4h4.4v4.4h-4.4zM388.2 507.4h4.4v4.4h-4.4zM401.4 507.4h8.8v4.4h-8.8zM414.6 507.4h4.4v4.4h-4.4zM423.4 507.4h4.4v4.4h-4.4zM432.2 507.4h4.4v4.4h-4.4zM441.0 507.4h13.2v4.4h-13.2zM458.6 507.4h4.4v4.4h-4.4zM467.4 507.4h8.8v4.4h-8.8zM335.4 511.8h8.8v4.4h-8.8zM353.0 511.8h8.8v4.4h-8.8zM370.6 511.8h4.4v4.4h-4.4zM397.0 511.8h4.4v4.4h-4.4zM405.8 511.8h4.4v4.4h-4.4zM419.0 511.8h13.2v4.4h-13.2zM445.4 511.8h4.4v4.4h-4.4zM458.6 511.8h22.0v4.4h-22.0zM335.4 516.2h13.2v4.4h-13.2zM357.4 516.2h35.2v4.4h-35.2zM414.6 516.2h8.8v4.4h-8.8zM432.2 516.2h4.4v4.4h-4.4zM445.4 516.2h4.4v4.4h-4.4zM454.2 516.2h13.2v4.4h-13.2zM471.8 516.2h8.8v4.4h-8.8zM335.4 520.6h4.4v4.4h-4.4zM348.6 520.6h4.4v4.4h-4.4zM357.4 520.6h4.4v4.4h-4.4zM370.6 520.6h4.4v4.4h-4.4zM379.4 520.6h4.4v4.4h-4.4zM388.2 520.6h22.0v4.4h-22.0zM423.4 520.6h4.4v4.4h-4.4zM436.6 520.6h4.4v4.4h-4.4zM449.8 520.6h8.8v4.4h-8.8zM467.4 520.6h13.2v4.4h-13.2zM348.6 525.0h8.8v4.4h-8.8zM361.8 525.0h4.4v4.4h-4.4zM375.0 525.0h13.2v4.4h-13.2zM392.6 525.0h8.8v4.4h-8.8zM419.0 525.0h4.4v4.4h-4.4zM427.8 525.0h4.4v4.4h-4.4zM445.4 525.0h13.2v4.4h-13.2zM463.0 525.0h13.2v4.4h-13.2zM335.4 529.4h4.4v4.4h-4.4zM344.2 529.4h4.4v4.4h-4.4zM370.6 529.4h4.4v4.4h-4.4zM392.6 529.4h8.8v4.4h-8.8zM405.8 529.4h4.4v4.4h-4.4zM419.0 529.4h17.6v4.4h-17.6zM441.0 529.4h13.2v4.4h-13.2zM463.0 529.4h8.8v4.4h-8.8zM335.4 533.8h13.2v4.4h-13.2zM353.0 533.8h4.4v4.4h-4.4zM361.8 533.8h4.4v4.4h-4.4zM370.6 533.8h17.6v4.4h-17.6zM392.6 533.8h8.8v4.4h-8.8zM410.2 533.8h13.2v4.4h-13.2zM432.2 533.8h8.8v4.4h-8.8zM445.4 533.8h4.4v4.4h-4.4zM454.2 533.8h8.8v4.4h-8.8zM476.2 533.8h4.4v4.4h-4.4zM335.4 538.2h8.8v4.4h-8.8zM348.6 538.2h4.4v4.4h-4.4zM357.4 538.2h4.4v4.4h-4.4zM370.6 538.2h4.4v4.4h-4.4zM379.4 538.2h4.4v4.4h-4.4zM388.2 538.2h4.4v4.4h-4.4zM397.0 538.2h4.4v4.4h-4.4zM410.2 538.2h17.6v4.4h-17.6zM436.6 538.2h4.4v4.4h-4.4zM449.8 538.2h8.8v4.4h-8.8zM463.0 538.2h8.8v4.4h-8.8zM476.2 538.2h4.4v4.4h-4.4zM348.6 542.6h22.0v4.4h-22.0zM375.0 542.6h8.8v4.4h-8.8zM388.2 542.6h26.4v4.4h-26.4zM423.4 542.6h13.2v4.4h-13.2zM445.4 542.6h4.4v4.4h-4.4zM454.2 542.6h8.8v4.4h-8.8zM467.4 542.6h4.4v4.4h-4.4zM344.2 547.0h4.4v4.4h-4.4zM370.6 547.0h4.4v4.4h-4.4zM388.2 547.0h61.6v4.4h-61.6zM454.2 547.0h26.4v4.4h-26.4zM335.4 551.4h4.4v4.4h-4.4zM344.2 551.4h8.8v4.4h-8.8zM361.8 551.4h26.4v4.4h-26.4zM392.6 551.4h4.4v4.4h-4.4zM405.8 551.4h4.4v4.4h-4.4zM419.0 551.4h4.4v4.4h-4.4zM432.2 551.4h4.4v4.4h-4.4zM441.0 551.4h8.8v4.4h-8.8zM458.6 551.4h8.8v4.4h-8.8zM335.4 555.8h4.4v4.4h-4.4zM344.2 555.8h4.4v4.4h-4.4zM353.0 555.8h4.4v4.4h-4.4zM366.2 555.8h4.4v4.4h-4.4zM375.0 555.8h4.4v4.4h-4.4zM383.8 555.8h22.0v4.4h-22.0zM410.2 555.8h8.8v4.4h-8.8zM436.6 555.8h4.4v4.4h-4.4zM449.8 555.8h4.4v4.4h-4.4zM463.0 555.8h8.8v4.4h-8.8zM476.2 555.8h4.4v4.4h-4.4zM335.4 560.2h4.4v4.4h-4.4zM344.2 560.2h8.8v4.4h-8.8zM357.4 560.2h17.6v4.4h-17.6zM383.8 560.2h4.4v4.4h-4.4zM392.6 560.2h4.4v4.4h-4.4zM401.4 560.2h13.2v4.4h-13.2zM432.2 560.2h4.4v4.4h-4.4zM441.0 560.2h4.4v4.4h-4.4zM454.2 560.2h13.2v4.4h-13.2zM471.8 560.2h4.4v4.4h-4.4zM335.4 564.6h4.4v4.4h-4.4zM344.2 564.6h4.4v4.4h-4.4zM353.0 564.6h8.8v4.4h-8.8zM366.2 564.6h13.2v4.4h-13.2zM383.8 564.6h8.8v4.4h-8.8zM401.4 564.6h4.4v4.4h-4.4zM414.6 564.6h4.4v4.4h-4.4zM423.4 564.6h17.6v4.4h-17.6zM445.4 564.6h4.4v4.4h-4.4zM458.6 564.6h13.2v4.4h-13.2zM476.2 564.6h4.4v4.4h-4.4zM335.4 569.0h4.4v4.4h-4.4zM348.6 569.0h4.4v4.4h-4.4zM357.4 569.0h13.2v4.4h-13.2zM375.0 569.0h13.2v4.4h-13.2zM401.4 569.0h4.4v4.4h-4.4zM410.2 569.0h4.4v4.4h-4.4zM441.0 569.0h22.0v4.4h-22.0zM370.6 573.4h8.8v4.4h-8.8zM388.2 573.4h4.4v4.4h-4.4zM397.0 573.4h4.4v4.4h-4.4zM405.8 573.4h4.4v4.4h-4.4zM414.6 573.4h17.6v4.4h-17.6zM436.6 573.4h8.8v4.4h-8.8zM458.6 573.4h4.4v4.4h-4.4zM467.4 573.4h13.2v4.4h-13.2zM335.4 577.8h30.8v4.4h-30.8zM375.0 577.8h4.4v4.4h-4.4zM383.8 577.8h4.4v4.4h-4.4zM392.6 577.8h4.4v4.4h-4.4zM401.4 577.8h8.8v4.4h-8.8zM414.6 577.8h4.4v4.4h-4.4zM423.4 577.8h22.0v4.4h-22.0zM449.8 577.8h4.4v4.4h-4.4zM458.6 577.8h4.4v4.4h-4.4zM467.4 577.8h8.8v4.4h-8.8zM335.4 582.2h4.4v4.4h-4.4zM361.8 582.2h4.4v4.4h-4.4zM370.6 582.2h4.4v4.4h-4.4zM379.4 582.2h8.8v4.4h-8.8zM392.6 582.2h4.4v4.4h-4.4zM405.8 582.2h4.4v4.4h-4.4zM419.0 582.2h26.4v4.4h-26.4zM458.6 582.2h22.0v4.4h-22.0zM335.4 586.6h4.4v4.4h-4.4zM344.2 586.6h13.2v4.4h-13.2zM361.8 586.6h4.4v4.4h-4.4zM370.6 586.6h22.0v4.4h-22.0zM397.0 586.6h4.4v4.4h-4.4zM414.6 586.6h4.4v4.4h-4.4zM423.4 586.6h4.4v4.4h-4.4zM432.2 586.6h4.4v4.4h-4.4zM441.0 586.6h26.4v4.4h-26.4zM335.4 591.0h4.4v4.4h-4.4zM344.2 591.0h13.2v4.4h-13.2zM361.8 591.0h4.4v4.4h-4.4zM370.6 591.0h8.8v4.4h-8.8zM388.2 591.0h22.0v4.4h-22.0zM419.0 591.0h8.8v4.4h-8.8zM436.6 591.0h13.2v4.4h-13.2zM458.6 591.0h22.0v4.4h-22.0zM335.4 595.4h4.4v4.4h-4.4zM344.2 595.4h13.2v4.4h-13.2zM361.8 595.4h4.4v4.4h-4.4zM370.6 595.4h8.8v4.4h-8.8zM383.8 595.4h8.8v4.4h-8.8zM397.0 595.4h4.4v4.4h-4.4zM410.2 595.4h8.8v4.4h-8.8zM432.2 595.4h4.4v4.4h-4.4zM449.8 595.4h8.8v4.4h-8.8zM463.0 595.4h8.8v4.4h-8.8zM335.4 599.8h4.4v4.4h-4.4zM361.8 599.8h4.4v4.4h-4.4zM379.4 599.8h8.8v4.4h-8.8zM392.6 599.8h4.4v4.4h-4.4zM405.8 599.8h4.4v4.4h-4.4zM419.0 599.8h13.2v4.4h-13.2zM436.6 599.8h4.4v4.4h-4.4zM445.4 599.8h8.8v4.4h-8.8zM458.6 599.8h13.2v4.4h-13.2zM335.4 604.2h30.8v4.4h-30.8zM370.6 604.2h4.4v4.4h-4.4zM383.8 604.2h4.4v4.4h-4.4zM392.6 604.2h8.8v4.4h-8.8zM410.2 604.2h4.4v4.4h-4.4zM419.0 604.2h4.4v4.4h-4.4zM432.2 604.2h13.2v4.4h-13.2zM449.8 604.2h8.8v4.4h-8.8zM471.8 604.2h4.4v4.4h-4.4z" fill="#000000" />
    <text x="408" y="652" text-anchor="middle" font-size="14" font-weight="700" style="fill: var(--s-muted)">scan for docs</text>
    <text x="294" y="684" text-anchor="middle" font-size="17" font-weight="700" style="fill: var(--s-muted)">e.g. Managed Agents in Gemini API</text>
  </g>

  <!-- Tasks in, results out -->
  <g id="wires" class="fade-group" style="opacity: 0">
    <text x="612" y="452" text-anchor="middle" font-size="15" font-weight="800" style="fill: var(--s-blue-dark)">tasks</text>
    <line x1="540" y1="470" x2="672" y2="470" style="stroke: var(--s-blue); stroke-width: 3.5" stroke-linecap="round" />
    <polygon points="670,460 686,470 670,480" style="fill: var(--s-blue)" />
    <text x="612" y="572" text-anchor="middle" font-size="15" font-weight="800" style="fill: var(--s-green-dark)">results</text>
    <line x1="686" y1="590" x2="554" y2="590" style="stroke: var(--s-green); stroke-width: 3.5" stroke-linecap="round" />
    <polygon points="556,580 540,590 556,600" style="fill: var(--s-green)" />
  </g>

  <!-- The hands: your environment -->
  <g id="perimeter" class="fade-group" style="opacity: 0">
    <rect x="700" y="230" width="836" height="560" rx="26" style="fill: var(--s-surface); stroke: var(--s-red); stroke-width: 2.6; stroke-dasharray: 12 8" />
    <path d="M 736 252 h 26 v 14 a 13 16 0 0 1 -13 18 a 13 16 0 0 1 -13 -18 Z" style="fill: var(--s-red)" />
    <text x="776" y="276" font-size="18" font-weight="800" style="fill: var(--s-red-dark)">Your environment · VPC · security perimeter</text>

    <rect x="740" y="320" width="460" height="420" rx="20" style="fill: var(--s-card); stroke: var(--s-blue); stroke-width: 2.6" />
    <text x="772" y="364" font-size="15" font-weight="800" letter-spacing="1.5" style="fill: var(--s-muted)">THE HANDS</text>
    <text x="772" y="402" font-size="28" font-weight="800" style="fill: var(--s-blue-dark)">Agent Substrate</text>
    <text x="772" y="432" font-size="17" style="fill: var(--s-muted)">untrusted work, in sandboxes</text>

    <rect x="772" y="470" width="120" height="120" rx="14" style="fill: var(--s-card); stroke: var(--s-red); stroke-width: 2; stroke-dasharray: 6 4" />
    <rect id="act-0" class="smooth-box" x="786" y="484" width="92" height="92" rx="12" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.8; stroke-dasharray: 6 4; opacity: 0.7" />
    <circle id="act-0-h" class="smooth-box" cx="832" cy="518" r="13" style="fill: var(--s-purple); opacity: 0.35" />
    <rect id="act-0-b" class="smooth-box" x="814" y="536" width="36" height="18" rx="9" style="fill: var(--s-purple); opacity: 0.35" />
    <rect x="910" y="470" width="120" height="120" rx="14" style="fill: var(--s-card); stroke: var(--s-red); stroke-width: 2; stroke-dasharray: 6 4" />
    <rect id="act-1" class="smooth-box" x="924" y="484" width="92" height="92" rx="12" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.8; stroke-dasharray: 6 4; opacity: 0.7" />
    <circle id="act-1-h" class="smooth-box" cx="970" cy="518" r="13" style="fill: var(--s-purple); opacity: 0.35" />
    <rect id="act-1-b" class="smooth-box" x="952" y="536" width="36" height="18" rx="9" style="fill: var(--s-purple); opacity: 0.35" />
    <rect x="1048" y="470" width="120" height="120" rx="14" style="fill: var(--s-card); stroke: var(--s-red); stroke-width: 2; stroke-dasharray: 6 4" />
    <rect id="act-2" class="smooth-box" x="1062" y="484" width="92" height="92" rx="12" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.8; stroke-dasharray: 6 4; opacity: 0.7" />
    <circle id="act-2-h" class="smooth-box" cx="1108" cy="518" r="13" style="fill: var(--s-purple); opacity: 0.35" />
    <rect id="act-2-b" class="smooth-box" x="1090" y="536" width="36" height="18" rx="9" style="fill: var(--s-purple); opacity: 0.35" />
    <text x="970" y="640" text-anchor="middle" font-size="15" font-weight="800" letter-spacing="1.5" style="fill: var(--s-red-dark)">SANDBOXES</text>

    <line x1="1200" y1="530" x2="1272" y2="530" style="stroke: var(--s-amber); stroke-width: 2.4; stroke-dasharray: 7 5" />
    <path d="M 1276 456 V 604 A 110 18 0 0 0 1496 604 V 456" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.4" />
    <ellipse cx="1386" cy="456" rx="110" ry="18" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.4" />
    <text x="1386" y="530" text-anchor="middle" font-size="22" font-weight="800" style="fill: var(--s-amber-dark)">your data</text>
    <text x="1386" y="558" text-anchor="middle" font-size="15" style="fill: var(--s-muted)">never leaves</text>
  </g>

  <g id="pkt" class="mover" style="opacity: 0; transform: translate(0px, 0px)">
    <rect id="pkt-bg" x="-52" y="-18" width="104" height="36" rx="18" style="fill: var(--s-blue); stroke: #ffffff; stroke-width: 2" />
    <text id="pkt-txt" class="mono" x="0" y="5" text-anchor="middle" font-size="14" font-weight="700" style="fill: #ffffff">task</text>
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

    // Build: brains, then your environment, then the wires between them
    ctx.later(150, () => pop(ctx.el("brains"), "translateX(-24px)"));
    ctx.later(650, () => pop(ctx.el("perimeter"), "translateX(24px)"));
    ctx.later(1200, () => { ctx.el("wires").style.opacity = "1"; });

    // The agentic loop keeps turning
    const loop = ctx.el("loop");
    let angle = 0;
    ctx.every(40, () => {
      angle = (angle + 3) % 360;
      loop.setAttribute("transform", `rotate(${angle} 182 536)`);
    });

    // A task goes in, a sandboxed actor does the work, a result comes back
    const send = (label, fill, x1, y1, x2, y2) => {
      ctx.movePkt("pkt", "pkt-bg", "pkt-txt", label, fill, "var(--s-card)", x1, y1, x2, y2, 104);
      ctx.el("pkt").style.transition = "transform 0.95s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease";
    };
    const hidePkt = () => { ctx.el("pkt").style.opacity = "0"; };
    // Actors sit idle until a task lands, then work until the result is sent back
    const setActive = (i, on) => {
      const tile = ctx.el(`act-${i}`);
      tile.style.fill = on ? "var(--s-purple-fill)" : "var(--s-slot-fill)";
      tile.style.stroke = on ? "var(--s-blue)" : "var(--s-purple)";
      tile.style.strokeWidth = on ? "5" : "1.8";
      tile.style.strokeDasharray = on ? "none" : "6 4";
      tile.style.opacity = on ? "1" : "0.7";
      ctx.el(`act-${i}-h`).style.opacity = on ? "1" : "0.35";
      ctx.el(`act-${i}-b`).style.opacity = on ? "1" : "0.35";
    };
    let k = 0;
    const roundTrip = () => {
      const i = k % 3;
      k += 1;
      const ax = [832, 970, 1108][i];
      send("task", "var(--s-blue)", 470, 470, ax, 470);
      ctx.later(1000, () => { hidePkt(); setActive(i, true); });
      ctx.later(1900, () => { setActive(i, false); send("result", "var(--s-green)", ax, 590, 470, 590); });
      ctx.later(2900, hidePkt);
    };
    ctx.later(1700, () => {
      roundTrip();
      ctx.every(3600, roundTrip);
    });
  }
};
