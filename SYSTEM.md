# 🛰️ Ntizar Constellation — SYSTEM

> Cómo el sistema vive, crece y cambia sin perder identidad.
> Esta es la **constitución** del design system. Todo lo que añadas debe respetarla.

---

## 1. Principios

1. **Una sola identidad, infinitas formas.** Azules + naranjas son la firma. Cualquier "skin" es una variación dentro de esa familia, nunca una ruptura.
2. **CSS-only por defecto.** Las librerías (Chart.js, Leaflet, three.js…) son **opcionales**, jamás requisitos.
3. **Opt-in, no invasivo.** Todo vive bajo `.nz`. No estilamos `body`, `h1`, `button`, etc. globalmente.
4. **Tokens > valores literales.** Si un color, espacio o radio aparece dos veces, debe ser un token. Los hex literales solo se permiten dentro de `@layer ntizar.tokens` (definición de tokens) y en `ntizar.themes.css` (skins). En `@layer ntizar.components` y `ntizar.utilities`, solo `var(--nz-*)` o `color-mix(...)` sobre tokens.
5. **Modular en capas.** El core es estable. La funcionalidad nueva entra como **pack** independiente.
6. **Accesibilidad y motion-respect siempre.** Foco visible, contraste ≥ AA, `prefers-reduced-motion`.
7. **Si no se puede explicar en una línea, se rediseña.**

---

## 2. Arquitectura

```
ntizar.css            ← core (tokens, base, objects, components, utilities)
ntizar.themes.css     ← skins (aurora, sunset, midnight, ocean, citrus)
ntizar.data.css       ← KPIs, progress, meter, skeleton, avatar, timeline, tag
ntizar.charts.css     ← contenedores chart, sparkline, donut, leyenda
ntizar.maps.css       ← contenedor + overlay + pins + popups
ntizar.viz.css        ← stage 3D, aurora-bg, orb, glow-ring, scanline
ntizar.motion.css     ← keyframes + clases de animación, reveal, marquee
ntizar.forms.css      ← switch, custom check/radio, range, otp, file, stepper
ntizar.ui.css         ← modal, drawer, tabs, accordion, dropdown, toast, tooltip, command-bar
ntizar.patterns.css   ← app-shell, hero, pricing, features, faq, footer, auth-shell
```

### Capas CSS (`@layer`)

```
ntizar.tokens
ntizar.base
ntizar.objects
ntizar.components
ntizar.utilities
```

Reglas de pertenencia:

- **tokens** → solo `:root` / atributos de tema. Sin selectores.
- **base** → reset, tipografía base, scrollbar, focus.
- **objects** → estructuras sin estética: `container`, `section`, `stack`, `cluster`, `grid`, `surface`.
- **components** → elementos con identidad visual: `nz-btn`, `nz-card`, `nz-kpi`, `nz-chart`, etc. **Aquí entra todo lo nuevo de packs.**
- **utilities** → modificadores atómicos `.u-nz-*`.

> Las utilities ganan a components, los components ganan a objects. **No la rompas.**

---

## 3. Convenciones de naming

| Patrón | Uso | Ejemplo |
| --- | --- | --- |
| `.nz` | Activador de scope (root opt-in) | `<body class="nz">` |
| `.nz-thing` | Componente | `.nz-card`, `.nz-modal` |
| `.nz-thing__part` | Parte del componente | `.nz-card__header` |
| `.nz-thing--mod` | Modificador | `.nz-btn--primary`, `.nz-hero--split` |
| `.is-state` | Estado runtime | `.is-open`, `.is-active`, `.is-visible` |
| `.u-nz-*` | Utility atómica | `.u-nz-text-accent`, `.u-nz-glow` |
| `--nz-token` | Variable CSS | `--nz-color-brand`, `--nz-space-4` |
| `data-nz-theme` | Tema | `light` / `dark` |
| `data-nz-skin` | Skin | `aurora` / `sunset` / `midnight` / `ocean` / `citrus` |

