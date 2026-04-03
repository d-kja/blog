"use client";

import { animations } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { type HTMLMotionProps, motion } from "framer-motion";
import { ArrowRight, FileText, FolderOpenDot } from "lucide-react";
import Link from "next/link";

export interface PostProps extends HTMLMotionProps<"div"> {
	title: string;
	summary: string;
	type: "post" | "project";
	href?: string;
}

export const Post = ({
	title,
	summary,
	type = "post",
	href = "#",
	className,
	...props
}: PostProps) => {
	const Icon = type === "post" ? FileText : FolderOpenDot;

	return (
		<Link href={href}>
			<motion.div
				className={cn(
					"grid grid-cols-8 gap-3 rounded-lg py-4 px-2 -mx-2 group relative",
					"hover:bg-secondary/30 transition-colors duration-300",
					className
				)}
				whileHover={{ x: 4 }}
				transition={animations.hoverSpring}
				{...props}
			>
				{/* Icon - desktop */}
				<div className="col-span-1 max-w-[42px] mx-auto hidden md:flex items-start pt-1">
					<Icon
						className="w-full h-full text-primary/40 group-hover:text-primary/70 transition-colors duration-300"
						strokeWidth={1.25}
					/>
				</div>

				{/* Content */}
				<div className="col-span-7 md:col-span-6">
					<h3 className="font-medium flex items-center gap-2 group-hover:text-primary transition-colors">
						{/* Icon - mobile */}
						<Icon
							className="w-4 h-4 flex-shrink-0 md:hidden text-primary/50 group-hover:text-primary/70 transition-colors"
							strokeWidth={1.25}
						/>
						<span>{title}</span>
					</h3>
					<p className="lousy-text group-hover:text-primary/60 transition-colors line-clamp-2 mt-1">
						{summary}
					</p>
				</div>

				{/* Arrow indicator */}
				<ArrowRight
					aria-hidden
					className="absolute top-1/2 -translate-y-1/2 right-2 w-4 h-4 text-primary/30 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
					strokeWidth={1.5}
				/>
			</motion.div>
		</Link>
	);
};
