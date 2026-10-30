import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;
export type Project = CollectionEntry<'projects'>;

// Drafts are visible while running `npm run dev`, hidden on the live site.
const isVisible = ({ data }: Post | Project) => import.meta.env.DEV || !data.draft;

export async function getPosts() {
  return (await getCollection('posts', isVisible)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getProjects() {
  return (await getCollection('projects', isVisible)).sort((a, b) => a.data.order - b.data.order);
}

export function postUrl(post: Post) {
  return `/posts/${post.id}/`;
}

export function projectUrl(project: Project) {
  return `/projects/${project.id}/`;
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
}
