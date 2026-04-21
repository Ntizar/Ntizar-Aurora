---
version: 5.0.0
name: Ntizar Aurora
description: >
  Liquid Glass UI con identidad azul + naranja. Sistema de diseño CSS-only,
  namespaced bajo `.nz`, multi-skin runtime y arquitectura modular en packs
  (Constellation). Este DESIGN.md es la capa de metadatos legible por máquina;
  la implementación viva en `ntizar.css` y los packs `ntizar.*.css`.
authors:
  - Ntizar
license: MIT
homepage: https://github.com/ntizar/design-system
namespace: nz
scope: ".nz"

# ---------------------------------------------------------------
# COLORES — espejo 1:1 de los tokens canónicos (light theme)
# Fuente de verdad: ntizar.css → @layer ntizar.tokens
# ---------------------------------------------------------------
colors:
  # Marca
  brand:           "#2563eb"   # --nz-color-brand          (blue-600)
  brand-strong:    "#1d4ed8"   # --nz-color-brand-strong   (blue-700)
  brand-soft:      "#60a5fa"   # --nz-color-brand-soft     (blue-400)
  accent:          "#f97316"   # --nz-color-accent         (orange-500)
  accent-strong:   "#ea580c"   # --nz-color-accent-strong  (orange-600)
  accent-soft:    "#fdba74"    # --nz-color-accent-soft    (orange-300)

  # Neutros / superficies (light)
  page:            "#f4f7ff"   # --nz-surface-page
  surface:         "#ffffff"   # --nz-surface-raised
  ink:             "#0f172a"   # --nz-text-strong  (slate-900)
  text:            "#334155"   # --nz-text-default (slate-700)
  text-muted:      "#64748b"   # --nz-text-muted   (slate-500)
  text-soft:       "#94a3b8"   # --nz-text-soft    (slate-400)
  text-on-brand:   "#ffffff"   # --nz-text-on-brand
  border:          "rgba(15,23,42,0.08)" # --nz-border-soft

  # Estado
  success:         "#16a34a"   # --nz-color-success
  warning:         "#d97706"   # --nz-color-warning
  danger:          "#dc2626"   # --nz-color-danger
  info:            "#2563eb"   # alias de brand

  # Gradientes firma (representados como string para máxima compatibilidad)
  gradient-brand:  "linear-gradient(135deg, #60a5fa 0%, #2563eb 58%, #1d4ed8 100%)"
  gradient-accent: "linear-gradient(135deg, #fdba74 0%, #f97316 56%, #ea580c 100%)"
  gradient-aurora: "linear-gradient(135deg, #3b82f6 0%, #7c3aed 46%, #f97316 100%)"

# ---------------------------------------------------------------
# TIPOGRAFÍA
# ---------------------------------------------------------------
typography:
  display:
    fontFamily: "Inter, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 2rem + 2.6vw, 4.5rem)"  # --nz-text-3xl
    fontWeight: 700
    lineHeight: 1.1
  h1:
    fontFamily: "Inter, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.4rem + 1.2vw, 2.5rem)" # --nz-text-2xl
    fontWeight: 700
    lineHeight: 1.15
  h2:
    fontFamily: "Inter, Segoe UI, system-ui, sans-serif"
    fontSize: "1.375rem"  # --nz-text-xl
    fontWeight: 700
    lineHeight: 1.25
  h3:
    fontFamily: "Inter, Segoe UI, system-ui, sans-serif"
    fontSize: "1.125rem"  # --nz-text-lg
    fontWeight: 600
    lineHeight: 1.3
  body-md:
    fontFamily: "Inter, Segoe UI, system-ui, sans-serif"
    fontSize: "1rem"      # --nz-text-md
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Inter, Segoe UI, system-ui, sans-serif"
    fontSize: "0.875rem"  # --nz-text-sm
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontSize: "0.75rem"   # --nz-text-xs
    fontWeight: 500
    lineHeight: 1.4
  code:
    fontFamily: "JetBrains Mono, Cascadia Code, SFMono-Regular, monospace"
    fontSize: "0.875rem"
    fontWeight: 400

