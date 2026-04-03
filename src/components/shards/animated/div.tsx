"use client";

import { cn } from "@/lib/utils";
import { type HTMLMotionProps, motion } from "framer-motion";

type DivProps = HTMLMotionProps<"div">;

export const Div = ({ children, className, ...props }: DivProps) => {
	return (
		<motion.div className={cn(className)} {...props}>
			{children}
		</motion.div>
	);
};
