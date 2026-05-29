# Investigación Aurora — 29 de mayo de 2026

## Resumen ejecutivo

Se han explorado CSS-Tricks (artículos más recientes), Smashing Magazine (categoría CSS), MDN Blog, y el CSS Almanac de CSS-Tricks. Se identificaron **8 tendencias principales** con oportunidades concretas de mejora para Aurora.

---

## Tendencias encontradas

### 1. `:has()` — El selector padre universal
- **Fuente:** CSS-Tricks Almanac, MDN Blog, artículos recientes
- **Descripción:** El selector `:has()` permite seleccionar un elemento padre en función de sus hijos. Es considerado uno de los selectores más potentes jamás añadidos a CSS. Permite patrones como "resaltar un card cuando su checkbox está checked", "mostrar botón de envío solo si hay texto", "estilizar un contenedor según el estado de sus hijos".
- **Potencial para Aurora:** 
  - Cards interactivas sin JS: `.nz-card:has(.nz-check:checked) { border-color: var(--nz-color-brand); }`
  - Formularios mejorados: `.nz-input-group:has(.nz-field:focus) { --border-color: var(--nz-color-brand); }`
  - Accordion nativo sin JS: `.nz-accordion__item:has(> .is-open) { background: var(--nz-surface-soft); }`
  - Botones deshabilitados condicionales: `.nz-btn:has(+ .nz-field__input:placeholder-shown) { opacity: 0.5; }`
- **Pack objetivo:** `ntizar.css` (core) y `ntizar.ui.css` (componentes interactivos)
- **Soporte navegador:** Chrome 105+, Firefox 121+, Safari 15.4+ (95%+ del tráfico web)

### 2. `:is()` y `:where()` — Selectores de agrupación
- **Fuente:** CSS-Tricks, MDN
- **Descripción:** `:is()` y `:where()` permiten agrupar selectores con menor especificidad. `:where()` tiene especificidad cero, lo que facilita overrides.
- **Potencial para Aurora:** Aurora ya usa `:where()` en varios packs. Se podría estandarizar su uso en todo el core para reducir la especificidad y facilitar personalización.
- **Pack objetivo:** `ntizar.css` (core)
- **Nota:** Aurora ya usa `:where()` — oportunidad de auditoría y estandarización

### 3. CSS Scroll-Driven Animations (`scroll-timeline`, `view-timeline`)
- **Fuente:** MDN Blog "A beginner-friendly guide to view transitions in CSS", CSS-Tricks
- **Descripción:** Permite vincular animaciones CSS directamente al scroll del usuario, sin JavaScript. `animation-timeline: scroll()` y `animation-timeline: view()` permiten crear efectos de parallax, reveal on scroll, progress bars de lectura, y animaciones proporcionales al scroll.
- **Potencial para Aurora:**
  - Mejorar `.nz-reveal` para que funcione 100% CSS sin IntersectionObserver
  - Crear `.nz-progress-bar--scroll` que se llene según el scroll de la página
  - Animaciones de fade-in proporcionales al scroll del elemento
  - `.nz-anim-scroll-reveal` con `animation-timeline: view()`
- **Pack objetivo:** `ntizar.motion.css`
- **Soporte navegador:** Chrome 115+, Edge 115+ (Firefox y Safari aún no soportado)

### 4. `@scope` — Aislamiento de estilos CSS nativo
- **Fuente:** Smashing Magazine "CSS @scope: An Alternative To Naming Conventions And Heavy Abstractions" (feb 2026)
- **Descripción:** `@scope` permite definir el alcance de los estilos CSS de forma declarativa, sin depender de BEM, CSS Modules o Shadow DOM. Puedes decir "estos estilos solo afectan a los hijos de .mi-componente" sin necesidad de clases BEM.
- **Potencial para Aurora:** 
  - Aurora ya usa namespace `.nz` pero los componentes internos (ej. `.nz-modal__panel`) todavía dependen de convención de nombres
  - `@scope (.nz-modal) to (.nz-modal__panel, .nz-modal__close)` podría encapsular mejor los estilos
  - Mejora la mantenibilidad a largo plazo
