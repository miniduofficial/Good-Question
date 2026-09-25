import fs from 'node:fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Home from '/private/tmp/good-question-page.mjs';

const css = fs
  .readFileSync(new URL('../app/globals.css', import.meta.url), 'utf8')
  .replace("@import 'tailwindcss';", '')
  .replaceAll("url('/art/", "url('/public/art/");

const page = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Good Question — An Academy for the Curious</title>
  <style>${css}</style>
</head>
<body>${renderToStaticMarkup(React.createElement(Home))}</body>
</html>`;

fs.writeFileSync(new URL('../preview.html', import.meta.url), page);
