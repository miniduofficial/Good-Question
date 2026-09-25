// The GitHub Pages prototype is authored in index.html and public/learning.*.
// Keep the older React landing-page experiment in app/ from overwriting it.
import fs from 'node:fs';
for (const path of ['../index.html', '../public/learning.css', '../public/learning.js']) {
 fs.accessSync(new URL(path, import.meta.url));
}
console.log('Static prototype ready. Serve the repository root and open index.html.');
