import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: 'خدمات الذكاء الاصطناعي | المنصة العربية الشاملة لتقنيات AI',
    description: 'خدمات الذكاء الاصطناعي هي وجهتك الأولى لاكتشاف وتطبيق أحدث تقنيات AI في العالم العربي.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>ar-sa</language>`,
  });
}
