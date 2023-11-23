import { defineCollection, z } from "astro:content"

const postsCollections = defineCollection({
  schema: ({image}) => z.object({
    author: z.string(),
    date: z.string(),
    image: image().optional(),
    title: z.string()
  })
})

export const collections = {
  posts: postsCollections,
}