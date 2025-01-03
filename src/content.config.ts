import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/posts"
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        author: z.string(),
        tags: z.array(z.string())
    }),
});

export const collections = { blog };