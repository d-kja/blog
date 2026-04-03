"use client";

import { Heading } from "@/components/shards/animated/heading";
import { Div } from "@/components/shards/animated/div";
import { P } from "@/components/shards/animated/paragraph";
import { animations } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import {
	ArrowUpRight,
	BookOpen,
	Braces,
	Code2,
	Cog,
	ExternalLink,
	FileCode,
	FileText,
	Folder,
	Github,
	Keyboard,
	Monitor,
	Settings,
	Star,
	Terminal,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import type { Project } from "./page";

const LANGUAGE_ICONS: Record<string, typeof Code2> = {
	Rust: Cog,
	Go: Braces,
	TypeScript: FileCode,
	JavaScript: FileCode,
	Lua: Settings,
	"C#": Code2,
	"C++": Terminal,
	QML: Monitor,
	Markdown: FileText,
};

const PROJECT_ICONS: Record<string, typeof Code2> = {
	dotfiles: Settings,
	nvim: Terminal,
	cursors: Monitor,
	deck: Keyboard,
	"nikke-linux": BookOpen,
};

interface ProjectsGalleryProps {
	projects: Project[];
}

export function ProjectsGallery({ projects }: ProjectsGalleryProps) {
	const featured = projects.filter((p) => p.featured);
	const others = projects.filter((p) => !p.featured);

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
					Projects
				</Heading>

				<P
					initial="exit"
					animate="enter"
					variants={animations.fade({ delay: 0.4, y: 0.75 })}
					className="lousy-text text-lg max-w-2xl"
				>
					A collection of things I've built, experiments I've run, and
					open-source contributions.
				</P>
			</header>

			{featured.length > 0 && (
				<Div
					initial="exit"
					animate="enter"
					variants={animations.fade({ delay: 0.55, y: 1 })}
					className="mb-16"
				>
					<h2 className="text-xs font-medium text-primary/40 uppercase tracking-wider mb-6">
						Featured
					</h2>

					<div className="grid gap-6 md:grid-cols-2">
						{featured.map((project, idx) => (
							<FeaturedProjectCard
								key={project.id}
								project={project}
								index={idx}
							/>
						))}
					</div>
				</Div>
			)}

			{others.length > 0 && (
				<section>
					<h2 className="text-xs font-medium text-primary/40 uppercase tracking-wider mb-6">
						All Projects
					</h2>

					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{others.map((project, idx) => (
							<ProjectCard key={project.id} project={project} index={idx} />
						))}
					</div>
				</section>
			)}
		</main>
	);
}

interface PlaceholderProps {
	project: Project;
	className?: string;
}

function ProjectPlaceholder({ project, className }: PlaceholderProps) {
	const Icon =
		PROJECT_ICONS[project.id] ||
		(project.language && LANGUAGE_ICONS[project.language]) ||
		Folder;

	return (
		<div
			className={cn(
				"w-full h-full bg-gradient-to-br from-secondary/80 to-secondary/40",
				"flex items-center justify-center",
				className
			)}
		>
			<Icon className="w-12 h-12 text-primary/15" strokeWidth={1.5} />
		</div>
	);
}

interface ProjectCardProps {
	project: Project;
	index: number;
}

function FeaturedProjectCard({ project, index }: ProjectCardProps) {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 20 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
			transition={{
				duration: 0.4,
				delay: index * 0.1,
				ease: [0.25, 0.1, 0.25, 1],
			}}
			className="group"
		>
			<motion.div
				whileHover={{ y: -4 }}
				transition={{ type: "spring", stiffness: 400, damping: 30 }}
				className={cn(
					"h-full rounded-xl overflow-hidden",
					"border border-border",
					"bg-secondary/20",
					"hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5",
					"transition-colors duration-300"
				)}
			>
				<div className="aspect-[16/9] overflow-hidden relative">
					<ProjectPlaceholder project={project} />
				</div>

				<div className="p-5">
					<div className="flex items-start justify-between gap-4 mb-3">
						<div className="flex items-center gap-2">
							<h3 className="font-semibold group-hover:text-primary transition-colors">
								{project.title}
							</h3>
							{project.stars > 0 && (
								<span className="flex items-center gap-0.5 text-xs text-primary/40">
									<Star className="w-3 h-3" />
									{project.stars}
								</span>
							)}
						</div>
						<div className="flex gap-1.5 shrink-0">
							<Link
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								className="p-1.5 rounded-md text-primary/40 hover:text-primary hover:bg-secondary/50 transition-all"
								aria-label="View source"
							>
								<Github className="w-4 h-4" />
							</Link>
							{project.link && (
								<Link
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="p-1.5 rounded-md text-primary/40 hover:text-primary hover:bg-secondary/50 transition-all"
									aria-label="View live"
								>
									<ArrowUpRight className="w-4 h-4" />
								</Link>
							)}
						</div>
					</div>

					<p className="text-sm text-primary/50 mb-4 line-clamp-2">
						{project.description}
					</p>

					<div className="flex flex-wrap items-center gap-2">
						{project.language && (
							<span className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-secondary/50 text-primary/60">
								{project.language}
							</span>
						)}
						{project.topics.slice(0, 2).map((topic) => (
							<span
								key={topic}
								className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-secondary/30 text-primary/40"
							>
								{topic}
							</span>
						))}
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}

function ProjectCard({ project, index }: ProjectCardProps) {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, margin: "-50px" });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 15 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
			transition={{
				duration: 0.35,
				delay: index * 0.06,
				ease: [0.25, 0.1, 0.25, 1],
			}}
			className="group"
		>
			<motion.div
				whileHover={{ y: -3 }}
				transition={{ type: "spring", stiffness: 400, damping: 30 }}
				className={cn(
					"h-full rounded-lg overflow-hidden",
					"border border-border",
					"bg-secondary/10",
					"hover:border-primary/20 hover:bg-secondary/20",
					"transition-colors duration-300"
				)}
			>
				<div className="aspect-[16/10] overflow-hidden relative">
					<ProjectPlaceholder project={project} />
				</div>

				<div className="p-4">
					<div className="flex items-start justify-between gap-3 mb-2">
						<h3 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-1">
							{project.title}
						</h3>
						<div className="flex gap-1 shrink-0">
							<Link
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								className="p-1 rounded text-primary/30 hover:text-primary transition-colors"
								aria-label={`View ${project.title} on GitHub`}
							>
								<Github className="w-3.5 h-3.5" />
							</Link>
							{project.link && (
								<Link
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="p-1 rounded text-primary/30 hover:text-primary transition-colors"
									aria-label={`View ${project.title} live`}
								>
									<ExternalLink className="w-3.5 h-3.5" />
								</Link>
							)}
						</div>
					</div>

					<p className="text-xs text-primary/40 mb-3 line-clamp-2">
						{project.description}
					</p>

					<div className="flex flex-wrap items-center gap-1.5">
						{project.language && (
							<span className="px-1.5 py-0.5 text-[10px] font-medium rounded bg-secondary/50 text-primary/50">
								{project.language}
							</span>
						)}
						{project.topics.slice(0, 2).map((topic) => (
							<span
								key={topic}
								className="px-1.5 py-0.5 text-[10px] font-medium rounded bg-secondary/30 text-primary/30"
							>
								{topic}
							</span>
						))}
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}
