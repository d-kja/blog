"use client";

import { Heading } from "@/components/shards/animated/heading";
import { Div } from "@/components/shards/animated/div";
import { P } from "@/components/shards/animated/paragraph";
import { animations } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import {
	Code2,
	Coffee,
	Gamepad2,
	Github,
	Globe,
	Linkedin,
	MapPin,
	MessageCircle,
	Music,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { BLUR_PLACEHOLDER } from "@/lib/constants";

const SKILLS = [
	{ name: "TypeScript", level: 95 },
	{ name: "React / Next.js", level: 90 },
	{ name: "Node.js", level: 85 },
	{ name: "Golang", level: 70 },
	{ name: "Rust", level: 60 },
	{ name: "Tailwind CSS", level: 90 },
];

const INTERESTS = [
	{ icon: Gamepad2, label: "Gaming", detail: "Arknights, Wuthering Waves" },
	{ icon: Coffee, label: "Coffee", detail: "Rainy days + coffee" },
	{ icon: Code2, label: "Systems", detail: "Playing with Rust" },
	{ icon: Music, label: "Music", detail: "Always on Spotify" },
];

const SOCIALS = [
	{
		icon: Github,
		label: "GitHub",
		href: "https://github.com/d-kja",
		handle: "@d-kja",
	},
	{
		icon: Linkedin,
		label: "LinkedIn",
		href: "https://linkedin.com/in/d-kja",
		handle: "d-kja",
	},
	{
		icon: MessageCircle,
		label: "Discord",
		href: "#",
		handle: "hlyd",
	},
];

export function AboutContent() {
	return (
		<main className="my-16 flex flex-col max-w-screen-lg mx-auto flex-1 w-full px-4">
			<div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
				<div className="lg:col-span-1">
					<ProfileCard />
				</div>

				<div className="lg:col-span-2 space-y-16">
					<IntroSection />
					<SkillsSection />
					<InterestsSection />
					<ConnectSection />
				</div>
			</div>
		</main>
	);
}

function ProfileCard() {
	return (
		<Div
			initial="exit"
			animate="enter"
			variants={animations.fade({ delay: 0.25 })}
			className="sticky top-8"
		>
			<div className="flex flex-col items-center lg:items-start gap-6">
				<motion.div
					whileHover={{ scale: 1.02 }}
					transition={animations.hoverSpring}
					className="relative"
				>
					<Image
						src="/pfp.png"
						width={200}
						height={200}
						alt="Profile picture"
						priority
						placeholder="blur"
						blurDataURL={BLUR_PLACEHOLDER}
						className="rounded-2xl shadow-xl shadow-primary/5"
					/>
					<div className="absolute -bottom-2 -right-2 px-3 py-1 bg-background border border-border rounded-full text-xs font-medium">
						🇧🇷
					</div>
				</motion.div>

				<div className="text-center lg:text-left">
					<h1 className="text-2xl font-bold">Nicolas R.</h1>
					<p className="text-primary/60 flex items-center justify-center lg:justify-start gap-1.5 mt-1">
						<MapPin className="w-3.5 h-3.5" />
						Brazil
					</p>
				</div>

				<div className="flex gap-3">
					{SOCIALS.map((social) => (
						<Link
							key={social.label}
							href={social.href}
							target={social.href.startsWith("http") ? "_blank" : undefined}
							rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
							className="p-2.5 rounded-xl bg-secondary/30 text-primary/50 hover:text-primary hover:bg-secondary/50 transition-all"
							aria-label={social.label}
						>
							<social.icon className="w-5 h-5" />
						</Link>
					))}
				</div>
			</div>
		</Div>
	);
}

function IntroSection() {
	return (
		<section>
			<Heading
				initial="exit"
				animate="enter"
				variants={animations.fade({ delay: 0.4, y: 0.5 })}
				className="text-2xl font-bold mb-4"
			>
				Hey there!
			</Heading>

			<Div
				initial="exit"
				animate="enter"
				variants={animations.fade({ delay: 0.55, y: 0.75 })}
				className="space-y-4"
			>
				<P className="lousy-text text-lg">
					I'm Nicolas, a software engineer from Brazil with a passion for
					building things that live on the internet. I enjoy crafting clean,
					performant applications and exploring new technologies.
				</P>

				<P className="lousy-text">
					As of late, I've been diving deep into systems programming with Rust
					while maintaining my love for the TypeScript/React ecosystem. I
					believe in writing code that's not just functional, but also elegant
					and maintainable.
				</P>

				<P className="lousy-text">
					When I'm not coding, you'll find me gaming, enjoying a good cup of
					coffee on rainy days, or reading manhwa. I'm always open to
					interesting conversations about tech, so feel free to reach out!
				</P>
			</Div>
		</section>
	);
}

function SkillsSection() {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section ref={ref}>
			<Heading className="text-xl font-bold mb-6 flex items-center gap-2">
				<Globe className="w-5 h-5 text-primary/60" />
				Skills & Technologies
			</Heading>

			<div className="space-y-4">
				{SKILLS.map((skill, idx) => (
					<motion.div
						key={skill.name}
						initial={{ opacity: 0, x: -20 }}
						animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
						transition={{ delay: idx * 0.1, duration: 0.4 }}
					>
						<div className="flex justify-between mb-1.5">
							<span className="text-sm font-medium">{skill.name}</span>
							<span className="text-xs text-primary/40">{skill.level}%</span>
						</div>
						<div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
							<motion.div
								className="h-full bg-gradient-to-r from-primary/60 to-primary/40 rounded-full"
								initial={{ width: 0 }}
								animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
								transition={{ delay: idx * 0.1 + 0.2, duration: 0.8, ease: "easeOut" }}
							/>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}

function InterestsSection() {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, margin: "-50px" });

	return (
		<section ref={ref}>
			<Heading className="text-xl font-bold mb-6">Beyond Code</Heading>

			<div className="grid grid-cols-2 gap-4">
				{INTERESTS.map((interest, idx) => (
					<motion.div
						key={interest.label}
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ delay: idx * 0.1, duration: 0.4 }}
						className={cn(
							"p-4 rounded-xl border border-border",
							"bg-secondary/20 hover:bg-secondary/30",
							"transition-colors duration-300"
						)}
					>
						<interest.icon className="w-5 h-5 text-primary/50 mb-2" />
						<h3 className="font-medium text-sm">{interest.label}</h3>
						<p className="text-xs text-primary/50 mt-0.5">{interest.detail}</p>
					</motion.div>
				))}
			</div>
		</section>
	);
}

