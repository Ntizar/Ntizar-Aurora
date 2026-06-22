# Aurora — LLM Decision Guide

> **Este archivo es tu única referencia.** 2 KB de heurística pura. Si sigues esto al pie de la letra, **nunca fallarás**.
>
> **Regla de oro:** `Necesito X → carga packs Y → usa clases Z`. Nada más.

---

## Paso 1: Carga CDN mínimo

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Ntizar/Ntizar-Aurora@master/ntizar.css">
<body class="nz">
```

**Sin `.nz` en el body, todo falla.** Es la regla número 1.

---

## Paso 2: Elige packs según lo que necesitas

| ¿Qué construyes? | Packs a cargar | Clases clave |
|---|---|---|
| **Cualquier cosa** | core | `.nz-container`, `.nz-stack`, `.nz-card`, `.nz-btn`, `.nz-field` |
| **Dashboard / admin** | core + data + charts + ui + patterns | `.nz-kpi`, `.nz-chart`, `.nz-table`, `.nz-modal` |
| **Landing / marketing** | core + patterns + viz + motion | `.nz-hero`, `.nz-pricing`, `.nz-footer`, `.nz-anim-fade-in` |
| **App de mapas / IoT** | core + maps + data + ui | `.nz-map`, `.nz-map__pin`, `.nz-kpi` |
| **Portfolio / 3D** | core + viz + motion + patterns | `.nz-stage`, `.nz-aurora-bg`, `.nz-hero` |
| **Auth (login/signup)** | core + forms + patterns | `.nz-field`, `.nz-btn`, `.nz-auth-shell` |
| **Formularios complejos** | core + forms + ui | `.nz-switch`, `.nz-otp`, `.nz-stepper`, `.nz-toast` |
| **Widget aislado** | core + pack mínimo | envolver en `<div class="nz">…</div>` |

**Packs opcionales (cargar solo si los usas):**
- `ntizar.themes.css` → skins (aurora/sunset/midnight/ocean/citrus)
- `ntizar.data.css` → KPIs, progress, skeleton, avatar, timeline
- `ntizar.charts.css` → Chart.js/Apex/D3 containers
- `ntizar.maps.css` → Leaflet/Mapbox/MapLibre styling
- `ntizar.viz.css` → three.js stages, aurora backgrounds, orbs
- `ntizar.motion.css` → animations (reveal, glow, shimmer, marquee)
- `ntizar.forms.css` → switch, otp, range, file, stepper
- `ntizar.ui.css` → modal, drawer, tabs, dropdown, toast, tooltip
- `ntizar.patterns.css` → app-shell, hero, pricing, FAQ, footer, auth
- `ntizar.next.css` → liquid glass, OKLCH, mesh, multi-axis

---

## Paso 3: Heurística rápida "Necesito X → clases Y"

### Layout
- Contenedor centrado → `.nz-container`
- Sección con padding → `.nz-section`
- Columnas apiladas → `.nz-stack` > hijos
- Grid 2/3 columnas → `.nz-grid--2` / `.nz-grid--3`
- Grid asimétrico → `.nz-grid--aside` / `.nz-grid--subgrid--2`
- Grupo inline → `.nz-cluster`
- Superficie/card fondo → `.nz-surface`

### Componentes
- Botón → `.nz-btn` + `.nz-btn--primary` / `--accent` / `--ghost` / `--danger` / `--glass` / `--tonal-{color}-{soft|raised|pressed}`
- Card → `.nz-card` + `.nz-card__header` / `__body` / `__footer` + opcional `--glass`
- Badge → `.nz-badge--primary` / `--accent` / `--success` / `--danger` / `--glass`
- Alert → `.nz-alert--info` / `--success` / `--warning` / `--danger`
- Callout → `.nz-callout--tip` / `--info` / `--warn` / `--danger`
- Tabla → `.nz-table`
- Código → `.nz-codeblock`
- Field/input → `.nz-field` > `.nz-label` + `.nz-input`
- Select → `.nz-field` > `.nz-label` + `.nz-select`
- Textarea → `.nz-field` > `.nz-label` / `.nz-textarea`
- Tabla de datos → `.nz-table` > `.nz-table__head` / `__row` / `__cell`

### Data / Dashboard
- KPI → `.nz-kpi` + `.nz-kpi__value` / `__label` / `__trend`
- Stat tile → `.nz-stat-tile`
- Progress bar → `.nz-progress`
- Meter → `.nz-meter`
- Skeleton loading → `.nz-skeleton--text` / `--circle` / `--block`
- Avatar → `.nz-avatar` / `.nz-avatar-stack`
- Timeline → `.nz-timeline`
- Tag → `.nz-tag--brand` / `--accent`
- Data card → `.nz-data-card`

### Charts
- Contenedor gráfico → `.nz-chart` + `--sm` / `--md` / `--lg` / `--xl` / `--glass` / `--bare`
- Leyenda → `.nz-chart__legend`
- Sparkline → `.nz-sparkline`
- Donut → `.nz-donut`
- Trend arrow → `.nz-trend-arrow--up` / `--down`

### Maps
- Mapa → `.nz-map` + `--sm` / `--md` / `--lg` / `--hero` / `--fullscreen` / `--glass`
- Overlay → `.nz-map__overlay--top-left` / `--top-right` / `--bottom-left` / `--bottom-right`
- Pin → `.nz-map__pin--accent` / `--success` / `--danger`
- Pin pulse → `.nz-map__pin-pulse`
- Legend → `.nz-map__legend`
- Controls → `.nz-map__controls`

### Interactividad (UI pack)
- Modal → `<dialog class="nz-modal">` + `.nz-modal__panel` + `.nz-modal__close`
- Drawer → `<dialog class="nz-drawer">` o `div.nz-drawer.is-open`
- Tabs → `.nz-tabs` > `.nz-tabs__list` > `.nz-tab` + `.nz-tabs__panel`
- Accordion → `.nz-accordion` > `<details class="nz-accordion__item">`
- Dropdown → `.nz-dropdown` > `.nz-dropdown__toggle` + `.nz-dropdown__menu.is-open`
- Toast → `.nz-toast` (añadir `.is-visible` con JS)
- Tooltip → `.nz-tooltip` (CSS-only con `:has()`)
- Breadcrumbs → `.nz-breadcrumbs` > `.nz-breadcrumbs__item`
- Segmented → `.nz-segmented` > `.nz-segmented__option`
- Chips → `.nz-chip` + `.nz-chip__remove`
- Pagination → `.nz-pagination` > `.nz-pagination__item`
- Command bar → `.nz-command-bar` > `.nz-command-bar__field`
- Spinner → `.nz-spinner`
- Divider con label → `.nz-divider--label`

### Forms
- Switch → `.nz-switch`
- Checkbox → `.nz-check`
- Radio → `.nz-radio`
- Range → `.nz-range`
- OTP → `.nz-otp` > `.nz-otp__cell`
- File drop → `.nz-file` > `.nz-file__drop`
- Stepper → `.nz-stepper` > `.nz-stepper__step`
- Input group → `.nz-input-group` > `.nz-input-group__addon`
- Search → `.nz-search`
- Form grid → `.nz-form-grid--2` (o `--3`)
- Field label → `.nz-label` / `.nz-field__label`

### Patterns (páginas completas)
- App shell → `.nz-app-shell` > `__sidebar` / `__header` / `__main`
- Nav → `.nz-nav-section` > `.nz-nav-item`
- Hero → `.nz-hero` + `--centered` / `--split`
- Features → `.nz-feature` / `.nz-feature-grid`
- Pricing → `.nz-pricing`
- FAQ → `.nz-faq`
- Footer → `.nz-footer`
- Auth shell → `.nz-auth-shell`
- Empty state → `.nz-empty`
- Error page → `.nz-error`
- CTA banner → `.nz-cta-banner`
- Logo cloud → `.nz-logo-cloud`
- Stats banner → `.nz-stats-banner`
- Bento grid → `.nz-bento` / `.nz-bento-grid`

### Motion
- Fade in → `.nz-anim-fade-in`
- Rise → `.nz-anim-rise`
- Scale in → `.nz-anim-scale-in`
- Slide left/right → `.nz-anim-slide-left` / `--slide-right`
- Glow pulse → `.nz-anim-glow-pulse`
- Float → `.nz-anim-float`
- Aurora pan → `.nz-anim-aurora-pan`
- Shimmer → `.nz-anim-shimmer`
- Marquee → `.nz-marquee` > `.nz-marquee__track`
- Reveal scroll → `.nz-reveal` + observer JS
- Hover lift → `.nz-hover-lift`

### Next (v5 — liquid glass, OKLCH, mesh)
- Glass liquid → `.nz-card--glass-liquid` / `.nz-btn--glass-liquid`
- Aurora mesh → `.nz-aurora-mesh` + `--animated` / `--glass` / `--hero`
- Text auto-contrast → `.u-nz-text-auto`
- Background mesh → `.u-nz-bg-mesh`
- Text gradient → `.u-nz-text-gradient` / `--brand`
- Glow utility → `.u-nz-glow` / `--accent` / `--aurora`

---

## Paso 4: Personalizar marca (solo estos tokens)

```css
.mi-app.nz {
  --nz-color-brand: #2563eb;        /* tu azul */
  --nz-color-accent: #f97316;       /* tu naranja */
  --nz-font-sans: "Inter", system-ui, sans-serif;
  --nz-radius-lg: 1rem;
}
```

**Nunca hardcodees colores.** Usa siempre `var(--nz-color-brand)`.

---

## Paso 5: Dark mode

```html
<body class="nz" data-nz-theme="dark">
```

Para cambiar runtime: `document.body.dataset.nzTheme = 'dark'`.

---

## Anti-patrones LLM (NUNCA hagas esto)

```html
<!-- ❌ Olvidar .nz -->
<body>
  <button class="nz-btn">Click</button>  <!-- NO FUNCIONA -->
