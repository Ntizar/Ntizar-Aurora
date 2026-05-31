# Investigación Aurora — 31 de mayo de 2026

## Tendencias encontradas

### 1. ::checkmark pseudo-element
- **Fuente:** CSS-Tricks "What's !important #12" (29 mayo 2026) — Sunkanmi Fafowora
- **Descripción:** Nuevo pseudo-elemento `::checkmark` que permite estilizar las marcas de verificación de checkboxes, radios y selects. No solo checkboxes — también targets el indicador de estado checked de radios y selects. Resuelve el problema histórico de no poder estilizar checkmarks en CSS.
- **Potencial para Aurora:** Aurora podría añadir estilos de checkmark personalizados para los componentes de forms (`ntizar.forms.css`). Ej: `.nz-form__input[type="checkbox"]::checkmark { ... }` con variantes de color, tamaño y forma.
- **Pack objetivo:** `ntizar.forms.css`

### 2. sibling-index() y sibling-count() — funciones CSS casi-Baseline
- **Fuente:** CSS-Tricks "What's !important #12" (29 mayo 2026) — Durgesh Pawar
- **Descripción:** Dos funciones CSS que devuelven la posición de un elemento entre sus hermanos (`sibling-index()`) y el número total de hermanos (`sibling-count()`). Casi-Baseline ya. Permiten patrones como: "destacar la tarjeta central en un pricing grid", "numeración automática de items", "estilos alternos basados en posición".
- **Potencial para Aurora:** Mejora los patrones de pricing (destacar tarjeta featured), feature grids, y stat-tiles sin necesidad de JS. Ej: `.nz-stat-tile:nth-child(1 of .nz-stat-grid) { ... }` → reemplazable con `sibling-index()`.
- **Pack objetivo:** `ntizar.data.css` + `ntizar.patterns.css`

### 3. border-shape + shape() — formas de borde no redondeadas
- **Fuente:** CSS-Tricks "What's !important #12" (29 mayo 2026) — Temani Afif
- **Descripción:** Combinar `border-shape` con la función `shape()` permite crear estilos de borde más allá de `border-radius`: bisel, triángulo, forma personalizada. Más flexible que `clip-path` y animable con CSS. Se pueden cambiar entre formas fácilmente.
- **Potencial para Aurora:** Aurora ya tiene `data-nz-shape="sharp|rounded|brutalist"`. `border-shape` podría añadir variantes como `"bevel"` o `"folded"` como extensiones del sistema de shapes. Complementa `corner-shape` (investigado el 29/05).
- **Pack objetivo:** `ntizar.next.css`

### 4. CSS nesting — 88.57% de soporte
- **Fuente:** caniuse.com (mayo 2026)
- **Descripción:** CSS Nesting (`&` dentro de selectores) tiene ~88.6% de soporte global. Permite escribir CSS más legible y mantenible, anidando selectores de forma nativa sin preprocesador. Chrome, Edge, Firefox, Safari lo soportan.
- **Potencial para Aurora:** Aurora podría empezar a usar nesting nativo en nuevos packs o en `ntizar.next.css`. Mejora legibilidad y reduce la necesidad de BEM-like naming. Ej: `.nz-card { &__header { ... } &__body { ... } }`.
- **Pack objetivo:** `ntizar.next.css` (como patrón de escritura)

### 5. CSS overflow (scrollbar-gutter) — 93.75% de soporte
- **Fuente:** caniuse.com (mayo 2026)
- **Descripción:** `overflow: overlay` y `scrollbar-gutter: stable` permiten reservar espacio para la barra de scroll, evitando layout shifts cuando el contenido cambia de altura. 93.75% de soporte global.
- **Potencial para Aurora:** Aurora podría añadir `scrollbar-gutter: stable` por defecto en el core para evitar layout shifts. Mejora UX en dashboards y data-heavy pages. También `overflow: overlay` para scrollbars estéticos.
- **Pack objetivo:** `ntizar.css` (core)

### 6. CSS Anchor Positioning — 82.83% de soporte
- **Fuente:** CSS-Tricks "The State of CSS Centering in 2026" (22 mayo 2026) — Temani Afif + "What's !important #12"
- **Descripción:** Anchor positioning (`position-anchor`, `anchor()`, `anchor-size()`) ya tiene 82.83% de soporte. Permite posicionar elementos relativos a otros sin JavaScript. Se menciona que el atributo HTML `anchor` fue eliminado, pero las alternativas con `data-*` y `attr()` funcionan.
- **Potencial para Aurora:** Aurora podría añadir utilidades `.nz-anchor-*` para dropdowns y tooltips posicionados mediante `anchor()`, reemplazando el posicionamiento absoluto con JS. Durgesh Pawar demostró alternativas con `data-*` y `attr()`.
- **Pack objetivo:** `ntizar.ui.css`

