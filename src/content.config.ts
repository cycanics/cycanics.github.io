import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(true),
    repo: z.string().optional(),
    part: z.number().optional(),
    parts: z.number().optional(),
  }),
});
export const collections = { articles };
