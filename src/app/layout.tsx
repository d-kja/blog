import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/layout/footer-bar";
import { Navigation } from "@/components/layout/navigation-bar";
import { ThemeProvider } from "@/contexts/theme-context";
import { cn } from "@/lib/utils";

const fontMono = JetBrains_Mono({
	weight: ["300", "400", "500", "700"],
	style: "normal",
	subsets: ["latin", "cyrillic"],
	variable: "--font-sans",
	display: "swap",
});

const SITE_NAME = "D-kja";
const SITE_DESCRIPTION =
	"Software engineer sharing projects, thoughts, and technical insights. A personal space for coding experiments and development stories.";

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: SITE_DESCRIPTION,
	keywords: ["software engineer", "developer", "blog", "projects", "coding"],
	authors: [{ name: "Nicolas R.", url: "https://github.com/d-kja" }],
	creator: "Nicolas R.",
	metadataBase: new URL("https://d-kja.dev"),
	openGraph: {
		type: "website",
		locale: "en_US",
		siteName: SITE_NAME,
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
	},
	twitter: {
		card: "summary_large_image",
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
	},
	robots: {
		index: true,
		follow: true,
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#fafafa" },
		{ media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
	],
	width: "device-width",
	initialScale: 1,
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"bg-background font-sans antialiased p-4 flex flex-col min-h-screen max-w-screen-xl mx-auto",
					fontMono.variable
				)}
			>
				<ThemeProvider attribute="class">
					<a
						href="#main-content"
						className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
					>
						Skip to main content
					</a>
					<Navigation />
					<div id="main-content" className="flex flex-col flex-1">{children}</div>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
