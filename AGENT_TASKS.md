# CircuitView — Agent Task Board

This file is the single handoff point between AI sessions (or human devs)
working on this project. Read this file completely before doing anything
else. When you finish a work session, update it before you stop, so the
next agent — human or AI — can continue without re-discovering context.

---

## 1. Master prompt (the standing brief)

Use this as the system/task prompt if you're spinning up a new AI session
to continue this project:

> You are continuing work on CircuitView, a website at
> github.com/joseacunodev-source/circuitview that lets visitors inspect
> real electronics components as interactive 3D models in the browser,
> scroll through them one at a time, and read what each part does and is used for.
>
> Constraints and standards to keep:
> - Theme is a field-instrument / PCB-and-oscilloscope aesthetic with dark PCB green, copper/amber accents, and phosphor green highlights.
> - 3D models are rendered with Google's <model-viewer> web component from .glb files in /3d-files/.
> - Component content lives in components.js as a single array.
> - Motion should be deliberate and in line with the existing power-on reveal.
> - No build step is required; plain HTML/CSS/JS is preferred.

---

## 2. Project structure

/
├── index.html
├── style.css
├── script.js
├── components.js
├── 3d-files/
├── .gitattributes
├── README.md
├── AGENT_TASKS.md

## 3. How to run it locally

Use a simple static server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## 4. Status

### Completed
- [x] Site scaffold and component data wired up
- [x] 12 components with descriptions, uses, and specs
- [x] Interactive 3D viewer layout and scroll-driven bay design
- [x] Hero canvas, HUD, rail, marquee, and theme switcher
- [x] Local static site structure restored to repo root for GitHub Pages compatibility
- [x] README and agent task handoff file created at repo root

### Notes
- [x] The project is now aligned with the intended repo structure for deployment from the repository root.
- [x] Files were restored into the root directory so the site can be served directly from GitHub Pages.
- [x] Scroll-driven section reveals were tuned to trigger sooner and feel less sluggish.
- [x] Bay card motion now alternates from opposite directions and preserves alignment on smaller viewports.

---

## 5. Task board

### Now
- [x] Restore repo root structure for direct deployment
- [x] Verify local site serving works from the root URL
- [x] Prepare README and handoff docs for deployment

### Next
- [ ] Deploy to GitHub Pages and add the live URL to the README
- [ ] Browser-test every model and fix any per-model camera or visibility issues
- [ ] Consider GLB compression if file size becomes an issue on first load

### Later
- [ ] Add social/SEO metadata and favicon
- [ ] Improve accessibility, contrast, and keyboard access
- [ ] Add more components or tuning based on browser feedback
