# Ntizar Design System — Índice Operativo (para agentes y humanos)

> Mapa rápido para saber **qué archivo cargar** y **qué clase usar** según lo que necesites construir.

---

## TL;DR — Carga sólo lo que uses

```html
<!-- siempre -->
<link rel="stylesheet" href="ntizar.css">

<!-- skins opcionales (5 paletas que mantienen identidad azul+naranja) -->
<link rel="stylesheet" href="ntizar.themes.css">

<!-- packs opcionales, independientes entre sí -->
<link rel="stylesheet" href="ntizar.data.css">    <!-- KPIs, dashboards -->
<link rel="stylesheet" href="ntizar.charts.css">  <!-- charts + paletas -->
<link rel="stylesheet" href="ntizar.maps.css">    <!-- Leaflet/Mapbox/MapLibre -->
<link rel="stylesheet" href="ntizar.viz.css">    <!-- three.js, fondos aurora, orbs -->
<link rel="stylesheet" href="ntizar.motion.css">  <!-- animaciones -->
<link rel="stylesheet" href="ntizar.forms.css">   <!-- switch, otp, range, file, stepper -->
<link rel="stylesheet" href="ntizar.ui.css">      <!-- modal, drawer, tabs, dropdown, toast -->
<link rel="stylesheet" href="ntizar.patterns.css"><!-- app-shell, hero, pricing, faq, footer -->

<body class="nz" data-nz-theme="light" data-nz-skin="aurora">
```

Reglas duras:

- Todo vive bajo `.nz`. Sin esa clase, **nada** del sistema aplica.
- Los packs no introducen nuevos roots ni atributos. Solo añaden clases `.nz-*` y `.u-nz-*`.
- Usa `data-nz-theme` para light/dark y `data-nz-skin` para identidad.

---

## Archivos del sistema

| Archivo | Tamaño | Propósito | Cargar cuando |
|---|---|---|---|
| `ntizar.css` | core (≈40 KB) | Tokens, base, objects, componentes base, utilities | **Siempre** |
| `ntizar.themes.css` | skins | 5 paletas (aurora/sunset/midnight/ocean/citrus) + paleta de charts | Quieras cambiar identidad sin tocar tokens |
| `ntizar.data.css` | data | KPIs, stat-tile, progress, meter, skeletons, avatars, timeline, tags | Construyas dashboards o data-heavy |
| `ntizar.charts.css` | charts | `.nz-chart` (contenedor para Chart.js / ApexCharts / D3 / SVG / Canvas), legends, tooltips, sparkline + donut CSS-only | Renderices gráficos con cualquier librería |
| `ntizar.maps.css` | maps | `.nz-map` para Leaflet/Mapbox/MapLibre, overlays HUD, pins, popups | Uses mapas |
| `ntizar.viz.css` | viz | Stages full-bleed para three.js/canvas, fondos aurora animados, orbs, glow rings, grid/dot bg | Hagas hero 3D, generative art, fondos cinematográficos |
| `ntizar.motion.css` | motion | Animaciones reveal/rise/scale/glow/aurora-pan/shimmer, marquee, typing, hover-lift | Quieras dar vida sin escribir keyframes |
| `ntizar.forms.css` | forms | Switch, custom check/radio, range, OTP, file drop, stepper, input-group, search field, form-grid | Necesites formularios ricos accesibles |
| `ntizar.ui.css` | ui | Modal, drawer, tabs, accordion, dropdown menu, toast, tooltip CSS-only, breadcrumbs, segmented, chips, paginación, command-bar, spinner, divider con label, tag-input | Construyas overlays / interacciones |
| `ntizar.patterns.css` | patterns | App-shell con sidebar, hero (centered/split), feature-grid, pricing, FAQ, footer, auth-shell, empty-state, error-page, cta-banner, logo-cloud, stats-banner | Compongas páginas completas |

Cada pack es **stateless e idempotente**. Puedes cargar 1 o los 9 sin colisiones.

---

## Mapa de decisión (qué pack abrir según el caso)

