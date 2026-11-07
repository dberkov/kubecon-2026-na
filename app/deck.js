import { CHAPTERS } from "./chapters.js";
import { createSlideContext } from "./ctx.js";
import { SLIDES } from "../slides/manifest.js";

const el = (id) => document.getElementById(id);
const slideMountEl = el("slide-mount");

let currentIdx = 0;
let activeCtx = null;
let autoPlayTimer = null;

function speakerClassFor(spk) {
  return String(spk || "").trim().toUpperCase().startsWith("DIMA") ? "dima" : "";
}

// Normalize initial speakerClass on every slide
SLIDES.forEach((s) => {
  s.speakerClass = speakerClassFor(s.speaker);
});

/**
 * Parses a slide's static SVG string as strict XML (image/svg+xml) and swaps
 * child nodes atomically with replaceChildren (no unsafe HTML parsing sinks).
 */
function mountSlideSvg(mountEl, svgMarkup) {
  const wrapped = `<svg xmlns="http://www.w3.org/2000/svg">${svgMarkup || ""}</svg>`;
  const doc = new DOMParser().parseFromString(wrapped, "image/svg+xml");
  const parseErr = doc.querySelector("parsererror");
  if (parseErr) {
    console.error("SVG XML parse error:", parseErr.textContent);
    mountEl.replaceChildren();
    return;
  }
  const imported = Array.from(doc.documentElement.childNodes, (node) =>
    document.importNode(node, true)
  );
  mountEl.replaceChildren(...imported);
}

// Build Chapter Tabs, Slide Pills, and Presenter Quick-Jump Strip
const chapterTabsEl = el("chapter-tabs");
const beatStripEl = el("beat-strip");
const spkJumpGridEl = el("spk-jump-grid");

const chapButtons = CHAPTERS.map((ch) => {
  const btn = document.createElement("button");
  btn.className = "chap-btn";
  const kSpan = document.createElement("span");
  kSpan.className = "chap-kicker";
  kSpan.textContent = ch.kicker;
  const nSpan = document.createElement("span");
  nSpan.className = "chap-name";
  nSpan.textContent = ch.name;
  btn.appendChild(kSpan);
  btn.appendChild(nSpan);
  btn.addEventListener("click", () => {
    const firstIdx = SLIDES.findIndex((s) => s.chapter === ch.id);
    if (firstIdx >= 0) goToBeat(firstIdx);
  });
  chapterTabsEl.appendChild(btn);
  return btn;
});

const beatButtons = SLIDES.map((s, idx) => {
  const btn = document.createElement("button");
  btn.className = "beat-pill";
  btn.textContent = s.short;
  btn.title = `${s.short} (Slide ${idx + 1})`;
  btn.addEventListener("click", () => goToBeat(idx));
  beatStripEl.appendChild(btn);
  return btn;
});

const spkJumpButtons = SLIDES.map((s, idx) => {
  const btn = document.createElement("button");
  btn.className = "beat-pill";
  btn.textContent = s.short;
  btn.title = `${s.short} (Slide ${idx + 1})`;
  btn.addEventListener("click", () => goToBeat(idx));
  spkJumpGridEl.appendChild(btn);
  return btn;
});

function nextTitleLabel(nb) {
  if (nb.title) return `${nb.short} — ${nb.title}`;
  if (nb.upNextTitle) return `${nb.short} — ${nb.upNextTitle}`;
  return nb.short;
}

