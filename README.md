# CircuitView

CircuitView is a premium interactive product showcase and educational catalog for common electronics components. Each part is presented as a browsable 3D object with a refined editorial layout, motion-driven storytelling, and a cleaner product-page aesthetic than a typical technical dashboard.

The project is designed to feel more like a luxury product catalog than a traditional hardware reference page: dark mode, warm metallic accents, restrained motion, and strong typography create a more polished showcase for maker-friendly components.

## Live project

- GitHub Pages: https://joseacunodev-source.github.io/circuitview/
- Repository: https://github.com/joseacunodev-source/circuitview

## What the site does

- Renders electronics parts with interactive 3D models using `<model-viewer>`
- Shows each component in a dedicated product bay with technical metadata, use cases, and context
- Uses a scroll-driven narrative layout to move through the collection
- Includes a theme system with dark, light, and sketch-inspired presentation modes
- Supports responsive layouts for desktop and mobile browsing
- Focuses on product storytelling rather than a purely utilitarian interface

## Tech stack

This is a static front-end project with no build pipeline required:

- HTML5 structure and semantic sections
- CSS3 for layout, theme design, motion, typography, and responsive behavior
- Vanilla JavaScript for dynamic content generation and scroll logic
- Google Fonts for editorial typography pairing
- Google model-viewer for rendering GLB assets in-browser

## Project structure

```text
circuitview/
├── index.html           # page shell and sections
├── style.css            # all visual design, layout, theme, and animation styles
├── script.js            # dynamic component generation and interactivity
├── components.js        # metadata for all inventory items
├── 3d-files/            # GLB model assets
├── README.md            # project overview and development notes
├── AGENT_TASKS.md        # task history and project continuity notes
└── .gitignore           # local repo hygiene (if present)
```

## Local development

Because the 3D models are loaded as browser resources, the page should be served through a local web server rather than opened directly from the filesystem.

### Start the local server

```bash
cd circuitview
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Adding a new component

1. Place the model file in `3d-files/`.
2. Add an entry to the `COMPONENTS` array in `components.js`.
3. Use an existing item as a template for fields such as:
   - name
   - short description
   - detail text
   - category
   - model file path
   - accent metadata
   - use case or specification notes

Example structure:

```js
{
  name: 'Arduino Uno',
  slug: 'arduino-uno',
  kind: 'Microcontroller',
  model: '3d-files/arduino-uno.glb',
  description: 'A classic prototyping board...',
  features: ['USB programming', 'ATmega328P', 'Extensible I/O'],
  accent: 'gold'
}
```

## Design direction

The visual language was refined around a luxury editorial product-page aesthetic, blending:

- near-black foundations for depth and contrast
- warm champagne and gold accents for tonal richness
- oxblood emphasis for landing interactions on lighter surfaces
- serif headings for a more premium, editorial attitude
- geometric sans body type for clarity and modern balance
- thin outlined actions instead of heavy solid CTA blocks
- restrained motion that feels deliberate instead of noisy

The goal is to make the site feel like an atelier catalog or fine product showroom rather than a technical dashboard or an AI-generated template.

## Scroll and motion behavior

The initial version had issues with excessive scroll distance, awkward transitions, and repetitive reveal motion. The later revisions focused on:

- shorter, more natural reveal progression
- smoother directional movement and less blur-heavy transitions
- more centered and readable layouts
- stronger spacing and hierarchy across all sections
- responsive scaling for mobile and desktop interactions

## Contributing

This project is intentionally lightweight and easy to continue modifying by hand.

Typical tasks include:

- adding new model files and metadata entries
- tuning typography and spacing in `style.css`
- adjusting reveal animations and scroll behavior in `script.js`
- improving the theme system or product editorial presentation

## Project continuity

For longer-term notes and task tracking, see [AGENT_TASKS.md](./AGENT_TASKS.md).

## Deployment notes

The site is built as static content, so deployment is straightforward with any static host or GitHub Pages-compatible setup. The only requirement is that the `3d-files` assets remain available at the correct public paths.

## Status

The project is active, responsive, and styled as a premium interactive product showcase for electronics components.
