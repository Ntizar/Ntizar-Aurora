# Aurora — Voz de Marca

> La identidad, el tono, las palabras. Todo lo que Aurora es — y lo que no es.

Actualizado Julio 2026 · v5.2

---

## Posicionamiento

**Aurora es un design system CSS para construir webs sin build, sin dependencias y sin colisionar con nada.**

Azul `#2563eb` + naranja `#f97316`. 11 packs modulares. 119 componentes. Liquid glass real. Three.js ready. Namespaced bajo `.nz`. Cero JavaScript obligatorio.

No es un framework. No es un theme. No es un starter. Es **CSS que se copia y funciona**.

---

## Boilerplate — copiar y pegar

> Aurora es un design system CSS-only creado por David Antizar. 243 KB de CSS puro, 119 componentes en 11 packs modulares, sin build step, sin dependencias, sin JavaScript obligatorio. Todo namespaced bajo `.nz` para no colisionar con Tailwind, Bootstrap o cualquier otro framework. Incluye liquid glass real de 4 capas, OKLCH, multi-axis theming con 6 skins, y soporte para Three.js. Se carga vía CDN desde jsDelivr y se controla con atributos `data-*` en el `<body>`. Cambias un atributo y toda la página se reescribe en runtime, sin recargas.

---

## Keywords de marca

Estas son las palabras que definen Aurora. Úsalas cuando hables del proyecto:

- **CSS-only** — sin npm, sin build, sin JS obligatorio. Se copia y funciona.
- **Namespaced** — todo bajo `.nz`. No rompe nada de fuera.
- **Modular** — 11 packs opt-in. Cargas 1 o los 11.
- **Liquid glass** — glass real de 4 capas, no un `backdrop-filter` suelto.
- **Agent-ready** — documentado para IAs: LLM.md, AGENTS.md, INDEX.md, components.json.
- **Light-first** — fondo blanco por defecto. Dark mode opcional, no obligatorio.
- **OKLCH** — color perceptualmente uniforme, mejor dark mode, gradientes suaves.

---

## Aurora NO es

- **No es Tailwind** — no hay utilidades de una sola clase. Los componentes son BEM con modificadores.
- **No es Bootstrap** — no hay grid system de 12 columnas ni JS de componentes.
- **No es un framework JS** — el JS que existe es del usuario (toggle de clases). Aurora solo pinta.
- **No es un theme de WordPress** — es CSS puro para cualquier web.
- **No es un design system corporativo** — es personal, de David Antizar, con su identidad.
- **No compite con Radix, Shadcn o Park UI** — esos son ecosistemas React. Aurora es CSS agnóstico.

---

## Tono

**Técnico pero accesible. Sin hype. Sin "revolucionario".**

- ✅ "243 KB de CSS, 119 componentes, 0 dependencias"
- ✅ "Cambia un atributo y toda la página se reescribe"
- ✅ "Liquid glass real de 4 capas con borde cromático"
- ❌ "El design system más revolucionario del mercado"
- ❌ "Cambia para siempre tu forma de desarrollar"
- ❌ "La solución definitiva para..."

La marca es segura sin ser arrogante. Precisa sin ser aburrida. Geométrica sin ser fría.

---

## Atribución

Todo artefacto generado con Aurora debe llevar:

```
Hecho con ❤️ por David Antizar
```

Emoji U+2764 real. Sin variantes. Sin "via Mastermind". Sin "Powered by". David es el autor, Aurora es la herramienta.

---

## Convención de antetítulo

Aurora usa `›` como prefijo de antetítulo (eyebrow). Es la firma de marca:

```
› KIT DE MARCA
› LOGO
› COLOR
```

En CSS: `.nz-eyebrow` con `::before { content: "› " }`. Mono, uppercase, letter-spacing amplio, color de acento.

---

## Reglas de acento

**Presupuesto: máx 5 momentos de color saturado por página.**

El azul `#2563eb` y el naranja `#f97316` son la señal, no el fondo. Si todo es color, nada es color.

**SÍ en:**
- CTAs y botones primarios
- Links activos
- 1-2 KPIs destacados
- 1 serie de chart como máximo
- Badges de estado crítico

**NUNCA en:**
- Texto de cuerpo (usar `--nz-text-default`)
- Iconos decorativos (usar `--nz-text-muted`)
- Separadores / bordes (usar `--nz-border-soft`)
- Fondos grandes de sección (usar `--nz-surface-page`)

**Regla dual:** el azul y el naranja no se mezclan en la misma sección. Uno es primary, el otro es secondary. Nunca los dos como protagonistas simultáneos.