function renderBeat(idx) {
  if (activeCtx) {
    activeCtx.cleanup();
    activeCtx = null;
  }

  const s = SLIDES[idx];
  const ch = CHAPTERS[s.chapter];

  // Controls & Navigation Chrome
  const counterTxt = `Slide ${idx + 1} / ${SLIDES.length}`;
  el("step-counter").textContent = counterTxt;
  el("spk-counter").textContent = counterTxt;
  el("hud-counter").textContent = `${idx + 1} / ${SLIDES.length}`;
  el("btn-prev").disabled = idx <= 0;
  el("btn-next").disabled = idx >= SLIDES.length - 1;
  el("spk-prev").disabled = idx <= 0;
  el("spk-next").disabled = idx >= SLIDES.length - 1;
  el("hud-prev").disabled = idx <= 0;
  el("hud-next").disabled = idx >= SLIDES.length - 1;
  el("spk-chapter-label").textContent = `${ch.kicker} · ${ch.name}`;

  chapButtons.forEach((btn, cIdx) => {
    btn.classList.toggle("active", cIdx === s.chapter);
  });
  beatButtons.forEach((btn, bIdx) => {
    btn.classList.toggle("active", bIdx === idx);
    btn.classList.toggle("in-chapter", bIdx !== idx && SLIDES[bIdx].chapter === s.chapter);
  });
  spkJumpButtons.forEach((btn, bIdx) => {
    btn.classList.toggle("active", bIdx === idx);
    btn.classList.toggle("in-chapter", bIdx !== idx && SLIDES[bIdx].chapter === s.chapter);
  });

  // Speaker Notes & Presenter Console Takeaways
  const badge = el("speaker-badge");
  badge.textContent = s.speaker;
  badge.className = "speaker-badge" + (s.speakerClass ? " " + s.speakerClass : "");
  el("slide-ref").textContent = `Slide ${idx + 1} of ${SLIDES.length}`;
  el("speaker-notes").textContent = `"${s.notes}"`;

  if (s.headline) {
    el("spk-bullet-main").textContent = s.headline;
    el("spk-bullet-sub1").textContent = "• " + s.body1;
    el("spk-bullet-sub2").textContent = "• " + s.body2;
  } else if (s.takeaways) {
    el("spk-bullet-main").textContent = s.takeaways.main;
    el("spk-bullet-sub1").textContent = "• " + s.takeaways.sub1;
    el("spk-bullet-sub2").textContent = "• " + s.takeaways.sub2;
  }

  // Up-Next Card + Speaker Handoff Detection
  const handoffEl = el("handoff-badge");
  if (idx + 1 < SLIDES.length) {
    const nb = SLIDES[idx + 1];
    el("up-next-kicker").textContent = `UP NEXT ON CLICK → SLIDE ${idx + 2} / ${SLIDES.length} · SPEAKER: ${nb.speaker}`;
    el("up-next-title").textContent = nextTitleLabel(nb);
    el("up-next-cue").textContent = `"${nb.notes.slice(0, 150)}${nb.notes.length > 150 ? "..." : ""}"`;
    if (nb.speaker !== s.speaker) {
      handoffEl.textContent = `⚡ HANDOFF → ${nb.speaker}`;
      handoffEl.classList.add("visible");
    } else {
      handoffEl.classList.remove("visible");
    }
  } else {
    el("up-next-kicker").textContent = `END OF PRESENTATION (${SLIDES.length} SLIDES)`;
    el("up-next-title").textContent = "Q&A — http://ate.dev · Apache 2.0 Open Source";
    el("up-next-cue").textContent = `Press ← to step back or click any Slide pill (1–${SLIDES.length}) below to jump to a diagram during Q&A.`;
    handoffEl.classList.remove("visible");
  }

  // Shared Header & Callout (hidden on bookend slides: Title, Substrate Reveal, Thank You)
  const isBookend = Boolean(s.isBookend);
  el("slide-header").classList.toggle("is-hidden", isBookend);
  el("bottom-callout").classList.toggle("is-hidden", isBookend);
  if (!isBookend && s.kicker) {
    el("hdr-kicker").textContent = s.kicker;
    el("hdr-kicker").style.fill = s.accent || "var(--s-blue)";
    el("hdr-title").textContent = s.title;
    el("callout-accent").style.fill = s.accent || "var(--s-blue)";
    el("callout-headline").textContent = s.headline;
    el("callout-body-1").textContent = s.body1;
    el("callout-body-2").textContent = s.body2;
  }

  // Mount slide SVG cleanly & run per-slide animation
  mountSlideSvg(slideMountEl, s.svg);
  activeCtx = createSlideContext(slideMountEl);
  if (typeof s.animate === "function") {
    s.animate(activeCtx);
  }
}

// ==================== URL MODE & MULTI-WINDOW SYNC ENGINE ====================
const params = new URLSearchParams(window.location.search);
const rawMode = params.get("mode");
const VIEW_MODE = (rawMode === "speaker" || rawMode === "stage") ? rawMode : "default";
const rawBeat = Number.parseInt(params.get("beat") ?? params.get("slide") ?? "", 10);
const hasExplicitBeat = Number.isInteger(rawBeat) && rawBeat >= 0 && rawBeat < SLIDES.length;
const rawTheme = params.get("theme");
const initialTheme = (rawTheme === "dark" || rawTheme === "light") ? rawTheme : "light";