# ---------------------------------------------------------------
# LAYOUT / SPACING
# ---------------------------------------------------------------
spacing:
  "1":  "0.25rem"   # 4px  — gap micro
  "2":  "0.5rem"    # 8px  — gap pequeño
  "3":  "0.75rem"   # 12px — agrupaciones internas
  "4":  "1rem"      # 16px — base
  "5":  "1.5rem"    # 24px — separaciones de bloque
  "6":  "2rem"      # 32px — separaciones grandes
  "7":  "3rem"      # 48px — secciones
  "8":  "4rem"      # 64px — hero / landing

layout:
  container-max: "76rem"
  grid-gutter:   "1.5rem"
  section-pad-y: "clamp(2rem, 4vw, 4rem)"

# ---------------------------------------------------------------
# SHAPES (radii)
# ---------------------------------------------------------------
rounded:
  sm:   "0.625rem"  # 10px — campos, badges
  md:   "0.875rem"  # 14px — botones, inputs
  lg:   "1.25rem"   # 20px — cards, surfaces
  xl:   "1.75rem"   # 28px — hero, modales grandes
  pill: "999px"     # totalmente redondo

# ---------------------------------------------------------------
# ELEVATION (shadows)
# ---------------------------------------------------------------
elevation:
  sm:     "0 1px 2px rgba(15,23,42,0.06), 0 8px 24px rgba(37,99,235,0.08)"
  md:     "0 12px 32px rgba(15,23,42,0.10), 0 20px 48px rgba(37,99,235,0.10)"
  lg:     "0 24px 56px rgba(15,23,42,0.16), 0 28px 80px rgba(37,99,235,0.12)"
  brand:  "0 14px 34px rgba(37,99,235,0.22), 0 24px 54px rgba(59,130,246,0.12)"
  accent: "0 14px 34px rgba(249,115,22,0.22), 0 24px 54px rgba(251,146,60,0.12)"
  aurora: "0 16px 36px rgba(37,99,235,0.20), 0 26px 54px rgba(249,115,22,0.16)"

# ---------------------------------------------------------------
# MOTION
# ---------------------------------------------------------------
motion:
  duration-fast: "150ms"
  duration-base: "220ms"
  ease-standard: "cubic-bezier(0.2, 0.8, 0.2, 1)"

# ---------------------------------------------------------------
# COMPONENTS — referencias a las clases públicas reales en CSS
# ---------------------------------------------------------------
components:
  button-primary:
    class: ".nz-btn .nz-btn--primary"
    backgroundColor: "{colors.brand}"
    textColor: "{colors.text-on-brand}"
    rounded: "{rounded.md}"
    padding: "{spacing.3} {spacing.5}"
    elevation: "{elevation.brand}"
  button-accent:
    class: ".nz-btn .nz-btn--accent"
    backgroundColor: "{colors.accent}"
    textColor: "{colors.text-on-brand}"
    rounded: "{rounded.md}"
    elevation: "{elevation.accent}"
  button-brand-mix:
    class: ".nz-btn .nz-btn--brand-mix"
    backgroundColor: "{colors.gradient-aurora}"
    textColor: "{colors.text-on-brand}"
    rounded: "{rounded.md}"
    elevation: "{elevation.aurora}"
  button-ghost:
    class: ".nz-btn .nz-btn--ghost"
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
  button-danger:
    class: ".nz-btn .nz-btn--danger"
    backgroundColor: "{colors.danger}"
    textColor: "{colors.text-on-brand}"
    rounded: "{rounded.md}"
  card:
    class: ".nz-card"
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    elevation: "{elevation.md}"
    padding: "{spacing.5}"
  card-glass:
    class: ".nz-card .nz-card--glass"
    backgroundColor: "rgba(255,255,255,0.60)"  # --nz-surface-glass
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    elevation: "{elevation.md}"
    notes: "Requiere backdrop-filter; degrada a surface si no hay soporte."
  card-glass-brand:
    class: ".nz-card .nz-card--glass-brand"
    backgroundColor: "{colors.gradient-brand}"
    textColor: "{colors.text-on-brand}"
    rounded: "{rounded.lg}"
    elevation: "{elevation.brand}"
  input:
    class: ".nz-input"
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.border}"
  badge-primary:
    class: ".nz-badge .nz-badge--primary"
    backgroundColor: "{colors.brand}"
    textColor: "{colors.text-on-brand}"
    rounded: "{rounded.pill}"
  badge-accent:
    class: ".nz-badge .nz-badge--accent"
    backgroundColor: "{colors.accent}"
    textColor: "{colors.text-on-brand}"
    rounded: "{rounded.pill}"
  alert-success:
    class: ".nz-alert .nz-alert--success"
    backgroundColor: "rgba(22,163,74,0.10)"
    textColor: "#15803d"
    rounded: "{rounded.md}"
  alert-warning:
    class: ".nz-alert .nz-alert--warning"
    backgroundColor: "rgba(217,119,6,0.12)"
    textColor: "#92400e"
    rounded: "{rounded.md}"
  alert-danger:
    class: ".nz-alert .nz-alert--danger"
    backgroundColor: "rgba(220,38,38,0.10)"
    textColor: "#b91c1c"
    rounded: "{rounded.md}"

