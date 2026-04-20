# 📘 Ntizar Constellation — USAGE

> Guía práctica de uso. Si `INDEX.md` es el mapa para agentes, esto es el manual para humanos (y agentes que prefieran prosa).

---

## 0. TL;DR

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Mi App</title>

    <!-- 1. Core (siempre) -->
    <link rel="stylesheet" href="ntizar.css" />

    <!-- 2. Skins (opcional, recomendado) -->
    <link rel="stylesheet" href="ntizar.themes.css" />

    <!-- 3. Packs según necesites -->
    <link rel="stylesheet" href="ntizar.data.css" />
    <link rel="stylesheet" href="ntizar.charts.css" />
    <link rel="stylesheet" href="ntizar.maps.css" />
    <link rel="stylesheet" href="ntizar.viz.css" />
    <link rel="stylesheet" href="ntizar.motion.css" />
    <link rel="stylesheet" href="ntizar.forms.css" />
    <link rel="stylesheet" href="ntizar.ui.css" />
    <link rel="stylesheet" href="ntizar.patterns.css" />
  </head>
  <body class="nz" data-nz-theme="light" data-nz-skin="aurora">
    <!-- usa cualquier clase .nz-* -->
  </body>
</html>
```

> **Importante:** la clase `nz` debe estar en un ancestro (típicamente `<body>`). Sin ella, **nada** del sistema se aplica.

---

## 1. Tema y skin

| Atributo | Valores | Dónde |
| --- | --- | --- |
| `data-nz-theme` | `light` (default) / `dark` | en `<html>` o `<body>` |
| `data-nz-skin`  | `aurora` (default) / `sunset` / `midnight` / `ocean` / `citrus` | en `<body>` o cualquier ancestro de la zona afectada |

```js
document.body.dataset.nzTheme = 'dark';
document.body.dataset.nzSkin  = 'sunset';
```

Puedes mezclar varios skins en una misma página anidándolos:

```html
<body class="nz" data-nz-skin="aurora">
  <main>… aurora …</main>
  <aside data-nz-skin="ocean">… ocean local …</aside>
</body>
```

---

## 2. Recetas por escenario

### 2.1 Landing page

```html
<body class="nz" data-nz-skin="aurora">
  <header class="nz-section">
    <nav class="nz-cluster" style="justify-content:space-between">
      <strong>Brand</strong>
      <div class="nz-cluster">
        <a class="nz-btn nz-btn--ghost" href="#">Producto</a>
        <a class="nz-btn nz-btn--secondary" href="#">Login</a>
        <a class="nz-btn nz-btn--primary" href="#">Empezar</a>
      </div>
    </nav>
  </header>

  <section class="nz-hero nz-hero--centered">
    <div class="nz-aurora-bg" aria-hidden="true"></div>
    <div class="nz-hero__inner">
      <span class="nz-hero__eyebrow">v4.2 Constellation</span>
      <h1 class="nz-hero__title">El sistema para crear <span class="nz-accent">cualquier cosa</span> con identidad propia.</h1>
      <p class="nz-hero__sub">Charts, mapas, 3D, dashboards, landings. Misma firma. Cero fricción.</p>
      <div class="nz-hero__cta">
        <a class="nz-btn nz-btn--primary nz-btn--lg" href="#">Get started</a>
        <a class="nz-btn nz-btn--ghost nz-btn--lg" href="#">Ver demo</a>
      </div>
    </div>
  </section>

  <section class="nz-section">
    <div class="nz-feature-grid">
      <div class="nz-feature">
        <div class="nz-feature__icon">⚡</div>
        <h3 class="nz-feature__title">Rápido</h3>
        <p class="nz-feature__body">Sin build. Sin frameworks obligatorios.</p>
      </div>
      <div class="nz-feature nz-feature--accent">
        <div class="nz-feature__icon">🎨</div>
        <h3 class="nz-feature__title">5 skins</h3>
        <p class="nz-feature__body">Misma identidad, distinta personalidad.</p>
      </div>
      <div class="nz-feature">
        <div class="nz-feature__icon">📊</div>
        <h3 class="nz-feature__title">Charts</h3>
        <p class="nz-feature__body">Chart.js, Apex o D3 con paleta sincronizada.</p>
      </div>
    </div>
  </section>

  <footer class="nz-footer">
    <div class="nz-footer__inner">
      <div class="nz-footer__cols">
        <div class="nz-footer__col"><h4>Producto</h4><a href="#">Features</a><a href="#">Precios</a></div>
        <div class="nz-footer__col"><h4>Recursos</h4><a href="#">Docs</a><a href="#">Gallery</a></div>
        <div class="nz-footer__col"><h4>Empresa</h4><a href="#">Sobre</a><a href="#">Contacto</a></div>
      </div>
      <div class="nz-footer__bottom"><span>© Ntizar</span><span>Hecho con Constellation</span></div>
    </div>
  </footer>
