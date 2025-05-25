import { defineCollection, z } from 'astro:content';

const i18nCollection = defineCollection({
  type: 'data',
  schema: z.object({
    reviews: z.array(z.object({
      author: z.string(),
      text: z.string(),
      image: z.string(),
      rating: z.number().min(1).max(5)
    })).optional(),
    photoAltPrefix: z.string().optional(),
    sectionTitle: z.string().optional()
  })
});

export const collections = {
  'i18n': i18nCollection,
};
