import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default("Dear Wander"),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    faq: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })).optional(),
    sources: z.array(z.object({
      title: z.string(),
      author: z.string(),
      year: z.union([z.number(), z.string()]).optional(),
      journal: z.string().optional(),
      doi: z.string().optional(),
      url: z.string().optional(),
      note: z.string().optional(),
    })).optional(),
    showCalculator: z.boolean().default(false),
  }),
});

export const collections = { blog };