if (VIEW_MODE === "speaker") {
  document.body.classList.add("speaker-mode");
  document.title = `Presenter Console — KubeCon NA 2026 (${SLIDES.length} Slides)`;
} else if (VIEW_MODE === "stage") {
  document.body.classList.add("present-mode");
  document.title = `Audience Stage — KubeCon NA 2026 (${SLIDES.length} Slides)`;
}

const randBytes = new Uint8Array(6);
window.crypto.getRandomValues(randBytes);
const INSTANCE_ID = Array.from(randBytes, (b) => b.toString(16).padStart(2, "0")).join("");

const SYNC_CHANNEL_NAME = "kubecon_na_2026_slides_sync_v2";
const SYNC_STORAGE_KEY = "kubecon_na_2026_slides_ui_sync_v2";
const peers = new Map();
let bc = null;
try {
  if (typeof BroadcastChannel !== "undefined") {
    bc = new BroadcastChannel(SYNC_CHANNEL_NAME);
  }
} catch (_) {
  bc = null;
}

function getTheme() {
  return el("stage-container").dataset.deckTheme === "dark" ? "dark" : "light";
}

function updateSyncBadges() {
  const now = Date.now();
  for (const [pid, seenAt] of peers.entries()) {
    if (now - seenAt > 15000) peers.delete(pid);
  }
  const totalWindows = peers.size + 1;
  const isSynced = peers.size > 0;

  const mainPill = el("sync-pill");
  const spkPill = el("spk-sync-pill");
  mainPill.classList.toggle("synced", isSynced);
  spkPill.classList.toggle("synced", isSynced);

  mainPill.textContent = isSynced ? `● Synced (${totalWindows} Windows)` : "○ 1 Window";
  spkPill.textContent = isSynced
    ? `● Synced with Stage (${totalWindows} Windows)`
    : "○ Waiting for Stage Window";
}

function broadcastPacket(payload) {
  const msg = Object.assign({ sender: INSTANCE_ID, ts: Date.now() }, payload);
  if (bc) {
    try { bc.postMessage(msg); } catch (_) {}
  }
  try {
    window.localStorage.setItem(SYNC_STORAGE_KEY, JSON.stringify(msg));
  } catch (_) {}
}

function setTheme(nextTheme, opts) {
  const valid = nextTheme === "dark" ? "dark" : "light";
  el("stage-container").dataset.deckTheme = valid;
  const label = valid === "light" ? "Theme: Light" : "Theme: Dark";
  el("btn-theme").textContent = label;
  el("spk-theme").textContent = label;
  if (!opts || !opts.fromRemote) {
    broadcastPacket({ type: "sync", action: "theme", idx: currentIdx, theme: valid });
  }
}

function stopAutoPlay() {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
  const btn = el("btn-autoplay");
  btn.classList.remove("btn-active");
  btn.textContent = "▶ Auto-Play";
}

// Talk Stopwatch (30:00 KubeCon Slot) + Wall Clock
let talkSeconds = 0;
let talkRunning = false;
let talkInterval = null;

function renderTalkTimer() {
  const mm = String(Math.floor(talkSeconds / 60)).padStart(2, "0");
  const ss = String(talkSeconds % 60).padStart(2, "0");
  const timerEl = el("spk-timer");
  timerEl.textContent = `${mm}:${ss}`;
  timerEl.classList.toggle("warn", talkSeconds >= 1500 && talkSeconds < 1800);
  timerEl.classList.toggle("over", talkSeconds >= 1800);
}

function startTalkTimer() {
  if (talkRunning) return;
  talkRunning = true;
  el("spk-timer-toggle").textContent = "⏸ Pause";
  talkInterval = setInterval(() => {
    talkSeconds += 1;
    renderTalkTimer();
  }, 1000);
}

function pauseTalkTimer() {
  talkRunning = false;
  if (talkInterval) {
    clearInterval(talkInterval);
    talkInterval = null;
  }
  el("spk-timer-toggle").textContent = "▶ Start";
}

function updateWallClock() {
  const d = new Date();
  el("spk-clock").textContent =
    String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
}
updateWallClock();
setInterval(updateWallClock, 10000);

el("spk-timer-toggle").addEventListener("click", () => {
  if (talkRunning) pauseTalkTimer();
  else startTalkTimer();
});
el("spk-timer-reset").addEventListener("click", () => {
  pauseTalkTimer();
  talkSeconds = 0;
  renderTalkTimer();
});

