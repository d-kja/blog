"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Folder, Star } from "lucide-react";
import { motion } from "framer-motion";

import { Heading } from "@/components/shards/animated/heading";
import { Div } from "@/components/shards/animated/div";
import { P } from "@/components/shards/animated/paragraph";
import { animations } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { PostMeta } from "@/lib/posts";
import dayjs from "dayjs";

interface DescriptionProps {
	recentPosts: PostMeta[];
}

const FEATURED_PROJECTS = [
	{
		title: "NIKKE on Linux",
		description: "Guide for running NIKKE under Linux",
		href: "https://gist.github.com/d-kja/74633df5f2d6e55cb2a77c3f9d6acece",
		stars: 29,
		type: "gist" as const,
	},
	{
		title: "Dotfiles",
		description: "Hyprland, Neovim, and more",
		href: "https://github.com/d-kja/dotfiles",
		stars: 1,
		type: "repo" as const,
	},
	{
		title: "Neovim Config",
		description: "Personal Neovim setup",
		href: "https://github.com/d-kja/nvim",
		stars: 0,
		type: "repo" as const,
	},
];

export const Description = ({ recentPosts }: DescriptionProps) => {
	const startDate = dayjs("2020-03-01");
	const currentDate = dayjs();
	const years = currentDate.diff(startDate, "years", false);

	return (
		<div className="flex flex-col gap-10 col-span-2">
			{/* Intro */}
			<section className="flex flex-col gap-4">
				<Heading
					initial="exit"
					animate="enter"
					variants={animations.fade({ delay: 0.5 })}
					className="font-bold text-2xl"
				>
					Hey there!
				</Heading>

				<Div
					initial="exit"
					animate="enter"
					variants={animations.fade({ delay: 0.65, y: 0.5 })}
					className="space-y-3"
				>
					<P className="lousy-text">
						I'm a software engineer from Brazil with {years}+ years of
						experience building things for the web. I enjoy crafting clean,
						performant applications and exploring new technologies.
					</P>

					<P className="lousy-text">
						Currently diving into systems programming with Rust while
						maintaining my love for the TypeScript ecosystem. When I'm not
						coding, you'll find me gaming or enjoying coffee on rainy days.
					</P>
				</Div>

				<Div
					initial="exit"
					animate="enter"
					variants={animations.fade({ delay: 0.8, y: 0.75 })}
					className="flex gap-3 mt-2"
				>
					<Link
						href="/about"
						className={cn(
							"text-sm font-medium flex items-center gap-1.5",
							"text-primary/60 hover:text-primary",
							"transition-colors duration-200"
						)}
					>
						More about me
						<ArrowRight className="w-3.5 h-3.5" />
					</Link>
					<span className="text-primary/20">·</span>
					<Link
						href="/projects"
						className={cn(
							"text-sm font-medium flex items-center gap-1.5",
							"text-primary/60 hover:text-primary",
							"transition-colors duration-200"
						)}
					>
						View projects
						<ArrowRight className="w-3.5 h-3.5" />
					</Link>
				</Div>
			</section>

			{/* Featured Projects */}
			<section className="flex flex-col gap-4">
				<Div
					initial="exit"
					animate="enter"
					variants={animations.fade({ delay: 0.9, y: 1 })}
					className="flex items-center justify-between"
				>
					<h2 className="font-bold text-lg">Featured</h2>
					<Link
						href="/projects"
						className={cn(
							"text-xs font-medium flex items-center gap-1",
							"text-primary/40 hover:text-primary/70",
							"transition-colors duration-200"
						)}
					>
						All projects
						<ArrowRight className="w-3 h-3" />
					</Link>
				</Div>

				<Div
					initial="exit"
					animate="enter"
					variants={animations.fade({ delay: 1, y: 1.25 })}
					className="grid gap-3"
				>
					{FEATURED_PROJECTS.map((project, idx) => (
						<ProjectItem key={project.title} project={project} index={idx} />
					))}
				</Div>
			</section>

			{/* Recent Posts */}
			<section className="flex flex-col gap-4">
				<Div
					initial="exit"
					animate="enter"
					variants={animations.fade({ delay: 1.15, y: 1.5 })}
					className="flex items-center justify-between"
				>
					<h2 className="font-bold text-lg">Recent posts</h2>
					<Link
						href="/posts"
						className={cn(
							"text-xs font-medium flex items-center gap-1",
							"text-primary/40 hover:text-primary/70",
							"transition-colors duration-200"
						)}
					>
						View all
						<ArrowRight className="w-3 h-3" />
					</Link>
				</Div>

				<Div
					initial="exit"
					animate="enter"
					variants={animations.fade({ delay: 1.25, y: 1.75 })}
					className="flex flex-col gap-2"
				>
					{recentPosts.map((post, idx) => (
						<PostItem key={post.slug} post={post} index={idx} />
					))}
				</Div>
			</section>
		</div>
	);
};

interface ProjectItemProps {
	project: (typeof FEATURED_PROJECTS)[number];
	index: number;
}

function ProjectItem({ project, index }: ProjectItemProps) {
	const Icon = project.type === "gist" ? BookOpen : Folder;

	return (
		<Link
			href={project.href}
			target="_blank"
			rel="noopener noreferrer"
		>
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 1.2 + index * 0.08,
					duration: 0.3,
					ease: [0.25, 0.1, 0.25, 1],
				}}
				whileHover={{ x: 4 }}
				className={cn(
					"group p-3 -mx-3 rounded-lg",
					"hover:bg-secondary/30",
					"transition-colors duration-200"
				)}
			>
				<div className="flex items-center gap-3">
					<div className="p-2 rounded-lg bg-secondary/50 text-primary/40 group-hover:text-primary/60 transition-colors">
						<Icon className="w-4 h-4" />
					</div>
					<div className="flex-1 min-w-0">
						<div className="flex items-center gap-2">
							<h3 className="font-medium text-sm group-hover:text-primary transition-colors truncate">
								{project.title}
							</h3>
							{project.stars > 0 && (
								<span className="flex items-center gap-0.5 text-[10px] text-primary/40">
									<Star className="w-3 h-3" />
									{project.stars}
								</span>
							)}
						</div>
						<p className="text-xs text-primary/40 truncate">
							{project.description}
						</p>
					</div>
					<ArrowRight className="w-4 h-4 text-primary/20 group-hover:text-primary/50 transition-colors shrink-0" />
				</div>
			</motion.div>
		</Link>
	);
}

interface PostItemProps {
	post: PostMeta;
	index: number;
}

function PostItem({ post, index }: PostItemProps) {
	return (
		<Link href={`/posts/${post.slug}`}>
			<motion.article
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 1.5 + index * 0.08,
					duration: 0.3,
					ease: [0.25, 0.1, 0.25, 1],
				}}
				whileHover={{ x: 4 }}
				className={cn(
					"group p-3 -mx-3 rounded-lg",
					"hover:bg-secondary/30",
					"transition-colors duration-200"
				)}
			>
				<div className="flex items-start justify-between gap-4">
					<div className="flex-1 min-w-0">
						<h3 className="font-medium text-sm group-hover:text-primary transition-colors truncate">
							{post.title}
						</h3>
						<p className="text-xs text-primary/40 mt-0.5 line-clamp-1">
							{post.summary}
						</p>
					</div>
					<span className="text-[10px] text-primary/30 shrink-0 pt-0.5">
						{dayjs(post.date).format("MMM D")}
					</span>
				</div>
			</motion.article>
		</Link>
	);
}
