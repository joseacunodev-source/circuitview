# CircuitView

An interactive 3D field guide to common electronics components — Arduino, sensors, motor drivers, passives, and more. Every part is a real, spinnable 3D model you can drag and inspect, with a plain-language description of what it does and where it's used.

**Live site:** _add your GitHub Pages / hosting link here once deployed_

## Running locally

No build step required — this is plain HTML/CSS/JS. `<model-viewer>` needs to fetch the `.glb` files over HTTP, so open it through a local server rather than double-clicking `index.html`:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Adding a new component

1. Add the `.glb` file to `/3d-files/` (track it with Git LFS if it's large: `git lfs track "*.glb"`).
2. Add one entry to the `COMPONENTS` array in `components.js` — copy an existing entry as a template.

That's it. The page builds itself from `components.js`.

## For contributors continuing this project

See [AGENT_TASKS.md](./AGENT_TASKS.md) — it has the full project brief and a running task board (what's done, what's next), meant to let anyone (human or AI) pick up the project without re-discovering context.