// Adjustable Speaker Notes Font Size (A- / A+)
let spkFontPx = 26;
function applySpkFont(px) {
  spkFontPx = Math.max(15, Math.min(40, px));
  document.documentElement.style.setProperty("--spk-font-size", spkFontPx + "px");
}
el("btn-font-dec").addEventListener("click", () => applySpkFont(spkFontPx - 2));
el("btn-font-inc").addEventListener("click", () => applySpkFont(spkFontPx + 2));

// ==================== SPEAKER NOTES: MARKDOWN SYNC + INLINE EDITOR ====================
const NOTES_OVERRIDE_KEY = "kubecon_na_2026_notes_overrides_v2";
const ALLOWED_SPEAKERS = ["TIM", "DIMA", "TIM & DIMA", "DIMA & TIM", "TIM / DIMA"];
const baseSnapshot = SLIDES.map((s) => ({ speaker: s.speaker, notes: s.notes }));
let localOverrides = {};
let hasLiveMarkdownFile = false;
let lastDiskMarkdown = null;
let resolvedNotesUrl = null;
let isEditingNote = false;

function refreshNotesChrome(flashMsg) {
  const pill = el("notes-source-pill");
  const resetBtn = el("btn-reset-notes");
  const overrideCount = Object.keys(localOverrides).length;
  resetBtn.style.display = overrideCount > 0 ? "inline-block" : "none";

  if (flashMsg) {
    pill.className = "notes-source-pill live-file";
    pill.textContent = flashMsg;
    return;
  }
  if (overrideCount > 0) {
    pill.className = "notes-source-pill local-edit";
    pill.textContent = `✎ ${overrideCount} Browser Edit${overrideCount > 1 ? "s" : ""} (Click ⬇ speaker-notes.md to save)`;
  } else if (hasLiveMarkdownFile) {
    pill.className = "notes-source-pill live-file";
    pill.textContent = "● speaker-notes.md (Live Sync)";
  } else {
    pill.className = "notes-source-pill";
    pill.textContent = "Embedded Notes";
  }
}

function refreshSpeakerNotesDOM() {
  const s = SLIDES[currentIdx];
  const badge = el("speaker-badge");
  badge.textContent = s.speaker;
  badge.className = "speaker-badge" + (s.speakerClass ? " " + s.speakerClass : "");
  el("speaker-notes").textContent = `"${s.notes}"`;

  const handoffEl = el("handoff-badge");
  if (currentIdx + 1 < SLIDES.length) {
    const nb = SLIDES[currentIdx + 1];
    el("up-next-kicker").textContent = `UP NEXT ON CLICK → SLIDE ${currentIdx + 2} / ${SLIDES.length} · SPEAKER: ${nb.speaker}`;
    el("up-next-title").textContent = nextTitleLabel(nb);
    el("up-next-cue").textContent = `"${nb.notes.slice(0, 150)}${nb.notes.length > 150 ? "..." : ""}"`;
    if (nb.speaker !== s.speaker) {
      handoffEl.textContent = `⚡ HANDOFF → ${nb.speaker}`;
      handoffEl.classList.add("visible");
    } else {
      handoffEl.classList.remove("visible");
    }
  }
}

