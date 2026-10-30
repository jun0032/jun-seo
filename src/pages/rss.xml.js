import rss from '@astrojs/rss';
import { SITE } from '../data/site';
import { getAllPosts, postUrl } from '../utils/posts';

export async function GET(context) {
  const posts = await getAllPosts();
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: postUrl(post),
      categories: post.data.tags,
    })),
  });
}
