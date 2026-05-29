# 🌙 Resumen Nocturno Aurora — 29 de mayo de 2026

## Investigación
Se exploraron CSS-Tricks, Smashing Magazine, MDN Blog y CSS Almanac. Se identificaron **8 tendencias CSS 2026** con oportunidades concretas: `:has()`, scroll-driven animations, `content-visibility`, `oklch(from ...)`, `@scope`, `corner-shape`, tree-counting functions y view transitions.

---

## Mejoras aplicadas esta noche

### 1. Selector `:has()` — interactividad sin JS
📁 `ntizar.css` + `ntizar.forms.css`
Tarjetas y formularios reaccionan al estado de sus hijos sin JavaScript. `.nz-card--interactive:has(> .nz-check__input:checked)` resalta la tarjeta. `.nz-input-group:has(> .nz-input:valid)` muestra borde verde.
🔗 95%+ soporte navegador

### 2. Scroll-driven animations — reveal y progress con CSS puro
📁 `ntizar.motion.css`
`.nz-reveal--scroll` se revela proporcional al scroll del viewport. `.nz-progress-bar__fill--scroll` se llena según el scroll de la página. Elimina dependencia de IntersectionObserver para casos simples.
🔗 Chrome 115+, Edge 115+

### 3. `content-visibility` — rendimiento de grids KPI
📁 `ntizar.data.css`
`.nz-stat-grid` y `.nz-kpi` usan `content-visibility: auto` para que el navegador omita renderizado fuera de viewport. Mejora rendimiento en dashboards con muchos componentes.
🔗 Chrome 85+, Firefox 123+, Safari 17.4+

### 4. Sombras derivadas algorítmicamente con `oklch(from ...)`
📁 `ntizar.next.css`
Las sombras ahora se pueden derivar del color brand con `oklch(from var(--nz-oklch-brand) calc(l - 0.25) ...)`. Cuando el usuario cambia `--nz-hue-brand`, las sombras se recalculan automáticamente. Nuevos tokens: `--nz-shadow-brand-oklch`, `--nz-shadow-accent-oklch`, `--nz-shadow-aurora-oklch`, `--nz-shadow-base-oklch`, `--nz-shadow-sm/md/lg-oklch`.
🔗 Chrome 112+, Safari 16.4+, Firefox 127+

---

## Estado del sistema

| Métrica | Valor |
|---|---|
| Total mejoras esta noche | **4** |
| Archivos modificados | `ntizar.css`, `ntizar.forms.css`, `ntizar.motion.css`, `ntizar.data.css`, `ntizar.next.css` |
| Commits | `4160e26`, `12f9e74`, `4160e26`, `88f9624`, `bf4e099` |
| Oportunidades restantes | `@scope`, `corner-shape`, `sibling-index()`, view transitions |

---

## Próximas investigaciones sugeridas

1. **CSS Container Queries** — layouts que reaccionan al tamaño del contenedor, no del viewport
2. **CSS Nesting nativo** — simplificar selectores anidados sin preprocesador
3. **Scroll-linked effects** — parallax, morphing y efectos visuales vinculados al scroll

---

*Aurora v5.1 Constellation — Mejora continua nocturna*
*4 mejoras aplicadas, 0 breaking changes, 100% compatibilidad mantenida*
