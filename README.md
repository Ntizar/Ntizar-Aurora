# Ntizar Design System

**Liquid Glass UI — Azul & Naranja — v2.0.0**

Sistema de diseño con identidad propia. Un solo archivo CSS, sin dependencias, sin build system. Dark-first con light mode automático. Liquid Glass effect con refracción óptica real en Chrome.

![Version](https://img.shields.io/badge/version-2.0.0-blue)
![CSS Only](https://img.shields.io/badge/CSS-only-orange)
![No Dependencies](https://img.shields.io/badge/dependencies-none-green)

---

## Instalación

```html
<link rel="stylesheet" href="ntizar.css">
```

Eso es todo. No hay `npm install`, no hay build, no hay preprocesador.

### Liquid Glass (opcional)

Para activar la refracción óptica real en Chrome/Chromium, añade el filtro SVG y el script de displacement map antes de cerrar `</body>`. Copia los bloques `<svg class="ntizar-svg-filters">` y el `<script>` de `demo.html`.

En otros navegadores se usa `backdrop-filter: blur()` como fallback automático.

---

## Qué incluye

| Categoría | Componentes |
|---|---|
| **Colores** | Azul (50-950), Naranja (50-950), Grises (50-950), Semánticos (success, danger, warning, info) |
| **Tipografía** | Escala xs-5xl, pesos 300-900, headings automáticos h1-h6 |
| **Liquid Glass** | 3 niveles (subtle, standard, intense), tintes (blue, orange), specular highlight |
| **Botones** | 5 variantes × 4 tamaños + icon buttons + estados |
| **Cards** | Base, glass, gradient-border, accent-blue, accent-orange |
| **Badges** | 6 colores + glass + dot indicator |
| **Formularios** | Input, textarea, select, checkbox, radio, search con icono, estados de error |
| **Navbar** | Sticky + floating, glass backdrop, active states |
| **Modal** | Glass intense, scale-in animation, overlay con blur |
| **Progress** | 3 colores, 3 tamaños, shimmer animado |
| **Alerts** | 4 variantes semánticas (info, success, warning, danger) |
| **Tables** | Glass wrapper, striped, compact, hover |
| **Tabs** | 3 estilos (línea, glass, pills) |
| **Skeleton** | Text, title, circle, card, btn con shimmer |
| **Tooltips** | CSS puro via `data-tooltip` |
| **Dividers** | Simple + gradiente |
| **Avatares** | 4 tamaños, 3 colores |
| **Animaciones** | float, glow, fade-up, fade-in, scale-in, liquid-morph + delays |
| **Layout** | Container, flex, grid, gap, padding, margin, radius, glow, orbs |
| **Theming** | Dark default, light auto/manual, variables sobreescribibles |

---

## Quick Start

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="ntizar.css">
</head>
<body>

  <nav class="navbar navbar-float">
    <a href="#" class="navbar-brand">
      <span class="navbar-brand-dot"></span>
      Mi App
    </a>
    <ul class="navbar-nav">
      <li><a href="#" class="nav-link active">Inicio</a></li>
      <li><a href="#" class="nav-link">Proyectos</a></li>
    </ul>
    <div class="navbar-actions">
      <button class="btn btn-primary btn-sm">Nuevo</button>
    </div>
  </nav>

  <div class="container" style="padding-top: 2rem;">
    <div class="grid grid-3 gap-6">
      <div class="card card-glass glass-specular">
        <div class="card-header">
          <span class="card-title">Card Glass</span>
          <span class="badge badge-blue no-dot">Activo</span>
        </div>
        <div class="card-body">Contenido de ejemplo con glass effect.</div>
        <div class="card-footer">
          <button class="btn btn-ghost btn-sm">Cancelar</button>
          <button class="btn btn-primary btn-sm">Confirmar</button>
        </div>
      </div>
    </div>
  </div>

</body>
</html>
```

---

## Referencia de Componentes

### Colores

```css
/* Variables CSS disponibles */
var(--blue-50) ... var(--blue-950)       /* Primario */
var(--orange-50) ... var(--orange-950)   /* Acento */
var(--gray-50) ... var(--gray-950)       /* Neutros */
var(--success-500) var(--danger-500)     /* Semánticos */
var(--warning-500) var(--info-500)

/* Semánticas de UI */
var(--bg-base)        /* Fondo de página */
var(--bg-surface)     /* Fondo de cards/panels */
var(--bg-elevated)    /* Fondo elevado */
var(--text-primary)   /* Texto principal */
var(--text-secondary) /* Texto secundario */
var(--text-muted)     /* Texto desactivado */
var(--border-subtle)  var(--border-default)  var(--border-strong)
var(--brand-primary)  /* alias de blue-500 */
var(--brand-accent)   /* alias de orange-500 */
```

Clases de texto: `.text-primary`, `.text-secondary`, `.text-muted`, `.text-blue`, `.text-orange`
Gradientes: `.text-gradient` (azul→naranja), `.text-gradient-blue` (azul→azul oscuro)

### Glass

| Clase | Blur | Uso |
|---|---|---|
| `.glass-subtle` | 8px | Fondos de sección, dividers |
| `.glass-standard` | 16px | Cards, paneles, drawers |
| `.glass-intense` | 28px | Modales, heroes |

Modificadores:
- `.glass-blue` / `.glass-orange` — tinte de color
- `.glass-specular` — rim light + shimmer en hover
- `.specular-blue` / `.specular-orange` — specular coloreado
- `.glass-refract` — refracción real (Chrome only)

```html
<div class="glass-standard glass-specular">
  Contenido con liquid glass
</div>

<div class="glass-standard glass-blue glass-specular specular-blue">
  Glass azul con specular
</div>
```

### Botones

```html
<!-- Variantes -->
<button class="btn btn-primary">Primario</button>
<button class="btn btn-accent">Acento (naranja)</button>
<button class="btn btn-glass">Glass</button>
<button class="btn btn-glass-blue">Glass Azul</button>
<button class="btn btn-ghost">Ghost</button>

<!-- Tamaños -->
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Base</button>
<button class="btn btn-primary btn-lg">Large</button>
<button class="btn btn-primary btn-xl">Extra Large</button>

<!-- Icon button -->
<button class="btn btn-primary btn-icon">
  <svg>...</svg>
</button>

<!-- Full width -->
<button class="btn btn-primary btn-block">Full Width</button>

<!-- Con glow animado -->
<button class="btn btn-primary animate-glow-blue">Glow</button>
```

### Cards

```html
<!-- Card base -->
<div class="card">
  <div class="card-header">
    <span class="card-title">Título</span>
    <span class="badge badge-blue no-dot">Tag</span>
  </div>
  <div class="card-body">Contenido</div>
  <div class="card-footer">
    <button class="btn btn-ghost btn-sm">Cancelar</button>
    <button class="btn btn-primary btn-sm">OK</button>
  </div>
</div>

<!-- Variantes: añadir junto a .card -->
.card-glass .glass-specular   /* Glass effect */
.card-gradient-border          /* Borde gradiente azul→naranja */
.card-accent-blue              /* Borde superior azul + glow */
.card-accent-orange            /* Borde superior naranja + glow */
```

### Badges

```html
<span class="badge badge-blue">Activo</span>
<span class="badge badge-orange">Urgente</span>
<span class="badge badge-glass">Glass</span>
<span class="badge badge-success">OK</span>
<span class="badge badge-danger">Error</span>
<span class="badge badge-warning">Aviso</span>

<!-- Sin dot indicator -->
<span class="badge badge-blue no-dot">v2.0</span>
```

### Formularios

```html
<!-- Input básico -->
<div class="input-group">
  <label class="input-label">Email</label>
  <input type="email" class="input" placeholder="nombre@ejemplo.com">
  <span class="input-hint">Texto de ayuda</span>
</div>

<!-- Input con icono -->
<div class="input-group">
  <label class="input-label">Buscar</label>
  <div class="input-search-wrap">
    <svg class="input-search-icon">...</svg>
    <input type="search" class="input" placeholder="Buscar...">
  </div>
</div>

<!-- Input con error -->
<input class="input input-error" value="mal">
<span class="input-hint error">Mensaje de error</span>

<!-- Textarea -->
<textarea class="input textarea" rows="3"></textarea>

<!-- Select -->
<select class="select">
  <option>Opción 1</option>
</select>

<!-- Checkbox -->
<label class="checkbox">
  <input type="checkbox" checked>
  <span class="checkbox-mark"></span>
  Lectura
</label>

<!-- Radio -->
<label class="radio">
  <input type="radio" name="group">
  <span class="radio-mark"></span>
  Opción A
</label>
```

### Navbar

```html
<!-- Floating (recomendado) -->
<nav class="navbar navbar-float">
  <a href="#" class="navbar-brand">
    <span class="navbar-brand-dot"></span>
    Mi App
  </a>
  <ul class="navbar-nav">
    <li><a href="#" class="nav-link active">Inicio</a></li>
    <li><a href="#" class="nav-link">Config</a></li>
  </ul>
  <div class="navbar-actions">
    <button class="btn btn-primary btn-sm">Nuevo</button>
  </div>
</nav>

<!-- Sticky (sin .navbar-float) -->
<nav class="navbar">...</nav>
```

### Modal

```html
<div class="modal-overlay">
  <div class="modal">
    <button class="modal-close">&times;</button>
    <div class="modal-header">
      <h3 class="modal-title">Título</h3>
    </div>
    <div class="modal-body">Contenido</div>
    <div class="modal-footer">
      <button class="btn btn-ghost btn-sm">Cancelar</button>
      <button class="btn btn-primary btn-sm">Aceptar</button>
    </div>
  </div>
</div>
```

### Progress Bars

```html
<div class="progress-label">
  <span>Cargando</span>
  <span class="text-blue">72%</span>
</div>
<div class="progress-wrap">        <!-- .sm o .lg para tamaños -->
  <div class="progress-bar" style="width: 72%;"></div>
  <!-- .orange o .gradient para colores -->
</div>
```

### Alerts

```html
<div class="alert alert-info">     <!-- alert-success, alert-warning, alert-danger -->
  <svg class="alert-icon">...</svg>
  <div class="alert-content">
    <div class="alert-title">Título</div>
    Mensaje descriptivo.
  </div>
  <button class="alert-dismiss">&times;</button>
</div>
```

### Tables

```html
<div class="table-glass">
  <table class="table table-striped"> <!-- table-compact opcional -->
    <thead>
      <tr><th>Col 1</th><th>Col 2</th></tr>
    </thead>
    <tbody>
      <tr><td>Data</td><td>Data</td></tr>
    </tbody>
  </table>
</div>
```

### Tabs

```html
<!-- Línea (default) -->
<div class="tabs">
  <button class="tab tab-active">Tab 1</button>
  <button class="tab">Tab 2</button>
</div>

<!-- Glass -->
<div class="tabs tabs-glass">...</div>

<!-- Pills -->
<div class="tabs tabs-pills">...</div>
```

### Skeleton Loaders

```html
<div class="skeleton skeleton-circle avatar-md"></div>
<div class="skeleton skeleton-title"></div>
<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-text" style="width: 75%;"></div>
<div class="skeleton skeleton-card"></div>
<div class="skeleton skeleton-btn"></div>
```

### Avatares

```html
<div class="avatar avatar-sm avatar-blue">A</div>
<div class="avatar avatar-md avatar-orange">N</div>
<div class="avatar avatar-lg avatar-gradient">NT</div>
<div class="avatar avatar-xl avatar-blue">
  <img src="foto.jpg" alt="User">
</div>
```

### Tooltips

```html
<button data-tooltip="Texto del tooltip">Hover me</button>
```

### Dividers

```html
<hr class="divider">
<hr class="divider-gradient">
```

---

## Animaciones

| Clase | Efecto | Uso |
|---|---|---|
| `.animate-float` | Flotación infinita | Decorativo |
| `.animate-glow-blue` | Pulso glow azul | CTAs destacados |
| `.animate-glow-orange` | Pulso glow naranja | CTAs urgentes |
| `.animate-fade-up` | Entrada desde abajo | Secciones al cargar |
| `.animate-fade-in` | Fade simple | Transiciones |
| `.animate-scale-in` | Scale con spring | Modales, popups |
| `.animate-liquid-morph` | Deformación orgánica | Decorativo |

Stagger delays: `.delay-1` (0.1s) hasta `.delay-5` (0.5s)

Transiciones (variables):
- `--transition-fast` — 150ms (hover, focus)
- `--transition-base` — 250ms (general)
- `--transition-slow` — 400ms (expansiones)
- `--transition-spring` — 500ms con spring (modales)

---

## Layout Utilities

```html
<!-- Container -->
<div class="container">1200px max</div>
<div class="container-sm">768px max</div>
<div class="container-lg">1400px max</div>

<!-- Flex -->
<div class="flex items-center justify-between gap-4">...</div>
<div class="flex-col gap-3">...</div>

<!-- Grid -->
<div class="grid grid-3 gap-6">...</div>

<!-- Spacing: .p-{0,2,4,6,8}  .mt-{2,4,6,8}  .mb-{2,4,6}  .gap-{1-8} -->
<!-- Radius: .rounded-{sm,md,lg,xl,2xl,full} -->
<!-- Position: .relative .absolute .sticky -->
<!-- Glow: .glow-blue .glow-orange -->
<!-- Orbs: .orb .orb-blue .orb-orange (decoración de fondo) -->
```

---

## Theming

**Dark mode** es el default. No necesitas hacer nada.

**Light mode** se activa automáticamente con `@media (prefers-color-scheme: light)`.

Para control manual:

```js
// Forzar light
document.documentElement.classList.add('theme-light');

// Forzar dark
document.documentElement.classList.add('theme-dark');
```

### Personalización por proyecto

Sobreescribe las variables CSS **después** de importar ntizar.css:

```css
:root {
  --blue-500: #6366f1;         /* Cambiar primario */
  --orange-500: #ec4899;       /* Cambiar acento */
  --radius-lg: 8px;            /* Bordes más cuadrados */
  --glass-blur-md: blur(8px);  /* Menos blur */
  --font-sans: 'Poppins', sans-serif;
}
```

---

## Responsive

| Breakpoint | Comportamiento |
|---|---|
| ≤ 768px | Grids 3/4 → 2 cols, tipografía reducida |
| ≤ 480px | Todo grid → 1 col, padding reducido |

`prefers-reduced-motion: reduce` deshabilita todas las animaciones.

---

## Estructura del proyecto

```
ntizar.css    ← El design system completo (un solo archivo)
demo.html     ← Documentación interactiva con todos los componentes
README.md     ← Este archivo
```

---

## Licencia

Uso personal y proyectos de Ntizar.

---

**Ntizar Design System** — Azul × Naranja × Liquid Glass
