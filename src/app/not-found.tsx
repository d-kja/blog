"use client";

import { animations } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function NotFound() {
	const { theme } = useTheme();

	return (
		<motion.main
			initial="exit"
			animate="enter"
			variants={animations.fade({ delay: 0.5 })}
			className="flex flex-col flex-1 w-full max-w-screen-lg mx-auto justify-center items-center gap-8"
		>
			<Image
				src="/forge-anvil.gif"
				className={cn("p-4 mx-auto", theme === "dark" && "invert-colors")}
				alt="Page under construction"
				width={250}
				height={250}
				priority
			/>

			<div className="flex flex-col items-center text-center">
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
