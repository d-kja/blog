"use client"

import { cn } from "@/lib/utils"
import { type HTMLMotionProps, motion } from "framer-motion"

interface HeadingProps extends HTMLMotionProps<'h2'>{
  primary?: boolean
}

export const Heading = ({ children, className, primary = false, ...props }: HeadingProps) => {
  const Component = primary ? motion.h1 : motion.h2

	return <Component className={cn("fade-in", className)} {...props}>{children}</Component>
}