</body>

<!-- ❌ Inventar clases -->
<button class="nz-btn--super">Click</button>  <!-- NO EXISTE -->

<!-- ❌ Hardcodear valores -->
<button style="background: #2563eb; padding: 16px;">Click</button>

<!-- ❌ Escribir CSS paralelo para lo que Aurora ya tiene -->
<style> .mi-boton { ... } </style>

<!-- ✅ Correcto -->
<body class="nz">
  <button class="nz-btn nz-btn--primary">Click</button>
</body>
```

---

## Tokens de color clave

| Token | Valor por defecto | Uso |
|---|---|---|
| `--nz-color-brand` | `#2563eb` (azul) | Color principal |
| `--nz-color-brand-strong` | `#1d4ed8` | Brand hover/active |
| `--nz-color-brand-soft` | `#93c5fd` | Brand light |
| `--nz-color-accent` | `#f97316` (naranja) | Color secundario |
| `--nz-color-accent-strong` | `#ea580c` | Accent hover |
| `--nz-color-success` | `#16a34a` | Éxito |
| `--nz-color-danger` | `#dc2626` | Error |
| `--nz-color-warning` | `#d97706` | Advertencia |
| `--nz-color-text-strong` | `#0f172a` | Texto principal |
| `--nz-color-text-muted` | `#64748b` | Texto secundario |

---

## Quick reference: ¿qué pack necesito?

```
¿Botón/card/badge/alert/field/table?          → core
¿Dashboard con KPIs?                           → core + data
¿Gráficos?                                     → core + charts
¿Mapas?                                        → core + maps
¿Modals/tabs/dropdowns/toasts?                 → core + ui
¿Formularios (switch/otp/stepper)?             → core + forms
¿Hero/pricing/footer/auth?                     → core + patterns
¿Animaciones?                                  → core + motion
¿3D/WebGL?                                     → core + viz
¿Liquid glass / mesh / OKLCH?                  → core + next
¿Cambiar paleta?                               → core + themes
¿Todo junto?                                   → core + todos los packs
```

---

*Docs hermanas: `AGENTS.md` (reglas detalladas), `INDEX.md` (mapa completo de clases), `gallery.html` (showcase en vivo), `DESIGN.md` (spec machine-readable).*