</body>
```

### 2.2 Dashboard

```html
<body class="nz" data-nz-skin="aurora">
  <div class="nz-app-shell">
    <aside class="nz-app-shell__sidebar">
      <strong>Ntizar</strong>
      <nav class="nz-stack">
        <span class="nz-nav-section">General</span>
        <a class="nz-nav-item is-active" href="#">📊 Overview</a>
        <a class="nz-nav-item" href="#">🧭 Mapas</a>
        <a class="nz-nav-item" href="#">🧪 Experimentos</a>
      </nav>
    </aside>

    <header class="nz-app-shell__header">
      <h1 class="nz-text-h4">Overview</h1>
      <div class="nz-cluster">
        <input class="nz-input nz-search" type="search" placeholder="Buscar…" />
        <button class="nz-btn nz-btn--primary">Nuevo</button>
      </div>
    </header>

    <main class="nz-app-shell__main">
      <div class="nz-stat-grid nz-stat-grid--4">
        <div class="nz-kpi"><span class="nz-kpi__label">Usuarios</span><strong class="nz-kpi__value">12.4k</strong><span class="nz-kpi__delta">+8.1%</span></div>
        <div class="nz-kpi nz-kpi--accent"><span class="nz-kpi__label">Ingresos</span><strong class="nz-kpi__value">€48k</strong><span class="nz-kpi__delta">+3.2%</span></div>
        <div class="nz-kpi"><span class="nz-kpi__label">Sesiones</span><strong class="nz-kpi__value">94k</strong><span class="nz-kpi__delta nz-kpi__delta--down">−1.4%</span></div>
        <div class="nz-kpi nz-kpi--aurora"><span class="nz-kpi__label">NPS</span><strong class="nz-kpi__value">72</strong><span class="nz-kpi__delta">+4</span></div>
      </div>

      <div class="nz-grid nz-grid--2">
        <div class="nz-chart nz-chart--lg nz-chart--glass">
          <div class="nz-chart__head"><strong class="nz-chart__title">Tráfico</strong></div>
          <canvas id="lineChart"></canvas>
        </div>
        <div class="nz-chart nz-chart--lg nz-chart--glass">
          <div class="nz-chart__head"><strong class="nz-chart__title">Distribución</strong></div>
          <canvas id="donutChart"></canvas>
        </div>
      </div>
    </main>
  </div>
</body>
```

Para sincronizar Chart.js con la paleta del skin:

```js
const root = getComputedStyle(document.body);
const palette = [1,2,3,4,5,6,7,8].map(i => root.getPropertyValue(`--nz-chart-${i}`).trim());
```

### 2.3 App de mapas

```html
<div class="nz-map nz-map--hero">
  <div id="map"></div>
  <div class="nz-map__overlay nz-map__overlay--top-left">
    <div class="nz-card">
      <strong>Madrid</strong>
      <p class="nz-text-muted">Centro operativo</p>
    </div>
  </div>
  <div class="nz-map__legend nz-map__overlay--bottom-right">
    <span><i class="nz-map__pin"></i> Activos</span>
    <span><i class="nz-map__pin nz-map__pin--accent"></i> Beta</span>
  </div>
</div>

