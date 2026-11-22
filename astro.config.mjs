// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dearwander.com',
  output: 'static',
  // Google was indexing /page and /page/ as separate URLs, splitting impressions
  // and authority across both. Internal links already all use the trailing slash.
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // /app/ es solo una redirección a la App Store, con noindex.
      filter: (page) => !page.endsWith('/app/'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es', it: 'it' },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'it'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});