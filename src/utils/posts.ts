import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'tutorials'> | CollectionEntry<'blog'>;

const newestFirst = (a: Post, b: Post) => b.data.date.valueOf() - a.data.date.valueOf();

// Drafts are visible while running `npm run dev`, hidden on the live site.
const isVisible = ({ data }: Post) => import.meta.env.DEV || !data.draft;

export async function getTutorials() {
  return (await getCollection('tutorials', isVisible)).sort(newestFirst);
}

export async function getBlogPosts() {
  return (await getCollection('blog', isVisible)).sort(newestFirst);
}

export async function getAllPosts() {
  return [...(await getTutorials()), ...(await getBlogPosts())].sort(newestFirst);
}

export async function getProjects() {
  return (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);
}

export function postUrl(post: Post) {
  return `/${post.collection}/${post.id}/`;
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
}
