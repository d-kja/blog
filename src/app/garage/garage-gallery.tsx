"use client";

import { Heading } from "@/components/shards/animated/heading";
import { Div } from "@/components/shards/animated/div";
import { P } from "@/components/shards/animated/paragraph";
import { animations } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface WrapVariant {
	id: string;
	name: string;
	accent: string;
	finish: string;
	description: string;
	bike: string;
	logo: string;
	swatch: string;
}

const VARIANTS: WrapVariant[] = [
	{
		id: "ghost",
		name: "Ghost",
		accent: "Platinum chrome",
		finish: "Gloss piano black",
		description:
			"A murdered-out gloss wrap with jewelry-thin platinum chrome. The metal only shows up as rim tape, a fairing-vent inlay, and a small N5 badge on the tank and tail.",
		bike: "/garage/ninja-500-se-ghost-white.png",
		logo: "/garage/ninja-500-logo-ghost-white.png",
		swatch: "#d7d7d7",
	},
	{
		id: "strike",
		name: "Strike",
		accent: "Candy metallic red",
		finish: "Gloss piano black",
		description:
			"Same stealth black base, with liquid-metal crimson catching light on the rim edge, the vent cut lines, and a compact N5 mark. Enough red to pop, not enough to shout.",
		bike: "/garage/ninja-500-se-strike-red.png",
		logo: "/garage/ninja-500-logo-strike-red.png",
		swatch: "#c41e3a",
	},
	{
		id: "phantom",
		name: "Phantom",
		accent: "Amethyst metallic",
		finish: "Satin stealth black",
		description:
			"Matte black bodywork with dark metallic purple flake. The accent stays in the same small places — rims, vent piping, tank and tail badges — so the bike reads black until the light hits it.",
		bike: "/garage/ninja-500-se-phantom-purple.png",
		logo: "/garage/ninja-500-logo-phantom-purple.png",
		swatch: "#6b2d8b",
	},
];

export function GarageGallery() {
	const [activeId, setActiveId] = useState(VARIANTS[0].id);
	const active =
		VARIANTS.find((variant) => variant.id === activeId) ?? VARIANTS[0];

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
					Garage
				</Heading>

				<P
					initial="exit"
					animate="enter"
					variants={animations.fade({ delay: 0.4, y: 0.75 })}
					className="lousy-text text-lg max-w-2xl"
				>
					Vinyl wrap concepts for the Ninja 500 SE. Black does the talking.
					Small metallic accents do the rest.
				</P>
			</header>

			<Div
				initial="exit"
				animate="enter"
				variants={animations.fade({ delay: 0.55, y: 1 })}
				className="flex flex-wrap gap-2 mb-8"
			>
				{VARIANTS.map((variant) => {
					const isActive = variant.id === active.id;

					return (
						<button
							key={variant.id}
							type="button"
							onClick={() => setActiveId(variant.id)}
							className={cn(
								"flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium",
								"border transition-all duration-200",
								isActive
									? "bg-secondary/60 border-primary/30 text-primary"
									: "bg-secondary/10 border-border text-primary/50 hover:text-primary hover:bg-secondary/30"
							)}
						>
							<span
								className="w-2.5 h-2.5 rounded-full ring-1 ring-black/20"
								style={{ backgroundColor: variant.swatch }}
								aria-hidden
							/>
							{variant.name}
						</button>
					);
				})}
			</Div>

			<Div
				initial="exit"
				animate="enter"
				variants={animations.fade({ delay: 0.7, y: 1.25 })}
				className="rounded-xl overflow-hidden border border-border bg-secondary/10 mb-8"
			>
				<div className="relative aspect-[16/9] bg-secondary/20">
					<AnimatePresence mode="wait">
						<motion.div
							key={active.id}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.25 }}
							className="absolute inset-0"
						>
							<Image
								src={active.bike}
								alt={`${active.name} vinyl wrap on a Kawasaki Ninja 500 SE`}
								fill
								priority
								sizes="(max-width: 1024px) 100vw, 1024px"
								className="object-cover"
							/>
						</motion.div>
					</AnimatePresence>
				</div>
			</Div>

			<Div
				initial="exit"
				animate="enter"
				variants={animations.fade({ delay: 0.85, y: 1.5 })}
				className="grid gap-6 md:grid-cols-[1fr_160px] items-start mb-16"
			>
				<div>
					<div className="flex items-center gap-3 mb-3">
						<h2 className="text-xl font-bold">{active.name}</h2>
						<span className="text-xs uppercase tracking-wider text-primary/40">
							{active.accent}
						</span>
					</div>
					<p className="lousy-text mb-4">{active.description}</p>
					<dl className="grid grid-cols-2 gap-3 text-sm">
						<div className="rounded-lg border border-border bg-secondary/20 px-3 py-2">
							<dt className="text-[11px] uppercase tracking-wider text-primary/40">
								Base
							</dt>
							<dd className="mt-0.5 font-medium">{active.finish}</dd>
						</div>
						<div className="rounded-lg border border-border bg-secondary/20 px-3 py-2">
							<dt className="text-[11px] uppercase tracking-wider text-primary/40">
								Accent
							</dt>
							<dd className="mt-0.5 font-medium">{active.accent}</dd>
						</div>
					</dl>
				</div>

				<div className="rounded-xl overflow-hidden border border-border bg-black">
					<Image
						src={active.logo}
						alt={`${active.name} N5 SE metallic badge`}
						width={320}
						height={320}
						className="w-full h-auto"
					/>
				</div>
			</Div>

			<section>
				<h2 className="text-xs font-medium text-primary/40 uppercase tracking-wider mb-6">
					Where the metal goes
				</h2>
				<div className="grid gap-4 sm:grid-cols-3">
					{[
						{
							title: "Rim tape",
							detail: "A 3mm metallic pinstripe on the outer wheel edge.",
						},
						{
							title: "Fairing piping",
							detail: "Thin inlay along the vent cuts and chin spoiler lip.",
						},
						{
							title: "N5 badge",
							detail: "Small metallic mark on the tank side and tail cowl.",
						},
					].map((item) => (
						<div
							key={item.title}
							className="p-4 rounded-xl border border-border bg-secondary/20"
						>
							<h3 className="font-medium text-sm mb-1">{item.title}</h3>
							<p className="text-xs text-primary/50">{item.detail}</p>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
