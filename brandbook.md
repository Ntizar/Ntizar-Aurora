# Aurora Brandbook

> La identidad de Aurora en un documento. Coge lo que necesites.

Versión 5.2 · Julio 2026

---

## Símbolo

Una **A** geométrica construida con dos trazos que se encuentran en el vértice. El trazo izquierdo es azul `#2563eb`, el derecho es naranja `#f97316`, con una barra horizontal en negro `#0a0a0a`. Es la inicial de Antizar.

**Siempre vectorial.** Nunca lo recrees a mano. Usa los SVGs de `assets/simbolo/`.

### Variantes disponibles

| Archivo | Uso |
|---|---|
| `aurora-simbolo-color.svg` | Default. Sobre oscuro o claro. |
| `aurora-simbolo-blanco.svg` | Monocromo blanco. Sobre oscuro. |
| `aurora-simbolo-negro.svg` | Monocromo negro. Sobre claro. |
| `aurora-simbolo-azul.svg` | Monocromo azul. Single-color. |
| `aurora-simbolo-naranja.svg` | Monocromo naranja. Single-color. |

### Espacio libre

Mantén un espacio libre de al menos el ancho del símbolo en los cuatro lados.

### Tamaño mínimo

Símbolo: 24px. Logo completo: 120px de ancho.

### NUNCA

- Recolorear los trazos — el izquierdo siempre es azul, el derecho siempre naranja.
- Reescribir el wordmark con una fuente — usa siempre el SVG.
- Rotar, distorsionar o aplicar sombra, degradado o brillo.
- Colocar el símbolo color sobre un fondo de bajo contraste.

---

## Logotipo

Símbolo + wordmark `aurora` en lowercase, Inter 600, letter-spacing -1.5px.

| Archivo | Uso |
|---|---|
| `aurora-logo-negativo.svg` | Sobre oscuro (default). Wordmark blanco + símbolo color. |
| `aurora-logo-positivo.svg` | Sobre claro. Wordmark negro + símbolo color. |
| `aurora-logo-blanco.svg` | Monocromo blanco. Sobre oscuro. |
| `aurora-logo-negro.svg` | Monocromo negro. Sobre claro. |
| `aurora-logo-azul.svg` | Monocromo azul. |

---

## Color

**Light mode por defecto.** Fondo blanco `#ffffff`.

### Marca

| Color | Hex | oklch | Uso |
|---|---|---|---|
| Azul | `#2563eb` | `oklch(54.6% .215 262.9)` | Color principal, CTAs, identidad |
| Azul profundo | `#1e40af` | — | Hover/active del azul |
| Azul claro | `#60a5fa` | — | Barras de chart, acentos sutiles |
| Naranja | `#f97316` | `oklch(68.5% .176 41.2)` | Color secundario, CTA destacado |
| Naranja profundo | `#ea580c` | — | Hover/active del naranja |
| Naranja claro | `#fdba74` | — | Barras de chart, acentos sutiles |

### Neutros

| Color | Hex | Uso |
|---|---|---|
| Blanco | `#ffffff` | Fondo limpio, texto sobre color |
| Negro | `#0a0a0a` | Texto principal, bloques dark |

### Estado — solo severidad, nunca marca

| Color | Hex | Uso |
|---|---|---|
| Verde | `#16a34a` | OK / correcto |
| Amarillo | `#d97706` | Advertencia |
| Rojo | `#dc2626` | Error / crítico |

### Reglas del acento

**Presupuesto: máx 5 momentos de color saturado por página.**

**SÍ en:** CTAs, links activos, 1-2 KPIs, 1 serie de chart, badges críticos.
**NUNCA en:** texto de cuerpo, iconos decorativos, separadores, fondos de sección.

**Regla dual:** el azul y el naranja no se mezclan en la misma sección. Uno es primary, el otro es secondary.

### Sin gradientes azul→naranja

La interpolación sRGB entre `#2563eb` y `#f97316` produce gris morado en el punto medio. Usar bloques de color sólido. Si se necesita un gradiente, monocromo (azul→azul-claro).

---

## Tipografía

**Inter** en todo el sistema. Una familia. Nada más.

| Rol | Tamaño | Peso | Uso |
|---|---|---|---|
| Display | `clamp(2.5rem, 2rem+2.6vw, 4.5rem)` | 700 | Hero |
| H1 | `clamp(2rem, 1.6rem+1.8vw, 3rem)` | 700 | Títulos de página |
| H2 | `1.75rem` | 600 | Secciones |
| H3 | `1.375rem` | 600 | Subsecciones |
| Cuerpo | `1rem` | 400 | Texto base |
| Cuerpo grande | `1.125rem` | 400 | Intros |
| Mono / antetítulo | `0.75rem` | 500 | `.nz-eyebrow` |

**Antetítulo:** `› SECCIÓN` en mono, uppercase, letter-spacing 0.12em, color brand. Es la firma de marca.

---

## Forma y espacio

### Bento grid asimétrico

Bloques de color sólido (azul, naranja, blanco, negro) con tamaños irregulares. No grid de cards iguales. Usar `.nz-bento` con `__cell--span-*`.

### Escala de espaciado

Múltiplos de 4px: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64.

### Esquinas

Radio moderado por defecto. Modo `sharp` disponible con `data-nz-shape="sharp"`.

---

## Voz

**Técnico pero accesible. Sin hype.**

- ✅ "364 KB de CSS, 129 componentes, 0 dependencias"
- ❌ "El design system más revolucionario"

**Aurora NO es:** Tailwind, Bootstrap, un framework JS, un theme de WordPress, un design system corporativo.

**Atribución obligatoria:** `Hecho con ❤️ por David Antizar`

---

## Descargas

Todos los recursos en `assets/`:

```
assets/
  logo/       — 5 variantes SVG + PNG
  simbolo/    — 5 variantes SVG + PNG
  favicon/    — favicon.svg, favicon.ico, favicon-32/180/512.png
```

---

Hecho con ❤️ por David Antizar