- **Pack objetivo:** `ntizar.ui.css` (modales, drawers, dropdowns)
- **Soporte navegador:** Chrome 116+, Safari 17.2+

### 5. Relative Color Syntax + `color-mix()` + `contrast-color()`
- **Fuente:** Smashing Magazine "Algorithmic Theming Engines: Building Self-Correcting Color Systems With contrast-color()" (may 2026), MDN "Using relative colors"
- **Descripción:** La sintaxis de color relativa permite derivar colores a partir de variables CSS de color: `color(--nz-color-brand / 50%)`, `oklch(from var(--nz-color-brand) l c h)`, `color-mix()`. `contrast-color()` (nueva propuesto) ajusta automáticamente el color de texto para cumplir WCAG.
- **Potencial para Aurora:**
  - Aurora ya tiene OKLCH en `ntizar.next.css` — se podría añadir `oklch(from ...)` para derivar sombras, bordes y estados hover automáticamente
  - `.nz-btn--primary:hover { background: oklch(from var(--nz-color-brand) calc(l - 0.1) c h); }`
  - Sombras auto-derivadas: `--nz-shadow-color: oklch(from var(--nz-color-brand) 0.5 c h / 0.3);`
  - `color-contrast()` para auto-selección de texto sobre fondos dinámicos
- **Pack objetivo:** `ntizar.next.css` (color system) y `ntizar.css` (core tokens)
- **Soporte navegador:** Chrome 112+, Safari 16.4+, Firefox 127+

### 6. `corner-shape` — Más allá de `border-radius`
- **Fuente:** Smashing Magazine "Beyond border-radius: What The CSS corner-shape Property Unlocks For Everyday UI" (mar 2026), CSS-Tricks Almanac
- **Descripción:** La nueva propiedad `corner-shape` permite esquinas biseladas, recortadas, squircle y otras formas que `border-radius` no puede lograr. Se menciona en el CSS Almanac de CSS-Tricks como propiedad CSS estándar.
- **Potencial para Aurora:**
  - Añadir `data-nz-shape="beveled"` para esquinas cortadas (estilo brutalista/tech)
  - `data-nz-shape="squircle"` para esquinas más orgánicas que el border-radius actual
  - Extensión natural del `data-nz-shape` existente en Aurora v5
- **Pack objetivo:** `ntizar.next.css` (multi-axis theming)
- **Soporte navegador:** Experimental (Chrome 129+ behind flag)

### 7. Tree-Counting Functions: `sibling-index()` y `sibling-count()`
- **Fuente:** Smashing Magazine "Advanced Tree Counting: Mathematical Layouts With sibling-index() And sibling-count()" (may 2026)
- **Descripción:** Nuevas funciones CSS `sibling-index()` y `sibling-count()` que permiten crear efectos de cascada escalonada sin `:nth-child()` rules ni JS. Funcionan para 5 items o 5,000.
- **Potencial para Aurora:**
  - Animaciones staggered automáticas: cada card aparece con delay incremental
  - `.nz-feature-grid > * { animation-delay: calc(sibling-index() * 0.1s); }`
  - Sin necesidad de `.nz-anim--delay-1..6` fijos
  - Gradientes de opacidad/transformación basados en posición relativa
- **Pack objetivo:** `ntizar.motion.css` y `ntizar.patterns.css`
- **Soporte navegador:** Experimental (propuesta W3C)

