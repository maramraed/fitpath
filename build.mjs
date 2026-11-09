import { cp, mkdir } from 'node:fs/promises';
import { build } from 'esbuild';

await mkdir('dist', { recursive: true });
await cp('src/legacy', 'dist', { recursive: true });
await cp('node_modules/bootstrap/dist/css/bootstrap-utilities.min.css', 'dist/bootstrap-utilities.min.css');
await cp('node_modules/bootstrap/dist/css/bootstrap-utilities.min.css.map', 'dist/bootstrap-utilities.min.css.map');
await cp('node_modules/bootstrap/LICENSE', 'dist/bootstrap-LICENSE.txt');
await build({
  entryPoints: ['src/home.jsx'],
  bundle: true,
  minify: true,
  outfile: 'dist/react-home.js',
});