| Necesito… | Pack | Clases clave |
|---|---|---|
| **Layout** de página (container, section, grid, stack, surface) | core | `.nz-container`, `.nz-section`, `.nz-grid--2/--3/--aside`, `.nz-stack[--sm/--md/--lg]`, `.nz-cluster`, `.nz-surface[--glass*]` |
| **Botones, cards, badges, alerts, callouts, fields, tablas, código** | core | `.nz-btn--primary/--accent/--brand-mix/--glass*/--ghost/--danger`, `.nz-card[--glass*]`, `.nz-badge--primary/--accent/--brand/--success/--warning/--danger/--glass*`, `.nz-alert`, `.nz-callout--tip/--info/--warn/--danger`, `.nz-codeblock`, `.nz-table` |
| **Tipografía utilitaria** (titulares, texto secundario, sutil) | core | `.nz-text-h1/--h2/--h3/--h4`, `.nz-text-sm`, `.nz-text-muted`, `.u-nz-text-strong`, `.u-nz-text-muted` |
| **Cambiar paleta** (sigue siendo Ntizar) | themes | `data-nz-skin="aurora\|sunset\|midnight\|ocean\|citrus"` |
| **KPIs y dashboards** | data | `.nz-kpi[--accent/--aurora]`, `.nz-stat-tile`, `.nz-stat-grid--2/3/4`, `.nz-progress[--accent/--aurora]`, `.nz-meter`, `.nz-skeleton[--text/--circle/--block]`, `.nz-avatar[-stack]`, `.nz-timeline`, `.nz-tag--brand/--accent`, `.nz-data-card` |
| **Gráficos** (Chart.js/Apex/D3/SVG/canvas) | charts | `.nz-chart[--sm/md/lg/xl/glass/bare]`, `.nz-chart__legend`, `.nz-sparkline`, `.nz-donut[--aurora]`, `.nz-trend-arrow--up/--down`. Paleta JS: `--nz-chart-1..8` |
| **Mapas** (Leaflet/Mapbox/MapLibre) | maps | `.nz-map[--sm/md/lg/hero/fullscreen/glass]`, `.nz-map__overlay--top-left/...`, `.nz-map__controls`, `.nz-map__pin[--accent/--success/--danger]`, `.nz-map__pin-pulse`, `.nz-map__legend`, popups override automático |
| **Escena 3D / canvas / WebGL** | viz | `.nz-stage[--hero/md/glass-frame/aspect-16x9/aspect-1x1/aspect-21x9]`, `.nz-stage__canvas`, `.nz-stage__hud` |
| **Fondo cinematográfico aurora** | viz | `.nz-aurora-bg[--soft/--static]` (con `::before`/`::after` animados) |
| **Fondos sutiles** | viz | `.nz-grid-bg[--lg/--mask]`, `.nz-dot-bg`, `.nz-noise`, `.nz-scanline` |
| **Decoración / hero shapes** | viz | `.nz-orb[--brand/--accent/--aurora/--sm/--lg]`, `.nz-glow-ring` |
| **Animaciones de entrada** | motion | `.nz-anim-fade-in/--rise/--scale-in/--slide-left/--slide-right` + `.nz-anim--delay-1..6`, `--slow`, `--fast`, `--once` |
| **Animaciones permanentes** | motion | `.nz-anim-glow-pulse`, `.nz-anim-float`, `.nz-anim-aurora-pan`, `.nz-anim-shimmer` |
| **Ticker / marquee** | motion | `.nz-marquee` > `.nz-marquee__track` (`--slow/--fast`) |
| **Reveal on scroll** | motion | `.nz-reveal[--left/--right/--scale]` + IO que añada `.is-visible` |
| **Hover lift suave** | motion | `.nz-hover-lift` |
| **Texto degradado / glow / utilidades varias** | core | `.u-nz-text-gradient`, `.u-nz-text-gradient-brand`, `.u-nz-bg-aurora`, `.u-nz-glow[-accent/-aurora]`, `.u-nz-num`, `.u-nz-text-mono`, `.u-nz-text-center/right/left`, `.u-nz-rounded-{sm,md,lg,xl,pill}`, `.u-nz-gap-{1..5}`, `.u-nz-aspect-{square,video,cinema}`, `.u-nz-hide-sm`, `.u-nz-show-sm-only` |
| **Formulario rico** (switch, otp, range, file, stepper) | forms | `.nz-switch`+`__input/__track/__thumb`, `.nz-check[--accent]`, `.nz-radio[--accent]`, `.nz-range`, `.nz-otp`+`.nz-otp__cell`, `.nz-file`+`.nz-file__drop`, `.nz-stepper`+`.nz-stepper__step--active/--done`, `.nz-input-group`+`.nz-input-group__addon`, `.nz-search[--lg]`, `.nz-form-grid[--2]`+`.nz-field--full`. Label: `.nz-label` o alias `.nz-field__label` |
| **Modal / drawer / dropdown / toast / tooltip** | ui | `<dialog class="nz-modal">`+`.nz-modal__panel`+`.nz-modal__close`, `.nz-drawer[--right]`+`.is-open`, `.nz-dropdown`+`.nz-dropdown__menu[.is-open]`+`.nz-dropdown__item[--danger]`+`.nz-dropdown__sep`, `.nz-toast-stack--top-right/...`+`.nz-toast[--success/--warning/--danger/--accent]`+`.nz-toast__title/__body`, `.nz-tooltip[data-tip]` |
| **Tabs / accordion / breadcrumbs / segmented / chips / paginación / command-bar** | ui | `.nz-tabs`+`.nz-tabs__list`+`.nz-tab[--active]`+`.nz-tabs__panel`, `.nz-accordion`+`<details class="nz-accordion__item">`, `.nz-breadcrumbs`+`__item[aria-current="page"]`+`__sep`, `.nz-segmented`+`__option`(con `<input type="radio">`), `.nz-chip[--accent/--neutral]`+`.nz-chip__remove`, `.nz-pagination`+`__item[--active/--disabled]`, `.nz-command-bar`+`__field/__group/__heading/__item[.is-active]`, `.nz-spinner[--lg/--accent]`, `.nz-divider--label`, `.nz-tag-input`+`__field` |
| **App shell / sidebar / nav** | patterns | `.nz-app-shell`+`__sidebar/__header/__main`, `.nz-nav-section`, `.nz-nav-item[.is-active][data-nz-accent]` |
| **Hero / features / pricing / faq / footer** | patterns | `.nz-hero[--centered/--split]`+`__inner/__eyebrow/__title (.nz-accent)/__sub/__cta/__visual`, `.nz-feature-grid`+`.nz-feature[--accent]`+`__icon/__title/__body`, `.nz-pricing-grid`+`.nz-pricing-card[--featured]`+`__name/__price/__amount/__period/__list/__badge`, `.nz-faq` (usa accordion), `.nz-footer`+`__inner/__cols/__col/__bottom` |
| **Auth / vacíos / errores / banners** | patterns | `.nz-auth-shell`+`__panel/__art`, `.nz-empty-state`+`__icon/__title`, `.nz-error-page`+`__code/__title/__sub`, `.nz-cta-banner`+`__title/__sub`, `.nz-logo-cloud`, `.nz-stats-banner` |

