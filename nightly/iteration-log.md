# Historial de Mejoras Aurora

## [Pendiente] — Primera noche

- **Estado:** Sistema iniciado
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
