import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    image: z.string().optional(),
    github: z.string().optional(),
    live: z.string().optional(),
    slug: z.string(),
    tech: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
