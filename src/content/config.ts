import { defineCollection, z } from "astro:content"

const postsCollections = defineCollection({
  schema: ({image}) => z.object({
    author: z.string(),
    date: z.string(),
    title: z.string(),
    url: z.string().url().optional(),
    categories: z.string().array().optional(),
    // add to frontmatter + post/slug astro templates when required
    image: image().optional(),
    cover: image().optional(),
    coverAlt: z.string().optional()
  })
})

export const collections = {
  posts: postsCollections,
}