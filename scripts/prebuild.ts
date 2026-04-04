import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { marked } from "marked";

const POSTS_DIR = join(import.meta.dir, "..", "public", "posts");
const CACHE_DIR = join(import.meta.dir, "..", ".content-cache");

interface CachedPost {
	slug: string;
	title: string;
	summary: string;
	date: string;
	tags: string[];
	type: "post" | "project";
	readingTime: string;
	contentHtml: string;
}

function parseFrontmatter(fileContent: string): {
	meta: Record<string, unknown>;
	content: string;
} {
	const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
	const match = fileContent.match(frontmatterRegex);

	if (!match) {
		return { meta: {}, content: fileContent };
	}

	const [, frontmatter, body] = match;
	const meta: Record<string, unknown> = {};

	for (const line of frontmatter.split("\n")) {
		const colonIndex = line.indexOf(":");
		if (colonIndex === -1) continue;

		const key = line.slice(0, colonIndex).trim();
		let value = line.slice(colonIndex + 1).trim();

		if (
			(value.startsWith('"') && value.endsWith('"')) ||
			(value.startsWith("'") && value.endsWith("'"))
		) {
			value = value.slice(1, -1);
		}

		if (value.startsWith("[") && value.endsWith("]")) {
			const items = value
				.slice(1, -1)
				.split(",")
				.map((item) => item.trim().replace(/['"]/g, ""))
				.filter(Boolean);
			meta[key] = items;
		} else {
			meta[key] = value;
		}
	}

	return { meta, content: body.trim() };
}

function calculateReadingTime(content: string): string {
	const words = content.split(/\s+/).filter(Boolean).length;
	const minutes = Math.max(1, Math.ceil(words / 200));
	return `${minutes} min read`;
}

function processPost(slug: string): CachedPost | null {
	const filePath = join(POSTS_DIR, `${slug}.md`);

	if (!existsSync(filePath)) return null;

	const fileContent = readFileSync(filePath, "utf-8");
	const { meta, content } = parseFrontmatter(fileContent);

	const type = meta.type === "project" ? "project" : "post";

	return {
		slug,
		title: (meta.title as string) || slug,
		summary: (meta.summary as string) || "",
		date: (meta.date as string) || new Date().toISOString().split("T")[0],
		tags: (meta.tags as string[]) || [],
		type,
		readingTime: calculateReadingTime(content),
		contentHtml: marked(content) as string,
	};
}

function main() {
	console.log("Pre-building content cache...");

	if (!existsSync(POSTS_DIR)) {
		console.log("No posts directory found.");
		return;
	}

	if (!existsSync(CACHE_DIR)) {
		mkdirSync(CACHE_DIR, { recursive: true });
	}

	const slugs = readdirSync(POSTS_DIR)
		.filter((file) => file.endsWith(".md"))
		.map((file) => file.replace(/\.md$/, ""));

	const posts: CachedPost[] = [];

	for (const slug of slugs) {
		const post = processPost(slug);
		if (post) {
			posts.push(post);
			console.log(`  Processed: ${slug}`);
		}
	}

	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	writeFileSync(join(CACHE_DIR, "posts.json"), JSON.stringify(posts, null, 2));

	console.log(`\nCached ${posts.length} posts to .content-cache/posts.json`);
}

main();