# ---------------------------------------------------------------
# SKINS — variantes de identidad bajo la misma marca
# Cada skin redefine SOLO color brand/accent + gradientes/sombras.
# Spec completo de cada uno en skins/DESIGN.<skin>.md
# ---------------------------------------------------------------
skins:
  aurora:
    file: ./DESIGN.md
    description: Default. Balance azul + naranja.
    activate: 'data-nz-skin="aurora"'
  sunset:
    file: ./skins/DESIGN.sunset.md
    description: Naranja dominante, azul de soporte.
    activate: 'data-nz-skin="sunset"'
  midnight:
    file: ./skins/DESIGN.midnight.md
    description: Azul profundo, naranja chispa.
    activate: 'data-nz-skin="midnight"'
  ocean:
    file: ./skins/DESIGN.ocean.md
    description: Cyan + azul refrescante.
    activate: 'data-nz-skin="ocean"'
  citrus:
    file: ./skins/DESIGN.citrus.md
    description: Naranja + amarillo brillante.
    activate: 'data-nz-skin="citrus"'
  contrast:
    file: ./ntizar.next.css
    description: WCAG AAA. Skin de accesibilidad real (no decorativo). Activa fondos planos, bordes negros y focus dual ring.
    activate: 'data-nz-skin="contrast"'
    requires: ntizar.next.css

# ---------------------------------------------------------------
# AXES (v5) — ejes ortogonales que combinan con skin y theme.
# Requieren cargar ntizar.next.css.
# ---------------------------------------------------------------
axes:
  shape:
    attribute: data-nz-shape
    values: [default, sharp, rounded, brutalist]
    description: Curvatura global. Brutalist anula radii y usa sombras sólidas.
  density:
    attribute: data-nz-density
    values: [comfortable, compact, spacious]
    description: Escala de spacing y tamaño de tipo. Compact ideal para dashboards densos tipo Linear/Bloomberg.
  motion:
    attribute: data-nz-motion
    values: [standard, springy, calm, none]
    description: Personalidad del motion. Springy con cubic-bezier overshoot. None desactiva todas las transiciones.
  color-system:
    attribute: data-nz-color-system
    values: [hex, oklch]
    description: oklch usa escalas perceptualmente uniformes derivadas de --nz-hue-brand y --nz-hue-accent.

