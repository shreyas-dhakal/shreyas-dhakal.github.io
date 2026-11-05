# Three.js

Vendored from the exact npm dependency `three@0.187.0` in the root lockfile.
`three.module.js` imports `three.core.js`; both must be deployed together.
The upstream MIT license is in `three-LICENSE.txt` and retained in module headers.

These files were minified from `node_modules/three/build/` using the Terser
already available through the installed Next package (no new build dependency):

```js
const { minify } = require('next/dist/compiled/terser');
// Apply to each upstream file, retaining its filename and relative imports:
await minify(source, {
  module: true,
  compress: true,
  mangle: true,
  format: { comments: /@license/ }
});
```

GitHub Pages serves the committed files directly; no build step or CDN is needed.