### 7. CSS text-wrap: balance — tipografía moderna
- **Fuente:** MDN Blog (mayo 2026) + caniuse.com
- **Descripción:** `text-wrap: balance` distribuye el espacio entre líneas de forma equilibrada, mejorando la tipografía en títulos y textos cortos. Chrome 131+. Es una de las mejoras tipográficas más significativas de 2026.
- **Potencial para Aurora:** Aurora podría añadir `.u-nz-text-balance` como utility class para títulos y textos cortos. Mejora visual significativa con una sola línea CSS.
- **Pack objetivo:** `ntizar.css` (core utilities)

### 8. CSS field-sizing: content — inputs auto-ajustables
- **Fuente:** MDN Blog + caniuse.com (Chrome 141+)
- **Descripción:** `field-sizing: content` hace que los `<input type="text">` se ajusten automáticamente al contenido, eliminando la necesidad de JS para inputs auto-expandibles. Chrome 141+.
- **Potencial para Aurora:** Aurora podría añadir `.nz-field--auto-size` como variante de campo que se ajusta al contenido. Útil para search fields, tags, y inputs de texto corto.
- **Pack objetivo:** `ntizar.forms.css`

### 9. CSS accent-color — personalización nativa de controles
- **Fuente:** MDN Blog + caniuse.com (95%+ soporte)
- **Descripción:** `accent-color` permite cambiar el color de los controles nativos (checkboxes, radios, range, progress) sin CSS hacks. Soporte casi universal.
- **Potencial para Aurora:** Aurora podría usar `accent-color` en vez de estilos custom complejos para checkboxes, radios y range inputs. Simplifica enormemente el pack de forms.
- **Pack objetivo:** `ntizar.forms.css`

### 10. CSS mask-layer — enmascaramiento avanzado
- **Fuente:** MDN Blog + caniuse.com (Chrome 133+, Safari 18+)
- **Descripción:** `mask-layer` permite múltiples capas de máscara CSS, combinando gradientes, imágenes y patrones para efectos visuales avanzados. Soporte creciente.
- **Potencial para Aurora:** Aurora podría usar `mask-layer` para efectos de gradientes más sofisticados en `.nz-aurora-bg`, `.nz-orb`, y `.u-nz-bg-aurora`. Mejora la calidad visual del liquid glass y los efectos aurora.
- **Pack objetivo:** `ntizar.next.css` + `ntizar.viz.css`

### 11. CSS @scope — encapsulamiento nativo
- **Fuente:** CSS-Tricks + MDN (Chrome 129+, Firefox 136+)
- **Descripción:** `@scope` permite definir el alcance de los estilos CSS de forma nativa, sin necesidad de Shadow DOM ni BEM. Más flexible que CSS Modules y más seguro que @layer para encapsulamiento.
- **Potencial para Aurora:** Aurora podría usar `@scope` para encapsular los estilos de cada pack, evitando colisiones con el CSS del usuario. Mejora la robustez del sistema.
- **Pack objetivo:** `ntizar.next.css` (como patrón de arquitectura)

### 12. CSS ident() + sibling-index() para view transitions
- **Fuente:** CSS-Tricks "Cross-Document View Transitions: Scaling Across Hundreds of Elements" (25 mayo 2026) — Durgesh Pawar
- **Descripción:** La función `ident()` concatenada con `sibling-index()` permite generar nombres únicos de view transitions automáticamente: `view-transition-name: ident("card-" sibling-index())`. Esto soluciona el problema de escalar view transitions a cientos de elementos sin JS.
- **Potencial para Aurora:** Aurora podría añadir un pack de view transitions con utilidades `.nz-vt-*` que usen `ident()` + `sibling-index()` para nombres automáticos. Complementa la investigación del 29/05 sobre CDVT.
- **Pack objetivo:** `ntizar.motion.css` o nuevo `ntizar.vt.css`

### 13. CSS marker arrays — estilos de lista avanzados
- **Fuente:** CSS-Tricks + MDN (Chrome 137+, Firefox 138+)
- **Descripción:** `marker` en `list-style` ahora soporta arrays, permitiendo estilos diferentes para cada item de lista. Ej: `list-style: marker(circle, square, triangle)`.
- **Potencial para Aurora:** Aurora podría añadir patrones de lista con marcadores variados para FAQs, step-by-step guides, y feature lists. Mejora visual en `ntizar.patterns.css`.
- **Pack objetivo:** `ntizar.patterns.css`

### 14. CSS text-spacing-trim — control de espaciado tipográfico
- **Fuente:** MDN Blog + caniuse.com (Chrome 129+, Safari 18+)
- **Descripción:** `text-spacing-trim` y `text-spacing` permiten control preciso del espaciado de caracteres, especialmente en bordes de texto y saltos de línea. Mejora la tipografía en títulos y textos largos.
- **Potencial para Aurora:** Aurora podría añadir `.u-nz-text-spacing` como utility para mejor tipografía en títulos y textos cortos.
- **Pack objetivo:** `ntizar.css` (core utilities)

### 15. CSS writing-mode — tipografía vertical y lateral
- **Fuente:** MDN Blog + caniuse.com (95%+ soporte)
- **Descripción:** `writing-mode` permite texto vertical, horizontal-tb, y vertical-rl. Soporte casi universal. Útil para diseños creativos, sidebars, y tipografía asiática.
- **Potencial para Aurora:** Aurora podría añadir `.nz-writing-vertical` como utility para layouts creativos con texto vertical en sidebars o hero sections.
- **Pack objetivo:** `ntizar.css` (core utilities)

