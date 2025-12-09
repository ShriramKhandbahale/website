import { defineCollection, z } from "astro:content";

const articlesCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        author: z.array(
            z.object({
                name: z.string(),
                url: z.string().url(),
            })
        ),
        tags: z.array(z.string()).optional(),
    })
})

const blogsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
    })
})

export const collections = {
    articles: articlesCollection,
    blogs: blogsCollection,
}