### 8. `content-visibility` y `view-transition` — Rendimiento y transiciones
- **Fuente:** MDN Blog "Under the hood of MDN's new frontend", MDN "A beginner-friendly guide to view transitions in CSS", CSS-Tricks "Cross-Document View Transitions"
- **Descripción:** 
  - `content-visibility: auto` permite al navegador omitir el renderizado de elementos fuera de viewport, mejorando rendimiento drásticamente en páginas con mucho contenido.
  - View Transitions API permite animaciones suaves entre estados de la página con una sola línea CSS: `view-transition-name: card;`
- **Potencial para Aurora:**
  - `.nz-card { content-visibility: auto; contain-intrinsic-size: 300px; }` para grids de cards con scroll infinito
  - `.nz-anim-view-transition` para transiciones entre estados de componentes
  - Mejora de rendimiento en dashboards con muchas stat-tiles
- **Pack objetivo:** `ntizar.data.css` (dashboards) y `ntizar.motion.css`
- **Soporte navegador:** `content-visibility`: Chrome 85+, Firefox 123+, Safari 17.4+. View transitions: Chrome 100+, Edge 100+, Safari 17.4+

---

## Sitios de referencia explorados

### CSS-Tricks (css-tricks.com)
- **Artículo destacado:** "Revealing Text With CSS letter-spacing" (27 mayo 2026) — técnicas de texto animado
- **Popular este mes:** Radio State Machine (checkbox hack), `::nth-letter` selector proposal, CSS randomness, date range selection
- **Almanac:** Confirma `corner-shape` como propiedad CSS estándar
- **Patrón observado:** Enfoque en CSS puro sin JS, selectores avanzados, accesibilidad

### Smashing Magazine (smashingmagazine.com)
- **Artículos recientes clave:**
  - "Algorithmic Theming Engines: Building Self-Correcting Color Systems With contrast-color()" (28 mayo 2026)
  - "Advanced Tree Counting: Mathematical Layouts With sibling-index() And sibling-count()" (21 mayo 2026)
  - "Beyond border-radius: What The CSS corner-shape Property Unlocks" (12 marzo 2026)
  - "Getting Started With The Popover API" — tooltips nativos del navegador
  - "CSS @scope: An Alternative To Naming Conventions" (5 febrero 2026)
  - "Unstacking CSS Stacking Contexts" (27 enero 2026)
  - "Smashing Animations Part 8: Theming Animations Using CSS Relative Colour" (14 enero 2026)
  - "State, Logic, And Native Power: CSS Wrapped 2025" (9 diciembre 2025)
  - "Masonry: Things You Won't Need A Library For Anymore" (2 diciembre 2025)
- **Patrón observado:** Fuerte énfasis en CSS como lenguaje de programación (lógica, estado, color algorítmico)

### MDN Blog (developer.mozilla.org/en-US/blog)
- **Artículos clave:**
  - "Under the hood of MDN's new frontend" (8 abril 2026) — arquitectura de frontend moderno
  - "A beginner-friendly guide to view transitions in CSS" (9 octubre 2025)
  - "Launching MDN's new front end" (19 agosto 2025)
- **Patrón observado:** MDN está adoptando View Transitions, CSS Nesting, y arquitectura moderna

---

## Análisis de gaps: Aurora vs tendencias 2026

### Lo que Aurora YA tiene bien:
- ✅ `@layer` (usado en todos los packs)
- ✅ `:where()` (usado en todos los packs)
- ✅ OKLCH color system (`ntizar.next.css`)
- ✅ `color-mix()` (usado en todos los packs)
- ✅ `light-dark()` (`ntizar.next.css`)
- ✅ `color-contrast()` (`ntizar.next.css`)
- ✅ `backdrop-filter` (glassmorphism)
- ✅ `:focus-visible` (accesibilidad)
- ✅ Multi-axis theming (shape, density, motion)
- ✅ Liquid Glass real (specular, chromatic edge)

