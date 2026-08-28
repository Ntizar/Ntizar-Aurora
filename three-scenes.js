/* ==========================================================================
   Ntizar Design System — three-scenes.js (v6)
   --------------------------------------------------------------------------
   Librería de escenas Three.js reutilizables para el pack `ntizar.three.css`.

   Paleta fija Ntizar: azul #2563eb + naranja #f97316 sobre blanco.
   Sin gradiente azul→naranja (genera morado): colores sólidos.

   Uso (módulo ES):

     <div class="nz-three nz-three--hero nz-three--interactive"
          data-nz-three="grafo"
          data-nz-three-nodos="18">
       <canvas class="nz-three__canvas"></canvas>
       <div class="nz-three__fallback">…contenido estático…</div>
     </div>

     <script type="module">
       import { crearEscenasAuto } from 'https://cdn.jsdelivr.net/gh/Ntizar/Ntizar-Aurora@master/three-scenes.js';
       crearEscenasAuto();
     </script>

   Escenas (data-nz-three):
     - icosaedro   : wireframe azul con nodos naranjas en vértices
     - grafo       : núcleo + nodos orbitando conectados (orquestación)
     - particulas  : campo de partículas tipo constelación
     - anillos     : toro de anillos girando en ejes distintos

   Atributos opcionales:
     data-nz-three-nodos="18"   (grafo/particulas: cantidad)
     data-nz-three-velocidad="1" (multiplicador global de velocidad)
     data-nz-three-fondo="#ffffff" (color de fondo WebGL)

   Sin WebGL (o error): el contenedor recibe `is-fallback` y
   `ntizar.three.css` muestra `.nz-three__fallback`.
   ========================================================================== */

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.164/build/three.module.js';

const AZUL = new THREE.Color('#2563eb');
const AZUL_SUAVE = new THREE.Color('#60a5fa');
const NARANJA = new THREE.Color('#f97316');
const NARANJA_SUAVE = new THREE.Color('#fdba74');
const BLANCO = new THREE.Color('#ffffff');

/* ---------- base común ---------------------------------------------------- */

function crearBase(contenedor, fondo) {
  const canvas = contenedor.querySelector('.nz-three__canvas')
    || contenedor.querySelector('canvas');
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'low-power'
  });
  renderer.setClearColor(new THREE.Color(fondo || '#ffffff'), 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
  camera.position.set(0, 0, 16);

  function resize() {
    const w = contenedor.clientWidth || 1;
    const h = contenedor.clientHeight || 1;
    renderer.setSize(w, h, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(contenedor);

  return { canvas, renderer, scene, camera, resize, destruir: () => ro.disconnect() };
}

/* ---------- escena: icosaedro --------------------------------------------- */

function escenaIcosaedro(base, { velocidad }) {
  const { scene, camera } = base;
  const grupo = new THREE.Group();
  scene.add(grupo);

  const geo = new THREE.IcosahedronGeometry(5, 1);
  const aristas = new THREE.EdgesGeometry(geo);
  grupo.add(new THREE.LineSegments(aristas,
    new THREE.LineBasicMaterial({ color: AZUL, transparent: true, opacity: 0.85 })));

  const nodos = new THREE.Points(geo,
    new THREE.PointsMaterial({ color: NARANJA, size: 0.42, sizeAttenuation: true }));
  grupo.add(nodos);

  const inner = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2.6, 0),
    new THREE.MeshBasicMaterial({ color: AZUL_SUAVE, wireframe: true, transparent: true, opacity: 0.35 }));
  grupo.add(inner);

  camera.position.z = 14;
  return (t) => {
    grupo.rotation.y = t * 0.25 * velocidad;
    grupo.rotation.x = Math.sin(t * 0.18) * 0.22;
    inner.rotation.y = -t * 0.4 * velocidad;
    inner.rotation.z = t * 0.2 * velocidad;
  };
}

/* ---------- escena: grafo (orquestación) ----------------------------------- */

