import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');

  return rss({
    title: 'سنا صعب',
    description: 'سنا صعب - مدونة أدبية شخصية',
    site: context.site,
    customData: '<language>ar</language>',
    items: posts
      .sort((a, b) => new Date(b.data.publishDate) - new Date(a.data.publishDate))
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: new Date(post.data.publishDate),
        link: `/blog/${post.id}/`,
      })),
  });
}
