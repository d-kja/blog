"use client";

import { animations } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";

export const metadata = {
	title: "Welp something went wrong -  d-kja",
};

export default function NotFound() {
	const { theme } = useTheme();

	return (
		<motion.main
			initial="exit"
			animate="enter"
			variants={animations.fade({ delay: 0.5 })}
			className="flex flex-col flex-1 max-w-screen-lg mx-auto justify-center items-center gap-8"
		>
			<Image
				src="/forge-anvil.gif"
				className={cn("fill-inherit p-4", theme === "dark" && "invert-colors")}
				alt="under construction"
				width={250}
				height={250}
			/>

			<div className="flex flex-col items-center">
				<strong className="font-extrabold text-3xl tracking-wide">
					Under construction
				</strong>
				<p className="font-normal text-lg text-primary/60">
					Building it during my free time...
				</p>
			</div>
		</motion.main>
	);
}
