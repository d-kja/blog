import type { MetadataRoute } from "next";
import { getPostSlugs } from "@/lib/posts";

const BASE_URL = "https://d-kja.dev";

export default function sitemap(): MetadataRoute.Sitemap {
	const slugs = getPostSlugs();

	const postEntries = slugs.map((slug) => ({
		url: `${BASE_URL}/posts/${slug}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as const,
		priority: 0.8,
	}));

	return [
		{
			url: BASE_URL,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${BASE_URL}/posts`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: `${BASE_URL}/projects`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: `${BASE_URL}/about`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		...postEntries,
	];
}