function parseSpeakerNotesMarkdown(mdText) {
  const cleaned = String(mdText || "").replace(/<!--[\s\S]*?-->/g, "");
  const lines = cleaned.split(/\r?\n/);
  const parsed = new Map();
  let activeIdx = null;
  let activeSpeaker = null;
  let buf = [];

  const flush = () => {
    if (activeIdx !== null && activeIdx >= 0 && activeIdx < SLIDES.length) {
      const body = buf.join("\n").trim();
      parsed.set(activeIdx, { speaker: activeSpeaker, notes: body });
    }
    buf = [];
  };

  for (const line of lines) {
    const m = line.match(/^##\s+(?:Beat|Slide)\s+(\d+)\b(.*)$/i);
    if (m) {
      flush();
      activeIdx = Number.parseInt(m[1], 10) - 1;
      const spkMatch = m[2].match(/Speaker:\s*([^|]+)$/i);
      activeSpeaker = spkMatch ? spkMatch[1].trim().slice(0, 32) : null;
    } else if (activeIdx !== null) {
      buf.push(line);
    }
  }
  flush();
  return parsed;
}

function applyParsedDiskNotes(parsedMap, diskJustChanged) {
  for (const [idx, entry] of parsedMap.entries()) {
    if (entry.speaker) baseSnapshot[idx].speaker = entry.speaker;
    if (entry.notes) baseSnapshot[idx].notes = entry.notes;

    if (diskJustChanged && localOverrides[idx]) {
      if (entry.notes !== SLIDES[idx].notes || (entry.speaker && entry.speaker !== SLIDES[idx].speaker)) {
        delete localOverrides[idx];
      } else {
        continue;
      }
    }
    if (!localOverrides[idx]) {
      SLIDES[idx].speaker = baseSnapshot[idx].speaker;
      SLIDES[idx].speakerClass = speakerClassFor(SLIDES[idx].speaker);
      SLIDES[idx].notes = baseSnapshot[idx].notes;
    }
  }
  saveOverridesToStorage();
  refreshSpeakerNotesDOM();
}

function loadOverridesFromStorage() {
  try {
    const raw = window.localStorage.getItem(NOTES_OVERRIDE_KEY);
    if (!raw) return;
    const obj = JSON.parse(raw);
    if (!obj || typeof obj !== "object") return;
    const next = {};
    for (const [k, v] of Object.entries(obj)) {
      const idx = Number.parseInt(k, 10);
      if (!Number.isInteger(idx) || idx < 0 || idx >= SLIDES.length) continue;
      if (!v || typeof v !== "object") continue;
      const spk = typeof v.speaker === "string" ? v.speaker.trim().slice(0, 32) : SLIDES[idx].speaker;
      const nts = typeof v.notes === "string" ? v.notes.slice(0, 4000) : SLIDES[idx].notes;
      next[idx] = { speaker: spk, notes: nts };
      SLIDES[idx].speaker = spk;
      SLIDES[idx].speakerClass = speakerClassFor(spk);
      SLIDES[idx].notes = nts;
    }
    localOverrides = next;
  } catch (_) {}
}

function saveOverridesToStorage() {
  try {
    if (Object.keys(localOverrides).length === 0) {
      window.localStorage.removeItem(NOTES_OVERRIDE_KEY);
    } else {
      window.localStorage.setItem(NOTES_OVERRIDE_KEY, JSON.stringify(localOverrides));
    }
  } catch (_) {}
}

async function pollSpeakerNotesFile() {
  if (window.location.protocol !== "http:" && window.location.protocol !== "https:") return;
  const candidates = resolvedNotesUrl
    ? [resolvedNotesUrl]
    : ["./notes/speaker-notes.md", "./speaker-notes.md"];

  for (const url of candidates) {
    try {
      const resp = await fetch(url + "?t=" + Date.now(), { cache: "no-store" });
      if (!resp.ok) continue;
      const text = await resp.text();
      if (!/^#\s+KubeCon/m.test(text) && !/^##\s+(?:Beat|Slide)\s+\d+/m.test(text)) continue;

      resolvedNotesUrl = url;
      hasLiveMarkdownFile = true;
      if (text !== lastDiskMarkdown) {
        const wasInitial = lastDiskMarkdown === null;
        lastDiskMarkdown = text;
        const parsed = parseSpeakerNotesMarkdown(text);
        applyParsedDiskNotes(parsed, !wasInitial);
        if (!wasInitial) {
          refreshNotesChrome("✓ Reloaded speaker-notes.md");
          setTimeout(() => refreshNotesChrome(), 2200);
        } else {
          refreshNotesChrome();
        }
      }
      return;
    } catch (_) {}
  }
}

function serializeSpeakerNotesMarkdown() {
  const header = [
    `# KubeCon NA 2026 — Speaker Notes (Complete Deck: ${SLIDES.length} Slides)`,
    "",
    "<!--",
    "HOW TO EDIT THIS FILE:",
    "1. Edit the text under any `## Slide N` (or `## Beat N`) heading in VS Code, Vim, or any editor and press Save.",
    "2. To change who speaks on a slide, edit `Speaker: TIM`, `Speaker: DIMA`, or `Speaker: TIM & DIMA` in the heading.",
    "3. When deployed via `./kind-deploy/deploy.sh` or `./scripts/serve.sh`, saving `notes/speaker-notes.md` updates your Presenter Console live with ZERO rebuilds!",
    "-->",
    ""
  ];
  const blocks = SLIDES.map((s, i) => [
    `## Slide ${i + 1} | ${s.short} | Speaker: ${s.speaker}`,
    s.notes.trim(),
    ""
  ].join("\n"));
  return header.concat(blocks).join("\n");
}

function openNoteEditor() {
  if (VIEW_MODE === "stage") return;
  isEditingNote = true;
  const s = SLIDES[currentIdx];
  const sel = el("edit-speaker-select");
  sel.value = ALLOWED_SPEAKERS.includes(s.speaker) ? s.speaker : "TIM / DIMA";
  const ta = el("edit-note-textarea");
  ta.value = s.notes;
  el("speaker-notes").style.display = "none";
  el("note-editor-box").classList.add("open");
  ta.focus();
}

function closeNoteEditor() {
  isEditingNote = false;
  el("note-editor-box").classList.remove("open");
  el("speaker-notes").style.display = "";
}

function saveNoteEditor() {
  const spkRaw = el("edit-speaker-select").value;
  const spk = ALLOWED_SPEAKERS.includes(spkRaw) ? spkRaw : "TIM / DIMA";
  const nts = el("edit-note-textarea").value.trim();
  SLIDES[currentIdx].speaker = spk;
  SLIDES[currentIdx].speakerClass = speakerClassFor(spk);
  SLIDES[currentIdx].notes = nts;
  localOverrides[currentIdx] = { speaker: spk, notes: nts };
  saveOverridesToStorage();
  closeNoteEditor();
  refreshSpeakerNotesDOM();
  refreshNotesChrome();
  broadcastPacket({ type: "sync", action: "notes", idx: currentIdx, speaker: spk, notes: nts });
}

el("btn-edit-note").addEventListener("click", () => {
  if (isEditingNote) closeNoteEditor();
  else openNoteEditor();
});
el("speaker-notes").addEventListener("dblclick", openNoteEditor);
el("btn-note-cancel").addEventListener("click", closeNoteEditor);
el("btn-note-save").addEventListener("click", saveNoteEditor);
el("edit-note-textarea").addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
    e.preventDefault();
    saveNoteEditor();
  } else if (e.key === "Escape") {
    e.preventDefault();
    closeNoteEditor();
  }
});

