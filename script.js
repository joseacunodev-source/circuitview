/* ============================================================
   HERO CANVAS — drifting circuit-trace network
   ============================================================ */
(function heroCanvas() {
  const canvas = document.getElementById("hero-canvas");
  const ctx = canvas.getContext("2d");
  let w, h, nodes, pulses;

  function resize() {
    w = canvas.width = canvas.offsetWidth * devicePixelRatio;
    h = canvas.height = canvas.offsetHeight * devicePixelRatio;
  }

  function buildGrid() {
    nodes = [];
    const cols = 9, rows = 6;
    const spacingX = w / cols, spacingY = h / rows;
    for (let i = 0; i <= cols; i++) {
      for (let j = 0; j <= rows; j++) {
        if (Math.random() > 0.35) {
          nodes.push({
            x: i * spacingX + (Math.random() - 0.5) * spacingX * 0.4,
            y: j * spacingY + (Math.random() - 0.5) * spacingY * 0.4,
          });
        }
      }
    }
    pulses = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < spacingX * 1.3 && Math.random() > 0.55) {
          pulses.push({ a: nodes[i], b: nodes[j], t: Math.random(), speed: 0.0015 + Math.random() * 0.003 });
        }
      }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    ctx.strokeStyle = "rgba(231, 201, 143, 0.10)";
    ctx.lineWidth = 1;
    pulses.forEach((p) => {
      ctx.beginPath();
      ctx.moveTo(p.a.x, p.a.y);
      ctx.lineTo(p.b.x, p.b.y);
      ctx.stroke();
    });

    ctx.fillStyle = "rgba(231, 201, 143, 0.25)";
    nodes.forEach((n) => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
      ctx.fill();
    });

    pulses.forEach((p) => {
      p.t += p.speed;
      if (p.t > 1) p.t = 0;
      const x = p.a.x + (p.b.x - p.a.x) * p.t;
      const y = p.a.y + (p.b.y - p.a.y) * p.t;
      ctx.beginPath();
      ctx.arc(x, y, 2.2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(127, 224, 168, 0.85)";
      ctx.shadowColor = "rgba(127, 224, 168, 0.9)";
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", () => {
    resize();
    buildGrid();
  });

  resize();
  buildGrid();

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!prefersReducedMotion) {
    draw();
  } else {
    ctx.clearRect(0, 0, w, h);
    pulses.forEach((p) => {
      ctx.strokeStyle = "rgba(231, 201, 143, 0.10)";
      ctx.beginPath();
      ctx.moveTo(p.a.x, p.a.y);
      ctx.lineTo(p.b.x, p.b.y);
      ctx.stroke();
    });
  }
})();

/* ============================================================
   INTRO LOADER
   Ties progress to real work where possible (fonts + each
   model-viewer's 'load' event), with a sensible minimum/maximum
   display time so it never feels instant or gets stuck.
   ============================================================ */
(function loader() {
  const el = document.getElementById("loader");
  const fill = document.getElementById("loader-fill");
  const pct = document.getElementById("loader-pct");
  document.body.style.overflow = "hidden";

  const totalModels = COMPONENTS.length;
  let loadedModels = 0;
  let progress = 0;
  const minDurationMs = 900;
  const maxDurationMs = 3200;
  const start = performance.now();

  function setProgress(p) {
    progress = Math.max(progress, Math.min(1, p));
    fill.style.width = `${Math.round(progress * 100)}%`;
    pct.textContent = `${Math.round(progress * 100)}%`;
  }

  function finish() {
    setProgress(1);
    setTimeout(() => {
      el.classList.add("is-hidden");
      document.body.style.overflow = "";
    }, 200);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("model-viewer").forEach((mv) => {
      mv.addEventListener(
        "load",
        () => {
          loadedModels += 1;
          setProgress(Math.max(0.15, loadedModels / totalModels));
        },
        { once: true }
      );
    });
  });

  const tick = setInterval(() => {
    const elapsed = performance.now() - start;
    setProgress(Math.min(0.9, elapsed / maxDurationMs));
    if (elapsed > maxDurationMs) {
      clearInterval(tick);
      finish();
    }
  }, 80);

  window.addEventListener("load", () => {
    const elapsed = performance.now() - start;
    const wait = Math.max(0, minDurationMs - elapsed);
    setTimeout(() => {
      clearInterval(tick);
      finish();
    }, wait);
  });
})();

