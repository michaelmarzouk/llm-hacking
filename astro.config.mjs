import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.llm-hacking.com',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    assets: '_assets',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'zh'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', fr: 'fr-FR', es: 'es-ES', zh: 'zh-CN' },
      },
    }),
  ],
  vite: {
    ssr: { noExternal: ['@fontsource/*'] },
  },
});
