# 🌌 Aurora Nightly — Resumen Noche del 29 de mayo de 2026

## Investigación
Se exploraron CSS-Tricks, Smashing Magazine, MDN Blog y CSS Almanac. Se identificaron 8 tendencias con oportunidades concretas para Aurora.

## Mejoras aplicadas esta noche

### 1. Selector `:has()` — Interactividad sin JS ⭐
- **Archivos:** `ntizar.css`, `ntizar.forms.css`
- Tarjetas interactivas se resaltan con borde + sombra brand cuando contienen checkbox/radio marcado
- Formularios muestran validación visual en tiempo real (verde/rojo) sin JavaScript
- Soporte: 95%+ tráfico web (Chrome 105+, Firefox 121+, Safari 15.4+)

### 2. Scroll-Driven Animations 📜
- **Archivo:** `ntizar.motion.css`
- `.nz-reveal--scroll` — reveal proporcional al scroll sin IntersectionObserver
- `.nz-anim-scroll-fade` — fade-in proporcional a visibilidad en viewport
- `.nz-progress-bar__fill--scroll` — barra de progreso que se llena con el scroll
- Soporte: Chrome 115+, Edge 115+ (fallback graceful en Firefox/Safari)

### 3. Content-Visibility para rendimiento 🚀
- **Archivo:** `ntizar.data.css`
- `.nz-stat-grid` y `.nz-kpi` con `content-visibility: auto`
- El navegador omite renderizado de elementos fuera de viewport
- Mejora dramática en dashboards con 12+ elementos
- Soporte: Chrome 85+, Firefox 123+, Safari 17.4+

## Próximas oportunidades pendientes
- `@scope` — aislamiento de estilos nativo (modales, drawers, dropdowns)
- `corner-shape` — esquinas biseladas/squircle en `ntizar.next.css`
- Relative color `oklch(from ...)` — derivación automática de sombras y colores

## Stats de la noche
- **Commits:** 4
- **Archivos modificados:** 4 (`ntizar.css`, `ntizar.forms.css`, `ntizar.motion.css`, `ntizar.data.css`)
- **Líneas añadidas:** ~340
- **Líneas eliminadas:** 1
- **Breaking changes:** 0

---
*Aurora v5.1 "Constellation" — Bucle infinito de perfección*
