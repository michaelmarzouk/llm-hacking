import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { hackLocale, hackSlug } from '../i18n/utils';

/**
 * /llms.txt — concise index following the emerging llmstxt.org standard.
 * Helps language models understand the site structure and main content.
 * Auto-regenerated at every build.
 */
export const GET: APIRoute = async () => {
  const hacks = (await getCollection('hacks')).filter(h => hackLocale(h.id) === 'en');
  hacks.sort((a, b) => b.data.date.localeCompare(a.data.date));

  const byCategory = new Map<string, typeof hacks>();
  for (const h of hacks) {
    const k = h.data.category;
    if (!byCategory.has(k)) byCategory.set(k, []);
    byCategory.get(k)!.push(h);
  }

  const lines: string[] = [];
  lines.push('# LLM-Hacking');
  lines.push('');
  lines.push('> Open, community-curated database of every documented way to attack — and defend — a Large Language Model.');
  lines.push('');
  lines.push('LLM-Hacking publishes technical articles on prompt injections, jailbreaks, data extraction, adversarial inputs, sleeper agents, indirect injections, and the defensive techniques that mitigate them. Each entry has a reproducible example, lists affected models, links to original sources, and ends with concrete defenses.');
  lines.push('');
  lines.push('Editorial line: technical accuracy first, no sensationalism, defense alongside attack, responsible disclosure.');
  lines.push('');
  lines.push(`Content language: English (primary), French, Spanish, Chinese. Use the URL prefix \`/fr/\`, \`/es/\`, or \`/zh/\` for non-English versions.`);
  lines.push('');
  lines.push(`License: content is CC BY-SA 4.0 — feel free to quote, summarize, translate, attribute back to llm-hacking.com.`);
  lines.push('');
  lines.push(`## Hacks (${hacks.length} total)`);
  lines.push('');
  for (const h of hacks) {
    const slug = hackSlug(h.id);
    lines.push(`- [${h.data.title}](https://www.llm-hacking.com/hacks/${slug}): ${h.data.excerpt}`);
  }
  lines.push('');
  lines.push(`## Categories (${byCategory.size})`);
  lines.push('');
  for (const [cat, items] of Array.from(byCategory.entries()).sort((a,b) => b[1].length - a[1].length)) {
    const slug = cat.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    lines.push(`- [${cat}](https://www.llm-hacking.com/categories/${slug}): ${items.length} article${items.length > 1 ? 's' : ''}`);
  }
  lines.push('');
  lines.push('## Other pages');
  lines.push('');
  lines.push('- [About](https://www.llm-hacking.com/about): Mission, audiences, editorial line');
  lines.push('- [Categories index](https://www.llm-hacking.com/categories): Browse hacks by category');
  lines.push('- [Search](https://www.llm-hacking.com/search): Full-text search across all hacks');
  lines.push('- [Contribute](https://www.llm-hacking.com/contribute): Submit a new hack, correction, or translation');
  lines.push('- [License](https://www.llm-hacking.com/license): CC BY-SA 4.0 explained');
  lines.push('- [RSS feed](https://www.llm-hacking.com/rss.xml): English articles, latest first');
  lines.push('- [Sitemap](https://www.llm-hacking.com/sitemap-index.xml): Full site map with lastmod and hreflang');
  lines.push('');
  lines.push('## Detailed content');
  lines.push('');
  lines.push('For the full text of all articles (markdown), see [/llms-full.txt](https://www.llm-hacking.com/llms-full.txt).');
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