**Prohibido:**

- Estilar selectores genéricos (`button`, `input`, `h1`) fuera de `ntizar.base`.
- `!important` fuera de `@layer ntizar.utilities` (salvo overrides de librerías externas como Leaflet, Chart.js o Three.js, claramente comentados con `/* override <librería>: motivo */`).
- Hex literales en `@layer ntizar.components` y `@layer ntizar.utilities` — usa `var(--nz-*)` o `color-mix()` sobre tokens. Los hex solo viven en `@layer ntizar.tokens` y en `ntizar.themes.css`.
- `position: absolute` sin `isolation: isolate` o un padre relativo.

---

## 4. Tokens

Todo color/espacio/radio/sombra/fuente/easing se expresa como `--nz-*`.

Mínimos a respetar al añadir un componente:

- Fondo / borde → `--nz-surface-*` y `--nz-border-*`
- Texto → `--nz-text-*`
- Marca / acento → `--nz-color-brand`, `--nz-color-accent`, `--nz-gradient-{brand,accent,aurora}`
- Estado → `--nz-status-{success,warning,danger,info}-*`
- Espacio → `--nz-space-1..8`
- Radio → `--nz-radius-{sm,md,lg,xl,pill}`
- Sombra → `--nz-shadow-{sm,md,lg}` + `--nz-shadow-{brand,accent}` para énfasis
- Motion → `--nz-duration-{fast,base,slow}` + `--nz-ease-standard`

Si necesitas un valor que no existe → primero proponlo como token, no lo escribas literal.

---

## 5. Cómo añadir un componente

1. **Decide:** ¿core o pack?
   - **Core (`ntizar.css`)** si es primitivo y reusable por casi todo (botón, card, input).
   - **Pack** si pertenece a un dominio (datos, mapas, 3D, formularios avanzados, UI overlays, patrones de página).
2. **Nombra** siguiendo BEM (`nz-thing__part--mod`).
3. **Escribe en `@layer ntizar.components`** con `:where(...)` para mantener especificidad baja.
4. **Solo tokens.** Si falta un token, añádelo a `ntizar.css` (capa `ntizar.tokens`) primero.
5. **Soporta tema y skins.** Prueba con `data-nz-theme="dark"` y al menos un skin distinto a `aurora`.
6. **Soporta motion-reduce.** Si animas, envuelve con `@media (prefers-reduced-motion: reduce)` y degrada.
7. **Documenta arriba del bloque** la API (clases, modificadores, slots).
8. **Añade demo** al `gallery.html`. Si no aparece en gallery, no existe.
9. **Actualiza `INDEX.md`** (tabla de archivos + matriz de decisión).

---

## 6. Cómo añadir un pack nuevo

1. Crea `ntizar.<dominio>.css`.
2. Cabecera con la API pública listada (clases y para qué).
3. Todo dentro de `@layer ntizar.components` (o `ntizar.utilities` si son atómicas).
4. Sin dependencias entre packs salvo el core. Si dos packs comparten algo → sube al core.
5. Añádelo al `<head>` de `gallery.html` y `demo.html`.
6. Añade fila en `INDEX.md`.
7. Anota la versión en `README.md`.

---

## 7. Cómo modificar el core sin romper

`ntizar.css` es el contrato. Cambios permitidos por tipo:

| Cambio | Permitido | Cómo |
| --- | --- | --- |
| Añadir token nuevo | ✅ | minor bump |
| Añadir componente nuevo | ✅ | minor bump |
| Añadir utility nueva | ✅ | minor bump |
| Cambiar valor de un token (sutil) | ⚠️ | minor + nota en CHANGELOG |
| Cambiar valor de un token (visible) | ❌ → patch only en bug fix | major bump si rompe identidad |
| Renombrar clase pública | ❌ | crear alias deprecado, eliminar en major |
| Eliminar clase pública | ❌ | deprecar 1 versión, eliminar en major |
| Cambiar HTML esperado de un componente | ❌ | major bump |

