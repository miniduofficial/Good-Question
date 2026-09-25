# Good Question

The current GitHub Pages prototype is the static site in `index.html`, with styling and interactions in `public/learning.css` and `public/learning.js`.

Run `python3 -m http.server 8000 --bind 127.0.0.1` from this directory, then open http://127.0.0.1:8000/index.html.

The homepage, sample Mathematics outline, zero-exponent lesson, and tutoring information use hash routes so direct links and browser history work on GitHub Pages without server configuration. Asset URLs are relative to the project path.

The lesson includes the supplied Minidu Explains video and independently written explanation/practice. YouTube is loaded only when Play is selected. If embedding is unavailable, the direct YouTube link remains usable. Answers are held only for the current page session; there is no account, payment, or backend service yet. The O/L classification is a prototype example, not a verified syllabus mapping.

The `app/` directory and framework configuration preserve the earlier React landing-page experiment; they do not generate this static prototype. `scripts/render-preview.mjs` now checks the static files instead of overwriting them with that earlier design.