el("btn-export-notes").addEventListener("click", () => {
  const md = serializeSpeakerNotesMarkdown();
  const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
  const blobUrl = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = blobUrl;
  a.download = "speaker-notes.md";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
  refreshNotesChrome("⬇ Downloaded speaker-notes.md");
  setTimeout(() => refreshNotesChrome(), 2500);
});

el("btn-reset-notes").addEventListener("click", () => {
  localOverrides = {};
  saveOverridesToStorage();
  baseSnapshot.forEach((snap, i) => {
    SLIDES[i].speaker = snap.speaker;
    SLIDES[i].speakerClass = speakerClassFor(snap.speaker);
    SLIDES[i].notes = snap.notes;
  });
  closeNoteEditor();
  refreshSpeakerNotesDOM();
  refreshNotesChrome();
  broadcastPacket({ type: "sync", action: "notes-reset" });
});

function goToBeat(idx, opts) {
  const keepAuto = Boolean(opts && opts.keepAutoPlay);
  const fromRemote = Boolean(opts && opts.fromRemote);
  if (!keepAuto) stopAutoPlay();
  if (isEditingNote) closeNoteEditor();
  currentIdx = Math.max(0, Math.min(SLIDES.length - 1, idx));
  if (VIEW_MODE === "speaker" && currentIdx > 0 && talkSeconds === 0 && !talkRunning) {
    startTalkTimer();
  }
  renderBeat(currentIdx);
  if (!fromRemote) {
    broadcastPacket({ type: "sync", action: "goto", idx: currentIdx, theme: getTheme() });
  }
}

function replayBeat(fromRemote) {
  renderBeat(currentIdx);
  if (!fromRemote) {
    broadcastPacket({ type: "sync", action: "replay", idx: currentIdx, theme: getTheme() });
  }
}

