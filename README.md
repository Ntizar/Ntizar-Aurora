# Ntizar Design System

> Sistema CSS azul/naranja con estética liquid glass para los proyectos de Ntizar.

![Version](https://img.shields.io/badge/version-2.1.0-2563eb)
![Modo](https://img.shields.io/badge/default-claro-f97316)
![CSS Only](https://img.shields.io/badge/css-only-0f1729)
![Dependencias](https://img.shields.io/badge/dependencies-none-16a34a)

`Light-first` · `CSS-only` · `Sin build` · `Azul + naranja` · `Glass UI`

## Enlaces

- GitHub: `https://github.com/Ntizar/Ntizar-Design`
- Pages: `https://ntizar.github.io/Ntizar-Design/`

## Snapshot

| Bloque | Valor |
|---|---|
| Core | `ntizar.css` |
| Modelo de tema | Claro por defecto, oscuro auto/manual |
| Lenguaje visual | Liquid glass con acentos azul/naranja |
| Runtime | HTML/CSS plano, sin tooling |
| Demo | `demo.html` / `index.html` |

## Por Qué Existe

Ntizar necesita un lenguaje visual reutilizable entre webs pequeñas, experimentos y productos, sin meter un framework o un build system en cada repositorio.

## Qué Incluye

| Área | Incluye |
|---|---|
| Color system | Azul, naranja, grises y tokens semánticos |
| Tipografía | Escala, pesos, headings y helpers de texto |
| Glass layer | `subtle`, `standard`, `intense` y variantes de color |
| Componentes | Buttons, cards, badges, inputs, navbar, modal, table, tabs, alerts |
| Utilities | Layout, spacing, radius, glow, text, orbs |
| Theming | `.theme-light`, `.theme-dark`, dark automático por media query |

## Instalación

```html
<link rel="stylesheet" href="ntizar.css">
```

No necesitas `npm install`. No hay bundler. No hay preprocesador.

## Quick Start

```html
<nav class="navbar navbar-float">
  <a href="#" class="navbar-brand">
    <span class="navbar-brand-dot"></span>
    Ntizar App
  </a>

  <ul class="navbar-nav">
    <li><a href="#" class="nav-link active">Inicio</a></li>
    <li><a href="#" class="nav-link">Proyectos</a></li>
  </ul>

  <div class="navbar-actions">
    <button class="btn btn-primary btn-sm">Nuevo</button>
  </div>
</nav>

<section class="container" style="padding-top:2rem;">
  <article class="card card-glass glass-specular">
    <div class="card-header">
      <span class="card-title">Panel Ntizar</span>
      <span class="badge badge-blue no-dot">Activo</span>
    </div>

    <div class="card-body">
      UI compacta con identidad Ntizar sin meter framework.
    </div>
  </article>
</section>
```

## Reglas de Tema

| Situación | Recomendación |
|---|---|
| Proyecto nuevo | Empieza con el tema claro por defecto |
| App ya oscura | Usa `.theme-dark` solo si el producto ya lo pide |
| App con Tailwind/Bootstrap | Integra tokens o patrones concretos, no el sistema entero por defecto |
| Usuario con OS oscuro | El dark automático entra por `prefers-color-scheme: dark` |

## Cambio de Tema

```js
document.documentElement.classList.add('theme-light')
document.documentElement.classList.add('theme-dark')
```

## Extra Opcional para Chrome

Si quieres el efecto completo de refracción glass en Chrome/Chromium, copia el bloque SVG filter y el script de displacement desde `demo.html`.

En otros navegadores sigue funcionando con `backdrop-filter` como fallback.

## Archivos Principales

| Archivo | Rol |
|---|---|
| `ntizar.css` | Fuente de verdad |
| `demo.html` | Documentación completa de componentes |
| `index.html` | Entrada estática para Pages |

## Notas de Diseño

- El sistema ahora arranca en claro para ser más reutilizable en producto real.
- Azul y naranja siguen siendo los anclajes de marca.
- El glass en claro se mantiene visible con superficies tintadas, mejores bordes y sombras más suaves.

## Cuándo Usarlo

Úsalo cuando quieras:
- branding en un solo archivo
- consistencia visual entre experimentos
- interfaces compactas sin framework pesado

No lo metas a ciegas si el repo destino ya tiene una capa visual madura basada en otro sistema.
