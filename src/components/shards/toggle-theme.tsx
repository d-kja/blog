"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { MoonStarIcon, SunIcon } from "lucide-react"

export function ToggleTheme() {
	const { setTheme, theme } = useTheme()

	// Avoinding system default values on purpose
	const toggleTheme = () => {
		switch (theme) {
			case 'light':
				return setTheme('dark');
			case 'dark':
				return setTheme('light');

			default:
				return setTheme('light');
		}
	}

	const icon = theme === 'light' ?
		<SunIcon className="w-full h-full" strokeWidth={2.25} /> :
		<MoonStarIcon className="w-full h-full" strokeWidth={2} />

	return (
		<a className="w-5 h-5 p-0 m-0 my-auto text-primary/40 hover:text-primary transition-all duration-300 " onClick={toggleTheme}>
			{icon}
			<span className="sr-only">Toggle theme</span>
		</a>
	)
}
