# Ntizar Design System

> Blue/orange liquid-glass CSS system for Ntizar projects.

![Version](https://img.shields.io/badge/version-2.1.0-2563eb)
![Mode](https://img.shields.io/badge/default-light-f97316)
![CSS Only](https://img.shields.io/badge/css-only-0f1729)
![Dependencies](https://img.shields.io/badge/dependencies-none-16a34a)

`Light-first` · `CSS-only` · `No build` · `Blue + orange` · `Glass UI`

## Snapshot

| Block | Value |
|---|---|
| Core | `ntizar.css` |
| Theme model | Light by default, dark auto/manual |
| Visual style | Liquid glass, blue/orange accents |
| Runtime | Plain HTML/CSS, no tooling |
| Repo demo | `demo.html` / `index.html` |

## Why It Exists

Ntizar needs one visual language that can be reused across small static sites, experiments and product interfaces without dragging a framework or a build system into every repo.

## What You Get

| Area | Includes |
|---|---|
| Color system | Blue, orange, grayscale, semantic tokens |
| Typography | Scale, weights, headings, text helpers |
| Glass layer | `subtle`, `standard`, `intense`, color variants |
| Components | Buttons, cards, badges, inputs, navbar, modal, table, tabs, alerts |
| Utilities | Layout, spacing, radius, glow, text, orbs |
| Theming | `.theme-light`, `.theme-dark`, auto dark via media query |

## Install

```html
<link rel="stylesheet" href="ntizar.css">
```

No `npm install`. No bundler. No preprocessor.

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

## Theme Rules

| Situation | Recommendation |
|---|---|
| New project | Start with default light theme |
| Existing app with dark UI | Use `.theme-dark` only if the product already wants it |
| Tailwind/Bootstrap app | Import brand tokens or selected patterns, not the whole system by default |
| Browser/system dark preference | Auto dark kicks in through `prefers-color-scheme: dark` |

## Theme Toggle

```js
document.documentElement.classList.add('theme-light')
document.documentElement.classList.add('theme-dark')
```

## Optional Chrome Enhancement

If you want the full refracted glass effect in Chrome/Chromium, copy the SVG filter block and the displacement script from `demo.html`.

Fallback in other browsers is still standard `backdrop-filter` blur.

## Files

| File | Role |
|---|---|
| `ntizar.css` | Source of truth |
| `demo.html` | Full component documentation |
| `index.html` | Static entry for Pages |

## GitHub View

- Repo: `https://github.com/Ntizar/Ntizar-Design`
- Recommended Pages demo: use the published static preview from this repo

## Design Notes

- Default is now bright, clean and more reusable in day-to-day products.
- Blue and orange remain the brand anchors.
- Glass stays visible in light mode through tinted surfaces, stronger borders and softer depth shadows.

## For Ntizar Repos

Use this system when you want:
- one-file branding
- visual coherence across experiments
- compact UI without a heavy frontend stack

Do not use it blindly when the target repo already has a mature framework-based design layer.
