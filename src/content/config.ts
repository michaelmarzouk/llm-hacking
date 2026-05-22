import { defineCollection, z } from 'astro:content';

const hacks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.enum([
      'PROMPT INJECTION',
      'JAILBREAK',
      'DATA LEAK',
      'INDIRECT INJECTION',
      'ADVERSARIAL',
      'RESEARCH',
    ]),
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
