# Ntizar Design System

> Aurora v4.2 **Constellation**: un core CSS copiable + 9 packs opcionales para construir cualquier app web (dashboards, mapas, escenas 3D, landings, formularios, generative art) manteniendo identidad azul + naranja.

![Version](https://img.shields.io/badge/version-4.2.0_Constellation-2563eb)
![API](https://img.shields.io/badge/api-namespaced-0f172a)
![Modo](https://img.shields.io/badge/theme-light%20%7C%20dark-f97316)
![Skins](https://img.shields.io/badge/skins-5-7c3aed)
![CSS Only](https://img.shields.io/badge/css-only-16a34a)

`CSS-only` · `Opt-in` · `Namespaced` · `Light-first` · `Liquid glass` · `Modular packs`

## Arquitectura Constellation

```
ntizar.css            -> core (siempre)
ntizar.themes.css     -> 5 skins (aurora · sunset · midnight · ocean · citrus) + paleta de charts
ntizar.data.css       -> KPIs, dashboards, progress, meter, skeleton, avatar, timeline
ntizar.charts.css     -> contenedores para Chart.js/Apex/D3, sparkline + donut CSS-only, paletas
ntizar.maps.css       -> Leaflet/Mapbox/MapLibre con look Ntizar
ntizar.viz.css        -> stages para three.js, fondos aurora, orbs, glow ring
ntizar.motion.css     -> reveal, glow-pulse, aurora-pan, shimmer, marquee, typing, hover-lift
ntizar.forms.css      -> switch, custom check/radio, range, OTP, file drop, stepper, search
ntizar.ui.css         -> modal, drawer, tabs, accordion, dropdown, toast, tooltip, command-bar
ntizar.patterns.css   -> app-shell, hero, pricing, features, faq, footer, auth-shell, empty/error
```

Cada pack es independiente. Carga 1 o los 9.

## Documentación

- [INDEX.md](INDEX.md) → **mapa para agentes**: "necesito X → archivo Y, clases Z"
- [USAGE.md](USAGE.md) → **guía narrativa** con escenarios completos (landing, dashboard, mapas, 3D, auth, pricing…)
- [SYSTEM.md](SYSTEM.md) → **constitución del sistema**: cómo extender, versionar y mantener identidad
- [demo.html](demo.html) → tour del **core**
- [gallery.html](gallery.html) → showcase con **todo** (charts + map + 3D + forms + UI + patterns + skin switcher)

## Quick Start (todo activado)

```html
<link rel="stylesheet" href="ntizar.css">
<link rel="stylesheet" href="ntizar.themes.css">
<link rel="stylesheet" href="ntizar.data.css">
<link rel="stylesheet" href="ntizar.charts.css">
<link rel="stylesheet" href="ntizar.maps.css">
<link rel="stylesheet" href="ntizar.viz.css">
<link rel="stylesheet" href="ntizar.motion.css">
<link rel="stylesheet" href="ntizar.forms.css">
<link rel="stylesheet" href="ntizar.ui.css">
<link rel="stylesheet" href="ntizar.patterns.css">

<body class="nz" data-nz-theme="light" data-nz-skin="aurora">
  ...
</body>
```

## Learnings De Uso

### 1. El design system debe verse en la documentación

Si el sistema visual existe pero no se explica al principio del repo, para terceros es casi invisible.

Por eso en `design-system/`:

- `README.md` explica el contrato de uso
- `demo.html` enseña el sistema de forma canónica
- la documentación no es un extra, es parte del producto

### 2. Ntizar.css no entra entero en todos los proyectos

Aurora v4 está pensado para dos contextos distintos:

- **app nueva o simple**: sí puedes copiar `ntizar.css` entero y arrancar desde ahí
- **app con framework existente**: no metas el sistema completo por defecto; usa tokens o piezas concretas

Regla práctica:

- si el proyecto nace sobre Aurora, usa el core completo
- si el proyecto ya tiene Tailwind, Bootstrap u otro sistema, integra marca/tokens con cuidado
- usa glass solo en zonas donde aporte de verdad

### 3. Primero uso, luego catálogo

La secuencia correcta para entender Aurora es:

1. cuándo usarlo
2. cómo activarlo
3. qué capa elegir
4. qué API concreta existe

No al revés.

## Cuándo Usarlo

Úsalo si:

- arrancas una app nueva y quieres una base visual simple
- quieres una capa de UI pequeña sin meter Tailwind, Bootstrap o un build
- necesitas aislar un bloque visual dentro de una app mayor

No lo uses a ciegas si:

- el proyecto ya tiene un design system maduro
- solo necesitas tokens de marca y no componentes
- quieres un framework enorme de utilidades o JS interactivo

## Filosofía

Este repo ya no intenta ser a la vez framework global, escaparate visual y colección infinita de componentes.

Aurora v4 prioriza cuatro cosas:

1. Poder copiar `ntizar.css` a una app nueva y empezar rápido.
2. Evitar colisiones cuando quieras aislarlo en una parte concreta de una app.
3. Mantener una marca rica: azul, naranja, gradientes Aurora y liquid glass como lenguaje real.
4. Documentar bien cuándo usar cada pieza y cuándo no.

## Qué Cambió En v4

Aurora v4 rompe con v3 a propósito.

- La API pública ahora usa prefijo `nz-*`
- Los tokens ahora usan prefijo `--nz-*`
- El sistema deja de pelearse con apps ajenas porque la API visual real vive dentro de `.nz`
- `demo.html` pasa a ser la documentación canónica
- `index.html` ya no duplica la demo

## Contrato Público

### Root

Activa el sistema con `.nz`.

```html
<body class="nz">
  ...
</body>
```

Si no quieres aplicarlo a toda la página, puedes aislarlo en un wrapper:

```html
<div class="nz">
  ...solo esta zona usa Aurora...
</div>
```

### Theme

Usa `data-nz-theme` en el mismo root `.nz` para forzar tema:

```html
<body class="nz" data-nz-theme="dark">
  ...
</body>
```

Valores soportados:

- `light`
- `dark`

### Naming

- Objetos: `.nz-container`, `.nz-stack`, `.nz-grid`, `.nz-surface`
- Componentes: `.nz-btn`, `.nz-card`, `.nz-input`, `.nz-alert`
- Utilidades: `.u-nz-*`
- Tokens: `--nz-*`

## Instalación

```html
<link rel="stylesheet" href="ntizar.css">
```

No necesitas `npm install`.
No necesitas bundler.
No necesitas preprocesador.

## Quick Start

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="ntizar.css">
</head>
<body class="nz" data-nz-theme="light">
  <section class="nz-section">
    <div class="nz-container nz-stack nz-stack--lg">
      <div class="nz-cluster nz-cluster--between">
        <div>
          <h1>Mi app arranca con Aurora</h1>
          <p>Layout, componentes base y tokens en un solo archivo.</p>
        </div>

        <span class="nz-badge nz-badge--primary nz-badge--no-dot">Aurora v4</span>
      </div>

      <div class="nz-grid nz-grid--2">
        <article class="nz-card nz-card--interactive">
          <div class="nz-card__header">
            <div>
              <div class="nz-card__title">Panel principal</div>
              <div class="nz-card__meta">Usa `.nz-card` para bloques importantes.</div>
            </div>
          </div>

          <div class="nz-card__body">
            Puedes combinar cards, badges, alerts y fields sin traer un framework entero.
          </div>

          <div class="nz-card__footer">
            <button class="nz-btn nz-btn--ghost">Cancelar</button>
            <button class="nz-btn nz-btn--primary">Continuar</button>
          </div>
        </article>

        <div class="nz-surface nz-stack">
          <div class="nz-field">
            <label class="nz-label" for="email">Email</label>
            <input class="nz-input" id="email" type="email" placeholder="hola@ntizar.com">
            <div class="nz-help">Field base para formularios simples.</div>
          </div>

          <div class="nz-alert">
            <div class="nz-alert__title">Todo listo</div>
            <div class="nz-alert__body">Ya tienes una base consistente para una app nueva.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</body>
</html>
```

## Qué Incluye v4

### Foundations

- tokens de color, tipografía, spacing, radios y sombras
- gradientes de marca y glow Aurora
- modo claro y oscuro
- base tipográfica scoped a `.nz`
- objects, componentes y utilities activos solo dentro de `.nz`
- focus visible accesible

### Objects

- `.nz-container`
- `.nz-section`
- `.nz-stack`
- `.nz-cluster`
- `.nz-grid`
- `.nz-surface`
- `.nz-surface--soft`, `.nz-surface--raised`
- `.nz-surface--glass-soft`, `.nz-surface--glass`, `.nz-surface--glass-strong`
- `.nz-surface--glass-brand`, `.nz-surface--glass-accent`
- `.nz-divider`
- `.nz-prose`

### Components

- `.nz-btn`
- `.nz-btn--primary`, `.nz-btn--accent`, `.nz-btn--brand-mix`
- `.nz-btn--glass`, `.nz-btn--glass-brand`, `.nz-btn--glass-accent`
- `.nz-btn--secondary`, `.nz-btn--ghost`, `.nz-btn--danger`
- `.nz-badge`
- `.nz-badge--neutral`, `.nz-badge--primary`, `.nz-badge--brand` (alias de primary), `.nz-badge--accent`
- `.nz-badge--glass`, `.nz-badge--glass-brand`, `.nz-badge--glass-accent`
- `.nz-badge--success`, `.nz-badge--warning`, `.nz-badge--danger`
- `.nz-card`
- `.nz-card--soft`, `.nz-card--interactive`
- `.nz-card--glass-soft`, `.nz-card--glass`, `.nz-card--glass-strong`
- `.nz-card--glass-brand`, `.nz-card--glass-accent`
- `.nz-field`, `.nz-label` (alias `.nz-field__label`), `.nz-input`, `.nz-select`, `.nz-textarea`, `.nz-help`
- `.nz-alert`
- `.nz-callout`, `.nz-callout--tip`, `.nz-callout--info` (alias de tip), `.nz-callout--warn`, `.nz-callout--danger`
- `.nz-codeblock`
- `.nz-table`
- `.nz-text-h1`, `.nz-text-h2`, `.nz-text-h3`, `.nz-text-h4`, `.nz-text-sm`, `.nz-text-muted`

### Utilities

- `.u-nz-text-muted`
- `.u-nz-text-strong`
- `.u-nz-text-brand`
- `.u-nz-text-gradient`
- `.u-nz-text-gradient-brand`
- `.u-nz-full-width`
- `.u-nz-sr-only`

## Cuándo Usarlo

Úsalo si:

- arrancas una app nueva y quieres una base visual simple
- quieres una capa de UI pequeña sin meter Tailwind, Bootstrap o un build
- necesitas aislar un bloque visual dentro de una app mayor

No lo uses a ciegas si:

- el proyecto ya tiene un design system maduro
- solo necesitas tokens de marca y no componentes
- quieres un framework enorme de utilidades o JS interactivo

## Reglas De Uso

### Botones

- `.nz-btn--primary`: una accion principal por bloque o formulario
- `.nz-btn--accent`: CTA destacado o flujo comercial
- `.nz-btn--brand-mix`: CTA con toda la firma Aurora cuando la marca debe verse mas
- `.nz-btn--glass`: accion secundaria sobre superficies glass
- `.nz-btn--glass-brand`: accion glass con identidad azul Aurora
- `.nz-btn--glass-accent`: accion glass con tono calido
- `.nz-btn--secondary`: accion normal con mas peso que ghost
- `.nz-btn--ghost`: cancelar, volver, acciones de baja prioridad
- `.nz-btn--danger`: destruccion o acciones irreversibles

### Surfaces

- `.nz-surface`: panel neutro y estable
- `.nz-surface--soft`: agrupaciones secundarias
- `.nz-surface--raised`: panel protagonista en pantalla de app
- `.nz-surface--glass-soft`: glass sutil para overlays ligeros
- `.nz-surface--glass`: glass estandar para premium UI
- `.nz-surface--glass-strong`: glass mas intenso para foco visual
- `.nz-surface--glass-brand`: glass con ADN Aurora
- `.nz-surface--glass-accent`: glass con tono naranja/acento

### Cards

- `.nz-card`: contenido estructurado reusable
- `.nz-card--interactive`: cards clicables o listados visuales
- `.nz-card--glass-soft`: glass ligero para cards secundarias
- `.nz-card--glass`: card glass estandar
- `.nz-card--glass-strong`: glass intenso para hero o foco
- `.nz-card--glass-brand`: showcase, dashboards o highlights con marca
- `.nz-card--glass-accent`: highlights calidos o comerciales

### Alerts

- `default`: informacion general
- `--success`: confirmacion
- `--warning`: riesgo moderado o atencion
- `--danger`: error o bloqueo real

## Personalización

Sobrescribe tokens despues de importar `ntizar.css`. Si quieres aislar una sola zona, puedes hacerlo en el propio wrapper `.nz`.

```css
/* app.css */
.mi-shell.nz {
  --nz-color-brand: #6d28d9;
  --nz-color-brand-strong: #5b21b6;
  --nz-color-accent: #ec4899;
  --nz-color-accent-strong: #db2777;
  --nz-gradient-aurora: linear-gradient(135deg, #2563eb 0%, #7c3aed 48%, #ec4899 100%);
  --nz-radius-lg: 1rem;
  --nz-font-sans: "Poppins", system-ui, sans-serif;
}
```

## Demo

La referencia completa de uso vive en:

- `demo.html`

Ahí se documenta:

- qué hay en el core
- cuándo usar cada objeto o componente
- cómo tematizar
- cómo combinar las piezas en una pantalla real

## Estado Del Proyecto

Aurora v4 es un reinicio deliberado.

Incluye menos caos que v3, pero vuelve a ser visualmente mas Ntizar.
Los componentes avanzados volverán solo si siguen esta regla: aportar valor sin romper la sencillez del core.

## Changelog

### v4.2.0 — Constitutional alignment (audit pass)

**Tokens nuevos** (en `@layer ntizar.tokens`, light + dark):

- `--nz-font-display` — alias de `--nz-font-sans`. Usado por patterns para titulares.
- `--nz-text-soft` — texto secundario más sutil que `--nz-text-muted`.
- `--nz-text-on-brand` — blanco fijo en light y dark, para texto sobre gradientes brand/accent (que son oscuros en ambos temas). Sustituye los `#fff` literales que vivían en componentes.
- `--nz-color-red-500` — completa la escala roja referenciada por algunos componentes.

**Componentes nuevos** (en `@layer ntizar.components`):

- `.nz-text-h1`, `.nz-text-h2`, `.nz-text-h3`, `.nz-text-h4` — clases tipográficas utilitarias para titulares fuera de `<h*>`.
- `.nz-text-sm`, `.nz-text-muted` — apoyo tipográfico breve.
- `.nz-stack--md` — gap intermedio entre `--sm` y `--lg`.

**Aliases (deprecación suave, sin cambio funcional):**

- `.nz-field__label` → alias de `.nz-label`.
- `.nz-badge--brand` → alias de `.nz-badge--primary`.
- `.nz-callout--info` → alias de `.nz-callout--tip`.

**Saneo de hex literales en componentes:**

- 0 hex literales fuera de `@layer ntizar.tokens` y `ntizar.themes.css`.
- Sustituciones masivas `color: #fff` y `background: #fff` por `var(--nz-text-on-brand)` en `ui`, `forms`, `viz`, `data`, `maps`, `patterns`.
- `.nz-codeblock` reescrito sobre tokens `slate`/`blue` + `color-mix()`.

**`!important` documentados:**

- Los `!important` que sobreviven en `forms.css` (input-group reset), `charts.css` y `viz.css` (canvas overrides de Three.js / Chart.js) y `motion.css` (`prefers-reduced-motion`) llevan ya comentario `/* override … */`. Cumplen la cláusula 3 de `SYSTEM.md`.

**Constitución (`SYSTEM.md`):**

- Aclarado que la prohibición de hex literales aplica a `@layer ntizar.components` y `ntizar.utilities`. Tokens y skins (`ntizar.themes.css`) sí pueden definir hex.
- Aclarado que `!important` está prohibido fuera de `@layer ntizar.utilities` salvo overrides de librerías externas comentados.

**Nada que rompa.** Sin renames, sin eliminaciones, sin cambios de identidad visual. Bump `MINOR` según la tabla de la sección 7 de `SYSTEM.md`.

### v4.1.0 — Constellation

- 9 packs opcionales (themes, data, charts, maps, viz, motion, forms, ui, patterns) sobre el core.
- 5 skins (`aurora`, `sunset`, `midnight`, `ocean`, `citrus`) bajo `data-nz-skin`.
- API namespaced `nz-*` / `--nz-*`, todo bajo `.nz`.
