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
      filter: (page) =>
        !page.includes('/search-index') &&
        !page.endsWith('/search') &&
        !page.endsWith('/search/'),
      serialize(item) {
        const url = item.url;
        const today = new Date().toISOString().split('T')[0];

        // Default lastmod applied to every URL — overridden below where needed.
        item.lastmod = today;

        if (/\/hacks\/[^/]+\/?$/.test(url) || /\/(fr|es|zh)\/hacks\/[^/]+\/?$/.test(url)) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (/\/hacks\/?$/.test(url) || /\/(fr|es|zh)\/hacks\/?$/.test(url)) {
          item.priority = 0.9;
          item.changefreq = 'daily';
        } else if (/\/categories\/?$/.test(url) || /\/(fr|es|zh)\/categories\/?$/.test(url)) {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        } else if (/\/categories\/[^/]+\/?$/.test(url)) {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        } else if (url === 'https://www.llm-hacking.com/' || /^https:\/\/www\.llm-hacking\.com\/(fr|es|zh)\/?$/.test(url)) {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (/\/about\/?$/.test(url) || /\/contribute\/?$/.test(url)) {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        } else if (/\/license\/?$/.test(url)) {
          item.priority = 0.3;
          item.changefreq = 'yearly';
        } else {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }

        return item;
      },
    }),
  ],
  vite: {
    ssr: { noExternal: ['@fontsource/*'] },
  },
});