# ---------------------------------------------------------------
# PACKS — extensión modular (no parte del spec design.md, prosa abajo)
# Sección personalizada: los linters deben preservarla sin error.
# ---------------------------------------------------------------
packs:
  themes:   { file: ./ntizar.themes.css,   purpose: "5 skins + paleta de charts" }
  data:     { file: ./ntizar.data.css,     purpose: "KPIs, progress, skeleton, avatar, timeline" }
  charts:   { file: ./ntizar.charts.css,   purpose: "Contenedores chart + sparkline + donut CSS-only" }
  maps:     { file: ./ntizar.maps.css,     purpose: "Look Ntizar para Leaflet/Mapbox/MapLibre" }
  viz:      { file: ./ntizar.viz.css,      purpose: "Stages 3D, fondos aurora, orbs, glow ring" }
  motion:   { file: ./ntizar.motion.css,   purpose: "Reveal, glow-pulse, marquee, hover-lift" }
  forms:    { file: ./ntizar.forms.css,    purpose: "Switch, OTP, range, file drop, stepper" }
  ui:       { file: ./ntizar.ui.css,       purpose: "Modal, drawer, tabs, dropdown, toast, tooltip" }
  patterns: { file: ./ntizar.patterns.css, purpose: "App-shell, hero, pricing, faq, footer, auth" }
  next:     { file: ./ntizar.next.css,     purpose: "v5 disruptive: liquid glass real, OKLCH, multi-axis (shape/density/motion), aurora-mesh, skin contrast (AAA), forced-colors" }
---

## Overview

**Ntizar Aurora** es un design system **CSS-only**, **opt-in** y **namespaced bajo `.nz`**. Su lenguaje visual es **Liquid Glass** sobre paleta azul + naranja, con multi-skin en runtime (`data-nz-skin`) y arquitectura modular en 9 packs opcionales (Constellation).

Este `DESIGN.md` es la capa de metadatos para agentes (Claude, Copilot, Cursor) y herramientas del ecosistema (linters, exports a Tailwind/DTCG). La **implementación viva** está en:

- [ntizar.css](ntizar.css) — core (tokens, base, objects, components, utilities)
- [ntizar.themes.css](ntizar.themes.css) — skins
- `ntizar.<pack>.css` — packs opcionales

Mapas operativos:

- [INDEX.md](INDEX.md) — "necesito X → archivo Y, clase Z"
- [SYSTEM.md](SYSTEM.md) — constitución (cómo extender sin romper identidad)
- [USAGE.md](USAGE.md) — escenarios completos (landing, dashboard, mapas, 3D, auth)
- [README.md](README.md) — contrato público y quick start
- [gallery.html](gallery.html) — showcase canónico

> **Activación mínima:**
> ```html
> <body class="nz" data-nz-theme="light" data-nz-skin="aurora">
> ```
> Sin `.nz` en el árbol, **nada** del sistema aplica. Esto garantiza que Aurora pueda convivir con Tailwind, Bootstrap u otros sistemas sin colisiones.

## Colors

La identidad Aurora vive en dos ejes: **brand (azul)** y **accent (naranja)**. Todo lo demás se deriva de ahí.

| Token              | Light    | Uso recomendado                                             |
| ------------------ | -------- | ----------------------------------------------------------- |
| `brand`            | `#2563eb`| Acción principal, identidad, focus ring, info               |
| `brand-strong`     | `#1d4ed8`| Hover/active de botón primario, énfasis textual de marca    |
| `brand-soft`       | `#60a5fa`| Bordes suaves, ilustración, gradient-brand                  |
| `accent`           | `#f97316`| CTA destacado, badges de calor, callouts comerciales        |
| `accent-strong`    | `#ea580c`| Hover de accent, énfasis cálido                             |
| `accent-soft`      | `#fdba74`| Bordes suaves cálidos, gradient-accent                      |
| `text-on-brand`    | `#ffffff`| Texto sobre superficies brand/accent/aurora (light + dark)  |
| `success/warning/danger` | `#16a34a` / `#d97706` / `#dc2626` | Estado, nunca para identidad |

**Gradientes firma:**

- `gradient-brand` — superficies/CTAs con peso de marca.
- `gradient-accent` — highlights cálidos.
- `gradient-aurora` — la firma del sistema (azul → violeta → naranja). Reservada para hero, brand-mix y momentos clave.

**Tema oscuro:** los tokens cambian de valor pero **no de nombre**. Activación con `data-nz-theme="dark"` en el mismo `.nz`.

## Typography

Una sola familia (`Inter`) en todo el sistema. Tamaños fluidos con `clamp()` para `display` y `h1`.

