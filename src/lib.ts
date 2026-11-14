import { getCollection } from 'astro:content';
// Drafts are visible in `astro dev`, never in a production build.
export const published = async () =>
  (await getCollection('articles', (a) => import.meta.env.DEV || !a.data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