### Lo que Aurora NO tiene (oportunidades):
- ❌ `:has()` — selector padre (95%+ soporte navegador)
- ❌ Scroll-driven animations (`scroll-timeline`, `view-timeline`)
- ❌ `@scope` — aislamiento de estilos
- ❌ `content-visibility` — rendimiento en grids
- ❌ `view-transition` — transiciones entre estados
- ❌ `corner-shape` — más allá de border-radius
- ❌ `sibling-index()` / `sibling-count()` — animaciones staggered automáticas
- ❌ Relative color `oklch(from ...)` — derivación automática de colores

---

## Oportunidades de mejora priorizadas

### 1. `:has()` en componentes interactivos (PACK: `ntizar.css` + `ntizar.ui.css`)
**Impacto: ALTO** — 95%+ soporte navegador, cambio aditivo, mejora UX significativa
- Cards con checkbox/radio que cambian estilo del contenedor
- Formularios: validación visual con `:has()` (campo vacío → borde rojo)
- Accordion nativo sin JS: `details:has(> .is-open)` 
- Botones: `.nz-btn:has(+ .nz-field__input:valid) { --border-color: green; }`
- **CSS estimado:** ~150-200 líneas nuevas
- **Breaking:** Ninguno — puramente aditivo

### 2. Scroll-driven animations para reveal on scroll (PACK: `ntizar.motion.css`)
**Impacto: ALTO** — Elimina dependencia de IntersectionObserver para casos simples
- `.nz-reveal--scroll` con `animation-timeline: view()` 
- `.nz-progress-bar--scroll` que se llena según scroll
- `.nz-anim-scroll-fade` proporcional al scroll del viewport
- **CSS estimado:** ~80-120 líneas nuevas
- **Breaking:** Ninguno — feature enhancement con fallback a `:where()`
- **Nota:** Con fallback graceful para Firefox/Safari que aún no lo soportan

### 3. `content-visibility` para rendimiento de grids (PACK: `ntizar.data.css` + `ntizar.patterns.css`)
**Impacto: MEDIO-ALTO** — Mejora rendimiento en dashboards y grids grandes
- `.nz-card { content-visibility: auto; contain-intrinsic-size: 300px; }`
- `.nz-stat-grid > * { content-visibility: auto; }`
- `.nz-feature-grid > * { content-visibility: auto; }`
- **CSS estimado:** ~30-50 líneas nuevas
- **Breaking:** Ninguno — mejora de rendimiento transparente

### 4. Relative color derivación automática (PACK: `ntizar.next.css`)
**Impacto: MEDIO** — Simplifica customización de skins
- Sombras auto-derivadas del color brand: `oklch(from var(--nz-color-brand) ...)`
- Estados hover/active derivados algorítmicamente
- Bordes con opacidad derivada del color base
- **CSS estimado:** ~50-80 líneas nuevas
- **Breaking:** Ninguno — mejora del sistema de color existente

### 5. `@scope` para encapsulación de UI components (PACK: `ntizar.ui.css`)
**Impacto: MEDIO** — Mejora mantenibilidad a largo plazo
- `@scope (.nz-modal) to (.nz-modal__panel, .nz-modal__close)`
- `@scope (.nz-dropdown) to (.nz-dropdown__menu)`
- **CSS estimado:** ~40-60 líneas nuevas (reestructuración)
- **Breaking:** Potencialmente — reestructuración de selectores existentes
- **Nota:** Bajar de prioridad por riesgo de breaking change

---

## Tendencias secundarias (menos priorizadas)

- **Popover API:** Los tooltips nativos del navegador (`<button popovertarget>`) podrían reemplazar `.nz-tooltip` en algunos casos
- **Masonry nativo:** `grid-template-rows: masonry` ya no necesita librerías
- **CSS Nesting:** `@nest` no está en Aurora — pero el nesting nativo CSS (`&` selector) podría simplificar `ntizar.css`
- **State machines en CSS puro:** El patrón "Radio State Machine" de CSS-Tricks muestra que se pueden construir interfaces completas con solo checkbox/radio + `:has()`
