"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import dayjs from "dayjs";

import { Heading } from "@/components/shards/animated/heading";
import { Div } from "@/components/shards/animated/div";
import { BLUR_PLACEHOLDER } from "@/lib/constants";
import { animations } from "@/lib/animations";
import { cn } from "@/lib/utils";

const SKILLS = ["TypeScript", "React", "Rust", "Go"];

export const DetailsCard = () => {
	const birthDate = dayjs("2002-08-15");
	const startDate = dayjs("2020-03-01");
	const currentDate = dayjs();

	const age = currentDate.diff(birthDate, "years", false);
	const years = currentDate.diff(startDate, "years", false);

	return (
		<section className="col-span-1 flex flex-col justify-start items-center md:items-start gap-8 w-full md:max-w-[280px] mx-auto">
			{/* Profile Image */}
			<Div
				initial="exit"
				animate="enter"
				variants={animations.fade({ delay: 0.25 })}
				className="w-full group"
			>
				<motion.div
					whileHover={{ scale: 1.02 }}
					transition={animations.hoverSpring}
					className="relative"
				>
					<Image
						src="/pfp.png"
						width={280}
						height={280}
						alt="Profile picture"
						priority
						placeholder="blur"
						blurDataURL={BLUR_PLACEHOLDER}
						className="rounded-2xl w-full shadow-xl shadow-primary/5"
					/>
					<div className="absolute -bottom-2 -right-2 px-2.5 py-1 bg-background border border-border rounded-full text-xs">
						🇧🇷
					</div>
				</motion.div>
			</Div>

			{/* Details */}
			<Div
				initial="exit"
				animate="enter"
				variants={animations.fade({ delay: 0.5, y: 1 })}
				className="w-full space-y-6"
			>
				<div>
					<Heading className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary/30 mb-3">
						Details
					</Heading>
					<div className="space-y-1.5">
						<DetailRow label="Name" value="Nicolas R." />
						<DetailRow label="Age" value={`${age}`} />
						<DetailRow label="Location" value="Brazil" />
						<DetailRow label="Role" value="Software Engineer" />
						<DetailRow label="Experience" value={`${years}+ years`} />
					</div>
				</div>

				<div>
					<Heading className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary/30 mb-3">
						Stack
					</Heading>
					<div className="flex flex-wrap gap-1.5">
						{SKILLS.map((skill) => (
							<span
								key={skill}
								className="px-2.5 py-1 text-xs rounded-lg bg-secondary/40 text-primary/60"
							>
								{skill}
							</span>
						))}
					</div>
				</div>

				<div>
					<Link
						href="https://github.com/d-kja"
						target="_blank"
						rel="noopener noreferrer"
						className={cn(
							"inline-flex items-center gap-2 text-sm",
							"text-primary/40 hover:text-primary",
							"transition-colors duration-200"
						)}
					>
						<Github className="w-4 h-4" />
						<span>d-kja</span>
					</Link>
				</div>
			</Div>
		</section>
	);
};

function DetailRow({ label, value }: { label: string; value: string }) {
	return (
		<div className="flex items-center justify-between text-sm">
			<span className="text-primary/30">{label}</span>
			<span className="text-primary/70">{value}</span>
		</div>
	);
}
