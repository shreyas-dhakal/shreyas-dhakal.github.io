import * as THREE from './vendor/three.module.js';

const COLORS = { blue: 0x2274a5, pink: 0xe83f6f, amber: 0xffbf00, white: 0xffffff };

// Geometry is built once. Only the parent group's rotation changes on interaction.
export function createBook() {
  const book = new THREE.Group();
  const paper = new THREE.MeshStandardMaterial({ color: COLORS.white, roughness: 0.92, side: THREE.DoubleSide });
  const cover = new THREE.MeshStandardMaterial({ color: COLORS.blue, roughness: 0.78 });
  const inks = Object.fromEntries(['blue', 'pink', 'amber'].map(key => [key,
    new THREE.MeshBasicMaterial({ color: COLORS[key] })]));
  const surface = (side, layer, u, v) => new THREE.Vector3(
    side * 1.675 * u,
    0.10 + layer * 0.022 * u + 0.17 * Math.sin(Math.PI * u) + layer * 0.055 * u * u,
    (v - 0.5) * 2.18,
  );
  const add = (geometry, material, position) => {
    const mesh = new THREE.Mesh(geometry, material);
    if (position) mesh.position.copy(position);
    book.add(mesh);
    return mesh;
  };
  // Continuous backing avoids overlapping cover faces and an exposed spine end;
  // every curved leaf converges to the same gutter edge at x=0, y=0.10.
  add(new THREE.BoxGeometry(3.55, 0.075, 2.34), cover, new THREE.Vector3(0, -0.055, 0));
  add(new THREE.BoxGeometry(3.34, 0.105, 2.16), paper, new THREE.Vector3(0, 0.032, 0));
  for (const side of [-1, 1]) {
    for (let layer = 0; layer < 4; layer++) {
      const geometry = new THREE.PlaneGeometry(1, 1, 24, 4);
      const positions = geometry.attributes.position;
      const uv = geometry.attributes.uv;
      for (let i = 0; i < positions.count; i++) {
        const p = surface(side, layer, uv.getX(i), uv.getY(i));
        positions.setXYZ(i, p.x, p.y, p.z);
      }
      geometry.computeVertexNormals();
      add(geometry, paper);
    }
    // Printed strokes follow the upper leaf, rather than floating over its curve.
    const vertices = [];
    for (let row = 0; row < 8; row++) {
      const end = row === 7 ? 0.59 : 0.83;
      for (let step = 0; step < 12; step++) {
        for (const u of [0.18 + (end - 0.18) * step / 12, 0.18 + (end - 0.18) * (step + 1) / 12]) {
          const p = surface(side, 3, u, 0.24 + row * 0.065);
          vertices.push(p.x, p.y + 0.004, p.z);
        }
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    book.add(new THREE.LineSegments(geometry, new THREE.LineBasicMaterial({ color: COLORS.blue, transparent: true, opacity: 0.32 })));
    const marker = add(new THREE.BoxGeometry(0.34, 0.012, 0.065), inks[side === -1 ? 'amber' : 'pink']);
    marker.position.copy(surface(side, 3, 0.30, 0.17));
    marker.position.y += 0.015;
  }
  const threads = [
    ['amber', 0.72, 0.26, 0.57, 0.31, 0.80],
    ['pink', 0.48, 0.54, 0.77, 0.61, 0.96],
    ['blue', 0.80, 0.78, 0.42, 0.78, 0.64],
  ];
  for (const [color, u1, v1, u2, v2, lift] of threads) {
    const start = surface(-1, 3, u1, v1);
    const end = surface(1, 3, u2, v2);
    start.y += 0.025;
    end.y += 0.025;
    const c1 = start.clone().add(new THREE.Vector3(0.45, lift, 0));
    const c2 = end.clone().add(new THREE.Vector3(-0.45, lift, 0));
    add(new THREE.TubeGeometry(new THREE.CubicBezierCurve3(start, c1, c2, end), 40, 0.014, 6, false), inks[color]);
    const dot = new THREE.SphereGeometry(0.036, 10, 6);
    add(dot, inks[color], start);
    add(dot, inks[color], end);
  }
  return book;
}

export function mountBook(host) {
  let renderer, scene, book, resizeObserver, visibilityObserver;
  let frame = 0, disposed = false, visible = false, ready = false;
  let width = 0, height = 0;
  let targetX = 0, targetY = 0;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = matchMedia('(hover: hover) and (pointer: fine)');
  const base = { x: 0, y: -0.22 };
  const camera = new THREE.OrthographicCamera(-3, 3, 2, -2, 0.1, 40);
  camera.position.set(4.3, 6.8, 7.5);
  camera.lookAt(0, 0.20, 0);
  const listeners = [];
  const listen = (target, event, handler, options) => {
    target.addEventListener(event, handler, options);
    listeners.push(() => target.removeEventListener(event, handler, options));
  };
  const stop = () => { cancelAnimationFrame(frame); frame = 0; };
  const active = () => !disposed && visible && !document.hidden && width > 0 && height > 0;
  const dispose = () => {
    if (disposed) return;
    disposed = true;
    stop();
    host.classList.remove('is-ready');
    listeners.forEach(remove => remove());
    resizeObserver?.disconnect();
    visibilityObserver?.disconnect();
    const geometries = new Set(), materials = new Set();
    scene?.traverse(object => {
      if (object.geometry) geometries.add(object.geometry);
      if (object.material) materials.add(object.material);
    });
    geometries.forEach(geometry => geometry.dispose());
    materials.forEach(material => material.dispose());
    renderer?.dispose();
    renderer?.domElement.remove();
  };
  const fail = () => { host.dataset.bookState = 'fallback'; dispose(); };
  const request = () => { if (active() && !frame) frame = requestAnimationFrame(draw); };
  function draw() {
    frame = 0;
    if (!active()) return;
    try {
      const x = base.x + (motion.matches ? 0 : targetX);
      const y = base.y + (motion.matches ? 0 : targetY);
      book.rotation.x += (x - book.rotation.x) * 0.16;
      book.rotation.y += (y - book.rotation.y) * 0.16;
      if (motion.matches) book.rotation.set(base.x, base.y, 0);
      renderer.render(scene, camera);
      if (renderer.getContext().isContextLost()) return fail();
      host.dataset.bookDrawCalls = String(renderer.info.render.calls);
      host.dataset.bookTriangles = String(renderer.info.render.triangles);
      host.dataset.bookState = 'ready';
      if (!ready) { ready = true; host.classList.add('is-ready'); }
      if (Math.abs(x - book.rotation.x) + Math.abs(y - book.rotation.y) > 0.0001) request();
    } catch { fail(); }
  }
  const resize = () => {
    if (disposed) return;
    width = host.clientWidth;
    height = host.clientHeight;
    if (!width || !height) { stop(); return; }
    // A fixed world-space framing envelope includes the book and raised threads.
    const aspect = width / height;
    const halfHeight = Math.max(1.75, 2.45 / aspect);
    camera.left = -halfHeight * aspect;
    camera.right = halfHeight * aspect;
    camera.top = halfHeight;
    camera.bottom = -halfHeight;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5, Math.sqrt(1000000 / (width * height))));
    renderer.setSize(width, height, false);
    host.dataset.bookPixels = String(renderer.domElement.width * renderer.domElement.height);
    request();
  };
  try {
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
    renderer.setClearColor(COLORS.white, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NoToneMapping;
    const canvas = renderer.domElement;
    canvas.setAttribute('aria-hidden', 'true');
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;';
    host.append(canvas);
    scene = new THREE.Scene();
    book = createBook();
    book.rotation.set(base.x, base.y, 0);
    scene.add(book);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x7a9bab, 2.1));
    const light = new THREE.DirectionalLight(0xffffff, 2.4);
    light.position.set(-3, 7, 5);
    scene.add(light);
    listen(canvas, 'webglcontextlost', event => { event.preventDefault(); fail(); });
    listen(host, 'pointermove', event => {
      if (motion.matches || !pointer.matches) return;
      const bounds = host.getBoundingClientRect();
      targetY = THREE.MathUtils.clamp((event.clientX - bounds.left) / bounds.width - 0.5, -0.5, 0.5) * 0.10;
      targetX = THREE.MathUtils.clamp((event.clientY - bounds.top) / bounds.height - 0.5, -0.5, 0.5) * 0.08;
      request();
    }, { passive: true });
    const reset = () => { targetX = 0; targetY = 0; request(); };
    listen(host, 'pointerleave', reset);
    listen(motion, 'change', reset);
    listen(pointer, 'change', reset);
    listen(document, 'visibilitychange', () => document.hidden ? stop() : request());
    listen(window, 'pagehide', stop);
    listen(window, 'pageshow', request);
    resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    visibilityObserver = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      if (visible) request(); else stop();
    });
    visibilityObserver.observe(host);
    resize();
  } catch { fail(); }
  return { dispose };
}

// The semantic page and static book remain usable even if this import fails.
if (typeof document !== 'undefined') {
  const host = document.getElementById('book-scene');
  if (host) mountBook(host);
}
