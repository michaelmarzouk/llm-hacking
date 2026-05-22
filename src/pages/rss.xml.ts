import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { hackLocale, hackSlug } from '../i18n/utils';

export async function GET(context: APIContext) {
  const hacks = (await getCollection('hacks')).filter(h => hackLocale(h.id) === 'en');
  hacks.sort((a, b) => b.data.date.localeCompare(a.data.date));

  return rss({
    title: 'LLM-Hacking',
    description: 'Open database of LLM attacks, jailbreaks, and defenses.',
    site: context.site ?? 'https://www.llm-hacking.com',
    items: hacks.map(h => ({
      title: h.data.title,
      description: h.data.excerpt,
      pubDate: new Date(h.data.date),
      link: `/hacks/${hackSlug(h.id)}`,
      categories: [h.data.category],
    })),
  });
}
