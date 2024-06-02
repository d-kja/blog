"use client"

import { cn } from "@/lib/utils"
import { type HTMLMotionProps, motion } from "framer-motion"

interface ParagraphProps extends HTMLMotionProps<'p'>{ }

export const P = ({ children, className, ...props }: ParagraphProps) => {
	return <motion.p className={cn("fade-in", className)} {...props}>{children}</motion.p>
}
