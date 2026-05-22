import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { hackLocale, hackSlug } from '../i18n/utils';

/**
 * /llms-full.txt — full markdown of every English article concatenated.
 * Companion to /llms.txt — gives LLMs the complete content for accurate citation.
 * Auto-regenerated at every build.
 */
export const GET: APIRoute = async () => {
  const hacks = (await getCollection('hacks')).filter(h => hackLocale(h.id) === 'en');
  hacks.sort((a, b) => b.data.date.localeCompare(a.data.date));

  const parts: string[] = [];

  parts.push('# LLM-Hacking — Full content dump');
  parts.push('');
  parts.push('> Complete markdown of every published article on llm-hacking.com (English).');
  parts.push('> Updated at every deploy. Companion to /llms.txt.');
  parts.push('> License: CC BY-SA 4.0 — attribute back to https://www.llm-hacking.com');
  parts.push('');
  parts.push(`Generated: ${new Date().toISOString()}`);
  parts.push(`Total articles: ${hacks.length}`);
  parts.push('');
  parts.push('---');
  parts.push('');

  for (const h of hacks) {
    const slug = hackSlug(h.id);
    const url = `https://www.llm-hacking.com/hacks/${slug}`;
    parts.push(`# ${h.data.title}`);
    parts.push('');
    parts.push(`- URL: ${url}`);
    parts.push(`- Category: ${h.data.category}`);
    parts.push(`- Severity: ${h.data.severity}`);
    parts.push(`- Date: ${h.data.date}`);
    parts.push(`- Reading time: ${h.data.readingTime}`);
    if (h.data.author) parts.push(`- Author: ${h.data.author}`);
    if (h.data.affects?.length) parts.push(`- Affects: ${h.data.affects.join(', ')}`);
    parts.push('');
    parts.push(`**Excerpt:** ${h.data.excerpt}`);
    parts.push('');
    parts.push(h.body.trim());
    parts.push('');
    if (h.data.sources?.length) {
      parts.push('## Sources');
      parts.push('');
      for (const s of h.data.sources) parts.push(`- ${s}`);
      parts.push('');
    }
    parts.push('---');
    parts.push('');
  }

  return new Response(parts.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
