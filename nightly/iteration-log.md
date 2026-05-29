# Historial de Mejoras Aurora

## 2026-05-29 — Primera noche — ✅ Completada

- **Estado:** Las 3 mejoras se aplicaron con éxito
- **Mejoras aplicadas:** 3 (ver iteraciones #1, #2, #3 abajo)
- **Próxima investigación:** 2026-05-30 01:00 UTC

---

*Las mejoras se registran aquí con cada iteración nocturna.*

---

## 2026-05-29 — Iteración #2 (Mejora CSS #2)

- **Mejora:** Scroll-driven animations — reveal, fade y progress bar con CSS puro
- **Archivo:** `ntizar.motion.css`
- **Motivo:** Eliminar dependencia de IntersectionObserver para casos simples de reveal on scroll. Las CSS Scroll-Driven Animations (`animation-timeline: view()` y `scroll()`) permiten animaciones proporcionales al scroll sin JavaScript.
- **Nuevas clases:**
  - `.nz-reveal--scroll` — reveal proporcional al scroll del viewport (view-timeline)
  - `.nz-anim-scroll-fade` — fade-in proporcional a la visibilidad en viewport
  - `.nz-progress-bar__fill--scroll` — barra de progreso que se llena con el scroll (scroll-timeline)
- **Soporte:** Chrome 115+, Edge 115+ (fallback graceful en Firefox/Safari)
- **Referencia:** MDN Blog "A beginner-friendly guide to view transitions in CSS", CSS-Tricks Almanac
- **Estado:** ✅ aplicado
- **Commit:** `4160e26`

---

## 2026-05-29 — Iteración #1 (Mejora CSS #1)

- **Mejora:** Selector `:has()` — interactividad sin JS en tarjetas y formularios
- **Archivos:** `ntizar.css`, `ntizar.forms.css`
- **Motivo:** El selector `:has()` es considerado uno de los más potentes jamás añadidos a CSS (95%+ soporte navegador). Permite detectar estado de hijos sin JavaScript.
- **Nuevas reglas CSS:**
  - `.nz-card--interactive:has(> .nz-check__input:checked)` — tarjeta se resalta con borde y sombra brand cuando contiene checkbox marcado
  - `.nz-card--interactive:has(> .nz-radio__input:checked)` — misma mejora para radio
  - `.nz-input-group:has(> .nz-input:valid)` — grupo de input muestra borde verde cuando el campo es válido
  - `.nz-input-group:has(> .nz-input:invalid)` — grupo de input muestra borde rojo cuando el campo es inválido
- **Soporte:** Chrome 105+, Firefox 121+, Safari 15.4+ (~95%+ tráfico web)
- **Referencia:** CSS-Tricks Almanac, MDN Blog — oportunidad #1 de investigación
- **Estado:** ✅ aplicado
- **Comits:** `4160e26` (card), `12f9e74` (forms)

---

## 2026-05-29 — Iteración #3 (Mejora CSS #3)

- **Mejora:** `content-visibility` para rendimiento de grids KPI
- **Archivo:** `ntizar.data.css`
- **Motivo:** Mejorar rendimiento en dashboards con muchos stat-tiles/KPIs. El navegador omite renderizado de elementos fuera de viewport.
- **Nuevas reglas CSS:**
  - `.nz-stat-grid { content-visibility: auto; contain-intrinsic-size: 300px; }` — grid de stats
  - `.nz-kpi { contain-intrinsic-size: auto 180px; }` — KPI individual
- **Soporte:** Chrome 85+, Firefox 123+, Safari 17.4+
- **Referencia:** MDN Blog, CSS-Tricks — oportunidad #3 de investigación
- **Estado:** ✅ aplicado
- **Commit:** `88f9624`
