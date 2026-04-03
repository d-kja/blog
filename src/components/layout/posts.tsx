"use client";

import { animations } from "@/lib/animations";
import type { PostMeta } from "@/lib/posts";
import { Post } from "../shards/animated/post";

interface PostsProps {
	posts: PostMeta[];
}

export const Posts = ({ posts }: PostsProps) => {
	return (
		<>
			{posts.map((post, idx) => (
				<Post
					key={post.slug}
					title={post.title}
					summary={post.summary}
					type={post.type}
					href={`/posts/${post.slug}`}
					initial="exit"
					animate="enter"
					variants={animations.fade({ delay: (idx + 1.5) * 0.75, y: 1.5 })}
				/>
			))}
		</>
	);
};
