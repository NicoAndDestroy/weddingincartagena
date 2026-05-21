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

export const collections = {
  i18n: i18nCollection,
};