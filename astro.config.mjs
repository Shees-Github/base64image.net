import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://base64image.net',
  integrations: [sitemap()],
  output: 'static',
  trailingSlash: 'always',
});
