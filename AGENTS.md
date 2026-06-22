# AGENTS.md — Aurora v5.1 "Constellation"

> Read this file first. It is the **single source of truth** for any AI agent (Claude Code, Copilot, Cursor, ChatGPT, etc.) working with the Ntizar Aurora design system.

## What you are working with

**Aurora is a CSS-only design system.** No build, no JS required, no npm. Everything lives under the `.nz` class so it never collides with other systems.

- **Repo:** https://github.com/Ntizar/Ntizar-Aurora
- **Public CDN:** https://cdn.jsdelivr.net/gh/Ntizar/Ntizar-Aurora@master/
- **Single source of API truth:** [`INDEX.md`](INDEX.md) (the only file you need in your context)
- **Machine-readable spec:** [`DESIGN.md`](DESIGN.md) (Google design.md compatible, tokens + types)

## How to use Aurora **without burning tokens**

**DO NOT paste the CSS files into the prompt.** They are ~170 KB combined (~50k tokens). The CSS lives on the user's HTML, not in your context.

Correct workflow:

1. **Load only `INDEX.md`** into context (~16 KB / ~4k tokens). It is the operative map: "I need X → load pack Y → use classes Z".
2. **Link the CSS via CDN** in the generated HTML (see snippet below). The browser fetches it; you don't need to know its content.
3. **Generate HTML only.** Use Aurora classes. Do not invent class names. Do not write parallel CSS for things Aurora already covers.

## The 5 hard rules (non-negotiable)

1. **Always wrap with `.nz`.** Put `class="nz"` on `<body>` or on the section you want to scope.
2. **Use only classes documented in `INDEX.md`.** If you can't find a class for what you need, use a `--nz-*` token in inline `style` rather than inventing a class.
3. **Never hardcode values.** No hex colors, no `16px`, no `1rem`. Use tokens like `var(--nz-color-brand)`, `var(--nz-space-4)`.
4. **Never write CSS for things Aurora already provides.** Buttons, cards, badges, alerts, fields, layout primitives, modals, tabs, etc. — all are in the system.
5. **Customize via root attributes**, not CSS overrides:
   - `data-nz-theme="light|dark"`
   - `data-nz-skin="aurora|sunset|midnight|ocean|citrus|contrast"`
   - `data-nz-shape="default|sharp|rounded|brutalist"`
   - `data-nz-density="comfortable|compact|spacious"`
   - `data-nz-motion="standard|springy|calm|none"`
   - `data-nz-color-system="hex|oklch"`

## Minimum viable HTML (copy verbatim)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>

  <!-- Aurora core (mandatory) -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Ntizar/Ntizar-Aurora@master/ntizar.css">

  <!-- Optional packs — load only what you use -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Ntizar/Ntizar-Aurora@master/ntizar.themes.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Ntizar/Ntizar-Aurora@master/ntizar.ui.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Ntizar/Ntizar-Aurora@master/ntizar.next.css">
</head>
<body class="nz" data-nz-theme="light" data-nz-skin="aurora">
  <!-- your content -->
</body>
</html>
```

> **Pin a version in production:** replace `@master` with `@v5.1.0` (or whatever release tag is current) so the CDN cache becomes immutable.

## When you need interactivity (modal, tabs, dropdown, toast)

Aurora ships **no JS**. The user (or you, with their permission) must write it. Convention:

- Toggle a state class on the component root (e.g. `.nz-modal--open`, `.nz-tabs__panel--active`).
- Aurora's CSS already handles all visual states once the class is present.
- Do **not** invent new components for interactivity that already exists in the system.

## Pack quick map

|| Need | Pack |
||---|---|
|| Buttons, cards, badges, fields, alerts, layout | `ntizar.css` (core) |
|| Brand variants (5 skins) | `ntizar.themes.css` |
|| KPIs, progress, skeleton, avatars, timeline | `ntizar.data.css` |
|| Chart.js / Apex / D3 wrappers | `ntizar.charts.css` |
|| Leaflet / Mapbox / MapLibre styling | `ntizar.maps.css` |
|| three.js stages, aurora backgrounds | `ntizar.viz.css` |
|| Reveal, glow-pulse, shimmer animations | `ntizar.motion.css` |
|| Switch, OTP, file drop, range, stepper | `ntizar.forms.css` |
|| Modal, drawer, tabs, dropdown, toast, tooltip | `ntizar.ui.css` |
|| App-shell, hero, pricing, FAQ, footer, auth | `ntizar.patterns.css` |
|| **Liquid glass, OKLCH, multi-axis, mesh, AAA skin** | `ntizar.next.css` (v5+) |

Full class lists are in [`INDEX.md`](INDEX.md). Reference API also in `gallery.html` sections `#api-root`, `#api-objects`, `#api-components`, `#api-utilities`.

