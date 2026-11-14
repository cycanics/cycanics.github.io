import rss from '@astrojs/rss';
import { published, label } from '../lib';
export async function GET(context) {
  const items = await published();
  return rss({
    title: "cycanic's workshop",
    description: 'AI ideas tested on real systems: measured results, code included.',
    site: context.site,
    items: items.map((a) => ({ title: label(a), description: a.data.description, pubDate: a.data.date, link: `/articles/${a.id}/` })),
  });
}
