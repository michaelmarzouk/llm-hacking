import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { hackLocale, hackSlug } from '../i18n/utils';

/**
 * Build-time generated search index — includes all locales.
 * Each entry has `locale` so the client can filter by current language.
 * Endpoint: /search-index.json
 */
export const GET: APIRoute = async () => {
  const hacks = await getCollection('hacks');
  const docs = hacks.map(h => {
    const locale = hackLocale(h.id);
    const slug = hackSlug(h.id);
    const url = locale === 'en' ? `/hacks/${slug}` : `/${locale}/hacks/${slug}`;
    return {
      id: h.id,
      locale,
      url,
      title: h.data.title,
      excerpt: h.data.excerpt,
      category: h.data.category,
      severity: h.data.severity,
      date: h.data.date,
      body: h.body.slice(0, 2000),
    };
  });
  return new Response(JSON.stringify(docs), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