function escenaGrafo(base, { nodos: n = 18, velocidad }) {
  const { scene, camera } = base;
  const grupo = new THREE.Group();
  scene.add(grupo);

  // Núcleo: Mastermind
  const nucleoGeo = new THREE.IcosahedronGeometry(1.7, 1);
  grupo.add(new THREE.Mesh(nucleoGeo,
    new THREE.MeshBasicMaterial({ color: AZUL, wireframe: true, transparent: true, opacity: 0.9 })));
  const nucleoGlow = new THREE.Mesh(
    new THREE.SphereGeometry(1.05, 24, 24),
    new THREE.MeshBasicMaterial({ color: AZUL, transparent: true, opacity: 0.12 }));
  grupo.add(nucleoGlow);

  // Nodos orbitando (skills)
  const radio = 5.4;
  const satelites = [];
  const geoSat = new THREE.SphereGeometry(0.16, 12, 12);
  for (let i = 0; i < n; i++) {
    const naranja = i % 5 === 0; // ~20% naranjas: los "destacados"
    const malla = new THREE.Mesh(geoSat,
      new THREE.MeshBasicMaterial({ color: naranja ? NARANJA : AZUL_SUAVE }));
    // órbita: inclinación y fase aleatoria pero determinista
    const fase = (i / n) * Math.PI * 2;
    const inclinacion = 0.5 + (i % 3) * 0.35;
    const rapidez = 0.35 + ((i * 7) % 5) * 0.06;
    satelites.push({ malla, fase, inclinacion, rapidez, naranja });
    grupo.add(malla);
  }

  // Conexiones núcleo ↔ nodos (se recalculan por frame)
  const maxLineas = 32;
  const posLineas = new Float32Array(maxLineas * 6);
  const geoLineas = new THREE.BufferGeometry();
  geoLineas.setAttribute('position', new THREE.BufferAttribute(posLineas, 3));
  const lineas = new THREE.LineSegments(geoLineas,
    new THREE.LineBasicMaterial({ color: AZUL_SUAVE, transparent: true, opacity: 0.3 }));
  grupo.add(lineas);

  camera.position.z = 15;

  return (t) => {
    let visibles = 0;
    for (const s of satelites) {
      const ang = s.fase + t * s.rapidez * velocidad;
      s.malla.position.set(
        Math.cos(ang) * radio,
        Math.sin(ang * s.inclinacion) * radio * 0.42,
        Math.sin(ang) * radio * 0.7);
    }
    // líneas: conectar hasta maxLineas nodos con el núcleo
    for (let i = 0; i < satelites.length && visibles < maxLineas; i += 2, visibles++) {
      const p = satelites[i].malla.position;
      posLineas.set([0, 0, 0, p.x, p.y, p.z], visibles * 6);
    }
    for (let i = visibles; i < maxLineas; i++) {
      posLineas.fill(0, i * 6, i * 6 + 6);
    }
    geoLineas.attributes.position.needsUpdate = true;
    nucleoGlow.scale.setScalar(1 + Math.sin(t * 1.6 * velocidad) * 0.08);
    grupo.rotation.y = Math.sin(t * 0.12 * velocidad) * 0.28;
    grupo.rotation.x = Math.sin(t * 0.09 * velocidad) * 0.12;
  };
}

/* ---------- escena: partículas --------------------------------------------- */

function escenaParticulas(base, { nodos: n = 220, velocidad }) {
  const { scene, camera } = base;
  const posiciones = new Float32Array(n * 3);
  const colores = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    posiciones.set([
      (Math.random() - 0.5) * 22,
      (Math.random() - 0.5) * 14,
      (Math.random() - 0.5) * 14
    ], i * 3);
    // 80% azul suave, 20% naranja — sin interpolación (evita morado)
    const c = (i % 5 === 0) ? NARANJA_SUAVE : AZUL_SUAVE;
    colores.set([c.r, c.g, c.b], i * 3);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(posiciones, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colores, 3));
  const puntos = new THREE.Points(geo,
    new THREE.PointsMaterial({ size: 0.11, vertexColors: true, transparent: true, opacity: 0.9 }));
  scene.add(puntos);
  camera.position.z = 12;

  return (t) => {
    puntos.rotation.y = t * 0.08 * velocidad;
    puntos.rotation.x = Math.sin(t * 0.05 * velocidad) * 0.15;
  };
}

/* ---------- escena: anillos ------------------------------------------------- */