---

## Tokens importantes (sobrescribir solo estos para personalizar marca)

```css
.mi-app.nz {
  --nz-color-brand: #2563eb;        /* azul principal */
  --nz-color-accent: #f97316;       /* naranja principal */
  --nz-gradient-aurora: linear-gradient(135deg, #2563eb 0%, #7c3aed 46%, #f97316 100%);
  --nz-radius-lg: 1rem;
  --nz-font-sans: "Inter", system-ui, sans-serif;
}
```

Familias completas:

- **Color**: `--nz-color-brand[-strong/-soft]`, `--nz-color-accent[-strong/-soft]`, escalas `--nz-color-{blue,orange,violet,cyan,pink,green,red,yellow,slate}-{50..950}`
- **Surface**: `--nz-surface-{page,base,soft,raised,glass-soft,glass,glass-strong,glass-brand,glass-accent,brand-soft,accent-soft}`
- **Text**: `--nz-text-{strong,default,muted,soft,inverse,on-brand}`
- **Border**: `--nz-border-{soft,default,strong,brand,accent,glass}`
- **Shadow**: `--nz-shadow-{sm,md,lg,brand,accent,aurora}`
- **Spacing**: `--nz-space-{1..8}`
- **Radius**: `--nz-radius-{sm,md,lg,xl,pill}`
- **Gradient**: `--nz-gradient-{brand,accent,aurora}`
- **Motion**: `--nz-duration-{fast,base}`, `--nz-ease-standard`
- **Type**: `--nz-font-sans`, `--nz-font-display` (alias de sans), `--nz-font-mono`
- **Charts (themes pack)**: `--nz-chart-1..8`, `--nz-chart-{grid,axis,bg}`

