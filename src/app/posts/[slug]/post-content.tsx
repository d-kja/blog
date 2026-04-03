"use client";

import { Heading } from "@/components/shards/animated/heading";
import { Div } from "@/components/shards/animated/div";
import { P } from "@/components/shards/animated/paragraph";
import { MarkdownRenderer } from "@/components/shards/markdown-renderer";
import { animations } from "@/lib/animations";
import type { Post } from "@/lib/posts";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import dayjs from "dayjs";

interface PostContentProps {
	post: Post;
}

export function PostContent({ post }: PostContentProps) {
	const formattedDate = dayjs(post.date).format("MMMM D, YYYY");

	return (
		<main className="my-16 flex flex-col max-w-screen-md mx-auto flex-1 w-full px-4">
			<Div
				initial="exit"
				animate="enter"
				variants={animations.fade({ delay: 0.25 })}
			>
				<Link
					href="/posts"
					className="inline-flex items-center gap-2 text-primary/60 hover:text-primary transition-colors mb-8 group"
				>
					<ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
					<span>Back to posts</span>
				</Link>
			</Div>

			<header className="mb-8 pb-8 border-b border-border">
				<Heading
					primary
					initial="exit"
					animate="enter"
					variants={animations.fade({ delay: 0.5, y: 1 })}
					className="text-3xl md:text-4xl font-bold mb-4"
				>
					{post.title}
				</Heading>

				<P
					initial="exit"
					animate="enter"
					variants={animations.fade({ delay: 0.65, y: 1.25 })}
					className="lousy-text text-lg mb-4"
				>
					{post.summary}
				</P>

				<Div
					initial="exit"
					animate="enter"
					variants={animations.fade({ delay: 0.8, y: 1.5 })}
					className="flex flex-wrap items-center gap-4 text-sm text-primary/50"
				>
					<span className="inline-flex items-center gap-1.5">
						<Calendar className="w-4 h-4" />
						{formattedDate}
					</span>

					<span className="inline-flex items-center gap-1.5">
						<Clock className="w-4 h-4" />
						{post.readingTime}
					</span>

					{post.tags.length > 0 && (
						<span className="inline-flex items-center gap-1.5">
							<Tag className="w-4 h-4" />
							{post.tags.join(", ")}
						</span>
					)}
				</Div>
			</header>

			<Div
				initial="exit"
				animate="enter"
				variants={animations.fade({ delay: 1, y: 2 })}
			>
				<MarkdownRenderer html={post.contentHtml} />
			</Div>

			<Div
				initial="exit"
				animate="enter"
				variants={animations.fade({ delay: 1.25 })}
				className="mt-12 pt-8 border-t border-border"
			>
				<Link
					href="/posts"
					className="inline-flex items-center gap-2 text-primary/60 hover:text-primary transition-colors group"
				>
					<ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
					<span>Back to all posts</span>
				</Link>
			</Div>
		</main>
	);
}
