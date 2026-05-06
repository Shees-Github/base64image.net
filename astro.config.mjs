import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://base64image.net',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES',
          fr: 'fr-FR',
          de: 'de-DE',
          pt: 'pt-BR',
          ja: 'ja-JP',
          zh: 'zh-CN',
          ar: 'ar-SA',
          ru: 'ru-RU',
          it: 'it-IT',
          ko: 'ko-KR',
        },
      },
    }),
  ],
  output: 'static',
  trailingSlash: 'always',
});
