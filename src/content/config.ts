import { defineCollection, z } from 'astro:content';

/**
 * Categories actuellement utilisées sur le site (informatif) :
 *  - PROMPT INJECTION
 *  - JAILBREAK
 *  - DATA LEAK
 *  - INDIRECT INJECTION
 *  - ADVERSARIAL
 *  - RESEARCH
 *  - DEFENSE
 *  - SUPPLY CHAIN
 *  - GOVERNANCE
 *  - AGENTS
 *
 * Le champ accepte n'importe quelle catégorie (string libre) — les nouvelles
 * apparaissent automatiquement sur /categories. Maintenir la liste ci-dessus
 * uniquement comme référence pour les rédacteurs.
 */
const hacks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string().min(1),
    severity: z.enum(['crit', 'med', 'low']),
    date: z.string(),
    readingTime: z.string(),
    author: z.string().optional(),
    affects: z.array(z.string()).optional(),
    sources: z.array(z.string()).optional(),
    isNew: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = { hacks };
