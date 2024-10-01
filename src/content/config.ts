import { defineCollection, z } from "astro:content";
// import { CATEGORIES } from '@/data/categories'
export const CATEGORIES = [
	"Category 1",
	"Category 2",
	"Category 3",
	"Category 4",
	"Category 5",
] as const;

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
		category: z.enum(CATEGORIES),
		tags: z.array(z.string()),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog };

// const blog = defineCollection({
// 	schema: ({ image }) =>
// 		z.object({
// 			heroImage: image(),
// 		})
// })
