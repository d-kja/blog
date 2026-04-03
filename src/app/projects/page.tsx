import type { Metadata } from "next";
import { ProjectsGallery } from "./projects-gallery";

export const metadata: Metadata = {
	title: "Projects",
	description:
		"A showcase of my projects, experiments, and open-source contributions.",
	openGraph: {
		title: "Projects | D-kja",
		description: "A showcase of my projects and experiments.",
	},
};

export interface Project {
	id: string;
	title: string;
	description: string;
	language: string | null;
	topics: string[];
	link?: string;
	github: string;
	stars: number;
	featured?: boolean;
	type?: "repo" | "gist";
}

const PROJECTS: Project[] = [
	{
		id: "nikke-linux",
		title: "NIKKE on Linux",
		description:
			"Comprehensive guide for installing and running NIKKE: Goddess of Victory under Linux using Wine and dependencies.",
		language: "Markdown",
		topics: ["linux", "gaming", "wine"],
		github: "https://gist.github.com/d-kja/74633df5f2d6e55cb2a77c3f9d6acece",
		stars: 29,
		featured: true,
		type: "gist",
	},
	{
		id: "dotfiles",
		title: "Dotfiles",
		description:
			"Personal configuration files for my development environment. Hyprland, Neovim, and more.",
		language: "QML",
		topics: ["dotfiles", "linux", "hyprland"],
		github: "https://github.com/d-kja/dotfiles",
		stars: 1,
		featured: true,
	},
	{
		id: "nvim",
		title: "Neovim Config",
		description:
			"My personal Neovim configuration with custom keybindings and plugins.",
		language: "Lua",
		topics: ["nvim", "nvim-configs"],
		github: "https://github.com/d-kja/nvim",
		stars: 0,
		featured: true,
	},
	{
		id: "qaanii",
		title: "Qaanii",
		description:
			"Small setup to read mangas locally. A lightweight manga downloader and reader.",
		language: "Go",
		topics: ["manga-downloader", "manga-scraper"],
		github: "https://github.com/d-kja/qaanii",
		stars: 0,
	},
	{
		id: "n1k",
		title: "N1k",
		description: "A Linux launcher written in Rust. Work in progress.",
		language: "Rust",
		topics: ["linux", "launcher"],
		github: "https://github.com/d-kja/n1k",
		stars: 0,
	},
	{
		id: "laterem-slab",
		title: "Laterem Slab",
		description:
			"A lazy way of dealing with repetitive command subsets. CLI utility built with Rust.",
		language: "Rust",
		topics: ["cli"],
		github: "https://github.com/d-kja/laterem-slab",
		stars: 0,
	},
	{
		id: "otd-cursor-shift",
		title: "OTD Cursor Shift",
		description:
			"Simple cursor offset filter for OpenTabletDriver. Shifts cursor position for drawing tablets.",
		language: "C#",
		topics: ["drawing", "opentabletdriver"],
		github: "https://github.com/d-kja/otd-cursor-shift",
		stars: 0,
	},
	{
		id: "monkey-lang",
		title: "Monkey Lang",
		description:
			"Implementation of the Monkey programming language interpreter.",
		language: "Go",
		topics: ["interpreter", "programming-language"],
		github: "https://github.com/d-kja/monkey-lang",
		stars: 0,
	},
	{
		id: "design-system",
		title: "Design System",
		description:
			"Demonstrates deployment, documentation, and building process for component libraries.",
		language: "TypeScript",
		topics: ["design-system", "components"],
		github: "https://github.com/d-kja/design-system",
		link: "https://d-kja.github.io/design-system",
		stars: 0,
	},
	{
		id: "cursors",
		title: "Cursors",
		description: "Custom cursor themes for Hyprland and X11. Anime-styled.",
		language: null,
		topics: ["cursors", "hyprland"],
		github: "https://github.com/d-kja/cursors",
		stars: 0,
	},
	{
		id: "deck",
		title: "Deck",
		description: "Random concept using keyboard hardware. Experimental.",
		language: "Rust",
		topics: ["hardware", "keyboard"],
		github: "https://github.com/d-kja/deck",
		stars: 0,
	},
	{
		id: "cinis",
		title: "Cinis",
		description: "Experimental C++ project repository.",
		language: "C++",
		topics: ["experimental"],
		github: "https://github.com/d-kja/cinis",
		stars: 0,
	},
];

export default function ProjectsPage() {
	return <ProjectsGallery projects={PROJECTS} />;
}
