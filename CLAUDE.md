# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BASE64IMAGE is a static website offering privacy-focused Base64 encoding/decoding tools. All processing happens client-side in the browser — no backend or build step. The site is served via Nginx in a Docker container, deployed through Coolify.

## Development

**Local development:** Open `public/index.html` directly in a browser. No build tools, package managers, or Node.js required.

**Docker build and run:**
```bash
docker build -t base64image .
docker run -p 8080:80 base64image
```
Then visit http://localhost:8080. The Docker setup uses `nginx:alpine` and copies `public/` into the Nginx html directory.

**No test suite exists.** There is no testing framework configured.

## Architecture

### Static Site with Client-Side Enhancement

- Pure HTML/CSS/JavaScript — no frameworks, bundlers, or transpilers
- Alpine.js (v3, via CDN) provides interactivity on tool pages
- Font Awesome 6.5.1 (via CDN) for icons
- Native browser APIs (`FileReader`, `Canvas`, `Blob`, `btoa`/`atob`) handle all Base64 operations

### Component System

Header and footer are defined once in `public/assets/components.js` and injected into every page at load time via `initComponents()`. Pages use placeholder divs:

```html
<div id="header-placeholder"></div>
<main><!-- page content --></main>
<div id="footer-placeholder"></div>
```

**To update navigation or footer across all pages**, edit only `components.js` — specifically the `HeaderComponent` and `FooterComponent` template strings. Changes apply site-wide automatically.

### Routing

File-based routing: each tool lives in `public/[tool-name]/index.html`. Nginx rewrites provide clean URLs (strips `.html` and `/index.html`). Navigation is organized into 4 dropdown categories: Encoders, Decoders, Converters, Tools.

### Adding a New Tool Page

1. Create `public/[tool-name]/index.html` with header/footer placeholders
2. Include `../assets/style.css` and `../assets/components.js` in `<head>`
3. Add the tool link to `HeaderComponent` and `FooterComponent` in `components.js`
4. Add the URL to `public/sitemap.xml`
5. Add structured data (JSON-LD) for SEO — existing pages use HowTo, FAQPage, WebApplication, and BreadcrumbList schemas

### Nginx Configuration

`nginx.conf` handles: www-to-non-www redirect, HTTPS redirect (via Coolify's `X-Forwarded-Proto`), gzip compression, security headers (`X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`), static asset caching (1 year for CSS/JS/images, 1 hour for HTML), and clean URL rewrites.

### Styling

All styles are in `public/assets/style.css`. The design uses a purple gradient theme (`#667eea` to `#764ba2`) with system fonts. Mobile breakpoint is 768px.
