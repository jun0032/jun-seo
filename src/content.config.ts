import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { POST_TYPES, PROJECT_CATEGORIES } from './data/site';

type Keys<T> = [keyof T & string, ...(keyof T & string)[]];
const keysOf = <T extends object>(obj: T) => Object.keys(obj) as Keys<T>;

// Tags are lowercased so "Linux" and "linux" end up on the same tag page.
const tags = z.array(z.string()).default([]).transform((list) => list.map((t) => t.trim().toLowerCase()));

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    type: z.enum(keysOf(POST_TYPES)),
    tags,
    draft: z.boolean().default(false),
  }),
});

// Each project is a folder: src/content/projects/<slug>/index.md plus its photos.
const projects = defineCollection({
  loader: glob({
    pattern: '*/index.md',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.replace(/\/index\.md$/, ''),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      categories: z.array(z.enum(keysOf(PROJECT_CATEGORIES))).default([]),
      tech: z.array(z.string()).default([]),
      github: z.string().url().optional(),
      demo: z.string().url().optional(),
      // Photo next to index.md, e.g. ./cover.jpg. Leave out to show the placeholder.
      cover: image().optional(),
      gallery: z.array(z.object({ image: image(), caption: z.string().optional() })).default([]),
      date: z.string().optional(),
      // Lower numbers show first. Projects with featured: true appear on the home page.
      order: z.number().default(100),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { posts, projects };
