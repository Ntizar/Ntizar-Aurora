# Investigación Aurora — 29 de mayo de 2026

## Tendencias encontradas

### 1. Cross-Document View Transitions
- **Fuente:** CSS-Tricks (May 18-22, 2026) — "Cross-Document View Transitions: The Gotchas Nobody Mentions" + "Scaling Across Hundreds of Elements"
- **Descripción:** Las Cross-Document View Transitions (CDVT) ya tienen su forma CSS definitiva: `@view-transition` en CSS (reemplazó al deprecated `<meta name="view-transition">`). Soportan `pagereveal` y `pageswap` events, y `view-transition-class` alongside `view-transition-name`. Timeout de 4s en páginas lentas. `prefers-reduced-motion` ya se implementa correctamente.
- **Potencial para Aurora:** Aurora podría añadir un pack `.nz-view-transition.css` con utilidades para `@view-transition`, clases `.nz-vt-*` para nombres de transición, y un patrón de reveal entre páginas que funcione con CDVT. También podría añadir `.nz-anim--reduced-motion` como fallback.
- **Pack objetivo:** `ntizar.motion.css` + nuevo `ntizar.vt.css`

### 2. CSS Anchor Positioning
- **Fuente:** CSS-Tricks (May 22, 2026) — "The State of CSS Centering in 2026" + "anchor positioning" tag
- **Descripción:** Anchor positioning (CSS `position-anchor`, `anchor()`, `anchor-size()`) ya es una realidad. Permite posicionar elementos relativos a otros elementos sin JavaScript. Complementa los dropdowns, popovers y tooltips existentes.
- **Potencial para Aurora:** Aurora podría añadir utilidades `.nz-anchor-*` para dropdowns/popovers posicionados mediante `anchor()`, reemplazando el posicionamiento absoluto con JS en `.nz-dropdown` y `.nz-tooltip`.
- **Pack objetivo:** `ntizar.ui.css`

### 3. CSS Corner-Shape
- **Fuente:** CSS-Tricks (May 8, 2026) — "Using CSS corner-shape For Folded Corners"
- **Descripción:** Nueva propiedad `corner-top-right-shape: bevel|round|triangle` que permite formas de esquina no redondeadas: bisel, triángulo, redondeo. Chrome solo por ahora. Permite crear efectos de esquina doblada, recorte angular, etc. con variables CSS animables.
- **Potencial para Aurora:** Aurora ya tiene `data-nz-shape="sharp|rounded|brutalist"`. `corner-shape` podría añadir un cuarto valor como `"cut"` (esquina recortada) o `"folded"` (esquina doblada) como variante visual premium en el pack `ntizar.next.css`.
- **Pack objetivo:** `ntizar.next.css`

### 4. Container Style Queries + Range Syntax
- **Fuente:** CSS-Tricks "What's !important #11" (May 15, 2026) — Firefox 151 soporta container style queries; la range syntax para container style queries viene con flag
- **Descripción:** Los container queries ya son mainstream, pero la nueva capacidad de hacer queries sobre el estilo del contenedor (`@container style(...)`) abre posibilidades de diseño adaptativo sin media queries. La range syntax permite `@container style(--my-var > 100)`.
- **Potencial para Aurora:** Aurora podría usar container queries para que los componentes se adapten al tamaño del contenedor padre en vez del viewport. Ej: `.nz-card--container` que ajusta padding/border según el ancho del container.
- **Pack objetivo:** `ntizar.next.css` (core de tokens) + `ntizar.core.css`

### 5. Scroll-Driven Animations
- **Fuente:** CSS-Tricks "What's !important #11" (May 15, 2026) — Josh Comeau expert explanation
- **Descripción:** Scroll-driven animations (`animation-timeline: scroll()`, `view()`) ya son ampliamente soportadas en Chrome/Edge. Las scroll-triggered animations están en camino. Son el futuro de las animaciones "reveal on scroll" sin JavaScript.
- **Potencial para Aurora:** Aurora ya tiene `.nz-reveal[--left/--right/--scale]` que requiere IntersectionObserver + JS. Podría añadir una versión CSS-only con `animation-timeline: view()` para los mismos efectos de reveal sin JS.
- **Pack objetivo:** `ntizar.motion.css`

### 6. attr() con tipos numéricos + CSS Math
- **Fuente:** CSS-Tricks (May 2026) — "Computing and Displaying Discounted Prices in CSS"
- **Descripción:** `attr(data-price number)` permite leer atributos HTML como números y hacer cálculos CSS. Combinado con `counter()`, `mod()`, `round()`, se pueden hacer cálculos numéricos puros en CSS.
- **Potencial para Aurora:** En el pack de data/KPIs, se podrían mostrar porcentajes, barras de progreso dinámicas o valores calculados directamente desde `data-*` attributes sin JavaScript.
- **Pack objetivo:** `ntizar.data.css`

### 7. :has() selector + :nth-child() with "of <selector>"
- **Fuente:** CSS-Tricks "What's !important #11" (May 15, 2026) — Paweł Grzybek
- **Descripción:** `:has()` ya es ampliamente soportado (Baseline). El nuevo `:nth-child(2 of .intro)` permite seleccionar el segundo elemento que coincida con un selector arbitrario entre hermanos, no solo del mismo tipo.
- **Potencial para Aurora:** Mejoraría los patrones de pricing (destacar tarjeta featured), feature grids, y el sistema de tabs sin necesidad de JS. Ej: `:has(.is-active) ~ .nz-tab` para estilos de tabs adyacentes.
- **Pack objetivo:** `ntizar.ui.css` + `ntizar.patterns.css`

