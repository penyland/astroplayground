import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string(),
    coverImage: z.string().optional(),
    categories: z.array(z.string()),
    tags: z.array(z.string()),
  })
});

export const collections = { posts: postsCollection };