function escenaAnillos(base, { velocidad }) {
  const { scene, camera } = base;
  const grupo = new THREE.Group();
  scene.add(grupo);
  const configs = [
    { r: 3.2, c: AZUL, eje: [1, 0.3, 0] },
    { r: 4.1, c: AZUL_SUAVE, eje: [0.4, 1, 0.2] },
    { r: 5.0, c: NARANJA, eje: [0.2, 0.6, 1] },
    { r: 5.9, c: NARANJA_SUAVE, eje: [0.8, 0.2, 1] }
  ];
  const anillos = configs.map(({ r, c, eje }) => {
    const malla = new THREE.Mesh(
      new THREE.TorusGeometry(r, 0.035, 8, 90),
      new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0.7 }));
    malla.rotation.set(...eje);
    grupo.add(malla);
    return malla;
  });
  const nucleo = new THREE.Mesh(
    new THREE.SphereGeometry(0.9, 20, 20),
    new THREE.MeshBasicMaterial({ color: AZUL, transparent: true, opacity: 0.9 }));
  grupo.add(nucleo);
  camera.position.z = 13;

  return (t) => {
    anillos.forEach((m, i) => {
      m.rotation.z += (0.002 + i * 0.0012) * velocidad;
      m.rotation.x += 0.0008 * velocidad;
    });
    grupo.rotation.y = t * 0.1 * velocidad;
  };
}

/* ---------- orquestación ----------------------------------------------------- */

const ESCENAS = { icosaedro: escenaIcosaedro, grafo: escenaGrafo, particulas: escenaParticulas, anillos: escenaAnillos };

/**
 * Inicializa una escena en un contenedor.
 * @returns {() => void} función de limpieza (detiene el bucle)
 */
export function crearEscena(contenedor) {
  const tipo = contenedor.dataset.nzThree || 'icosaedro';
  const fabrica = ESCENAS[tipo] || escenaIcosaedro;
  const opts = {
    nodos: parseInt(contenedor.dataset.nzThreeNodos || '18', 10),
    velocidad: parseFloat(contenedor.dataset.nzThreeVelocidad || '1'),
    fondo: contenedor.dataset.nzThreeFondo || '#ffffff'
  };

  let base;
  try {
    base = crearBase(contenedor, opts.fondo);
  } catch (e) {
    contenedor.classList.add('is-fallback');
    return () => {};
  }
  if (!base.renderer.getContext()) {
    contenedor.classList.add('is-fallback');
    return () => {};
  }

  const actualizar = fabrica(base, opts);

  // Parallax con el cursor (contenedor .nz-three--interactive)
  let objetivoX = 0, objetivoY = 0, actualX = 0, actualY = 0;
  const interactivo = contenedor.classList.contains('nz-three--interactive');
  const motionReducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const motionOff = (document.querySelector('.nz')?.getAttribute('data-nz-motion') || 'standard') === 'none';
  const parallaxOn = interactivo && !motionReducido && !motionOff;

  function alMover(e) {
    const r = contenedor.getBoundingClientRect();
    objetivoX = ((e.clientX - r.left) / r.width - 0.5) * 10;
    objetivoY = -((e.clientY - r.top) / r.height - 0.5) * 6;
  }
  function alSalir() { objetivoX = 0; objetivoY = 0; }
  if (parallaxOn) {
    contenedor.addEventListener('pointermove', alMover);
    contenedor.addEventListener('pointerleave', alSalir);
  }

  const reloj = new THREE.Clock();
  let raf = 0;
  let vivo = true;
  function bucle() {
    if (!vivo) return;
    raf = requestAnimationFrame(bucle);
    const t = reloj.getElapsedTime();
    actualizar(t);
    if (parallaxOn) {
      actualX += (objetivoX - actualX) * 0.06;
      actualY += (objetivoY - actualY) * 0.06;
      base.camera.position.x = actualX;
      base.camera.position.y = actualY;
      base.camera.lookAt(0, 0, 0);
      // sutil desplazamiento del canvas vía tokens del pack CSS
      contenedor.style.setProperty('--nz-tx', (actualX * -0.4).toFixed(2) + 'px');
      contenedor.style.setProperty('--nz-ty', (actualY * 0.4).toFixed(2) + 'px');
    }
    base.renderer.render(base.scene, base.camera);
  }
  bucle();

  // Pausa fuera de viewport (ahorro de batería/CPU)
  const io = new IntersectionObserver(([entrada]) => {
    if (entrada.isIntersecting && !raf) { vivo = true; bucle(); }
    else if (!entrada.isIntersecting && raf) {
      vivo = false; cancelAnimationFrame(raf); raf = 0;
    }
  }, { threshold: 0.05 });
  io.observe(contenedor);

  return () => {
    vivo = false;
    cancelAnimationFrame(raf);
    io.disconnect();
    base.destruir();
    base.renderer.dispose();
  };
}

/**
 * Busca todos los [data-nz-three] del documento y los inicializa.
 * @returns {Array<() => void>} funciones de limpieza
 */
export function crearEscenasAuto(raiz = document) {
  return [...raiz.querySelectorAll('[data-nz-three]')].map(crearEscena);
}