<script>
  const map = L.map('map').setView([40.4168, -3.7038], 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
</script>
```

### 2.4 Portfolio 3D

```html
<section class="nz-stage nz-stage--hero">
  <div class="nz-aurora-bg" aria-hidden="true"></div>
  <canvas class="nz-stage__canvas" id="three"></canvas>
  <div class="nz-stage__hud">
    <h1 class="nz-text-h1">Hola, soy <span class="nz-accent">Ntizar</span></h1>
    <p class="nz-text-muted">Diseño + ingeniería con identidad.</p>
  </div>
</section>
```

Color para three.js sincronizado:

```js
const brand = getComputedStyle(document.body).getPropertyValue('--nz-color-brand').trim();
material.color = new THREE.Color(brand);
```

### 2.5 Auth (login)

```html
<div class="nz-auth-shell">
  <div class="nz-auth-shell__panel">
    <form class="nz-card">
      <h2 class="nz-text-h3">Bienvenido de nuevo</h2>
      <p class="nz-text-muted">Entra a tu cuenta.</p>
      <label class="nz-field"><span class="nz-field__label">Email</span><input class="nz-input" type="email" /></label>
      <label class="nz-field"><span class="nz-field__label">Contraseña</span><input class="nz-input" type="password" /></label>
      <button class="nz-btn nz-btn--primary nz-btn--block">Entrar</button>
      <div class="nz-divider--label">o continúa con</div>
      <button class="nz-btn nz-btn--secondary nz-btn--block">Google</button>
    </form>
  </div>
  <div class="nz-auth-shell__art">
    <h2>Construye con identidad.<br>Sin fricción.</h2>
    <p>El sistema que escala contigo, manteniendo siempre la misma firma visual.</p>
  </div>
</div>
```

### 2.6 Pricing

```html
<section class="nz-section">
  <div class="nz-pricing-grid">
    <article class="nz-pricing-card">
      <h3 class="nz-pricing-card__name">Starter</h3>
      <div class="nz-pricing-card__price"><span class="nz-pricing-card__amount">€0</span><span class="nz-pricing-card__period">/mes</span></div>
      <ul class="nz-pricing-card__list"><li>Hasta 3 proyectos</li><li>Comunidad</li><li>Skins básicos</li></ul>
      <button class="nz-btn nz-btn--secondary nz-btn--block">Empezar</button>
    </article>
    <article class="nz-pricing-card nz-pricing-card--featured">
      <span class="nz-pricing-card__badge">Popular</span>
      <h3 class="nz-pricing-card__name">Pro</h3>
      <div class="nz-pricing-card__price"><span class="nz-pricing-card__amount">€19</span><span class="nz-pricing-card__period">/mes</span></div>
      <ul class="nz-pricing-card__list"><li>Proyectos ilimitados</li><li>Todos los skins</li><li>Soporte prioritario</li></ul>
      <button class="nz-btn nz-btn--accent nz-btn--block">Probar Pro</button>
    </article>
    <article class="nz-pricing-card">
      <h3 class="nz-pricing-card__name">Team</h3>
      <div class="nz-pricing-card__price"><span class="nz-pricing-card__amount">€49</span><span class="nz-pricing-card__period">/mes</span></div>
      <ul class="nz-pricing-card__list"><li>Roles y permisos</li><li>SSO</li><li>Auditoría</li></ul>
      <button class="nz-btn nz-btn--secondary nz-btn--block">Hablemos</button>
    </article>
  </div>
</section>
```

---

## 3. Modal, drawer, dropdown, toast

### Modal nativo (recomendado)

```html
<dialog id="m" class="nz-modal">
  <div class="nz-modal__panel">
    <button class="nz-modal__close" onclick="m.close()">×</button>
    <h3 class="nz-text-h3">Confirmar acción</h3>
    <p>¿Estás seguro?</p>
    <div class="nz-cluster" style="justify-content:flex-end">
      <button class="nz-btn nz-btn--ghost" onclick="m.close()">Cancelar</button>
      <button class="nz-btn nz-btn--primary">Confirmar</button>
    </div>
  </div>
</dialog>
<button class="nz-btn nz-btn--primary" onclick="m.showModal()">Abrir</button>
```

### Drawer

```html
<aside id="d" class="nz-drawer nz-drawer--right">…</aside>
<button class="nz-btn" onclick="d.classList.toggle('is-open')">Toggle</button>
```

### Toast

```html
<div class="nz-toast-stack nz-toast-stack--top-right">
  <div class="nz-toast nz-toast--success">
    <div class="nz-toast__title">Guardado</div>
    <div class="nz-toast__body">Cambios aplicados.</div>
  </div>
</div>
```

### Dropdown

```html
<div class="nz-dropdown">
  <button class="nz-btn nz-btn--secondary" onclick="this.nextElementSibling.classList.toggle('is-open')">Acciones ▾</button>
  <div class="nz-dropdown__menu">
    <button class="nz-dropdown__item">Editar</button>
    <button class="nz-dropdown__item">Duplicar</button>
    <div class="nz-dropdown__sep"></div>
    <button class="nz-dropdown__item nz-dropdown__item--danger">Eliminar</button>
  </div>
</div>
```

### Tooltip CSS-only

```html
<span class="nz-tooltip" data-tip="Tip rápido">?</span>
```

### Tabs

```html
<div class="nz-tabs">
  <div class="nz-tabs__list" role="tablist">
    <button class="nz-tab nz-tab--active">General</button>
    <button class="nz-tab">Avanzado</button>
  </div>
  <div class="nz-tabs__panel">…</div>
</div>
```

### Accordion

```html
<div class="nz-accordion">
  <details class="nz-accordion__item" open>
    <summary>¿Qué es Ntizar?</summary>
    <div class="nz-accordion__body">Un design system completo, modular, sin build.</div>
  </details>
  <details class="nz-accordion__item">
    <summary>¿Lo puedo usar con React?</summary>
    <div class="nz-accordion__body">Sí, es CSS puro. Compatible con todo.</div>
  </details>
</div>
```

---

## 4. Formularios completos

```html
<form class="nz-form-grid nz-form-grid--2">
  <label class="nz-field">
    <span class="nz-field__label">Nombre</span>
    <input class="nz-input" />
  </label>

  <label class="nz-field">
    <span class="nz-field__label">Email</span>
    <div class="nz-input-group">
      <span class="nz-input-group__addon">@</span>
      <input class="nz-input" />
    </div>
  </label>

  <label class="nz-field nz-field--full">
    <span class="nz-field__label">Buscar</span>
    <input class="nz-input nz-search" placeholder="Buscar productos…" />
  </label>

  <div class="nz-field nz-field--full">
    <span class="nz-field__label">Plan</span>
    <div class="nz-segmented">
      <label class="nz-segmented__option"><input type="radio" name="p" checked><span>Mensual</span></label>
      <label class="nz-segmented__option"><input type="radio" name="p"><span>Anual</span></label>
    </div>
  </div>

  <label class="nz-switch">
    <input class="nz-switch__input" type="checkbox" checked />
    <span class="nz-switch__track"><span class="nz-switch__thumb"></span></span>
    <span>Recibir novedades</span>
  </label>

  <label class="nz-check">
    <input type="checkbox" />
    <span>Acepto los términos</span>
  </label>

  <div class="nz-field nz-field--full">
    <span class="nz-field__label">Volumen</span>
    <input class="nz-range" type="range" />
  </div>

  <div class="nz-field nz-field--full">
    <div class="nz-otp">
      <input class="nz-otp__cell" maxlength="1" />
      <input class="nz-otp__cell" maxlength="1" />
      <input class="nz-otp__cell" maxlength="1" />
      <input class="nz-otp__cell" maxlength="1" />
    </div>
  </div>

  <label class="nz-file nz-field--full">
    <input type="file" hidden />
    <span class="nz-file__drop">Arrastra un archivo o haz click</span>
    <span class="nz-file__hint">PDF o PNG, máx 5MB</span>
  </label>

  <button class="nz-btn nz-btn--primary nz-field--full">Enviar</button>
</form>
```

---

## 5. Animaciones

```html
<h1 class="nz-anim-rise">Aparezco subiendo</h1>
<p class="nz-anim-fade-in nz-anim--delay-2">Llego un poco después</p>

<div class="nz-reveal">Aparezco al hacer scroll</div>
<script>
  const io = new IntersectionObserver((entries) =>
    entries.forEach(e => e.isIntersecting && e.target.classList.add('is-visible'))
  , { threshold: 0.15 });
  document.querySelectorAll('.nz-reveal').forEach(el => io.observe(el));
</script>

<div class="nz-marquee"><div class="nz-marquee__track">… contenido en bucle …</div></div>
```

---

## 6. Integración con frameworks

### React / Next.js

```jsx
// _document.jsx o layout.tsx
<html data-nz-theme="light" data-nz-skin="aurora">
  <head>
    <link rel="stylesheet" href="/ntizar.css" />
    <link rel="stylesheet" href="/ntizar.themes.css" />
    <link rel="stylesheet" href="/ntizar.ui.css" />
    {/* … los packs que uses */}
  </head>
  <body className="nz">{children}</body>
</html>
```

### Vue / Nuxt

```html
<!-- nuxt.config.ts: css: ['~/assets/ntizar.css', '~/assets/ntizar.themes.css', …] -->
<template>
  <div class="nz" :data-nz-skin="skin">…</div>
</template>
```

### Junto a Tailwind

Funcionan en paralelo: las clases Tailwind aplican a todo, las `.nz-*` solo dentro de `.nz`. Si quieres aislar, envuelve la zona Ntizar en un `<div class="nz">…</div>`.

### Astro / SvelteKit

Mismo patrón: importa los CSS en el layout, añade `class="nz"` al `<body>`.

---

## 7. Theming personalizado (override de tokens)

Crea un archivo `tu-marca.css` después de `ntizar.themes.css`:

```css
:root[data-nz-skin="aurora"], .nz[data-nz-skin="aurora"] {
  --nz-color-brand: #1e6bff;
  --nz-color-accent: #ff7a18;
  --nz-gradient-brand: linear-gradient(135deg, #1e6bff, #4f3bff);
  --nz-gradient-accent: linear-gradient(135deg, #ff7a18, #ff3b6b);
  --nz-gradient-aurora: linear-gradient(135deg, #1e6bff 0%, #6f4bff 50%, #ff3b6b 100%);
}
```

> Solo redefines tokens. **Nunca** sobreescribas selectores de componentes.

---

## 8. Performance tips

- Carga solo los packs que uses. El core ya da el 80%.
- Los packs son cero-JS por defecto — no hay coste de bundle.
- `loading="lazy"` en imágenes pesadas dentro de `.nz-stage` o `.nz-hero__visual`.
- Si usas `.nz-aurora-bg`, evita ponerlo en zonas que reflowan constantemente.
- `backdrop-filter` es caro: limita las "glass surfaces" a las zonas con peso visual real.
- Para listas largas (>100 filas) sustituye `.nz-table` por virtualización (ej. tanstack-virtual).

---

## 9. Accesibilidad rápida

- Botones: `<button class="nz-btn">`, no `<div>`.
- Diálogos: usa `<dialog>` nativo o añade `role="dialog" aria-modal="true"`.
- Inputs: siempre con `<label>` (la clase `.nz-field` ayuda).
- Skin oscuro: contrasta — el sistema ya pasa AA con los tokens.
- `prefers-reduced-motion`: respetado por el pack `motion`. No fuerces animaciones JS sin chequearlo.

---

## 10. Debug

- ¿Nada se aplica? → Falta `class="nz"` en algún ancestro.
- ¿Choque con Tailwind/Bootstrap? → La específicidad de Ntizar es baja a propósito; envuelve en `<div class="nz">` para aislar.
- ¿Charts no toman color? → Lee de CSS vars **después** de cambiar de skin (en el `change` listener).
- ¿Skin no cambia? → Confirma `data-nz-skin` en `<body>` (no en `<html>`) o en el ancestro correcto.
- ¿Dark mode flicker? → Setea `data-nz-theme` antes de pintar (script inline en `<head>`).

---

## 11. Próximos pasos

1. Mira `gallery.html` — todos los componentes en vivo, con switcher de skin/tema.
2. Lee `INDEX.md` — mapa rápido para encontrar la clase exacta.
3. Lee `SYSTEM.md` — reglas para extender sin romper.
4. Empieza por `gallery.html` y copia el bloque más cercano a tu caso. Hazlo tuyo.
