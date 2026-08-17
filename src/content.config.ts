import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/posts" }),
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