function handleIncomingSync(raw) {
  if (!raw || typeof raw !== "object") return;
  if (typeof raw.sender !== "string" || !/^[0-9a-f]{8,24}$/.test(raw.sender)) return;
  if (raw.sender === INSTANCE_ID) return;

  if (raw.type === "bye") {
    peers.delete(raw.sender);
    updateSyncBadges();
    return;
  }

  if (raw.type !== "hello" && raw.type !== "ack" && raw.type !== "sync" && raw.type !== "ping") {
    return;
  }

  peers.set(raw.sender, Date.now());
  updateSyncBadges();

  if (raw.type === "hello") {
    broadcastPacket({ type: "ack", idx: currentIdx, theme: getTheme() });
    return;
  }

  const validIdx = Number.isInteger(raw.idx) && raw.idx >= 0 && raw.idx < SLIDES.length ? raw.idx : null;
  const validTheme = (raw.theme === "dark" || raw.theme === "light") ? raw.theme : null;

  if (raw.type === "ack") {
    if (!hasExplicitBeat && validIdx !== null && validIdx !== currentIdx) {
      goToBeat(validIdx, { fromRemote: true });
    }
    if (validTheme && validTheme !== getTheme()) {
      setTheme(validTheme, { fromRemote: true });
    }
    return;
  }

  if (raw.type === "sync") {
    if (raw.action === "notes" && validIdx !== null && typeof raw.notes === "string" && typeof raw.speaker === "string") {
      const spk = ALLOWED_SPEAKERS.includes(raw.speaker) ? raw.speaker : "TIM / DIMA";
      const nts = raw.notes.slice(0, 4000);
      SLIDES[validIdx].speaker = spk;
      SLIDES[validIdx].speakerClass = speakerClassFor(spk);
      SLIDES[validIdx].notes = nts;
      localOverrides[validIdx] = { speaker: spk, notes: nts };
      refreshSpeakerNotesDOM();
      refreshNotesChrome();
      return;
    }
    if (raw.action === "notes-reset") {
      localOverrides = {};
      baseSnapshot.forEach((snap, i) => {
        SLIDES[i].speaker = snap.speaker;
        SLIDES[i].speakerClass = speakerClassFor(snap.speaker);
        SLIDES[i].notes = snap.notes;
      });
      refreshSpeakerNotesDOM();
      refreshNotesChrome();
      return;
    }
    if (validTheme && validTheme !== getTheme()) {
      setTheme(validTheme, { fromRemote: true });
    }
    if (raw.action === "replay" && validIdx !== null) {
      currentIdx = validIdx;
      replayBeat(true);
    } else if (validIdx !== null && validIdx !== currentIdx) {
      goToBeat(validIdx, { fromRemote: true });
    }
  }
}

if (bc) {
  bc.addEventListener("message", (ev) => handleIncomingSync(ev.data));
}
window.addEventListener("storage", (ev) => {
  if (ev.key !== SYNC_STORAGE_KEY || !ev.newValue) return;
  try {
    handleIncomingSync(JSON.parse(ev.newValue));
  } catch (_) {}
});
window.addEventListener("beforeunload", () => {
  broadcastPacket({ type: "bye" });
});
setInterval(() => {
  broadcastPacket({ type: "ping" });
  updateSyncBadges();
}, 5000);

function openSyncedWindow(targetMode) {
  if (targetMode !== "speaker" && targetMode !== "stage") return;
  const proto = window.location.protocol;
  const canOpenUrl = proto === "http:" || proto === "https:" || proto === "file:";
  if (canOpenUrl) {
    try {
      const u = new URL(window.location.href);
      u.searchParams.set("mode", targetMode);
      u.searchParams.set("beat", String(currentIdx));
      u.searchParams.set("theme", getTheme());
      const winName = targetMode === "speaker" ? "kubecon_speaker_console" : "kubecon_audience_stage";
      const specs = targetMode === "speaker"
        ? "width=1280,height=820,menubar=no,toolbar=no,location=no,status=no"
        : "width=1440,height=810,menubar=no,toolbar=no,location=no,status=no";
      const popup = window.open(u.toString(), winName, specs);
      if (popup) return;
    } catch (_) {}
  }
  if (targetMode === "speaker") {
    document.body.classList.remove("present-mode");
    document.body.classList.toggle("speaker-mode");
  } else {
    document.body.classList.remove("speaker-mode");
    document.body.classList.add("present-mode");
  }
}

function requestOsFullscreen() {
  if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else if (document.fullscreenElement && document.exitFullscreen) {
    document.exitFullscreen().catch(() => {});
  }
}

