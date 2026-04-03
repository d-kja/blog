import { Elysia, t } from "elysia";
import { getAllPosts, getPostBySlug, getRecentPosts } from "@/lib/posts";

const app = new Elysia({ prefix: "/api" })
	.get("/posts", () => {
		return getAllPosts();
	})
	.get("/posts/recent", ({ query }) => {
		const limit = query.limit ? Number.parseInt(query.limit) : 3;
		return getRecentPosts(limit);
	}, {
		query: t.Object({
			limit: t.Optional(t.String()),
		}),
	})
	.get("/posts/:slug", ({ params, set }) => {
		const post = getPostBySlug(params.slug);

		if (!post) {
			set.status = 404;
			return { error: "Post not found" };
		}

		return post;
	});

export const GET = app.handle;
export const POST = app.handle;
