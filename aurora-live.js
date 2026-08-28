/* ==========================================================================
   Ntizar Design System — aurora-live.js (v6)
   --------------------------------------------------------------------------
   Micro-motor (sin dependencias) del glass interactivo v6.

   Alimenta las variables `--nz-mx` / `--nz-my` (posición del cursor en %)
   de todos los elementos con clase `.nz-glass-liquid-live`, para que el
   specular highlight de `ntizar.next.css` siga al cursor.

   Uso (módulo ES):

     <script type="module">
       import 'https://cdn.jsdelivr.net/gh/Ntizar/Ntizar-Aurora@master/aurora-live.js';
     </script>

   Se auto-inicializa tras DOMContentLoaded (listener delegado, 0 coste si
   no hay elementos live). Opt-out: `<html data-nz-glass-live="off">`.
   Export: `activarGlassLive(raiz)` para inicialización manual.
   ========================================================================== */

const REDUCIDO = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function activarGlassLive(raiz = document) {
  if (REDUCIDO()) return () => {};
  const apagado = (document.documentElement.getAttribute('data-nz-glass-live') || '') === 'off';
  if (apagado) return () => {};

  function alMover(e) {
    const objetivo = e.target && e.target.closest
      ? e.target.closest('.nz-glass-liquid-live')
      : null;
    if (!objetivo) return;
    const r = objetivo.getBoundingClientRect();
    if (!r.width || !r.height) return;
    objetivo.style.setProperty('--nz-mx', (((e.clientX - r.left) / r.width) * 100).toFixed(1) + '%');
    objetivo.style.setProperty('--nz-my', (((e.clientY - r.top) / r.height) * 100).toFixed(1) + '%');
  }

  document.addEventListener('pointermove', alMover, { passive: true });
  return () => document.removeEventListener('pointermove', alMover);
}

export { activarGlassLive };

// Auto-init (opt-out con data-nz-glass-live="off" en <html>)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => activarGlassLive());
} else {
  activarGlassLive();
}
