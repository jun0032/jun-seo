import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORIES } from './data/site';

const categoryKeys = Object.keys(CATEGORIES) as [keyof typeof CATEGORIES, ...(keyof typeof CATEGORIES)[]];

// Tags are lowercased so "Linux" and "linux" end up on the same tag page.
const tags = z.array(z.string()).default([]).transform((list) => list.map((t) => t.trim().toLowerCase()));

const tutorials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tutorials' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.enum(categoryKeys),
    tags,
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags,
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()).default([]),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    // Path to a screenshot in public/, e.g. /images/projects/leap-o-fate.png
    image: z.string().optional(),
    date: z.string().optional(),
    // Lower numbers show first. Projects with featured: true appear on the home page.
    order: z.number().default(100),
    featured: z.boolean().default(false),
  }),
});

export const collections = { tutorials, blog, projects };
