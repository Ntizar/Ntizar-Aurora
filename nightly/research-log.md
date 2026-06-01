# Investigación Aurora — 2026-06-01

## Fuentes consultadas

- **CSS-Tricks RSS** (`/feed/`) — 15 artículos recientes (mayo 2026)
- **Smashing Magazine RSS** (`/feed/`) — 40 artículos recientes (mayo 2026)
- **Josh Comeau RSS** (`/rss.xml`) — 87 artículos (últimos: CSS vs JS, Scroll-driven, Springs)
- **MDN Blog RSS** (`/blog/rss.xml`) — 70+ artículos (view transitions, color-mix, container queries)
- **LogRocket RSS** (`/feed/`) — 12 artículos (UX, design engineering)
- **Artículos profundos leídos:**
  - [What's !important #12](https://css-tricks.com/whats-important-12/) — ::checkmark, sibling-index(), anchor positioning, corner-shape
  - [Cross-Document View Transitions](https://css-tricks.com/cross-document-view-transitions-part-2/) — escalado a cientos de elementos
  - [Revealing Text With CSS letter-spacing](https://css-tricks.com/revealing-text-with-css-letter-spacing/) — animaciones de texto con letter-spacing
  - [Using CSS corner-shape For Folded Corners](https://css-tricks.com/using-css-corner-shape-for-folded-corners/) — corner-shape: bevel
  - [CSS vs. JavaScript](https://www.joshwcomeau.com/animation/css-vs-javascript/) — rendimiento animaciones CSS vs JS
  - [Scroll-Driven Animations](https://www.joshwcomeau.com/animation/scroll-driven-animations/) — Josh Comeau guía completa

## Tendencias encontradas

### 1. ::checkmark pseudo-element
- **Fuente:** CSS-Tricks — [What's !important #12](https://css-tricks.com/whats-important-12/) (29 mayo 2026)
- **Descripción:** Nuevo pseudo-element `::checkmark` que estiliza el indicador visual de checkboxes, radios y selects. Resuelve el problema histórico de no poder estilizar los checkmarks nativos del navegador.
- **Potencial para Aurora:** Aurora tiene `ntizar.forms.css` con estilos para inputs. Podríamos añadir `data-nz-check-style` para personalizar el checkmark nativo sin JS.
- **Pack objetivo:** `ntizar.forms.css`
- **Soporte:** Chrome 138+ (recién lanzado)
- **Estado en Aurora:** ✗ NO IMPLEMENTADO

### 2. corner-shape property
- **Fuente:** CSS-Tricks — [Using CSS corner-shape For Folded Corners](https://css-tricks.com/using-css-corner-shape-for-folded-corners/) (8 mayo 2026)
- **Descripción:** Nueva propiedad CSS `corner-shape` (y variantes `corner-top-right-shape`, etc.) que permite crear esquinas biseladas, recortadas, con doble bisel. Reemplaza los hacks de `clip-path` para esquinas. Soporta `bevel`, `round`, `chamfer`, `chamfer-round`.
- **Potencial para Aurora:** Aurora ya tiene `data-nz-shape` (default, sharp, rounded, brutalist). corner-shape permitiría: `data-nz-shape="cut"` (esquina recortada tipo tarjeta), `data-nz-shape="bevel"` (biselado 3D), `data-nz-shape="folded"` (esquina doblada). Esto encaja perfectamente en `ntizar.next.css`.
- **Pack objetivo:** `ntizar.next.css` (v5+)
- **Soporte:** Chrome 138+
- **Estado en Aurora:** ✗ NO IMPLEMENTADO — **OPORTUNIDAD ALTA**

### 3. sibling-index() y sibling-count()
- **Fuente:** CSS-Tricks + Smashing Magazine (21 mayo 2026) — Durgesh Pawar
- **Descripción:** Dos funciones CSS Baseline que devuelven la posición del elemento entre sus hermanos (`sibling-index()`) y el total de hermanos (`sibling-count()`). Permiten animaciones escalonadas, contadores, layouts matemáticos sin JS.
- **Potencial para Aurora:** Aurora tiene `ntizar.motion.css` con reveal animations. Con `sibling-index()` se podrían hacer animaciones escalonadas automáticas para grids de cards, listas, KPIs — sin necesidad de clases `.nz-reveal--delay-1`, `.nz-reveal--delay-2`, etc.
- **Pack objetivo:** `ntizar.motion.css` + `ntizar.data.css`
- **Soporte:** Chrome 138+ (Baseline)
- **Estado en Aurora:** ✗ NO IMPLEMENTADO — **OPORTUNIDAD MEDIA-ALTA**

### 4. CSS-only animations: rendimiento superior a JS
- **Fuente:** Josh Comeau — [CSS vs. JavaScript](https://www.joshwcomeau.com/animation/css-vs-javascript/) (26 mayo 2026)
- **Descripción:** Confirmación de que las animaciones CSS corren en thread separado del navegador, mientras que JS (incluso GSAP/Motion) compite con la aplicación en el main thread. Cuando el main thread se bloquea (React updates, fetch responses), las animaciones CSS siguen fluidas y las de JS se congelan.
- **Potencial para Aurora:** Refuerzo de la filosofía de Aurora: CSS-only es la decisión correcta. Podríamos documentar esto como "best practice" en la guía. También valida el enfoque de mover más animaciones de JS a CSS.
- **Pack objetivo:** Documentación / `SYSTEM.md`
- **Soporte:** Universal (feature del navegador)
- **Estado en Aurora:** ✓ Filosofía ya implementada (CSS-only)

### 5. Text reveal con letter-spacing
- **Fuente:** CSS-Tricks — [Revealing Text With CSS letter-spacing](https://css-tricks.com/revealing-text-with-css-letter-spacing/) (27 mayo 2026)
- **Descripción:** Técnica de animación de texto usando `letter-spacing` negativo + `color: transparent` para ocultar texto, luego transición a `letter-spacing: 0` + color visible para revelarlo. Funciona con checkbox `:checked` para interactividad CSS-only.
- **Potential para Aurora:** Podría añadirse como utilidad de animación en `ntizar.motion.css`: `.nz-text-reveal` que aplique esta técnica. Compatible con el patrón `:checked +` de Aurora.
- **Pack objetivo:** `ntizar.motion.css`
- **Soporte:** Universal (letter-spacing siempre ha existido)
- **Estado en Aurora:** ✗ NO IMPLEMENTADO

### 6. View Transitions escalando a cientos de elementos
- **Fuente:** CSS-Tricks — [Cross-Document View Transitions](https://css-tricks.com/cross-document-view-transitions-part-2/) (25 mayo 2026)
- **Descripción:** Guía avanzada de View Transitions API para escalar a grids de 100+ elementos. La solución futura usa `ident()` + `sibling-index()` para generar nombres automáticos. Mientras tanto, se usan patrones de JS para generar `::view-transition-name` por elemento.
- **Potencial para Aurora:** Aurora ya tiene `view-transition` implementado. Esta investigación muestra el estado del arte para grids de productos/cards. Podría inspirar un patrón en `ntizar.next.css` para transiciones de cards.
- **Pack objetivo:** `ntizar.next.css`
- **Soporte:** Chrome 117+, Edge 117+
- **Estado en Aurora:** ✓ View transitions básico implementado

### 7. Container style queries (Baseline 2026)
- **Fuente:** CSS-Tricks What's Important #12 (29 mayo 2026)
- **Descripción:** Firefox 151 añade soporte para container style queries. Ahora las container queries están en Baseline del web platform, con soporte en todos los navegadores principales.
- **Potencial para Aurora:** Aurora ya tiene container queries. Esta noticia confirma que es una tecnología madura y ampliamente soportada. Podría reforzarse el uso de container queries en componentes responsivos de Aurora.
- **Pack objetivo:** `ntizar.next.css` (ya implementado)
- **Soporte:** ✓ Baseline (todos los navegadores)
- **Estado en Aurora:** ✓ Ya implementado

### 8. Scroll-driven animations (Josh Comeau guía completa)
- **Fuente:** Josh Comeau — [Scroll-Driven Animations](https://www.joshwcomeau.com/animation/scroll-driven-animations/) (28 abril 2026)
- **Descripción:** Guía exhaustiva de scroll-driven animations con `scroll-timeline` y `view-timeline`. Cubre progress animations, scrub effects, parallax nativo sin JS.
- **Potencial para Aurora:** Aurora ya tiene scroll-driven animations. Esta guía es referencia para patrones avanzados que podrían añadirse.
- **Pack objetivo:** `ntizar.motion.css` (ya implementado)
- **Estado en Aurora:** ✓ Ya implementado

## Sitios de referencia explorados

### Artículos de referencia clave
- **CSS-Tricks** — Fuente más rica: 15 artículos en el feed, con contenido profundo sobre ::checkmark, corner-shape, sibling-index, anchor positioning
- **Josh Comeau** — Referencia de excelencia en animación CSS. Su artículo "CSS vs JS" es lectura obligada para validar la filosofía Aurora
- **Smashing Magazine** — Menos contenido CSS puro (40 artículos, pero muchos de UX/ROI), pero el artículo de `sibling-index()` es relevante
- **MDN Blog** — Artículos de referencia: view transitions beginner guide, color-mix(), container queries

## Análisis de gaps: Aurora vs Estado del arte CSS

### Características CSS modernas — Estado en Aurora

| Característica | Estado | Prioridad |
|---|---|---|
| `::checkmark` pseudo-element | ✗ NO | Alta (forms) |
| `corner-shape` property | ✗ NO | **MUY ALTA** (next.css, visual impact) |
| `sibling-index()` / `sibling-count()` | ✗ NO | Media-Alta (motion, layouts) |
| `@starting-style` | ✗ NO | Media |
| `overflow: clip` | ✗ NO | Baja |
| `shape()` function | ✗ NO | Baja |
| `line-clamp` | ✗ NO | Media |
| `scrollbar-gutter` | ✗ NO | Baja |
| `field-sizing` | ✗ NO | Media (forms) |
| `inset()` image function | ✗ NO | Baja |
| `border-shape` | ✗ NO | Baja |
| `overscroll-behavior` | ✗ NO | Baja |
| View Transitions | ✓ | — |
| Scroll-driven animations | ✓ | — |
| `:has()` | ✓ | — |
| Container queries | ✓ | — |
| OKLCH color | ✓ | — |
| `@layer` | ✓ | — |
| `:open` pseudo-class | ✓ | — |
| backdrop-filter | ✓ | — |
| color-mix() | ✓ | — |
| color-contrast() | ✓ | — |
| forced-color-adjust | ✓ | — |
| prefers-reduced-motion | ✓ | — |
| content-visibility | ✓ | — |
| text-wrap | ✓ | — |

## Oportunidades de mejora priorizadas

### 1. ✂️ corner-shape — Esquinas recortadas/biseladas (PACK: ntizar.next.css)
**Impacto:** Alto — Mejora visual inmediata en cards, botones, badges, imágenes
**Cambio mínimo:** Añadir `data-nz-shape="cut"` y `data-nz-shape="bevel"` como extensiones de `data-nz-shape` existente
**Técnica:** Usar `corner-*-shape: bevel` con `border-radius` coordinates como variables CSS
**Soporte:** Chrome 138+ (graceful fallback a border-radius en otros navegadores)
**Referencia:** [CSS-Tricks: Using CSS corner-shape For Folded Corners](https://css-tricks.com/using-css-corner-shape-for-folded-corners/)

### 2. ⚡ sibling-index() — Animaciones escalonadas automáticas (PACK: ntizar.motion.css)
**Impacto:** Medio-Alto — Elimina necesidad de clases de delay manual en grids
**Cambio mínimo:** Añadir `.nz-stagger > * { animation-delay: calc((sibling-index() - 1) * 0.1s); }`
**Técnica:** Usar `sibling-index()` en `animation-delay` para stagger automático
**Soporte:** Chrome 138+ (Baseline)
**Referencia:** [Smashing Magazine: Advanced Tree Counting](https://smashingmagazine.com/2026/05/mathematical-layouts-sibling-index-sibling-count/)

### 3. 📝 text-reveal — Utilidad de revelado de texto (PACK: ntizar.motion.css)
**Impacto:** Medio — Efecto visual atractivo para hero sections, headings
**Cambio mínimo:** Añadir `.nz-text-reveal` con `letter-spacing: -1ch; color: transparent` + transición
**Técnica:** letter-spacing negativo + color transparent → transición a visible
**Soporte:** Universal (letter-spacing siempre ha existido)
**Referencia:** [CSS-Tricks: Revealing Text With CSS letter-spacing](https://css-tricks.com/revealing-text-with-css-letter-spacing/)

### 4. ☑️ ::checkmark — Estilizado de checkmarks nativos (PACK: ntizar.forms.css)
**Impacto:** Medio — Mejora visual de formularios en navegadores que lo soporten
**Cambio mínimo:** Añadir `input[type="checkbox"]::checkmark { ... }` con variables CSS
**Técnica:** Pseudo-element `::checkmark` con `border-shape` para estilos de check
**Soporte:** Chrome 138+ (fallback a estilos existentes en otros navegadores)
**Referencia:** [CSS-Tricks: First look at ::checkmark](https://css-tricks.com/whats-important-12/)

### 5. 📏 field-sizing — Campos de formulario auto-ajustables (PACK: ntizar.forms.css)
**Impacto:** Bajo-Medio — Mejora UX de campos textarea/text
**Cambio mínimo:** Añadir `field-sizing: content` como valor por defecto en inputs de formulario
**Técnica:** Propiedad CSS `field-sizing: content` para auto-ajustar altura
**Soporte:** Chrome 131+, Firefox 137+
**Referencia:** MDN documentation

## Notas adicionales

- **CSS vs JS:** Josh Comeau confirma que CSS animations son inherentemente más performantes porque corren en thread separado. Esto valida la filosofía de Aurora como sistema CSS-only.
- **State of CSS 2026:** Mención en CSS-Tricks — la comunidad siente que CSS avanza demasiado rápido para mantenerse al día. Esto refuerza la necesidad de Aurora como sistema curado.
- **Container style queries:** Ahora en Baseline (todos los navegadores). Aurora ya las usa, buen momento para reforzar su uso.
- **Ident() function:** Propuesta de Bramus (Chrome) para generar nombres únicos en CSS. Cuando llegue, simplificará enormemente view transitions a escala.