## Anti-patterns (do not do these)

```html
<!-- ❌ Inventing class names -->
<div class="nz-fancy-card">...</div>

<!-- ❌ Hardcoding values -->
<button style="background: #2563eb; padding: 16px;">Click</button>

<!-- ❌ Parallel CSS for existing components -->
<style> .my-button { ... } </style>

<!-- ❌ Skipping .nz wrapper -->
<body>
  <button class="nz-btn nz-btn--primary">Click</button>
</body>

<!-- ✅ Correct -->
<body class="nz" data-nz-theme="light" data-nz-skin="aurora">
  <button class="nz-btn nz-btn--primary">Click</button>
</body>
```

## System constitution (from SYSTEM.md)

### Architecture

```
ntizar.css            ← core (tokens, base, objects, components, utilities)
ntizar.themes.css     ← skins (aurora, sunset, midnight, ocean, citrus, contrast)
ntizar.data.css       ← KPIs, progress, meter, skeleton, avatar, timeline, tag
ntizar.charts.css     ← containers, sparkline, donut, legend
ntizar.maps.css       ← container + overlay + pins + popups
ntizar.viz.css        ← stage 3D, aurora-bg, orb, glow-ring, scanline
ntizar.motion.css     ← keyframes + animation classes, reveal, marquee
ntizar.forms.css      ← switch, custom check/radio, range, otp, file, stepper
ntizar.ui.css         ← modal, drawer, tabs, accordion, dropdown, toast, tooltip, command-bar
ntizar.patterns.css   ← app-shell, hero, pricing, features, faq, footer, auth-shell
ntizar.next.css       ← v5: liquid glass, OKLCH, multi-axis, mesh, forced-colors
```

### CSS layers (`@layer`)

```
ntizar.tokens     → only :root / theme attributes. No selectors.
ntizar.base       → reset, base typography, scrollbar, focus.
ntizar.objects    → structure without aesthetics: container, section, stack, cluster, grid, surface.
ntizar.components → elements with visual identity: nz-btn, nz-card, nz-kpi, nz-chart, etc.
ntizar.utilities  → atomic modifiers `.u-nz-*`.
```

Priority: utilities > components > objects. **Don't break it.**

### Naming conventions

|| Pattern | Use | Example |
|| --- | --- | --- |
|| `.nz` | Scope activator (opt-in root) | `<body class="nz">` |
|| `.nz-thing` | Component | `.nz-card`, `.nz-modal` |
|| `.nz-thing__part` | Component part | `.nz-card__header` |
|| `.nz-thing--mod` | Modifier | `.nz-btn--primary`, `.nz-hero--split` |
|| `.is-state` | Runtime state | `.is-open`, `.is-active`, `.is-visible` |
|| `.u-nz-*` | Atomic utility | `.u-nz-text-accent`, `.u-nz-glow` |
|| `--nz-token` | CSS variable | `--nz-color-brand`, `--nz-space-4` |
|| `data-nz-theme` | Theme | `light` / `dark` |
|| `data-nz-skin` | Skin | `aurora` / `sunset` / `midnight` / `ocean` / `citrus` / `contrast` |
|| `data-nz-shape` | v5 · Curvature | `default` / `sharp` / `rounded` / `brutalist` |
|| `data-nz-density` | v5 · Spacing scale | `comfortable` / `compact` / `spacious` |
|| `data-nz-motion` | v5 · Motion personality | `standard` / `springy` / `calm` / `none` |
|| `data-nz-color-system` | v5 · Color space | `hex` / `oklch` |

### Prohibited

- Styling generic selectors (`button`, `input`, `h1`) outside `ntizar.base`.
- `!important` outside `@layer ntizar.utilities` (except external library overrides, clearly commented).
- Hex literals in `@layer ntizar.components` and `@layer ntizar.utilities` — use `var(--nz-*)` or `color-mix()` on tokens.
- `position: absolute` without `isolation: isolate` or a relative parent.

### Token families