| Rol      | Tamaño                                | Peso | Uso                                  |
| -------- | ------------------------------------- | ---- | ------------------------------------ |
| display  | `clamp(2.5rem, 2rem + 2.6vw, 4.5rem)` | 700  | Hero, landings                       |
| h1       | `clamp(1.75rem, 1.4rem + 1.2vw, 2.5rem)` | 700 | Páginas internas                  |
| h2       | `1.375rem`                            | 700  | Secciones de página                  |
| h3       | `1.125rem`                            | 600  | Cards y subsecciones                 |
| body-md  | `1rem` / line-height 1.6              | 400  | Texto general                        |
| body-sm  | `0.875rem`                            | 400  | Captions, ayudas, metadata           |
| code     | `0.875rem` JetBrains Mono             | 400  | Inline code y bloques de código      |

Aurora **no** estiliza `<h1>`, `<p>`, etc. fuera de `.nz`. Las utilidades `.nz-text-h1..h4` permiten aplicar la escala a cualquier elemento.

## Layout

- **Container:** `.nz-container` — `max-width: 76rem`, padding lateral fluido.
- **Section:** `.nz-section` — padding vertical fluido `clamp(2rem, 4vw, 4rem)`.
- **Stack vertical:** `.nz-stack` con modificadores `--sm | --md | --lg`.
- **Cluster horizontal:** `.nz-cluster` con `--between` para distribución.
- **Grid:** `.nz-grid--2 | --3 | --aside` para layouts canónicos.
- **Surface:** `.nz-surface` con variantes `--soft | --raised | --glass | --glass-brand | --glass-accent | --glass-strong`.

Spacing scale completa: `1 → 8` (4px → 64px). Usar siempre tokens, nunca literales.

## Elevation

Tres niveles neutros (`sm`, `md`, `lg`) más tres firmas de marca (`brand`, `accent`, `aurora`). Las sombras en Aurora **incorporan tinte de color** (no son sombras grises) — eso es parte de la identidad. En tema oscuro mantienen el nombre pero ganan opacidad.

## Shapes

Cinco radios canónicos: `sm 10px`, `md 14px`, `lg 20px`, `xl 28px`, `pill 999px`. La regla de aplicación es:

- `sm` → badges, chips, campos compactos.
- `md` → botones, inputs, card-actions.
- `lg` → cards, surfaces, modales pequeños.
- `xl` → hero, modales grandes, paneles destacados.
- `pill` → badges, avatars, switches.

## Components

API pública completa documentada en [INDEX.md](INDEX.md) y demostrada en [gallery.html](gallery.html). Reglas de composición:

- **Una sola acción primaria** por bloque o formulario.
- Glass se usa **sobre superficies con contenido detrás** (hero, overlays, dashboard sobre fondo aurora). No tiene sentido sobre surface plana.
- `brand-mix` y `--glass-brand` son **recursos de firma**: úsalos para CTA principal, no para estructura repetida.
- Componentes interactivos deben tener `:focus-visible` con `--nz-ring` (ya garantizado por core).

## Do's and Don'ts

### Botones

- ✅ `.nz-btn--primary` — **una** por bloque o formulario.
- ✅ `.nz-btn--accent` — CTA destacado o flujo comercial.
- ✅ `.nz-btn--brand-mix` — CTA hero con firma Aurora completa.
- ✅ `.nz-btn--glass` / `--glass-brand` / `--glass-accent` — acción secundaria sobre superficies glass.
- ✅ `.nz-btn--secondary` — acción normal con más peso que ghost.
- ✅ `.nz-btn--ghost` — cancelar, volver, baja prioridad.
- ✅ `.nz-btn--danger` — destrucción o acción irreversible.
- ❌ No mezcles `--primary` y `--brand-mix` en la misma fila — compiten por el mismo rol.
- ❌ No uses `--danger` para "atención": eso es `--accent` o un alert warning.

### Surfaces

