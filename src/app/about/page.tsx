import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
	title: "About",
	description:
		"Learn more about Nicolas - a software engineer from Brazil passionate about systems programming, web development, and building cool things.",
	openGraph: {
		title: "About | D-kja",
		description: "Learn more about Nicolas and his journey as a developer.",
	},
};

export default function AboutPage() {
	return <AboutContent />;
}
