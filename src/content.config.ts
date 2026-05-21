import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const i18nCollection = defineCollection({
  loader: glob({ pattern: "**/*.{json,yaml,yml}", base: "./src/content/i18n" }),
  schema: z.object({
    reviews: z
      .array(
        z.object({
          author: z.string(),
          text: z.string(),
          image: z.string(),
          rating: z.number().min(1).max(5),
        })
      )
      .optional(),
    photoAltPrefix: z.string().optional(),
    sectionTitle: z.string().optional(),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    slug: z.string().optional(),
    title: z.string(),
    description: z.string().optional(),
    excerpt: z.string().optional(),
    pubDate: z.coerce.date(),
    author: z.string().optional(),
    role: z.string().optional(),
    authorImage: z.string(),
    authorImageAlt: z.string(),
    cardImage: z.string(),
    cardImageAlt: z.string(),
  }),
});

const insightsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/insights" }),
  schema: z.object({
    slug: z.string().optional(),
    title: z.string(),
    description: z.string().optional(),
    cardImage: z.string(),
    cardImageAlt: z.string(),
  }),
});

const productsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/products" }),
  schema: z.object({
    slug: z.string().optional(),
    description: z.string().optional(),
    main: z.object({
      imgCard: z.string(),
      imgAlt: z.string(),
    }),
  }),
});

export const collections = {
  i18n: i18nCollection,
  blog: blogCollection,
  insights: insightsCollection,
  products: productsCollection,
};