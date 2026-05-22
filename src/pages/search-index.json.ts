import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

/**
 * Build-time generated JSON index of all hacks for client-side search.
 * Endpoint: /search-index.json
 */
export const GET: APIRoute = async () => {
  const hacks = await getCollection('hacks');
  const docs = hacks.map(h => ({
    id: h.id,
    url: `/hacks/${h.id}`,
    title: h.data.title,
    excerpt: h.data.excerpt,
    category: h.data.category,
    severity: h.data.severity,
    date: h.data.date,
    body: h.body.slice(0, 2000),
  }));
  return new Response(JSON.stringify(docs), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