function ConnectSection() {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, margin: "-50px" });

	return (
		<section ref={ref}>
			<Heading className="text-xl font-bold mb-6">Let's Connect</Heading>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
				transition={{ duration: 0.4 }}
				className="space-y-3"
			>
				{SOCIALS.map((social, idx) => (
					<motion.div
						key={social.label}
						initial={{ opacity: 0, x: -10 }}
						animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
						transition={{ delay: idx * 0.1 + 0.2 }}
					>
						<Link
							href={social.href}
							target={social.href.startsWith("http") ? "_blank" : undefined}
							rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
							className={cn(
								"flex items-center gap-4 p-4 rounded-xl",
								"border border-border bg-secondary/10",
								"hover:bg-secondary/30 hover:border-primary/20",
								"transition-all duration-300 group"
							)}
						>
							<div className="p-2 rounded-lg bg-primary/10 text-primary/60 group-hover:text-primary transition-colors">
								<social.icon className="w-5 h-5" />
							</div>
							<div>
								<p className="font-medium text-sm group-hover:text-primary transition-colors">
									{social.label}
								</p>
								<p className="text-xs text-primary/50">{social.handle}</p>
							</div>
						</Link>
					</motion.div>
				))}
			</motion.div>

			<motion.p
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : { opacity: 0 }}
				transition={{ delay: 0.6 }}
				className="mt-6 text-sm text-primary/40 text-center"
			>
				Imma grab some coffee, brb ☕
			</motion.p>
		</section>
	);
}
