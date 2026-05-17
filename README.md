**Elecar — Responsive Car Website Template**

A lightweight, responsive car-landing website template built with HTML, Tailwind CSS, and vanilla JavaScript. Ready for quick prototypes, demos, and small marketing pages.

**Preview**: ![preview](https://github.com/kaushalsahu07/elecar/assets/131914333/3d96049c-af97-4bf5-9944-037bf747bc80)

**Features**
- **Responsive:** Works across common desktop and mobile screen sizes.
- **Animated UI:** Scroll-based reveal animations and lightweight interactive components.
- **Tailwind-based:** Uses Tailwind CSS for utility-first styling and fast customization.

**Tech stack**
- HTML, CSS, JavaScript
- Tailwind CSS
- Small libraries: MixItUp, ScrollReveal, Swiper (used for interactive widgets)

**Project structure (important files)**
- [code/index.html](code/index.html#L1) — main HTML entry.
- [code/input.css](code/input.css#L1) — Tailwind input file used to build `src/output.css`.
- [src/output.css](src/output.css#L1) — generated CSS used by the site.
- [code/js/main.js](code/js/main.js#L1) — main JavaScript.
- [tailwind.config.js](tailwind.config.js#L1) — Tailwind configuration.
- [package.json](package.json#L1) — build scripts and dependencies.

**Getting started**

Prerequisites: Node.js and npm (for Tailwind CLI). To preview locally you can also use any static file server.

1. Install dependencies (one-time):

```
npm install
```

2. Build the Tailwind CSS once:

```
npm run build
```

3. During development, rebuild on changes:

```
npm run watch
```

4. Preview the site:
- Open [code/index.html](code/index.html#L1) directly in your browser

**Development notes**
- Tailwind CLI is used to compile `code/input.css` into `src/output.css` (see `package.json` scripts `build` and `watch`).
- Keep assets under `code/` and the compiled CSS in `src/` for easy hosting.

**Credits**
- Template & design inspiration: @bedimcode
- Icons / libraries: MixItUp, ScrollReveal, Swiper

**Contact & contribution**
- Found an issue or want to contribute? Open a GitHub issue or a PR.
- Author contact: kaushalsahu.me@gmail.com
- Linkedin: [@kaushalsahu07](https://www.linkedin.com/in/kaushalsahu07/)
- Instagram: [@cd.kaushal](https://www.instagram.com/cd.kaushal/)
- Portfolio: [Website Link ](https://kaushalsahu.tech/)
- X (Tweeter): [@kaushalsahu_07](https://x.com/kaushalsahu_07?t=7nk-jApWrJkgW6YwklJZWQ&s=09)

---

