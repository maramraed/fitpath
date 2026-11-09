import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname } from 'node:path';

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.map': 'application/json',
};
const root = new URL('./dist/', import.meta.url);
const port = Number(process.env.FITPATH_PORT || 5173);

createServer(async (request, response) => {
  const path = new URL(request.url, 'http://localhost').pathname;
  const file = path === '/' ? 'index.html' : path.slice(1);
  if (!/^[\w.-]+$/.test(file) || !types[extname(file)]) {
    response.writeHead(404).end();
    return;
  }
  try {
    const content = await readFile(new URL(file, root));
    response.writeHead(200, { 'Content-Type': types[extname(file)] }).end(content);
  } catch {
    response.writeHead(404).end();
  }
}).listen(port, 'localhost', () => console.log(`FitPath: http://localhost:${port}`));
