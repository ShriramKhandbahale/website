import { defineCollection, z } from "astro:content";

const articlesCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        authors: z.array( 
            z.object({
                name: z.string(),
                url: z.string().url().optional(), 
            })
        ),
        tags: z.array(z.string()).optional(),
        banner: z.object({
            url: z.string(),
            alt: z.string().optional(),
            width: z.number().optional(),
            height: z.number().optional(),
        }).optional(),
    }),
});

const blogsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        authors: z.array(
            z.object({
                name: z.string(),
                url: z.string().url().optional(),
            })
        ),
        tags: z.array(z.string()).optional(),
        banner: z.object({
            url: z.string(),
            alt: z.string().optional(),
            width: z.number().optional(),
            height: z.number().optional(),
        }).optional(),
    }),
});

export const collections = {
    articles: articlesCollection,
    blogs: blogsCollection,
};