### 16. CSS light-dark() — tema automático
- **Fuente:** Aurora ya lo tiene en `ntizar.next.css` ✓
- **Descripción:** `light-dark()` permite valores CSS que cambian automáticamente según el tema del usuario. Aurora ya implementa `.u-nz-text-auto` usando este patrón.
- **Estado Aurora:** ✓ Ya implementado en `ntizar.next.css`

## Sitios de referencia explorados

- **CSS-Tricks:** 15 artículos analizados del 8 al 29 de mayo 2026. Tendencia clara: CSS se vuelve más declarativo y funcional (sibling-index, ::checkmark, border-shape, anchor positioning, ident()). El resumen semanal "What's !important" es la fuente más actualizada de novedades CSS.
- **MDN Blog:** Guía de view transitions como feature destacada. Cambio de frontend de MDN con nuevas tecnologías. Artículos sobre color models, image formats, y h1 element styles.
- **caniuse.com:** Datos de soporte global para múltiples features CSS. ::has() 93.54%, container queries 93.13%, @layer 94.71%, anchor positioning 82.83%, CSS nesting 88.57%.

## Estado actual de Aurora (análisis de gaps)

### Ya implementado en Aurora ✓
- `:has()`, `:where()`, `:not()`, `:is()`
- `@container`, `container-type`
- `scroll-timeline`, `view-timeline`, `animation-timeline`
- `color-mix()`, `color-contrast()`
- `light-dark()`
- `@layer`
- `overflow:`, `margin-inline:`, `padding-block:`, `inset:`
- `content-visibility`, `contain`, `backdrop-filter`
- `mask-image`, `text-wrap`
- `scrollbar-width`, `scroll-behavior`
- `user-select`, `pointer-events`, `cursor`, `appearance`
- `aspect-ratio`, `grid-template-areas`, `isolation`
- Utilities: `.u-nz-text-gradient`, `.u-nz-glow`, `.u-nz-bg-aurora`, `.u-nz-bg-mesh`, `.u-nz-text-auto`, `.u-nz-rounded`, `.u-nz-gap`, `.u-nz-aspect`, `.u-nz-hide`, `.u-nz-show`, `.u-nz-num`, `.u-nz-text-mono`
- `:open` pseudo-class (aplicado el 30/05)

### NO implementado — oportunidades identificadas ✗
- `::checkmark` — pseudo-element para checkmarks personalizados
- `sibling-index()`, `sibling-count()` — funciones CSS para posicionamiento entre hermanos
- `border-shape` + `shape()` — formas de borde no redondeadas
- `position-anchor`, `anchor()` — posicionamiento relativo a otros elementos
- `@scope` — encapsulamiento nativo de estilos
- `@property` — Houdini para validación de tokens
- `ident()` — función para generar identificadores únicos
- `scrollbar-gutter: stable` — reserva de espacio para scrollbar
- `text-wrap: balance` — tipografía equilibrada
- `field-sizing: content` — inputs auto-ajustables
- `accent-color` — personalización nativa de controles
- `mask-layer` — enmascaramiento multi-capa
- `marker` arrays — estilos de lista avanzados
- `text-spacing-trim` — control de espaciado tipográfico
- `writing-mode` — tipografía vertical
- `subgrid` — grids anidados
- CSS Nesting (`&`) — escritura moderna de CSS

## Oportunidades de mejora priorizadas

1. **`::checkmark` pseudo-element** — Estilizar checkmarks de checkboxes/radios nativos. Máximo impacto en el pack de forms, mínimo cambio. Mejora UX de formularios sin JS. (Pack: `ntizar.forms.css`)

2. **`sibling-index()` / `sibling-count()`** — Funciones CSS para posicionamiento entre hermanos. Mejora los patrones de pricing y stat-tiles. (Pack: `ntizar.data.css` + `ntizar.patterns.css`)

3. **`scrollbar-gutter: stable` en el core** — Prevenir layout shifts por scrollbars. Mejora UX en dashboards y data-heavy pages. Un cambio aditivo mínimo. (Pack: `ntizar.css` core)

4. **`text-wrap: balance` utility** — Mejora tipográfica inmediata para títulos. Una sola línea CSS. (Pack: `ntizar.css` utilities)

5. **`accent-color` para controles nativos** — Simplificar el pack de forms usando la propiedad nativa en vez de estilos custom complejos. (Pack: `ntizar.forms.css`)

6. **`@scope` para encapsulamiento de packs** — Mejorar la robustez del sistema evitando colisiones con CSS del usuario. (Pack: `ntizar.next.css`)

7. **`border-shape` como variante de `data-nz-shape`** — Añadir `"bevel"` como nueva variante visual. (Pack: `ntizar.next.css`)

8. **`field-sizing: content` para inputs** — Inputs auto-ajustables para search fields y tags. (Pack: `ntizar.forms.css`)
