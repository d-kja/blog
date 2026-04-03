import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

export type PostType = "post" | "project";

export interface PostMeta {
	slug: string;
	title: string;
	summary: string;
	date: string;
	tags: string[];
	type: PostType;
	readingTime: string;
}

export interface Post extends PostMeta {
	contentHtml: string;
}

interface CachedPost extends PostMeta {
	contentHtml: string;
}

const CACHE_PATH = join(process.cwd(), ".content-cache", "posts.json");

function loadCache(): CachedPost[] {
	if (!existsSync(CACHE_PATH)) {
		throw new Error(
			"Content cache not found. Run 'bun run prebuild' first."
		);
	}

	const content = readFileSync(CACHE_PATH, "utf-8");
	return JSON.parse(content) as CachedPost[];
}

export function getPostSlugs(): string[] {
	const posts = loadCache();
	return posts.map((post) => post.slug);
}

export function getPostBySlug(slug: string): Post | null {
	const posts = loadCache();
	const post = posts.find((p) => p.slug === slug);
	return post || null;
}

export function getAllPosts(): PostMeta[] {
	const posts = loadCache();
	return posts.map(({ contentHtml: _, ...meta }) => meta);
}

export function getRecentPosts(limit = 3): PostMeta[] {
	return getAllPosts().slice(0, limit);
}
