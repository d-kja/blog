import { cn } from "@/lib/utils";
import Link, { type LinkProps } from "next/link";
import type { ReactNode } from "react";

interface NavigationButtonProps extends LinkProps {
	children: ReactNode;
	className?: string;
	target?: string;
}

export const NavigationButton = ({
	children,
	className = "",
	...props
}: NavigationButtonProps) => (
	<Link
		className={cn(
			"font-medium text-md text-primary/40 hover:text-primary transition-all duration-300",
      "focus:outline-none focus-within:ring-1 ring-accent-foreground ring-offset-4 rounded-sm dark:ring-offset-background",
			className,
		)}
		{...props}
	>
		{children}
	</Link>
);
