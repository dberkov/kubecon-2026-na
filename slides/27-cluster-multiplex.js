export default {
  chapter: 5,
  short: "26. Millions Asleep, Few Awake",
  speaker: "DIMA",
  kicker: "GOAL: DENSITY",
  title: "Millions asleep, few awake",
  accent: "var(--s-green)",
  headline: "Most actors are asleep in object storage; only active ones take a worker slot",
  body1: "A suspended actor is just a snapshot. It uses no CPU and no memory.",
  body2: "Actors resume into free slots and get suspended back out, so a few workers serve millions of actors.",
  notes: "Let's go back to our first goal: Density\nOn the previous slides we followed one actor on one node: resume, run, suspend\nNow let's zoom out to the whole cluster\nMost agents are idle most of the time, so most actors are suspended\nA suspended actor is just a snapshot in object storage. It uses no CPU and no memory\nOnly the active actors take a slot on a worker\nWhen an actor wakes up, it resumes into a free slot. When it goes idle, it's suspended back to storage\nSo a small pool of workers can serve millions of actors",
  svg: `
  <!-- Off-CPU pool: object storage full of sleeping actors -->
  <g id="pool" class="fade-group" style="opacity: 0">
    <path d="M 64 236 V 756 A 228 24 0 0 0 520 756 V 236" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.4" />
    <ellipse cx="292" cy="236" rx="228" ry="24" style="fill: var(--s-amber-fill); stroke: var(--s-amber); stroke-width: 2.4" />
    <rect x="98" y="286" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="122" cy="304" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="112" y="314" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="166" y="286" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="190" cy="304" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="180" y="314" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="234" y="286" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="258" cy="304" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="248" y="314" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="302" y="286" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="326" cy="304" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="316" y="314" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="370" y="286" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="394" cy="304" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="384" y="314" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="438" y="286" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="462" cy="304" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="452" y="314" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="98" y="354" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="122" cy="372" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="112" y="382" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="166" y="354" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="190" cy="372" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="180" y="382" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="234" y="354" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="258" cy="372" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="248" y="382" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="302" y="354" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="326" cy="372" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="316" y="382" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="370" y="354" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="394" cy="372" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="384" y="382" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="438" y="354" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="462" cy="372" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="452" y="382" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="98" y="422" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="122" cy="440" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="112" y="450" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="166" y="422" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="190" cy="440" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="180" y="450" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="234" y="422" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="258" cy="440" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="248" y="450" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="302" y="422" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="326" cy="440" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="316" y="450" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="370" y="422" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="394" cy="440" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="384" y="450" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="438" y="422" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="462" cy="440" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="452" y="450" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="98" y="490" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="122" cy="508" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="112" y="518" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="166" y="490" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="190" cy="508" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="180" y="518" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="234" y="490" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="258" cy="508" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="248" y="518" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="302" y="490" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="326" cy="508" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="316" y="518" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="370" y="490" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="394" cy="508" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="384" y="518" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="438" y="490" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="462" cy="508" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="452" y="518" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="98" y="558" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="122" cy="576" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="112" y="586" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="166" y="558" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="190" cy="576" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="180" y="586" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="234" y="558" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="258" cy="576" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="248" y="586" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="302" y="558" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="326" cy="576" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="316" y="586" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="370" y="558" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="394" cy="576" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="384" y="586" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="438" y="558" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="462" cy="576" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="452" y="586" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="98" y="626" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="122" cy="644" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="112" y="654" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="166" y="626" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="190" cy="644" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="180" y="654" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="234" y="626" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="258" cy="644" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="248" y="654" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="302" y="626" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="326" cy="644" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="316" y="654" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="370" y="626" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="394" cy="644" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="384" y="654" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="438" y="626" width="48" height="48" rx="9" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 5 4; opacity: 0.75" />
    <circle cx="462" cy="644" r="6" style="fill: var(--s-purple); opacity: 0.45" />
    <rect x="452" y="654" width="20" height="10" rx="5" style="fill: var(--s-purple); opacity: 0.45" />
    <text x="292" y="718" text-anchor="middle" font-size="24" font-weight="800" style="fill: var(--s-amber-dark)">millions asleep</text>
    <text x="292" y="746" text-anchor="middle" font-size="16" class="mono" style="fill: var(--s-muted)">0 CPU · 0 RAM</text>
  </g>

  <!-- Resume / suspend arrows -->
  <g id="arrows" class="fade-group" style="opacity: 0">
    <text x="560" y="362" text-anchor="middle" font-size="14" font-weight="800" style="fill: var(--s-blue)">resume</text>
    <line x1="530" y1="380" x2="578" y2="380" style="stroke: var(--s-blue); stroke-width: 4" stroke-linecap="round" />
    <polygon points="576,370 592,380 576,390" style="fill: var(--s-blue)" />
    <text x="560" y="602" text-anchor="middle" font-size="14" font-weight="800" style="fill: var(--s-red)">suspend</text>
    <line x1="590" y1="620" x2="542" y2="620" style="stroke: var(--s-red); stroke-width: 4" stroke-linecap="round" />
    <polygon points="544,610 528,620 544,630" style="fill: var(--s-red)" />
  </g>

  <!-- Kubernetes cluster -->
  <g id="cluster" class="fade-group" style="opacity: 0">
    <rect x="600" y="200" width="936" height="580" rx="22" style="fill: var(--s-surface); stroke: var(--s-blue); stroke-width: 1.6; stroke-dasharray: 9 7" />
    <text x="628" y="236" font-size="18" font-weight="800" style="fill: var(--s-blue-dark)">Kubernetes cluster</text>
    <text x="1508" y="236" text-anchor="end" font-size="16" font-weight="700" style="fill: var(--s-muted)">only active actors take a slot</text>
  </g>
  <g id="node-0">
    <rect x="624" y="256" width="888" height="160" rx="16" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.8" />
    <rect x="640" y="270" width="40" height="132" rx="10" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2" />
    <text x="660" y="336" text-anchor="middle" font-size="15" font-weight="800" class="mono" transform="rotate(-90 660 336)" style="fill: var(--s-green-dark)">atelet</text>
    <rect x="696" y="270" width="392" height="132" rx="12" style="fill: var(--s-blue-box); stroke: var(--s-blue); stroke-width: 2" />
    <rect x="712" y="302" width="104" height="88" rx="10" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 6 4; opacity: 0.55" />
    <g id="s-0-0-0" class="fade-group" style="opacity: 0">
      <rect x="712" y="302" width="104" height="88" rx="10" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
      <circle cx="764" cy="334" r="12" style="fill: var(--s-purple)" />
      <rect x="746" y="350" width="36" height="17" rx="8.5" style="fill: var(--s-purple)" />
    </g>
    <rect x="840" y="302" width="104" height="88" rx="10" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 6 4; opacity: 0.55" />
    <g id="s-0-0-1" class="fade-group" style="opacity: 0">
      <rect x="840" y="302" width="104" height="88" rx="10" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
      <circle cx="892" cy="334" r="12" style="fill: var(--s-purple)" />
      <rect x="874" y="350" width="36" height="17" rx="8.5" style="fill: var(--s-purple)" />
    </g>
    <rect x="968" y="302" width="104" height="88" rx="10" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 6 4; opacity: 0.55" />
    <g id="s-0-0-2" class="fade-group" style="opacity: 0">
      <rect x="968" y="302" width="104" height="88" rx="10" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
      <circle cx="1020" cy="334" r="12" style="fill: var(--s-purple)" />
      <rect x="1002" y="350" width="36" height="17" rx="8.5" style="fill: var(--s-purple)" />
    </g>
    <rect x="1104" y="270" width="392" height="132" rx="12" style="fill: var(--s-blue-box); stroke: var(--s-blue); stroke-width: 2" />
    <rect x="1120" y="302" width="104" height="88" rx="10" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 6 4; opacity: 0.55" />
    <g id="s-0-1-0" class="fade-group" style="opacity: 0">
      <rect x="1120" y="302" width="104" height="88" rx="10" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
      <circle cx="1172" cy="334" r="12" style="fill: var(--s-purple)" />
      <rect x="1154" y="350" width="36" height="17" rx="8.5" style="fill: var(--s-purple)" />
    </g>
    <rect x="1248" y="302" width="104" height="88" rx="10" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 6 4; opacity: 0.55" />
    <g id="s-0-1-1" class="fade-group" style="opacity: 0">
      <rect x="1248" y="302" width="104" height="88" rx="10" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
      <circle cx="1300" cy="334" r="12" style="fill: var(--s-purple)" />
      <rect x="1282" y="350" width="36" height="17" rx="8.5" style="fill: var(--s-purple)" />
    </g>
    <rect x="1376" y="302" width="104" height="88" rx="10" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 6 4; opacity: 0.55" />
    <g id="s-0-1-2" class="fade-group" style="opacity: 0">
      <rect x="1376" y="302" width="104" height="88" rx="10" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
      <circle cx="1428" cy="334" r="12" style="fill: var(--s-purple)" />
      <rect x="1410" y="350" width="36" height="17" rx="8.5" style="fill: var(--s-purple)" />
    </g>
  </g>
  <g id="node-1" class="fade-group" style="opacity: 0">
    <rect x="624" y="430" width="888" height="160" rx="16" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.8" />
    <rect x="640" y="444" width="40" height="132" rx="10" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2" />
    <text x="660" y="510" text-anchor="middle" font-size="15" font-weight="800" class="mono" transform="rotate(-90 660 510)" style="fill: var(--s-green-dark)">atelet</text>
    <rect x="696" y="444" width="392" height="132" rx="12" style="fill: var(--s-blue-box); stroke: var(--s-blue); stroke-width: 2" />
    <rect x="712" y="476" width="104" height="88" rx="10" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 6 4; opacity: 0.55" />
    <g id="s-1-0-0" class="fade-group" style="opacity: 0">
      <rect x="712" y="476" width="104" height="88" rx="10" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
      <circle cx="764" cy="508" r="12" style="fill: var(--s-purple)" />
      <rect x="746" y="524" width="36" height="17" rx="8.5" style="fill: var(--s-purple)" />
    </g>
    <rect x="840" y="476" width="104" height="88" rx="10" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 6 4; opacity: 0.55" />
    <g id="s-1-0-1" class="fade-group" style="opacity: 0">
      <rect x="840" y="476" width="104" height="88" rx="10" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
      <circle cx="892" cy="508" r="12" style="fill: var(--s-purple)" />
      <rect x="874" y="524" width="36" height="17" rx="8.5" style="fill: var(--s-purple)" />
    </g>
    <rect x="968" y="476" width="104" height="88" rx="10" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 6 4; opacity: 0.55" />
    <g id="s-1-0-2" class="fade-group" style="opacity: 0">
      <rect x="968" y="476" width="104" height="88" rx="10" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
      <circle cx="1020" cy="508" r="12" style="fill: var(--s-purple)" />
      <rect x="1002" y="524" width="36" height="17" rx="8.5" style="fill: var(--s-purple)" />
    </g>
    <rect x="1104" y="444" width="392" height="132" rx="12" style="fill: var(--s-blue-box); stroke: var(--s-blue); stroke-width: 2" />
    <rect x="1120" y="476" width="104" height="88" rx="10" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 6 4; opacity: 0.55" />
    <g id="s-1-1-0" class="fade-group" style="opacity: 0">
      <rect x="1120" y="476" width="104" height="88" rx="10" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
      <circle cx="1172" cy="508" r="12" style="fill: var(--s-purple)" />
      <rect x="1154" y="524" width="36" height="17" rx="8.5" style="fill: var(--s-purple)" />
    </g>
    <rect x="1248" y="476" width="104" height="88" rx="10" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 6 4; opacity: 0.55" />
    <g id="s-1-1-1" class="fade-group" style="opacity: 0">
      <rect x="1248" y="476" width="104" height="88" rx="10" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
      <circle cx="1300" cy="508" r="12" style="fill: var(--s-purple)" />
      <rect x="1282" y="524" width="36" height="17" rx="8.5" style="fill: var(--s-purple)" />
    </g>
    <rect x="1376" y="476" width="104" height="88" rx="10" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 6 4; opacity: 0.55" />
    <g id="s-1-1-2" class="fade-group" style="opacity: 0">
      <rect x="1376" y="476" width="104" height="88" rx="10" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
      <circle cx="1428" cy="508" r="12" style="fill: var(--s-purple)" />
      <rect x="1410" y="524" width="36" height="17" rx="8.5" style="fill: var(--s-purple)" />
    </g>
  </g>
  <g id="node-2" class="fade-group" style="opacity: 0">
    <rect x="624" y="604" width="888" height="160" rx="16" style="fill: var(--s-surface-2); stroke: var(--s-border); stroke-width: 1.8" />
    <rect x="640" y="618" width="40" height="132" rx="10" style="fill: var(--s-green-fill); stroke: var(--s-green); stroke-width: 2" />
    <text x="660" y="684" text-anchor="middle" font-size="15" font-weight="800" class="mono" transform="rotate(-90 660 684)" style="fill: var(--s-green-dark)">atelet</text>
    <rect x="696" y="618" width="392" height="132" rx="12" style="fill: var(--s-blue-box); stroke: var(--s-blue); stroke-width: 2" />
    <rect x="712" y="650" width="104" height="88" rx="10" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 6 4; opacity: 0.55" />
    <g id="s-2-0-0" class="fade-group" style="opacity: 0">
      <rect x="712" y="650" width="104" height="88" rx="10" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
      <circle cx="764" cy="682" r="12" style="fill: var(--s-purple)" />
      <rect x="746" y="698" width="36" height="17" rx="8.5" style="fill: var(--s-purple)" />
    </g>
    <rect x="840" y="650" width="104" height="88" rx="10" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 6 4; opacity: 0.55" />
    <g id="s-2-0-1" class="fade-group" style="opacity: 0">
      <rect x="840" y="650" width="104" height="88" rx="10" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
      <circle cx="892" cy="682" r="12" style="fill: var(--s-purple)" />
      <rect x="874" y="698" width="36" height="17" rx="8.5" style="fill: var(--s-purple)" />
    </g>
    <rect x="968" y="650" width="104" height="88" rx="10" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 6 4; opacity: 0.55" />
    <g id="s-2-0-2" class="fade-group" style="opacity: 0">
      <rect x="968" y="650" width="104" height="88" rx="10" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
      <circle cx="1020" cy="682" r="12" style="fill: var(--s-purple)" />
      <rect x="1002" y="698" width="36" height="17" rx="8.5" style="fill: var(--s-purple)" />
    </g>
    <rect x="1104" y="618" width="392" height="132" rx="12" style="fill: var(--s-blue-box); stroke: var(--s-blue); stroke-width: 2" />
    <rect x="1120" y="650" width="104" height="88" rx="10" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 6 4; opacity: 0.55" />
    <g id="s-2-1-0" class="fade-group" style="opacity: 0">
      <rect x="1120" y="650" width="104" height="88" rx="10" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
      <circle cx="1172" cy="682" r="12" style="fill: var(--s-purple)" />
      <rect x="1154" y="698" width="36" height="17" rx="8.5" style="fill: var(--s-purple)" />
    </g>
    <rect x="1248" y="650" width="104" height="88" rx="10" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 6 4; opacity: 0.55" />
    <g id="s-2-1-1" class="fade-group" style="opacity: 0">
      <rect x="1248" y="650" width="104" height="88" rx="10" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
      <circle cx="1300" cy="682" r="12" style="fill: var(--s-purple)" />
      <rect x="1282" y="698" width="36" height="17" rx="8.5" style="fill: var(--s-purple)" />
    </g>
    <rect x="1376" y="650" width="104" height="88" rx="10" style="fill: var(--s-slot-fill); stroke: var(--s-purple); stroke-width: 1.4; stroke-dasharray: 6 4; opacity: 0.55" />
    <g id="s-2-1-2" class="fade-group" style="opacity: 0">
      <rect x="1376" y="650" width="104" height="88" rx="10" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2" />
      <circle cx="1428" cy="682" r="12" style="fill: var(--s-purple)" />
      <rect x="1410" y="698" width="36" height="17" rx="8.5" style="fill: var(--s-purple)" />
    </g>
  </g>

  <g id="fly" class="mover" style="opacity: 0; transform: translate(0px, 0px)">
    <rect x="-28" y="-28" width="56" height="56" rx="10" style="fill: var(--s-purple-fill); stroke: var(--s-purple); stroke-width: 2.4" />
    <circle cx="0" cy="-8" r="9" style="fill: var(--s-purple)" />
    <rect x="-13" y="5" width="26" height="12" rx="6" style="fill: var(--s-purple)" />
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

    // Geometry shared with the generated markup
    const NODE_Y = [256, 430, 604];
    const WORKER_X = [696, 1104];
    const slotCenter = (n, w, k) => [WORKER_X[w] + 16 + k * 128 + 52, NODE_Y[n] + 46 + 44];
    const poolCenter = () => {
      const c = Math.floor(Math.random() * 6);
      const r = Math.floor(Math.random() * 6);
      return [98 + c * 68 + 24, 286 + r * 68 + 24];
    };

    // Start where slide 24 left off: one node, close up
    const filled = new Set(["0-0-0", "0-0-1", "0-1-0", "1-0-0", "1-1-1", "1-1-2", "2-0-2", "2-1-0"]);
    filled.forEach((key) => { ctx.el(`s-${key}`).style.opacity = "1"; });
    const node0 = ctx.el("node-0");
    const S0 = 1.6;
    const zoom = (e) => {
      const s = S0 - (S0 - 1) * e;
      const tx = (800 - 1068 * S0) * (1 - e);
      const ty = (490 - 336 * S0) * (1 - e);
      node0.setAttribute("transform", `translate(${tx.toFixed(1)} ${ty.toFixed(1)}) scale(${s.toFixed(3)})`);
    };
    zoom(0);

    // Pull the camera back to the whole cluster
    ctx.later(900, () => ctx.animateProgress(1400, (t) => zoom(ctx.easeOutCubic(t))));
    ctx.later(2300, () => { ctx.el("cluster").style.opacity = "1"; });
    ctx.later(2450, () => pop(ctx.el("node-1"), "translateY(16px)"));
    ctx.later(2650, () => pop(ctx.el("node-2"), "translateY(16px)"));
    ctx.later(3100, () => pop(ctx.el("pool"), "translateX(-40px)"));
    ctx.later(3700, () => { ctx.el("arrows").style.opacity = "1"; });

    // Then actors keep moving: resume into free slots, suspend back to storage
    const fly = ctx.el("fly");
    const flyTo = (x1, y1, x2, y2) => {
      fly.style.transition = "none";
      fly.style.opacity = "1";
      fly.style.transform = `translate(${x1}px, ${y1}px)`;
      fly.getBoundingClientRect();
      fly.style.transition = "transform 0.95s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease";
      fly.style.transform = `translate(${x2}px, ${y2}px)`;
    };
    const ALL = [];
    for (let n = 0; n < 3; n++) for (let w = 0; w < 2; w++) for (let k = 0; k < 3; k++) ALL.push([n, w, k]);
    const pick = (wantFilled) => {
      const opts = ALL.filter(([n, w, k]) => filled.has(`${n}-${w}-${k}`) === wantFilled);
      return opts[Math.floor(Math.random() * opts.length)];
    };
    let resumeNext = true;
    ctx.later(4300, () => {
      ctx.every(1400, () => {
        const doResume = filled.size <= 6 || (resumeNext && filled.size < 14);
        resumeNext = !resumeNext;
        if (doResume) {
          const [n, w, k] = pick(false);
          const [x1, y1] = poolCenter();
          const [x2, y2] = slotCenter(n, w, k);
          flyTo(x1, y1, x2, y2);
          ctx.later(1000, () => {
            fly.style.opacity = "0";
            filled.add(`${n}-${w}-${k}`);
            pop(ctx.el(`s-${n}-${w}-${k}`), "scale(0.8)");
          });
        } else {
          const [n, w, k] = pick(true);
          filled.delete(`${n}-${w}-${k}`);
          ctx.el(`s-${n}-${w}-${k}`).style.opacity = "0";
          const [x1, y1] = slotCenter(n, w, k);
          const [x2, y2] = poolCenter();
          flyTo(x1, y1, x2, y2);
          ctx.later(1000, () => { fly.style.opacity = "0"; });
        }
      });
    });
  }
};
