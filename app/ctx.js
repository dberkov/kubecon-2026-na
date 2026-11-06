const SVG_NS = "http://www.w3.org/2000/svg";

export function easeOutCubic(t) {
  const c = Math.max(0, Math.min(1, t));
  return 1 - Math.pow(1 - c, 3);
}

/**
 * Creates a per-slide animation context whose timers, intervals, and RAF loops
 * are automatically cancelled the moment the viewer navigates to another slide.
 */
export function createSlideContext(mountEl) {
  let timers = [];
  let intervals = [];
  let rafIds = new Set();
  let disposed = false;

  const el = (id) => {
    if (!id) return null;
    const scoped = mountEl.querySelector(`#${CSS.escape(id)}`);
    return scoped || document.getElementById(id);
  };

  const q = (selector) => mountEl.querySelector(selector);
  const qAll = (selector) => Array.from(mountEl.querySelectorAll(selector));

  const svgEl = (tag, attrs = {}, textContent = null) => {
    const node = document.createElementNS(SVG_NS, tag);
    for (const [k, v] of Object.entries(attrs)) {
      node.setAttribute(k, String(v));
    }
    if (textContent !== null) {
      node.textContent = String(textContent);
    }
    return node;
  };

  const later = (ms, fn) => {
    const id = setTimeout(() => {
      if (!disposed) fn();
    }, ms);
    timers.push(id);
    return id;
  };

  const every = (ms, fn) => {
    const id = setInterval(() => {
      if (!disposed) fn();
    }, ms);
    intervals.push(id);
    return id;
  };

  const animateProgress = (durationMs, onTick) => {
    const start = performance.now();
    let currentRaf = null;
    function frame(now) {
      if (disposed) return;
      const t = Math.min(1, (now - start) / durationMs);
      onTick(t);
      if (t < 1) {
        currentRaf = requestAnimationFrame(frame);
        rafIds.add(currentRaf);
      }
    }
    onTick(0);
    currentRaf = requestAnimationFrame(frame);
    rafIds.add(currentRaf);
  };

  const movePkt = (pktId, bgId, txtId, label, fillVar, txtFill, x1, y1, x2, y2, widthPx = 168) => {
    const p = el(pktId);
    const bg = el(bgId);
    const tx = el(txtId);
    if (!p || !bg || !tx) return;
    bg.setAttribute("x", String(-widthPx / 2));
    bg.setAttribute("width", String(widthPx));
    bg.style.fill = fillVar;
    tx.style.fill = txtFill;
    tx.textContent = label;

    p.style.transition = "none";
    p.style.opacity = "1";
    p.style.transform = `translate(${x1}px, ${y1}px)`;
    p.getBoundingClientRect();

    p.style.transition = "transform 0.65s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease";
    p.style.transform = `translate(${x2}px, ${y2}px)`;
  };

  const sendPacket = (text, bgVar, textFill, fromX, fromY, toX, toY, widthPx = 144) => {
    movePkt("packet", "packet-bg", "packet-txt", text, bgVar, textFill, fromX, fromY, toX, toY, widthPx);
  };

  const hidePacket = (pktId = "packet") => {
    const p = el(pktId);
    if (p) p.style.opacity = "0";
  };

  const setBars = (cpuRes, cpuUsed, memRes, memUsed) => {
    const baseY = 568;
    const maxH = 275;
    const apply = (rectId, pct) => {
      const h = Math.max(3, Math.round((pct / 100) * maxH));
      const r = el(rectId);
      if (!r) return baseY;
      r.setAttribute("y", String(baseY - h));
      r.setAttribute("height", String(h));
      return baseY - h;
    };
    const cpuResTop = apply("bar-cpu-res", cpuRes);
    const cpuUsedTop = apply("bar-cpu-used", cpuUsed);
    const memResTop = apply("bar-mem-res", memRes);
    const memUsedTop = apply("bar-mem-used", memUsed);

    const wCpu = el("waste-box-cpu");
    const wMem = el("waste-box-mem");
    if (wCpu && cpuUsedTop > cpuResTop + 6) {
      wCpu.setAttribute("y", String(cpuResTop));
      wCpu.setAttribute("height", String(cpuUsedTop - cpuResTop - 2));
    }
    if (wMem && memUsedTop > memResTop + 6) {
      wMem.setAttribute("y", String(memResTop));
      wMem.setAttribute("height", String(memUsedTop - memResTop - 2));
    }
  };

  const highlightCpBox = (activeIdx) => {
    for (let i = 0; i < 4; i++) {
      const b = el("cp-box-" + i);
      if (!b) continue;
      if (i === activeIdx) {
        b.style.fill = "var(--s-blue-fill)";
        b.style.stroke = "var(--s-blue)";
        b.style.strokeWidth = "2.2";
      } else if (i < activeIdx) {
        b.style.fill = "var(--s-green-fill)";
        b.style.stroke = "var(--s-green)";
        b.style.strokeWidth = "1.6";
      } else {
        b.style.fill = "var(--s-surface-2)";
        b.style.stroke = "var(--s-border)";
        b.style.strokeWidth = "1.5";
      }
    }
  };

  const stylePodState = (mode) => {
    const outer = el("pod-outer");
    const badgeBg = el("pod-badge-bg");
    const badgeTxt = el("pod-badge-txt");
    const dot = el("agent-dot");
    const sub = el("agent-sub");
    const inner = el("agent-inner");
    if (!outer || !badgeBg || !badgeTxt || !dot || !sub || !inner) return;

    outer.style.opacity = "1";
    inner.style.opacity = "1";

    if (mode === "booting") {
      outer.style.stroke = "var(--s-blue)";
      outer.style.strokeDasharray = "8 5";
      outer.style.fill = "var(--s-blue-fill)";
      badgeBg.style.fill = "var(--s-amber-fill)";
      badgeBg.style.stroke = "var(--s-amber)";
      badgeTxt.style.fill = "var(--s-amber)";
      badgeTxt.textContent = "BOOTING";
      dot.style.fill = "var(--s-amber)";
      sub.textContent = "Pulling image & booting agent...";
    } else if (mode === "ready") {
      outer.style.stroke = "var(--s-blue)";
      outer.style.strokeDasharray = "none";
      outer.style.fill = "var(--s-blue-fill)";
      badgeBg.style.fill = "var(--s-green-fill)";
      badgeBg.style.stroke = "var(--s-green)";
      badgeTxt.style.fill = "var(--s-green)";
      badgeTxt.textContent = "RUNNING";
      dot.style.fill = "var(--s-green)";
      sub.textContent = "Sandbox active · processing turn";
    } else if (mode === "idle") {
      outer.style.stroke = "var(--s-amber)";
      outer.style.strokeDasharray = "6 4";
      outer.style.fill = "var(--s-sleep-fill)";
      badgeBg.style.fill = "var(--s-amber-fill)";
      badgeBg.style.stroke = "var(--s-amber)";
      badgeTxt.style.fill = "var(--s-amber)";
      badgeTxt.textContent = "IDLE HOLD";
      dot.style.fill = "var(--s-sleep)";
      sub.textContent = "Waiting 'Just In Case' · RAM locked";
    } else if (mode === "terminated") {
      outer.style.stroke = "var(--s-red)";
      outer.style.strokeDasharray = "6 5";
      outer.style.fill = "var(--s-red-fill)";
      outer.style.opacity = "0.42";
      inner.style.opacity = "0.35";
      badgeBg.style.fill = "var(--s-red-fill)";
      badgeBg.style.stroke = "var(--s-red)";
      badgeTxt.style.fill = "var(--s-red)";
      badgeTxt.textContent = "TERMINATED";
      dot.style.fill = "var(--s-red)";
      sub.textContent = "Pod deleted · next turn cold-starts!";
    }
  };

  const cleanup = () => {
    disposed = true;
    timers.forEach(clearTimeout);
    intervals.forEach(clearInterval);
    rafIds.forEach(cancelAnimationFrame);
    timers = [];
    intervals = [];
    rafIds.clear();
  };

  return {
    el,
    q,
    qAll,
    svgEl,
    later,
    every,
    animateProgress,
    easeOutCubic,
    movePkt,
    sendPacket,
    hidePacket,
    setBars,
    highlightCpBox,
    stylePodState,
    cleanup
  };
}
