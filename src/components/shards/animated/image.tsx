"use client"

import { cn } from "@/lib/utils"
import { type HTMLMotionProps, motion } from "framer-motion"

interface DivProps extends HTMLMotionProps<'div'>{}

export const Div = ({ children, className, ...props }: DivProps) => {
	return <motion.div className={cn("fade-in", className)} {...props}>{children}</motion.div>
}