- ✅ `.nz-surface` — panel neutro estable.
- ✅ `.nz-surface--soft` — agrupaciones secundarias.
- ✅ `.nz-surface--raised` — panel protagonista.
- ✅ `.nz-surface--glass*` — overlays sobre fondo con contenido (hero, mapas, viz).
- ❌ **No anidar `glass-strong` dentro de otra surface glass.** El efecto se cancela y aumenta el coste de `backdrop-filter`.
- ❌ No usar glass sobre fondo plano blanco — no aporta nada y degrada legibilidad.

### Cards

- ✅ `.nz-card` — contenido estructurado reusable.
- ✅ `.nz-card--interactive` — cards clicables.
- ✅ `.nz-card--glass*` — destacados sobre fondos ricos.
- ❌ No mezcles `--glass-brand` y `--glass-accent` en la misma cuadrícula — la jerarquía se pierde.

### Alerts

- ✅ `default` para info general, `--success` para confirmación, `--warning` para riesgo, `--danger` para error real.
- ❌ Estados no se comunican **solo por color**. Añade ícono o copy.

### Tokens

- ✅ Sobrescribe `--nz-color-brand`, `--nz-color-accent`, `--nz-radius-lg`, `--nz-font-sans` para personalizar marca dentro de `.nz`.
- ❌ Hex literales **prohibidos** en `@layer ntizar.components` y `@layer ntizar.utilities` — usa `var(--nz-*)` o `color-mix()`.
- ❌ `!important` solo en `@layer ntizar.utilities` (o overrides de Leaflet/Chart.js claramente comentados).

### Skins

- ✅ Cambia identidad con `data-nz-skin="aurora|sunset|midnight|ocean|citrus"` en el mismo root `.nz`.
- ❌ No combines dos skins en árboles anidados — los gradientes se vuelven impredecibles.

### Motion

- ✅ Anima `transform`, `opacity`, `filter`. Respeta `prefers-reduced-motion: reduce`.
- ❌ Nunca `top/left/width/height` en animaciones permanentes.

## Glass Variants (extensión específica de Aurora)

El spec base de design.md no modela aún variantes glass. Aurora las expone como modificadores BEM consistentes:

| Variante           | Surface alpha   | Cuándo usarla                                |
| ------------------ | --------------- | -------------------------------------------- |
| `--glass-soft`     | 44%             | Overlays ligeros, tooltips                   |
| `--glass`          | 60%             | Estándar premium UI                          |
| `--glass-strong`   | 78%             | Foco máximo, modales destacados              |
| `--glass-brand`    | gradient brand  | Showcase / dashboards con identidad         |
| `--glass-accent`   | gradient accent | Highlights cálidos / comerciales             |

Todos requieren `backdrop-filter` (bajo `@supports` en core) y degradan a surface plana en navegadores sin soporte.

## Accessibility

- Foco visible siempre con `:focus-visible` + `--nz-ring`.
- Contraste mínimo **WCAG AA** garantizado en text/surface por skin (validable con `npx @google/design.md lint DESIGN.md`).
- Click targets ≥ 40px en mobile.
- `prefers-reduced-motion: reduce` desactiva animaciones decorativas.
- Estado nunca solo por color (icono o texto obligatorio).

## Versioning

Semver estricto. Detalle completo en [SYSTEM.md](SYSTEM.md) §8.

- **MAJOR** — renombres, eliminaciones, cambio de identidad.
- **MINOR** — nuevos componentes, packs, utilities, tokens.
- **PATCH** — bugfixes, accesibilidad, performance.

## Tooling

```bash
# Validación (contraste WCAG, tokens huérfanos, refs rotas)
npx @google/design.md lint DESIGN.md

# Diff frente a la versión publicada
npx @google/design.md diff DESIGN.md DESIGN.md@main

# Export a Tailwind theme
npx @google/design.md tailwind DESIGN.md > dist/tailwind.theme.json

# Export a DTCG (Design Tokens Community Group)
npx @google/design.md export --format dtcg DESIGN.md > dist/tokens.json
```

Estos scripts están preconfigurados en [package.json](package.json) (`npm run lint:design`, `npm run build:tailwind`, `npm run build:dtcg`).