---

## Receta: leer paleta de charts desde JS

```js
const css = getComputedStyle(document.documentElement);
const palette = Array.from({length: 8}, (_, i) =>
  css.getPropertyValue(`--nz-chart-${i+1}`).trim()
);

// Chart.js
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['L','M','X','J','V','S','D'],
    datasets: [
      { label: 'Sesiones', data: [...], borderColor: palette[0], backgroundColor: palette[0]+'33', tension: .35, fill: true },
      { label: 'Conversión', data: [...], borderColor: palette[1], backgroundColor: palette[1]+'33', tension: .35, fill: true },
    ]
  },
  options: {
    plugins: { legend: { labels: { color: css.getPropertyValue('--nz-text-default') }}},
    scales: {
      x: { grid: { color: css.getPropertyValue('--nz-chart-grid') }, ticks: { color: css.getPropertyValue('--nz-chart-axis') }},
      y: { grid: { color: css.getPropertyValue('--nz-chart-grid') }, ticks: { color: css.getPropertyValue('--nz-chart-axis') }}
    }
  }
});
```

## Receta: Leaflet con look Ntizar

```html
<div id="m" class="nz-map nz-map--lg nz-map--glass">
  <div class="nz-map__controls">
    <button>+</button><button>−</button>
  </div>
  <div class="nz-map__legend">
    <strong>Leyenda</strong>
    <ul><li>Estaciones</li><li style="--nz-pulse-color: var(--nz-color-accent)">Activas</li></ul>
  </div>
</div>
<script>
  const map = L.map('m', { zoomControl: false }).setView([40.4, -3.7], 11);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(map);
  L.marker([40.4,-3.7], { icon: L.divIcon({ className:'nz-map__pin', iconSize:[22,22] })}).addTo(map).bindPopup('Madrid');
</script>
```

## Receta: three.js dentro de stage

```html
<section class="nz-stage nz-stage--hero nz-stage--glass-frame">
  <canvas class="nz-stage__canvas" id="three"></canvas>
  <div class="nz-stage__hud">
    <span class="nz-badge nz-badge--glass-brand nz-badge--no-dot">Live</span>
    <h2 style="color: var(--nz-text-on-brand)">Aurora 3D</h2>
  </div>
</section>
<script type="module">
  import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.164/build/three.module.js';
  const canvas = document.getElementById('three');
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  // ...
</script>
```

## Receta: reveal on scroll

```html
<article class="nz-card nz-reveal nz-reveal--scale">…</article>
<script>
  const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('is-visible')), { threshold: .15 });
  document.querySelectorAll('.nz-reveal').forEach(el => io.observe(el));
</script>
```

---

## Convenciones de naming

- **Objetos / componentes**: `.nz-thing`, modificadores `.nz-thing--mod`, partes `.nz-thing__part`
- **Utilities**: `.u-nz-*` (afecta una sola propiedad, usa `!important`)
- **Tokens**: `--nz-*`
- **Estados de componente** (en componentes que lo necesiten): `.is-active`, `.is-loading`, `.is-visible`

Aurora **nunca** estiliza `body`, `h1`, `button` fuera de `.nz`. Es seguro junto a Tailwind, Bootstrap o cualquier otro framework si lo aíslas en un wrapper.

---

## Para agentes (heurística rápida)

1. ¿La tarea es dashboard/admin? → core + data + charts + ui + patterns + motion + (themes)
2. ¿La tarea es landing/marketing? → core + patterns + viz + motion + (themes)
3. ¿La tarea es app de mapas/IoT? → core + maps + data + ui + motion
4. ¿La tarea es portfolio/3D? → core + viz + motion + patterns (hero)
5. ¿La tarea es auth (login/signup)? → core + forms + patterns (auth-shell)
6. ¿La tarea son formularios complejos? → core + forms + ui (toast/dropdown)
7. ¿La tarea es solo un widget aislado? → core + el pack mínimo, envuelto en `<div class="nz">…</div>`

Docs hermanas: lee **`SYSTEM.md`** para reglas de cómo extender sin romper, y **`USAGE.md`** para guía narrativa con escenarios completos.

Cuando dudes entre dos clases, busca en este índice "Necesito X" → ahí está la ruta canónica.
