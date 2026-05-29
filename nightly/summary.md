# 🌙 Resumen Nocturno Aurora — 29 de mayo de 2026

## Investigación
Se exploraron CSS-Tricks, Smashing Magazine, MDN Blog y el CSS Almanac. Se identificaron **8 tendencias principales** con oportunidades concretas de mejora para Aurora:

`:has()`, `:is()`/`:where()`, scroll-driven animations, `@scope`, relative color syntax, `corner-shape`, tree-counting functions (`sibling-index`), y `content-visibility`/view transitions.

---

## Mejoras aplicadas

### 1️⃣ Selector `:has()` — Interactividad sin JS
**Archivos:** `ntizar.css`, `ntizar.forms.css`
- `.nz-card--interactive:has(> .nz-check:checked)` — tarjeta se resalta con borde brand
- `.nz-card--interactive:has(> .nz-radio:checked)` — misma mejora para radio
- `.nz-input-group:has(> .nz-input:valid)` — borde verde en campos válidos
- `.nz-input-group:has(> .nz-input:invalid)` — borde rojo en campos inválidos
**Soporte:** Chrome 105+, Firefox 121+, Safari 15.4+ (~95% tráfico)
**Comits:** `2529ad3`, `12f9e74`

### 2️⃣ Scroll-driven Animations — Reveal sin IntersectionObserver
**Archivo:** `ntizar.motion.css`
- `.nz-reveal--scroll` — reveal proporcional al scroll del viewport (view-timeline)
- `.nz-anim-scroll-fade` — fade-in proporcional a la visibilidad
- `.nz-progress-bar__fill--scroll` — barra de progreso que se llena con el scroll
**Soporte:** Chrome 115+, Edge 115+ (fallback graceful en Firefox/Safari)
**Commit:** `4160e26`

### 3️⃣ `content-visibility` — Rendimiento de grids
**Archivos:** `ntizar.data.css`, `ntizar.patterns.css`
- `.nz-stat-grid { content-visibility: auto; contain-intrinsic-size: 300px; }`
- `.nz-kpi { contain-intrinsic-size: auto 180px; }`
- `.nz-feature { contain-intrinsic-size: auto 280px; }`
- `.nz-pricing-card { contain-intrinsic-size: auto 400px; }`
**Soporte:** Chrome 85+, Firefox 123+, Safari 17.4+
**Comits:** `88f9624`, `d85c857`

---

## Estado del sistema

- **Total mejoras esta noche:** 3 (4 commits)
- **Archivos modificados:** `ntizar.css`, `ntizar.forms.css`, `ntizar.motion.css`, `ntizar.data.css`, `ntizar.patterns.css`
- **Líneas añadidas:** ~160+
- **Breaking changes:** 0 (todos los cambios son aditivos)

## Gaps pendientes (próximas noches)

| Prioridad | Tendencia | Pack objetivo | Soporte |
|-----------|-----------|---------------|---------|
| 🔴 Alta | `@scope` — aislamiento de estilos | `ntizar.ui.css` | Chrome 116+, Safari 17.2+ |
| 🟡 Media | Relative color `oklch(from ...)` — derivación automática | `ntizar.next.css` | Chrome 112+, Safari 16.4+ |
| 🟢 Baja | `corner-shape` — esquinas más allá de border-radius | `ntizar.next.css` | Experimental |

---

*Aurora v5.1 Constellation — Mejora continua nocturna*
*Próxima investigación: 30 de mayo de 2026, 01:00 UTC*
