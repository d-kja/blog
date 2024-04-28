import type { Metadata } from "next";

import { Roboto } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

import { Navigation } from "@/components/layout/navigation-bar";
import { ThemeProvider } from "@/contexts/theme-context";
import { Footer } from "@/components/layout/footer-bar";

const fontSans = Roboto({ subsets: ["latin"], weight: ["300", "400", "500", "700"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "D-kja",
  description: "My website! maybe a simple portfolio, maybe a place where I can post some of my stuff? I'm not really sure either...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "bg-background font-sans antialiased p-4 flex flex-col min-h-screen max-w-screen-xl mx-auto",
        fontSans.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
        >
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