/* ============================================================
   DOT-BURST — small scattering dots on hover, on any element
   marked [data-dot-burst]
   ============================================================ */
(function dotBurst() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  document.querySelectorAll("[data-dot-burst]").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      const count = 4;
      for (let i = 0; i < count; i++) {
        const dot = document.createElement("span");
        dot.className = "dot-burst";
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.6;
        const dist = 22 + Math.random() * 14;
        dot.style.setProperty("--dx", `${20 + Math.random() * 60}%`);
        dot.style.setProperty("--dy", `${20 + Math.random() * 60}%`);
        dot.style.setProperty("--tx", `${Math.cos(angle) * dist}px`);
        dot.style.setProperty("--ty", `${Math.sin(angle) * dist}px`);
        dot.style.animationDelay = `${i * 0.03}s`;
        el.appendChild(dot);
        dot.addEventListener("animationend", () => dot.remove(), { once: true });
      }
    });
  });
})();
const CORNER_SVG = `<svg viewBox="0 0 28 28"><path d="M28 2 H4 a2 2 0 0 0 -2 2 V28"/></svg>`;
const DOODLE_SVG = `<svg viewBox="0 0 34 16"><path d="M1 8 Q6 1, 11 8 T21 8 Q24 3 27 8 T33 8"/></svg>`;

function pad(n) { return String(n).padStart(2, "0"); }

function buildBay(component, index, total) {
  const bay = document.createElement("section");
  bay.className = "bay";
  bay.id = `bay-${component.id}`;

  const specRows = Object.entries(component.specs)
    .map(([k, v]) => `<div class="bay__spec-row"><dt>${k}</dt><dd>${v}</dd></div>`)
    .join("");

  const useItems = component.uses.map((u) => `<li>${u}</li>`).join("");

  bay.innerHTML = `
   <div class="bay__pin">
    <div class="bay__viewer-frame">
      <model-viewer
        src="${component.file}"
        alt="3D model of ${component.name}"
        camera-controls
        interaction-prompt="none"
        shadow-intensity="0.6"
        exposure="1.05"
        loading="lazy"
        reveal="auto">
      </model-viewer>
      <div class="bay__corner bay__corner--tl">${CORNER_SVG}</div>
      <div class="bay__corner bay__corner--tr">${CORNER_SVG}</div>
      <div class="bay__corner bay__corner--bl">${CORNER_SVG}</div>
      <div class="bay__corner bay__corner--br">${CORNER_SVG}</div>
      <div class="bay__scan"></div>
      <div class="bay__part-number">${component.partNumber} / DRAG TO ROTATE</div>
    </div>

    <div class="bay__panel">
      <div class="bay__index">
        <span class="bay__index-count">${pad(index + 1)} / ${pad(total)}</span>
        <span class="bay__index-doodle">${DOODLE_SVG}</span>
      </div>
      <p class="bay__tag">${component.tagline}</p>
      <h2 class="bay__name">${component.name}</h2>
      <p class="bay__description">${component.description}</p>

      <span class="bay__section-label">Typical uses</span>
      <ul class="bay__uses">${useItems}</ul>

      <span class="bay__section-label">Specs</span>
      <dl class="bay__specs">${specRows}</dl>
    </div>
   </div>
  `;

  return bay;
}

const baysRoot = document.getElementById("bays");
const quickNav = document.getElementById("quick-nav");
const rail = document.getElementById("rail");
const marqueeTrack = document.getElementById("marquee-track");

