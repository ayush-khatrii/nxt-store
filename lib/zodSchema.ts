import { z } from 'zod';

export const productScehma = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().min(1),
  status: z.enum(["published", "archived"]),
  images: z.array(z.string()).min(1, "Please upload at least one image"),
  category: z.string().optional(),
  isFeatured: z.boolean().optional()
});

export const categoryScehma = z.object({
  name: z.string(),
  description: z.string().optional(),
})

export const bannerScehma = z.object({
  heroBanners: z.array(z.string()).min(1, "Please upload at least one image").max(3, "Maximum 3 hero banner images allowed"),
  bannerImage: z.string().min(1, "Please upload at least one image"),
});