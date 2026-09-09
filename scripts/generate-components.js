#!/usr/bin/env node
/**
 * generate-components.js — Regenera components.json desde los CSS reales.
 *
 * Fuente de verdad: los archivos ntizar*.css en disco.
 * Uso: node scripts/generate-components.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

// Packs en orden de carga (core primero). Descripciones = README.
const PACKS = [
  ['core',     'ntizar.css',          'Tokens, base, objetos, componentes y utilities', true],
  ['themes',   'ntizar.themes.css',   '5 skins (aurora, sunset, midnight, ocean, citrus) + paleta charts. La 6ª skin (contrast, AAA) vive en el pack next', false],
  ['data',     'ntizar.data.css',     'KPIs, dashboards, progress, meter, skeleton, avatar, timeline', false],
  ['charts',   'ntizar.charts.css',   'Contenedores Chart.js/Apex/D3, sparkline y donut CSS-only', false],
  ['maps',     'ntizar.maps.css',     'Leaflet/MapLibre/Mapbox con look Ntizar', false],
  ['viz',      'ntizar.viz.css',      'Stages three.js, fondos aurora, orbs, glow ring, scanlines', false],
  ['motion',   'ntizar.motion.css',   'reveal, glow-pulse, aurora-pan, shimmer, marquee, typing, hover-lift', false],
  ['forms',    'ntizar.forms.css',    'switch, check/radio custom, range, OTP, file drop, stepper, search', false],
  ['ui',       'ntizar.ui.css',       'modal, drawer, tabs, accordion, dropdown, toast, tooltip, command-bar', false],
  ['patterns', 'ntizar.patterns.css', 'app-shell, hero, pricing, features, faq, footer, auth-shell, empty/error', false],
  ['next',     'ntizar.next.css',     'liquid glass real, OKLCH, multi-axis theming, mesh, forced-colors, skin contrast AAA', false],
  ['three',    'ntizar.three.css',    'contenedores .nz-three para escenas Three.js (three-scenes.js)', false],
  ['nucleo',   'ntizar.nucleo.css',   'colores sólidos puros, bento grid, stats bar, charts CSS-only, stage3d, transporte', false],
  ['ai',       'ntizar.ai.css',       '20 primitivas AI-native: loader, thinking, stream, approval, toolchips, taskrow, chat, promptbar, recommend, contextcard, tables, sidenav, command, flow, insight, codeblock diff, finetune, selection', false],
  ['app',      'ntizar.app.css',      'App Kit móvil-first: shell (header+tabbar+FAB), hero compacto, KPI tiles, chips, listas, bottom-sheet, toast, empty, skeleton, ajustes/switch, footerbar, offline, onboarding', false],
];

// Categorías por palabra clave del nombre base (orden = prioridad).
const CAT_RULES = [
  [/^(btn)$/, 'button'],
  [/^(input|select|textarea|field|checkbox|radio|switch|otp|search|range|file|stepper)$/, 'input'],
  [/^(modal|drawer|toast|tooltip|dropdown|popover|command)$/, 'overlay'],
  [/^(kpi|stat|progress|meter|skeleton|avatar|timeline|tag|table|difftable|recordtable|filtertable|insight|finetune)$/, 'data-display'],
  [/^(chart|spark|donut|bars|ring|legend)$/, 'visual'],
  [/^(grid|stack|cluster|container|bento|section|hero|pricing|features|faq|footer|app-shell|auth|shell|empty|error)$/, 'layout'],
  [/^(nav|tabs|tab|sidenav|breadcrumb|pagination|menu)$/, 'navigation'],
  [/^(anim|reveal|shimmer|marquee|typing)$/, 'animation'],
  [/^(map|leaflet|maplibre)$/, 'map'],
  [/^(three)$/, '3d'],
  [/^(loader|thinking|stream|approval|toolchip|taskrow|chat|promptbar|recommend|contextcard|flow|codeblock|selection)$/, 'ai'],
];

function categoria(base) {
  for (const [re, cat] of CAT_RULES) if (re.test(base)) return cat;
  return 'component';
}

// Extrae tokens de clase .nz-* de un CSS (sin pseudo-clases ni valores).
function extraerBases(css) {
  const tokens = css.match(/\.nz-[a-z0-9]+(?:__[a-z0-9-]+)?(?:--[a-z0-9-]+)?/g) || [];
  const bases = new Map(); // base -> { selectores:Set, modifiers:Set, parts:Set }
  for (const t of tokens) {
    const m = t.match(/^\.nz-([a-z0-9]+)(?:__([a-z0-9-]+))?(?:--([a-z0-9-]+))?$/);
    if (!m) continue;
    const [, base, part, mod] = m;
    if (!bases.has(base)) bases.set(base, { sel: new Set(), mods: new Set(), parts: new Set() });
    const e = bases.get(base);
    e.sel.add(t);
    if (part) e.parts.add(part);
    if (mod) e.mods.add(mod);
  }
  return bases;
}

const components = {};
const byCategory = {};
const seenBase = new Map(); // base -> entrada (los packs EXTIENDEN bases del core: se fusionan)

for (const [pack, file, desc, mandatory] of PACKS) {
  const p = path.join(ROOT, file);
  if (!fs.existsSync(p)) { console.error(`AVISO: falta ${file}`); continue; }
  const css = fs.readFileSync(p, 'utf8');
  const bases = extraerBases(css);
  for (const [base, e] of bases) {
    const cat = categoria(base);
    if (seenBase.has(base)) {
      // El pack extiende la base: fusionar modifiers/parts/selectors y registrar el pack
      const comp = seenBase.get(base);
      const antes = comp.modifiers.length + comp.parts.length;
      comp.modifiers = [...new Set([...comp.modifiers, ...e.mods])].sort();
      comp.parts = [...new Set([...comp.parts, ...e.parts])].sort();
      comp.selector_count += e.sel.size;
      if (!comp.packs.includes(pack)) comp.packs.push(pack);
      if (comp.modifiers.length + comp.parts.length > antes && comp.pack !== pack) {
        console.log(`  extendido: .nz-${base} (+${comp.modifiers.length + comp.parts.length - antes} mods/parts desde ${pack})`);
      }
      continue;
    }
    seenBase.set(base, {
      base: `.nz-${base}`,
      modifiers: [...e.mods].sort(),
      parts: [...e.parts].sort(),
      selector_count: e.sel.size,
      pack,
      packs: [pack],
      category: cat,
    });
    components[base] = seenBase.get(base);
    (byCategory[cat] = byCategory[cat] || []).push({ name: base, base: `.nz-${base}`, modifiers: seenBase.get(base).modifiers, pack });
  }
}

const spec = {
  name: 'Ntizar Aurora',
  version: '6.2.0',
  type: 'css-only design system',
  scope: '.nz (opt-in)',
  cdn: 'https://cdn.jsdelivr.net/gh/Ntizar/Ntizar-Aurora@master/',
  generated: 'regenerar con: node scripts/generate-components.js',
  architecture: {
    layers: ['ntizar.tokens', 'ntizar.base', 'ntizar.objects', 'ntizar.components', 'ntizar.utilities'],
    naming: {
      component: '.nz-thing',
      modifier: '.nz-thing--mod',
      part: '.nz-thing__part',
      state: '.is-state',
      utility: '.u-nz-*',
      token: '--nz-*',
    },
  },
  packs: Object.fromEntries(PACKS.map(([pack, file, desc, mandatory]) => [pack, { file, description: desc, mandatory }])),
  components,
  by_category: byCategory,
};

const out = path.join(ROOT, 'components.json');
fs.writeFileSync(out, JSON.stringify(spec, null, 2) + '\n');

const total = Object.keys(components).length;
const packsConComp = new Set(Object.values(components).map(c => c.pack));
console.log(`✅ components.json regenerado:`);
console.log(`   versión ${spec.version} · ${total} componentes · ${PACKS.length} packs`);
console.log(`   por categoría: ${Object.entries(byCategory).map(([c, a]) => `${c}=${a.length}`).join(', ')}`);