COMPONENTS.forEach((component, index) => {
  baysRoot.appendChild(buildBay(component, index, COMPONENTS.length));

  const navLink = document.createElement("a");
  navLink.href = `#bay-${component.id}`;
  navLink.textContent = component.name;
  navLink.dataset.target = `bay-${component.id}`;
  quickNav.appendChild(navLink);

  const railNode = document.createElement("div");
  railNode.className = "rail__node";
  railNode.dataset.target = `bay-${component.id}`;
  railNode.title = component.name;
  rail.appendChild(railNode);
});

function buildMarqueeItems() {
  return COMPONENTS.map(
    (c) => `<a class="marquee__item" href="#bay-${c.id}"><span>${c.partNumber}</span>${c.name}</a>`
  ).join('<span class="marquee__sep">/</span>');
}
marqueeTrack.innerHTML = buildMarqueeItems() + '<span class="marquee__sep">/</span>' + buildMarqueeItems();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".bay").forEach((bay) => revealObserver.observe(bay));

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const bayEls = Array.from(document.querySelectorAll(".bay"));
const bayState = bayEls.map((bay) => ({
  el: bay,
  viewer: bay.querySelector("model-viewer"),
  frame: bay.querySelector(".bay__viewer-frame"),
  userTookOver: false,
}));

bayState.forEach((state) => {
  state.viewer.addEventListener("camera-change", (e) => {
    if (e.detail && e.detail.source === "user-interaction") {
      state.userTookOver = true;
    }
  });
});

const resetObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        const state = bayState.find((s) => s.el === entry.target);
        if (state) state.userTookOver = false;
      }
    });
  },
  { threshold: 0 }
);
bayEls.forEach((bay) => resetObserver.observe(bay));

function updateScrollDrivenCameras() {
  const vh = window.innerHeight;

  bayState.forEach((state) => {
    const rect = state.el.getBoundingClientRect();
    const scrollRange = rect.height - vh;
    if (scrollRange <= 0) return;

    const progress = Math.min(1, Math.max(0, -rect.top / scrollRange));

    if (!prefersReducedMotion && !state.userTookOver) {
      const theta = progress * 300;
      const phi = 82 - progress * 16;
      state.viewer.cameraOrbit = `${theta}deg ${phi}deg auto`;
    }

    const tailFade = progress > 0.9 ? (progress - 0.9) / 0.1 : 0;
    state.frame.style.opacity = String(1 - tailFade * 0.35);
  });
}

let ticking = false;
function onScrollFrame() {
  updateScrollDrivenCameras();
  ticking = false;
}
window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(onScrollFrame);
    ticking = true;
  }
}, { passive: true });
updateScrollDrivenCameras();

if (window.Lenis && !prefersReducedMotion) {
  const lenis = new window.Lenis({ duration: 1.1, smoothWheel: true });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

function updateActiveNav() {
  let closest = null;
  let closestDist = Infinity;

  bayState.forEach((state) => {
    const rect = state.el.getBoundingClientRect();
    if (rect.top <= 0 && rect.bottom > 0) {
      const dist = Math.abs(rect.top);
      if (dist < closestDist) {
        closestDist = dist;
        closest = state.el.id;
      }
    }
  });

  if (closest) {
    document.querySelectorAll(".hud-bar__nav a").forEach((a) => {
      a.classList.toggle("is-active", a.dataset.target === closest);
    });
    document.querySelectorAll(".rail__node").forEach((n) => {
      n.classList.toggle("is-active", n.dataset.target === closest);
    });
  }
}
window.addEventListener("scroll", () => requestAnimationFrame(updateActiveNav), { passive: true });
updateActiveNav();

const THEME_KEY = "circuitview-theme";
const themeButtons = document.querySelectorAll("[data-theme-choice]");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
  themeButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.themeChoice === theme);
  });
}

themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => applyTheme(btn.dataset.themeChoice));
});

applyTheme(document.documentElement.getAttribute("data-theme") || "dark");
