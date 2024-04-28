import { cn } from "@/lib/utils";
import Link, { type LinkProps } from "next/link";
import { ReactNode } from "react";

interface NavigationButtonProps extends LinkProps {
	children: ReactNode,
	className?: string
	target?: string
}

export const NavigationButton = ({ children, className = '', ...props }: NavigationButtonProps) =>
	<Link className={cn('font-medium text-md text-primary/40 hover:text-primary transition-all duration-300', className)} {...props}>{children}</Link>
