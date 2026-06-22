# Ntizar Design System

> Aurora v5.1 **Constellation**: a copy-paste CSS core + 10 optional packs to build any web app (dashboards, maps, 3D scenes, landings, forms, generative art) keeping the blue + orange identity. v5 added **real Liquid Glass**, **OKLCH**, **multi-axis theming** and **forced-colors**. v5.1 ships **agent-ready onboarding** ([`AGENTS.md`](AGENTS.md)) + **public CDN** so you stop pasting CSS into AI prompts.

![Version](https://img.shields.io/badge/version-5.1.0-2563eb)
![CDN](https://img.shields.io/badge/cdn-jsdelivr-9333ea)
![API](https://img.shields.io/badge/api-namespaced-0f172a)
![Modo](https://img.shields.io/badge/theme-light%20%7C%20dark%20%7C%20forced--colors-f97316)
![Skins](https://img.shields.io/badge/skins-6-7c3aed)
![CSS Only](https://img.shields.io/badge/css-only-16a34a)

`CSS-only` · `Opt-in` · `Namespaced` · `Light-first` · `Liquid glass` · `Modular packs` · `Agent-ready`

---

## Arquitectura Constellation

```
ntizar.css            -> core (siempre)
ntizar.themes.css     -> 5 skins (aurora · sunset · midnight · ocean · citrus) + paleta de charts
ntizar.data.css       -> KPIs, dashboards, progress, meter, skeleton, avatar, timeline
ntizar.charts.css     -> contenedores para Chart.js/Apex/D3, sparkline + donut CSS-only, paletas
ntizar.maps.css       -> Leaflet/Mapbox/MapLibre con look Ntizar
ntizar.viz.css        -> stages para three.js, fondos aurora, orbs, glow ring
ntizar.motion.css     -> reveal, glow-pulse, aurora-pan, shimmer, marquee, typing, hover-lift
ntizar.forms.css      -> switch, custom check/radio, range, OTP, file drop, stepper, search
ntizar.ui.css         -> modal, drawer, tabs, accordion, dropdown, toast, tooltip, command-bar
ntizar.patterns.css   -> app-shell, hero, pricing, features, faq, footer, auth-shell, empty/error
ntizar.next.css       -> v5: liquid glass real, OKLCH, multi-axis theming, mesh, forced-colors, skin AAA
```

Cada pack es independiente. Carga 1 o los 10.

## Documentación

- [AGENTS.md](AGENTS.md) → **contrato para IA**: reglas duras, anti-patterns, cómo usar sin gastar tokens
- [INDEX.md](INDEX.md) → **mapa de clases**: "necesito X → pack Y → clases Z"
- [DESIGN.md](DESIGN.md) → **spec machine-readable** (Google design.md): tokens, tipografía, componentes
- [gallery.html](gallery.html) → **showcase** con todo en vivo (foundations + core + packs + reference API)

### Ecosistema design.md

```bash
npm run lint:design       # contraste WCAG AA + tokens huérfanos + refs rotas
npm run build:tailwind    # → dist/tailwind.theme.json
npm run build:dtcg        # → dist/tokens.json (Design Tokens Community Group)
```

CI activo en [.github/workflows/design-lint.yml](.github/workflows/design-lint.yml): cualquier PR que baje contraste o rompa tokens falla automáticamente.

## Quick Start

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Ntizar/Ntizar-Aurora@master/ntizar.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Ntizar/Ntizar-Aurora@master/ntizar.themes.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Ntizar/Ntizar-Aurora@master/ntizar.next.css">

<body class="nz" data-nz-theme="light" data-nz-skin="aurora">
  ...
</body>
```

> **Pin a version in production:** replace `@master` with `@v5.1.0` once tagged for immutable, edge-cached assets.

---

## Cómo funciona Aurora (en 2 minutos)

Aurora es **CSS puro**. Sin npm, sin build, sin JS obligatorio. Lo único que haces es enlazar archivos `.css` y poner la clase `.nz` en tu `<body>` (o en cualquier wrapper). A partir de ahí, **el sistema vive completamente dentro de `.nz`**, lo que significa que puedes meterlo dentro de una app que ya use Tailwind, Bootstrap o lo que sea, y no romperá nada de fuera.

### El núcleo: 1 archivo

`ntizar.css` trae tokens, layout primitives (`.nz-container`, `.nz-stack`, `.nz-grid`, `.nz-cluster`, `.nz-surface`), componentes (`.nz-btn`, `.nz-card`, `.nz-badge`, `.nz-input`, `.nz-alert`…) y utilidades (`.u-nz-*`). Es lo único obligatorio.

### Los 10 packs: opt-in

Cada pack añade un dominio. Cargas solo los que necesites:

| Pack | Para qué sirve |
|---|---|
| `themes` | 5 skins de marca (`aurora`, `sunset`, `midnight`, `ocean`, `citrus`) |
| `data` | KPIs, progress bars, skeletons, avatars, timeline |
| `charts` | Wrappers para Chart.js / Apex / D3 + sparklines y donuts CSS-only |
| `maps` | Estilos para Leaflet / Mapbox / MapLibre |
| `viz` | Stages para three.js, fondos aurora, orbs |
| `motion` | Animaciones reveal, glow-pulse, aurora-pan, shimmer |
| `forms` | Switches, OTP, file drop, range, stepper |
| `ui` | Modal, drawer, tabs, dropdown, toast, tooltip |
| `patterns` | App-shell, hero, pricing, FAQ, footer, auth |
| **`next`** | **v5: liquid glass real, OKLCH, multi-axis, mesh, AAA** |

### Cómo se personaliza: atributos en el root

Toda la apariencia se controla con atributos `data-*` sobre `.nz`. Sin tocar CSS:

```html
<body class="nz"
      data-nz-theme="dark"           <!-- light | dark -->
      data-nz-skin="midnight"        <!-- aurora|sunset|midnight|ocean|citrus|contrast -->
      data-nz-shape="rounded"        <!-- default|sharp|rounded|brutalist  (v5) -->
      data-nz-density="compact"      <!-- comfortable|compact|spacious     (v5) -->
      data-nz-motion="springy"       <!-- standard|springy|calm|none       (v5) -->
      data-nz-color-system="oklch">  <!-- hex|oklch                        (v5) -->
```

Cambias un atributo y **toda la página** se reescribe en runtime. Sin JS, sin recargas.

### Las reglas de oro

1. **Todo lo público vive bajo `.nz`** — no hay clases globales sueltas.
2. **Todos los valores son tokens `--nz-*`** — nunca hardcodes un hex o un `16px`.
3. **Sin `!important`** fuera de utilidades.
4. **BEM** para componentes: `.nz-card__body--featured`.
5. **Si no aparece en `gallery.html`, no existe** — la galería es la única fuente de verdad de la API pública.

---

## ✨ What's new in v5.0 "Constellation"

Five disruptive features delivered as a **single opt-in pack** (`ntizar.next.css`). Zero changes to the core, 100% backward compatible.

### 1. Liquid Glass real (visionOS-style)

Real glass with specular highlight, chromatic edge, dual inset shadow, and backdrop `blur(20px) saturate(1.6)`.

```html
<article class="nz-card--glass-liquid nz-card--glass-liquid-aurora" data-liquid>
  <h3>Premium card</h3>
</article>
```

Tints: `--brand`, `--accent`, `--aurora`. Available on `.nz-card`, `.nz-surface`, `.nz-btn`.

### 2. OKLCH color system

Parallel scales `--nz-oklch-{brand,accent}-{50..900}` derived from a single hue + chroma. Activated with `data-nz-color-system="oklch"`. Perceptually uniform, better dark mode, smoother gradients.

### 3. Multi-axis theming

Four orthogonal axes you mix freely with theme + skin. Same components, infinite personalities. `brutalist` even swaps soft shadows for solid offset shadows.

### 4. Aurora Mesh background

Animated mesh-gradient hero, **0 KB of images**. Four OKLCH `radial-gradient` layers + `mix-blend-mode: screen` + 22s `ease-in-out` drift animation.

### 5. Accessibility as a feature

- **6th skin `contrast`** — WCAG AAA. Pure black/white. Double focus ring.
- **Forced-colors mode** — full overrides for Windows High Contrast.
- **Auto-contrast** — `--nz-text-auto` + `.u-nz-text-auto` using native `light-dark()`.
- **Reduced motion** — every animation guarded by `@media (prefers-reduced-motion: reduce)`.

### Why it's safe

`ntizar.next.css` is **purely additive**. If you don't load it, you don't notice it. **Zero risk to ship to production today.**

---

## Honest limitations

- **No JS shipped.** Modal/tabs/drawer/dropdown/toast are styled, not behaved. You (or the agent) must toggle state classes like `.nz-modal--open`.
- **"WCAG AAA" applies to the `contrast` skin specifically**, not to every skin/component combination. The other skins target AA.
- **No tree-shaking.** A page using 5 components still loads the full pack. For ultra-small bundles, copy only the rules you need (the file is plain CSS — grep is enough).
- **No releases tagged yet.** Until v5.1.0 is tagged, `@master` and `@v5.1.0` resolve differently. Pin once tagged.

---

## Qué incluye Aurora

Aurora v4 fue un reinicio deliberado:

- La API pública ahora usa prefijo `nz-*`
- Los tokens ahora usan prefijo `--nz-*`
- El sistema deja de pelearse con apps ajenas porque la API visual real vive dentro de `.nz`
- `gallery.html` pasa a ser la documentación canónica

### Filosofía

1. Poder copiar `ntizar.css` a una app nueva y empezar rápido.
2. Evitar colisiones cuando quieras aislarlo en una parte concreta.
3. Mantener una marca rica: azul, naranja, gradientes Aurora y liquid glass como lenguaje real.
4. Documentar bien cuándo usar cada pieza y cuándo no.

### Cuándo usarlo

- Arrancas una app nueva y quieres una base visual simple
- Quieres una capa de UI pequeña sin meter Tailwind, Bootstrap o un build
- Necesitas aislar un bloque visual dentro de una app mayor

### Cuándo no usarlo

- El proyecto ya tiene un design system maduro
- Solo necesitas tokens de marca y no componentes
- Quieres un framework enorme de utilidades o JS interactivo
