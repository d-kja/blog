import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { PostsListContent } from "./posts-list-content";

export const metadata: Metadata = {
	title: "Posts",
	description:
		"Browse all blog posts and project showcases. Technical writings, coding experiments, and development stories.",
	openGraph: {
		title: "Posts | D-kja",
		description: "Browse all blog posts and project showcases.",
	},
};

export default function PostsPage() {
	const posts = getAllPosts();

	return <PostsListContent posts={posts} />;
}
