import { getCollection } from 'astro:content';
// Drafts are visible in `astro dev`, never in a production build.
// Newest first; within one date, parts of a series in reading order.
export const published = async () =>
  (await getCollection('articles', (a) => import.meta.env.DEV || !a.data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf() || (a.data.part ?? 0) - (b.data.part ?? 0),
  );
export const label = (a: { data: { title: string; part?: number; parts?: number } }) =>
  a.data.part && a.data.parts ? `[Part ${a.data.part}/${a.data.parts}] ${a.data.title}` : a.data.title;
