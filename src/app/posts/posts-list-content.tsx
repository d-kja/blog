"use client";

import { Heading } from "@/components/shards/animated/heading";
import { Div } from "@/components/shards/animated/div";
import { P } from "@/components/shards/animated/paragraph";
import { Post } from "@/components/shards/animated/post";
import { animations } from "@/lib/animations";
import type { PostMeta, PostType } from "@/lib/posts";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, FolderOpenDot, Search } from "lucide-react";
import { useMemo, useState } from "react";

type FilterType = "all" | PostType;

interface PostsListContentProps {
	posts: PostMeta[];
}

export function PostsListContent({ posts }: PostsListContentProps) {
	const [filter, setFilter] = useState<FilterType>("all");
	const [searchQuery, setSearchQuery] = useState("");

	const filteredPosts = useMemo(() => {
		const query = searchQuery.toLowerCase();

		return posts.filter((post) => {
			const matchesFilter = filter === "all" || post.type === filter;
			const matchesSearch =
				!query ||
				post.title.toLowerCase().includes(query) ||
				post.summary.toLowerCase().includes(query) ||
				post.tags.some((tag) => tag.toLowerCase().includes(query));

			return matchesFilter && matchesSearch;
		});
	}, [posts, filter, searchQuery]);

	const postCount = posts.filter((p) => p.type === "post").length;
	const projectCount = posts.filter((p) => p.type === "project").length;

	return (
		<main className="my-16 flex flex-col max-w-screen-lg mx-auto flex-1 w-full px-4">
			<header className="mb-12">
				<Heading
					primary
					initial="exit"
					animate="enter"
					variants={animations.fade({ delay: 0.25, y: 0.5 })}
					className="text-3xl md:text-4xl font-bold mb-4"
				>
					Posts & Projects
				</Heading>

				<P
					initial="exit"
					animate="enter"
					variants={animations.fade({ delay: 0.4, y: 0.75 })}
					className="lousy-text text-lg"
				>
					A collection of my writings, thoughts, and project showcases. Feel
					free to explore!
				</P>
			</header>

			<Div
				initial="exit"
				animate="enter"
				variants={animations.fade({ delay: 0.55, y: 1 })}
				className="flex flex-col sm:flex-row gap-4 mb-8"
			>
				<div className="relative flex-1">
					<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40" />
					<input
						type="text"
						placeholder="Search posts..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="w-full pl-10 pr-4 py-2.5 bg-secondary/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all placeholder:text-primary/40"
					/>
				</div>

				<div className="flex gap-2">
					<FilterButton
						active={filter === "all"}
						onClick={() => setFilter("all")}
						count={posts.length}
					>
						All
					</FilterButton>
					<FilterButton
						active={filter === "post"}
						onClick={() => setFilter("post")}
						icon={<FileText className="w-3.5 h-3.5" />}
						count={postCount}
					>
						Posts
					</FilterButton>
					<FilterButton
						active={filter === "project"}
						onClick={() => setFilter("project")}
						icon={<FolderOpenDot className="w-3.5 h-3.5" />}
						count={projectCount}
					>
						Projects
					</FilterButton>
				</div>
			</Div>

			<Div
				initial="exit"
				animate="enter"
				variants={animations.fade({ delay: 0.7, y: 1.25 })}
				className="flex flex-col divide-y border-y border-border"
			>
				<AnimatePresence mode="popLayout">
					{filteredPosts.length > 0 ? (
						filteredPosts.map((post, idx) => (
							<motion.div
								key={post.slug}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ delay: idx * 0.05, duration: 0.2 }}
								layout
							>
								<Post
									title={post.title}
									summary={post.summary}
									type={post.type}
									href={`/posts/${post.slug}`}
								/>
							</motion.div>
						))
					) : (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="py-12 text-center text-primary/50"
						>
							<p>No posts found matching your criteria.</p>
						</motion.div>
					)}
				</AnimatePresence>
			</Div>

			<Div
				initial="exit"
				animate="enter"
				variants={animations.fade({ delay: 0.85 })}
				className="mt-4 text-sm text-primary/40"
			>
				Showing {filteredPosts.length} of {posts.length} entries
			</Div>
		</main>
	);
}

interface FilterButtonProps {
	active: boolean;
	onClick: () => void;
	children: React.ReactNode;
	icon?: React.ReactNode;
	count: number;
}

function FilterButton({
	active,
	onClick,
	children,
	icon,
	count,
}: FilterButtonProps) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={cn(
				"inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all",
				active
					? "bg-primary text-primary-foreground"
					: "bg-secondary/30 text-primary/60 hover:bg-secondary/50 hover:text-primary"
			)}
		>
			{icon}
			{children}
			<span
				className={cn(
					"ml-1 text-xs",
					active ? "text-primary-foreground/70" : "text-primary/40"
				)}
			>
				({count})
			</span>
		</button>
	);
}