function togglePresent() {
  if (VIEW_MODE === "stage") {
    requestOsFullscreen();
    return;
  }
  const entering = !document.body.classList.contains("present-mode");
  document.body.classList.toggle("present-mode", entering);
  if (entering && document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else if (!entering && document.fullscreenElement && document.exitFullscreen) {
    document.exitFullscreen().catch(() => {});
  }
}

el("btn-prev").addEventListener("click", () => goToBeat(currentIdx - 1));
el("btn-next").addEventListener("click", () => goToBeat(currentIdx + 1));
el("btn-replay").addEventListener("click", () => replayBeat(false));
el("btn-present").addEventListener("click", togglePresent);
el("btn-speaker").addEventListener("click", () => openSyncedWindow("speaker"));
el("btn-stage-win").addEventListener("click", () => openSyncedWindow("stage"));

el("spk-prev").addEventListener("click", () => goToBeat(currentIdx - 1));
el("spk-next").addEventListener("click", () => goToBeat(currentIdx + 1));
el("spk-replay").addEventListener("click", () => replayBeat(false));
el("spk-open-stage").addEventListener("click", () => openSyncedWindow("stage"));
el("spk-theme").addEventListener("click", () => {
  setTheme(getTheme() === "light" ? "dark" : "light");
});
el("spk-exit").addEventListener("click", () => {
  if (VIEW_MODE === "speaker") {
    try {
      const u = new URL(window.location.href);
      u.searchParams.delete("mode");
      window.location.href = u.toString();
      return;
    } catch (_) {}
  }
  document.body.classList.remove("speaker-mode");
});

el("hud-prev").addEventListener("click", () => goToBeat(currentIdx - 1));
el("hud-next").addEventListener("click", () => goToBeat(currentIdx + 1));
el("hud-fs").addEventListener("click", requestOsFullscreen);
el("hud-exit").addEventListener("click", () => {
  if (document.fullscreenElement && document.exitFullscreen) {
    document.exitFullscreen().catch(() => {});
  }
  if (VIEW_MODE === "stage") {
    const u = new URL(window.location.href);
    u.searchParams.delete("mode");
    window.location.href = u.toString();
  } else {
    document.body.classList.remove("present-mode");
  }
});

el("btn-autoplay").addEventListener("click", () => {
  if (autoPlayTimer) {
    stopAutoPlay();
  } else {
    const btn = el("btn-autoplay");
    btn.classList.add("btn-active");
    btn.textContent = "⏸ Pause";
    autoPlayTimer = setInterval(() => {
      goToBeat((currentIdx + 1) % SLIDES.length, { keepAutoPlay: true });
    }, 3800);
  }
});

el("btn-theme").addEventListener("click", () => {
  setTheme(getTheme() === "light" ? "dark" : "light");
});

window.addEventListener("keydown", (e) => {
  const tag = e.target && e.target.tagName ? e.target.tagName.toUpperCase() : "";
  if (tag === "TEXTAREA" || tag === "INPUT" || tag === "SELECT" || isEditingNote) {
    return;
  }
  if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
    e.preventDefault();
    goToBeat(currentIdx + 1);
  } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
    e.preventDefault();
    goToBeat(currentIdx - 1);
  } else if (e.key === "Home") {
    e.preventDefault();
    goToBeat(0);
  } else if (e.key === "End") {
    e.preventDefault();
    goToBeat(SLIDES.length - 1);
  } else if (e.key === "r" || e.key === "R") {
    replayBeat(false);
  } else if (e.key === "e" || e.key === "E") {
    if (VIEW_MODE !== "stage") {
      e.preventDefault();
      openNoteEditor();
    }
  } else if (e.key === "s" || e.key === "S") {
    if (VIEW_MODE !== "speaker") openSyncedWindow("speaker");
  } else if (e.key === "g" || e.key === "G") {
    if (VIEW_MODE !== "stage") openSyncedWindow("stage");
  } else if (e.key === "f" || e.key === "F") {
    togglePresent();
  } else if (e.key === "Escape" && VIEW_MODE !== "stage" && document.body.classList.contains("present-mode")) {
    document.body.classList.remove("present-mode");
  }
});

document.addEventListener("fullscreenchange", () => {
  if (VIEW_MODE !== "stage" && !document.fullscreenElement && document.body.classList.contains("present-mode")) {
    document.body.classList.remove("present-mode");
  }
});

window.__deck = {
  next: () => goToBeat(currentIdx + 1),
  prev: () => goToBeat(currentIdx - 1),
  goTo: (i) => goToBeat(i),
  setTheme: (t) => setTheme(t),
  openSpeaker: () => openSyncedWindow("speaker"),
  openStage: () => openSyncedWindow("stage"),
  togglePresent,
  get count() { return SLIDES.length; },
  get index() { return currentIdx; }
};

loadOverridesFromStorage();
setTheme(initialTheme, { fromRemote: true });
goToBeat(hasExplicitBeat ? rawBeat : 0, { fromRemote: true });
refreshNotesChrome();
updateSyncBadges();
broadcastPacket({ type: "hello" });
pollSpeakerNotesFile();
setInterval(pollSpeakerNotesFile, 2500);
