# Ntizar Aurora

> Aurora v6 **Constellation**: design system CSS-only con 15 packs modulares, liquid glass real, three.js, OKLCH y multi-axis theming. Identidad azul `#2563eb` + naranja `#f97316`, sin morados. Sin build, sin dependencias, sin JS obligatorio.

![Version](https://img.shields.io/badge/version-6.2.0-2563eb)
![CDN](https://img.shields.io/badge/cdn-jsdelivr-2563eb)
![API](https://img.shields.io/badge/api-namespaced-0f172a)
![Modo](https://img.shields.io/badge/theme-light%20%7C%20dark%20%7C%20forced--colors-f97316)
![Skins](https://img.shields.io/badge/skins-6-2563eb)
![CSS Only](https://img.shields.io/badge/css-only-16a34a)

`CSS-only` · `Opt-in` · `Namespaced` · `Light-first` · `Liquid glass` · `Three.js ready` · `Modular packs` · `Agent-ready`

---

## Arquitectura Constellation

```
ntizar.css            -> core (siempre) — tokens, base, objetos, componentes, utilities
ntizar.themes.css     -> 6 skins (aurora · sunset · midnight · ocean · citrus · contrast) + paleta charts
ntizar.data.css       -> KPIs, dashboards, progress, meter, skeleton, avatar, timeline
ntizar.charts.css     -> contenedores para Chart.js/Apex/D3, sparkline + donut CSS-only
ntizar.maps.css       -> Leaflet/Mapbox/MapLibre con look Ntizar
ntizar.viz.css        -> stages para three.js, fondos aurora, orbs, glow ring, scanlines
ntizar.motion.css     -> reveal, glow-pulse, aurora-pan, shimmer, marquee, typing, hover-lift
ntizar.forms.css      -> switch, custom check/radio, range, OTP, file drop, stepper, search
ntizar.ui.css         -> modal, drawer, tabs, accordion, dropdown, toast, tooltip, command-bar
ntizar.patterns.css   -> app-shell, hero, pricing, features, faq, footer, auth-shell, empty/error
ntizar.next.css       -> v5: liquid glass real, OKLCH, multi-axis theming, mesh, forced-colors, skin AAA
ntizar.three.css       -> v6: contenedores .nz-three para escenas Three.js reutilizables (three-scenes.js: icosaedro, grafo, particulas, anillos)
ntizar.ai.css          -> v6.2: primitivas AI-native (loader, thinking, stream, approval, toolchips, taskrow, chat, promptbar, recommend, contextcard, tables, sidenav, command, flow, insight, codeblock diff, finetune, selection) — Estilo Núcleo limpio, monocromo azul, light por defecto
ntizar.nucleo.css     -> v5.2: colores sólidos puros, bento grid, stats bar, barras/ring CSS-only, stage3d
ntizar.app.css        -> v6.2: App Kit móvil-first (shell+tabbar, hero compacto, KPI tiles, chips, listas, bottom-sheet, toast, empty, skeleton, ajustes, footerbar, offline, onboarding) — un tono, sólido, touch>=44px, sin gradientes
```

Cada pack es independiente. Carga 1 o los 14 opcionales (15 con el core). **Total: 364 KB CSS, 129 componentes, 0 dependencias.**

## Documentación

- [LLM.md](LLM.md) → **Guía de decisión LLM** (~2 KB): "necesito X → packs Y → clases Z". **Empieza aquí si eres un agente IA.**
- [AGENTS.md](AGENTS.md) → **contrato para IA**: reglas duras, anti-patterns, decision tree, cómo usar sin gastar tokens
- [INDEX.md](INDEX.md) → **mapa de clases**: "necesito X → pack Y → clases Z"
- [components.json](components.json) → **spec machine-readable**: 129 componentes con modificadores, categorías, packs
- [DESIGN.md](DESIGN.md) → **spec machine-readable** (Google design.md): tokens, tipografía, componentes
- [BRAND.md](BRAND.md) → **voz de marca**: posicionamiento, boilerplate, keywords, tono, "lo que Aurora NO es"
- [brandbook.md](brandbook.md) → **guía de marca descargable**: logo, color, tipografía, forma, voz
- [AGENTS.md](AGENTS.md) → **contrato para IA**: reglas duras, anti-patterns, decision tree, cómo usar sin gastar tokens
- [examples/](examples/) → **5 ejemplos completos**: login, dashboard, landing, UI components, forms
- [gallery.html](gallery.html) → **showcase** con todo en vivo (foundations + core + packs + reference API)
- [index.html](index.html) → **landing page** con Three.js (icosaedro wireframe + constelación de partículas + parallax)
- [brand.html](brand.html) → **kit de marca vivo** con Three.js (A extruded 3D + partículas + anillos orbitales)
- [assets/](assets/) → **logos, símbolos, favicon** en SVG + PNG (11 variantes)

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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Ntizar/Ntizar-Aurora@master/ntizar.app.css">

<body class="nz" data-nz-theme="light" data-nz-skin="aurora">
  ...
</body>
```

> **Pin a version in production:** replace `@master` with `@v5.2.0` once tagged for immutable, edge-cached assets.

---

## Qué es un "diseño Aurora Ntizar"

Cuando pidas un **diseño Aurora Ntizar**, esto es lo que significa:

| Aspecto | Especificación |
|---|---|
| **Colores** | Azul `#2563eb` + Naranja `#f97316`. **Sin morados, sin violeta.** Los gradientes azul→naranja interpolan via azul claro `#3b82f6`, nunca via `#7c3aed` |
| **Fondo** | Blanco puro `#ffffff` (light mode por defecto) |
| **Glass** | Liquid Glass real de 4 capas: base translúcida + `backdrop-filter: blur(24px) saturate(180%)` + dual inset shadow + borde cromático |
| **Layout** | Bento grid asimétrico responsive, no cards bordeadas genéricas |
| **3D** | Three.js con partículas, wireframes, parallax mouse. Paleta sincronizada con el skin activo |
| **CSS** | Solo clases `.nz-*` y tokens `--nz-*`. Sin hardcodear hex/px. Sin build, sin npm |
| **Scope** | Todo dentro de `.nz` — no colisiona con Tailwind/Bootstrap/etc |
| **Theming** | `data-nz-theme`, `data-nz-skin`, `data-nz-shape`, `data-nz-density`, `data-nz-motion`, `data-nz-color-system` |
| **Atribución** | "Hecho con ❤️ por David Antizar" |

---

## Cómo funciona Aurora (en 2 minutos)

Aurora es **CSS puro**. Sin npm, sin build, sin JS obligatorio. Lo único que haces es enlazar archivos `.css` y poner la clase `.nz` en tu `<body>` (o en cualquier wrapper). A partir de ahí, **el sistema vive completamente dentro de `.nz`**, lo que significa que puedes meterlo dentro de una app que ya use Tailwind, Bootstrap o lo que sea, y no romperá nada de fuera.

### El núcleo: 1 archivo

`ntizar.css` trae tokens, layout primitives (`.nz-container`, `.nz-stack`, `.nz-grid`, `.nz-cluster`, `.nz-surface`), componentes (`.nz-btn`, `.nz-card`, `.nz-badge`, `.nz-input`, `.nz-alert`…) y utilidades (`.u-nz-*`). Es lo único obligatorio.

### Los 15 packs: opt-in

Cada pack añade un dominio. Cargas solo los que necesites:

| Pack | Para qué sirve |
|---|---|
| `themes` | 6 skins de marca (`aurora`, `sunset`, `midnight`, `ocean`, `citrus`, `contrast`) |
| `data` | KPIs, progress bars, skeletons, avatars, timeline |
| `charts` | Wrappers para Chart.js / Apex / D3 + sparklines y donuts CSS-only |
| `maps` | Estilos para Leaflet / Mapbox / MapLibre |
| `viz` | Stages para three.js, fondos aurora, orbs, glow rings |
| `motion` | Animaciones reveal, glow-pulse, aurora-pan, shimmer |
| `forms` | Switches, OTP, file drop, range, stepper |
| `ui` | Modal, drawer, tabs, dropdown, toast, tooltip |
| `patterns` | App-shell, hero, pricing, FAQ, footer, auth |
| **`next`** | **v5: liquid glass real, OKLCH, multi-axis, mesh, AAA** |
| **`nucleo`** | **v5.2: colores sólidos puros, bento grid, stats bar, barras/ring CSS-only, stage3d** |
| **`three`** | **v6: contenedores .nz-three para escenas Three.js reutilizables + three-scenes.js** |
| **`ai`** | **v6.2: 20 primitivas AI-native (loader, thinking, stream, approval, chat, taskrow…)** |

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

## ✨ What's new in v5.2

### Pack `nucleo` — colores sólidos puros

Estilo "Núcleo": azul `#2563eb` + naranja `#f97316` + blanco + negro, **sin gradientes**. Incluye:
- `.nz-bento` — grid bento asimétrico con cells sólidas (`--azul`, `--naranja`, `--dark`, `--white`)
- `.nz-stats-bar` — barra de stats a todo ancho
- `.nz-bars` / `.nz-ring` — gráficos CSS-only
- `.nz-stage3d` — contenedor para Three.js canvas con badges flotantes

### Landing page con Three.js

`index.html` ahora es una landing page espectacular:
- Icosaedro wireframe central con parallax mouse
- Constelación de 1200 partículas (toroide + esfera) con shader custom
- Líneas de constelación dinámicas entre partículas cercanas
- 3 anillos orbitales alternando azul y naranja
- Liquid glass real de 4 capas en bento grid asimétrico
- Respeta `prefers-reduced-motion`

### Fix violeta residual

Eliminado `#7c3aed` de todos los gradientes, three.js y paletas de charts. Los gradientes azul→naranja ahora interpolan via `#3b82f6` (azul claro), nunca via violeta.

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
- **No releases tagged yet.** Until v5.2.0 is tagged, `@master` and `@v5.2.0` resolve differently. Pin once tagged.

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

---

Hecho con ❤️ por David Antizar