- **Color:** `--nz-color-brand[-strong/-soft]`, `--nz-color-accent[-strong/-soft]`, scales `--nz-color-{blue,orange,violet,cyan,pink,green,red,yellow,slate}-{50..950}`
- **Surface:** `--nz-surface-{page,base,soft,raised,glass-soft,glass,glass-strong,glass-brand,glass-accent,brand-soft,accent-soft}` + tonal system: `--nz-surface-{brand,accent,success,danger,warning}-{soft,raised,pressed,glass}`
- **Text:** `--nz-text-{strong,default,muted,soft,inverse,on-brand}`
- **Border:** `--nz-border-{soft,default,strong,brand,accent,glass}`
- **Shadow:** `--nz-shadow-{sm,md,lg,brand,accent,aurora}`
- **Spacing:** `--nz-space-{1..8}`
- **Radius:** `--nz-radius-{sm,md,lg,xl,pill}`
- **Gradient:** `--nz-gradient-{brand,accent,aurora}`
- **Motion:** `--nz-duration-{fast,base}`, `--nz-ease-standard`
- **Type:** `--nz-font-sans`, `--nz-font-display`, `--nz-font-mono`
- **Charts:** `--nz-chart-1..8`, `--nz-chart-{grid,axis,bg}`

### Adding a component

1. **Core or pack?** Core if primitive and reusable by everything (button, card, input). Pack if domain-specific (data, maps, 3D, advanced forms, UI overlays, page patterns).
2. **Name** following BEM (`nz-thing__part--mod`).
3. **Write in `@layer ntizar.components`** with `:where(...)` for low specificity.
4. **Only tokens.** If a token is missing, add it to `ntizar.css` (layer `ntizar.tokens`) first.
5. **Support theme and skins.** Test with `data-nz-theme="dark"` and at least one non-aurora skin.
6. **Support motion-reduce.** Wrap animations with `@media (prefers-reduced-motion: reduce)`.
7. **Document the API** above the block (classes, modifiers, slots).
8. **Add demo** to `gallery.html`. If it's not in gallery, it doesn't exist.
9. **Update `INDEX.md`** (file table + decision matrix).

### Versioning

- **MAJOR** → incompatible changes (renames, removals, visual identity).
- **MINOR** → new components, packs, utilities, tokens.
- **PATCH** → bugfixes, fine adjustments, accessibility, performance.

### Accessibility

- Visible focus always (`:focus-visible` with `--nz-ring`).
- Minimum AA contrast on text over any surface.
- Click targets ≥ 40px on mobile.
- `prefers-reduced-motion: reduce` disables decorative animations.
- States not communicated only by color (add icon or text).

### Multi-axis theming (v5+)

From v5, appearance is controlled by **6 orthogonal axes** on the `.nz` root. Rule: **axes are independent**. Any combination must remain legible and coherent.

|| Axis | Attribute | Values | Lives in |
|| --- | --- | --- | --- |
|| Theme | `data-nz-theme` | `light` · `dark` | `ntizar.css` |
|| Skin | `data-nz-skin` | `aurora` · `sunset` · `midnight` · `ocean` · `citrus` | `ntizar.themes.css` |
|| Skin | `data-nz-skin` | `contrast` (AAA) | `ntizar.next.css` |
|| Shape | `data-nz-shape` | `default` · `sharp` · `rounded` · `brutalist` | `ntizar.next.css` |
|| Density | `data-nz-density` | `comfortable` · `compact` · `spacious` | `ntizar.next.css` |
|| Motion | `data-nz-motion` | `standard` · `springy` · `calm` · `none` | `ntizar.next.css` |
|| Color system | `data-nz-color-system` | `hex` · `oklch` | `ntizar.next.css` |

Rules for new components:
- **Never assume an axis.** Read tokens (`var(--nz-radius-*)`, `var(--nz-space-*)`, `var(--nz-duration-*)`); axes reassign them at runtime.
- **Motion respects `prefers-reduced-motion`** regardless of `data-nz-motion` value. If the user requests it, it always wins.
- **AAA (`data-nz-skin="contrast"`)** must remain legible. If your component uses `backdrop-filter` or opacities, prepare a branch inside `[data-nz-skin="contrast"]` that disables them.
- **Forced-colors mode** (`@media (forced-colors: active)`) is non-negotiable: map to `Canvas`, `CanvasText`, `Highlight`, `Mark`.

## Versioning

- Public API (classes, tokens, data attributes) follows semver.
- Breaking changes ship in major versions only.
- v5.x is fully backward compatible with v4.x. The new disruptive features live in `ntizar.next.css` (additive opt-in).
