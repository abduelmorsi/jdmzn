import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  // Each post is a folder holding its index.md and its images, so the CMS can write
  // entry-relative image paths that Astro is able to optimize. Strip the trailing
  // "/index" so entry IDs stay the bare slug and URLs are unaffected.
  loader: glob({
    pattern: '**/[^_]*.md',
    base: "./src/content/posts",
    generateId: ({ entry }) => entry.replace(/\/index\.md$/, '').replace(/\.md$/, ''),
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.union([z.string(), z.date()]).transform((val) => 
      val instanceof Date ? val.toISOString().split('T')[0] : val
    ),
    coverImage: image().optional(),
  }),
});

export const collections = { posts };