### 8. :open pseudo-class
- **Fuente:** CSS-Tricks "What's !important #11" (May 15, 2026) — Safari 26.5, ahora Baseline
- **Descripción:** `:open` pseudo-class para `<details>` y `<dialog>` ya es Baseline en todos los navegadores. Permite estilizar estados abiertos sin JS.
- **Potencial para Aurora:** Los accordions de Aurora (`<details class="nz-accordion__item">`) podrían usar `:open` para estilos de estado abierto sin JS. Los modals con `<dialog>` también.
- **Pack objetivo:** `ntizar.ui.css`

### 9. @property (CSS Houdini)
- **Fuente:** ModernCSS.dev — "Providing Type Definitions for CSS with @property"
- **Descripción:** `@property` permite definir tipos para custom properties (número, color, porcentaje, etc.), dando validación, transiciones suaves entre tipos y fallbacks seguros.
- **Potencial para Aurora:** Los tokens de Aurora (`--nz-color-brand`, `--nz-space-4`, etc.) podrían declararse con `@property` para garantizar tipos correctos y transiciones automáticas entre valores. Mejora robustez del sistema de tokens.
- **Pack objetivo:** `ntizar.next.css`

### 10. Reveal text con letter-spacing
- **Fuente:** CSS-Tricks — "Revealing Text With CSS letter-spacing"
- **Descripción:** Efecto de texto que se revela desde letras superpuestas (`letter-spacing: -1ch`) a normales (`letter-spacing: 0ch`), con `color: transparent` → `color: black`. Animatable con CSS transitions.
- **Potencial para Aurora:** Podría añadirse como `.nz-anim--text-reveal` en el motion pack, útil para hero titles y efectos de entrada premium.
- **Pack objetivo:** `ntizar.motion.css`

### 11. Design Token Systems: OKLCH + Color Mixing
- **Fuente:** MDN Blog — "Image formats: Color models for humans and devices" + Aurora ya tiene OKLCH en next.css
- **Descripción:** OKLCH está ganando adopción como color model perceptualmente uniforme. CSS `color-mix()` y `color-contrast()` también son relevantes. Aurora ya tiene `data-nz-color-system="oklch"` activable.
- **Potencial para Aurora:** Aurora podría aprovechar `color-contrast()` para auto-selección de texto sobre fondos (ya tiene `.u-nz-text-auto`). Podría añadir `color-mix()` para variantes automáticas de colores.
- **Pack objetivo:** `ntizar.next.css`

### 12. Logical Properties como estándar
- **Fuente:** ModernCSS.dev — "Contextual Spacing For Intrinsic Web Design"
- **Descripción:** `margin-inline`, `padding-block`, `inset-inline`, `margin-block` tienen >98% de soporte. El diseño intrínseco (intrinsic web design) usa propiedades lógicas como base.
- **Potencial para Aurora:** Aurora podría migrar internamente más propiedades a lógicas y documentar el patrón `nz-stack` como ejemplo de diseño intrínseco.
- **Pack objetivo:** `ntizar.css` (core)

## Sitios de referencia explorados

- **CSS-Tricks:** 15+ artículos recientes analizados. Tendencia clara: CSS se vuelve más declarativo (view transitions, anchor positioning, scroll-driven, container queries, :has, :open). Menos JS, más CSS puro.
- **ModernCSS.dev:** Enfoque en "one-line upgrades" — propiedades modernas que reemplazan hacks. Énfasis en accesibilidad y progressive enhancement.
- **MDN Blog:** View transitions como feature destacada. Cambio de frontend de MDN con nuevas tecnologías.
- **CSS-Tricks Almanac:** `corner-shape`, `attr()` con tipos, `@property` como features emergentes.

## Oportunidades de mejora priorizadas

1. **Scroll-driven animations para reveal** — Reemplazar IntersectionObserver + JS por `animation-timeline: view()` en `.nz-reveal`. Máximo impacto, mínimo cambio, CSS-only real. (Pack: `ntizar.motion.css`)

2. **`:open` pseudo-class para accordions y dialogs** — Usar `details:open` y `dialog:open` para eliminar clases `.is-open` de JS en accordions y modals. (Pack: `ntizar.ui.css`)

3. **`@property` para validación de tokens** — Declarar tokens clave con `@property` para tipos seguros y transiciones automáticas. Mejora robustez del sistema de design tokens. (Pack: `ntizar.next.css`)

4. **`.nz-anim--text-reveal`** — Efecto de texto revelado con letter-spacing animado. Hero titles premium. (Pack: `ntizar.motion.css`)

5. **`@view-transition` utilities** — Utilidades CSS para cross-document view transitions. (Pack: `ntizar.motion.css` o nuevo `ntizar.vt.css`)

6. **Container queries para componentes adaptativos** — Cards, KPIs y grids que se adapten al contenedor padre. (Pack: `ntizar.next.css`)
