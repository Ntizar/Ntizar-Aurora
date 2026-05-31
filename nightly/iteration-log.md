# Iteración Aurora — 2026-05-29

## Historial de mejoras

### Job #1 — Investigación (29/05/2026 01:00 UTC) ✅
- **Estado:** Completado
- **Archivo:** `nightly/research-log.md`
- **Oportunidades identificadas:** 12
- **Priorizadas:** 6

### Job #2 — Mejora CSS #1 (30/05/2026 02:00 UTC) ✅
- **Estado:** Completado
- **Mejora:** Tokens CSS personalizables para `.nz-reveal--scroll`
- **Archivo:** `ntizar.motion.css` + `INDEX.md`
- **Detalles:** Reemplazar valores hardcodeados (1.25rem, 1.5rem, 0.94) por variables CSS con fallbacks: `--nz-reveal-offset`, `--nz-reveal-offset-inline`, `--nz-reveal-scale-start`
- **Motivo:** Los valores hardcodeados impedían personalización sin CSS override. Los tokens siguen la convención de Aurora y permiten ajuste fino inline.
- **Commit:** `c54474d`
- **Referencia:** Investigación scroll-driven animations (tendencia CSS 2026, CSS-Tricks)

### Job #3 — Mejora CSS #2 (30/05/2026 03:00 UTC) ✅
- **Estado:** Completado
- **Mejora:** Drawer nativo con `:open` pseudo-class — soporte `<dialog>` sin JS
- **Archivo:** `ntizar.ui.css` + `INDEX.md`
- **Detalles:** Añadir `.nz :where(dialog.nz-drawer):open { transform: translateX(0); }` para que el drawer funcione con `<dialog class="nz-drawer">` nativo. Mantener fallback `.is-open` para div-based. Documentar patrón en INDEX.md.
- **Motivo:** La pseudo-clase `:open` es Baseline en todos los navegadores (Safari 26.5+). Permite usar `<dialog>` nativo para drawers sin necesidad de JS para toggle de clases. Mismo patrón que `.nz-modal` ya soporta.
- **Commit:** `241788e`
- **Referencia:** Investigación `:open` pseudo-class (CSS-Tricks "What's !important #11", May 2026)

### Job #4 — Mejora CSS #3 + Reaprendizaje (30/05/2026 04:00 UTC)
|- **Estado:** Pendiente

---

### Job #1 — Investigación (31/05/2026 01:00 UTC) ✅
|- **Estado:** Completado
|- **Archivo:** `nightly/research-log.md`
|- **Oportunidades identificadas:** 16
|- **Priorizadas:** 8
|- **Fuentes:** CSS-Tricks RSS (15 artículos, 8-29 mayo 2026), MDN Blog RSS, caniuse.com (15+ features)
|- **Novedades respecto a investigación anterior (29/05):**
  - `::checkmark` pseudo-element — nuevo en CSS, no cubierto el 29/05
  - `sibling-index()` / `sibling-count()` — funciones CSS casi-Baseline, no cubiertas
  - `border-shape` + `shape()` — complementa `corner-shape` investigado el 29/05
  - `ident()` + `sibling-index()` para view transitions — extensión de CDVT del 29/05
  - `text-wrap: balance` — mejora tipográfica moderna
  - `field-sizing: content` — inputs auto-ajustables
  - `accent-color` — personalización nativa de controles
  - `@scope` — encapsulamiento nativo de estilos
  - `mask-layer` — enmascaramiento multi-capa
  - `marker` arrays — estilos de lista avanzados
  - `text-spacing-trim` — control de espaciado tipográfico
  - `writing-mode` — tipografía vertical
  - `scrollbar-gutter: stable` — reserva de espacio para scrollbar
  - CSS Nesting (`&`) — 88.57% soporte, escritura moderna
|- **Análisis de gaps:** Se comparó el estado actual de Aurora (7 archivos CSS) con las 16 tendencias encontradas. Se identificaron 12 features no implementadas y 4 ya presentes.
