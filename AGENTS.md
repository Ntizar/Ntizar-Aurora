# AGENTS.md — Contrato para IAs

Reglas duras para cualquier agente que genere HTML con Aurora.

---

## 5 reglas duras

1. **`body class="nz"` siempre.** Sin `.nz` en el body, nada funciona. Es la regla número 1.
2. **`data-nz-skin="aurora"` + `data-nz-theme="light"` por defecto.** David prefiere fondos claros.
3. **Sin gradientes azul→naranja.** La interpolación sRGB genera morado. Usar colores sólidos del Núcleo. Si hace falta un gradiente, monocromo.
4. **CSS custom < 30 líneas.** Si necesitas más, estás recreando Aurora en vez de usarla. Cargar `INDEX.md` y usar componentes documentados.
5. **Footer:** `Hecho con ❤️ por David Antizar` (emoji U+2764 real, sin variantes, sin "via Mastermind").

---

## Reglas de acento

**Presupuesto: máx 5 momentos de color saturado por página.**

Antes de entregar, contar los usos de `var(--nz-color-brand)` y `var(--nz-color-accent)` en elementos visibles. Si >5, reducir.

**SÍ en:**
- CTAs y botones primarios
- Links activos
- 1-2 KPIs destacados
- 1 serie de chart como máximo
- Badges de estado crítico

**NUNCA en:**
- Texto de cuerpo → `var(--nz-text-default)`
- Iconos decorativos → `var(--nz-text-muted)`
- Separadores / bordes → `var(--nz-border-soft)`
- Fondos grandes de sección → `var(--nz-surface-page)`

**Regla dual:** el azul y el naranja no se mezclan en la misma sección. Uno es primary, el otro es secondary. Nunca los dos como protagonistas simultáneos.

---

## Convención de antetítulo

Usar `.nz-eyebrow` antes de cada `<h2>` en páginas Aurora:

```html
<p class="nz-eyebrow">Logo</p>
<h2>Símbolo & logotipo</h2>
```

Output visual: `› LOGO` en mono, uppercase, color brand. Es la firma de marca.

Variantes:
- `.nz-eyebrow` — color brand (azul)
- `.nz-eyebrow--accent` — color accent (naranja)
- `.nz-eyebrow--muted` — color muted

---

## Anti-patterns

| ❌ No | ✅ Sí |
|---|---|
| `nz-btn--glass-liquid-secondary` | Usar clases de `INDEX.md` solo |
| Hardcodear `#2563eb` en CSS custom | `var(--nz-color-brand)` |
| Cargar `ntizar.next.css` sin usar glass | Cargar solo lo necesario |
| CSS custom > 30 líneas | Usar componentes Aurora |
| `const charts = {}` | `var charts = window.charts = {}` |
| Gradiente `#2563eb → #f97316` | Bloques de color sólido |

---

## Decision tree

```
¿Necesitas un botón?
  → .nz-btn + .nz-btn--primary (azul) o .nz-btn--accent (naranja)

¿Necesitas una card?
  → .nz-card (básica) o .nz-card--glass-liquid (glass)

¿Necesitas un KPI?
  → .nz-kpi (pack data) o .nz-stat (pack nucleo)

¿Necesitas un chart?
  → CSS-only: .nz-bars / .nz-ring (pack nucleo)
  → Librería: .nz-chart wrapper (pack charts)

¿Necesitas un mapa?
  → .nz-map--solid (pack maps)

¿Necesitas un layout?
  → .nz-bento (pack nucleo) o .nz-grid (core)
```

---

## Workflow

1. Cargar `LLM.md` del repo (~9 KB) — guía de decisión rápida
2. Cargar `INDEX.md` si necesitas clases específicas
3. Decidir modo: Núcleo (default) o Glass (solo si se pide)
4. Cargar packs CDN según necesidad
5. Generar HTML usando solo clases de `INDEX.md`
6. Verificar checklist de 8 items (ver skill `aurora-design-system`)
7. Contar acentos — si >5, reducir