**Antes de mergear core:**

- `demo.html` se ve idéntico (visual diff manual).
- `gallery.html` se ve idéntico.
- `data-nz-skin` 1..N siguen viéndose coherentes.
- `data-nz-theme="dark"` sigue siendo legible.

---

## 8. Versionado

`MAJOR.MINOR.PATCH` (semver):

- **MAJOR** → cambios incompatibles (renombres, eliminaciones, identidad visual).
- **MINOR** → nuevos componentes, packs, utilities, tokens.
- **PATCH** → bugfixes, ajustes finos, accesibilidad, performance.

Cada bump:

1. Actualiza encabezado de `ntizar.css`.
2. Actualiza `README.md`.
3. Línea nueva en una sección `## Changelog` del README.

---

## 9. Política de deprecación

1. Marca la clase con un comentario `/* @deprecated v4.X — use .nz-foo instead */`.
2. Mantén la clase como **alias** (regla CSS que aplica los mismos estilos que la nueva).
3. Elimina solo en el siguiente **MAJOR**.

---

## 10. Performance

- Una sola fuente de verdad de tokens. No dupliques.
- Evita `*` selectors caros. Usa `:where()` para mantener cascada baja.
- `backdrop-filter` solo dentro de `@supports` (ya estandarizado en core).
- Animaciones sobre `transform`, `opacity`, `filter`. Nunca `top/left/width/height`.
- `will-change` solo si lo mediste y mejora.
- Imágenes/gradients pesados van en packs opt-in (`viz`).

---

## 11. Accesibilidad

- Foco visible siempre (`:focus-visible` con `--nz-ring`).
- Contraste mínimo AA en texto sobre cualquier surface.
- Click targets ≥ 40px en mobile.
- `prefers-reduced-motion: reduce` desactiva animaciones decorativas y reduce duraciones.
- Estados no comunicados solo por color (añade ícono o texto).
- Componentes interactivos esperan roles ARIA correctos (documentados en cabecera del pack).

---

## 12. Compatibilidad

- Browsers: Chrome/Edge/Safari/Firefox últimas 2 versiones.
- Características requeridas: CSS Custom Properties, `color-mix`, `@layer`, `:where`, `:is`, `clamp()`.
- Características con `@supports` opcional: `backdrop-filter`.

---

## 13. Checklist antes de subir un cambio

- [ ] ¿El cambio respeta los principios?
- [ ] ¿Usa solo tokens en `@layer ntizar.components` y `@layer ntizar.utilities` (los hex viven solo en `@layer ntizar.tokens` y `ntizar.themes.css`)?
- [ ] ¿Especificidad baja (`:where()`)?
- [ ] ¿Funciona en `light` y `dark`?
- [ ] ¿Funciona en al menos 2 skins?
- [ ] ¿Respeta `prefers-reduced-motion`?
- [ ] ¿Aparece en `gallery.html`?
- [ ] ¿Está en `INDEX.md`?
- [ ] ¿README + versión actualizados si toca?
- [ ] ¿Documentación de la API en la cabecera del bloque?

---

## 14. Cuándo dividir, cuándo unificar

- Un componente con > 4 modificadores muy distintos → **divide en variantes claras** o sube a pack propio.
- Dos componentes que comparten > 70% de CSS → **únelos** con modificadores.
- Un pack con < 80 líneas → considera fusionarlo en el core.
- Un pack con > 600 líneas → considera dividirlo en sub-packs por sub-dominio.

---

## 15. Roadmap (vivo)

- [ ] `ntizar.editor.css` (estilos para Monaco/CodeMirror)
- [ ] `ntizar.print.css` (PDF / paper)
- [ ] `ntizar.email.css` (transactional email safe-CSS)
- [ ] Tokens JSON exportables para Figma / Style Dictionary
- [ ] Snapshots visuales con Playwright sobre `gallery.html`

---

> **Cualquier cambio que rompa este documento, primero rompe este documento.**
