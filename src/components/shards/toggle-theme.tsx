"use client";

import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { MoonStarIcon, SunIcon } from "lucide-react";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Div } from "./animated/image";

import { animations } from "@/lib/animations";

export function ToggleTheme() {
	const [isMounted, setIsMounted] = useState(false); // SVG Changing after reading the localstorage is causing hydration warnings
	const { setTheme, theme = "light" } = useTheme();

	useEffect(() => {
		setIsMounted(true);
	}, []);

	// Avoinding system default values on purpose (I hate light theme...)
	const toggleTheme = useCallback(() => {
		switch (theme) {
			case "light":
				return setTheme("dark");
			case "dark":
				return setTheme("light");

			default:
				return setTheme("dark");
		}
	}, [theme, setTheme]);

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger
					onClick={toggleTheme}
					className="w-5 h-5 p-0 m-0 my-auto text-primary/40 hover:text-primary transition-all duration-300 focus:outline-none focus-within:ring-1 ring-accent-foreground ring-offset-4 rounded-sm dark:ring-offset-background"
				>
					<Div
						initial="exit"
						animate="enter"
						variants={animations.fade({ delay: 0.75, y: 0 })}
					>
						{isMounted &&
							(theme !== "light" ? (
								<MoonStarIcon className="w-full h-full" strokeWidth={2} />
							) : (
								<SunIcon className="w-full h-full" strokeWidth={2.25} />
							))}

						<span className="sr-only">Toggle theme</span>
					</Div>
				</TooltipTrigger>
				<TooltipContent side="bottom">
					<p>Toggle theme</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
