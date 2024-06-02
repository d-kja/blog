"use client"

import { cn } from "@/lib/utils"
import { type HTMLMotionProps, motion } from "framer-motion"
import { ExternalLink, FileText, FolderOpenDot } from "lucide-react"
import Link from "next/link"

export interface PostProps extends HTMLMotionProps<'div'> {
  title: string,
  summary: string,
  type: 'post' | 'project'
  href?: string
}

export const Post = ({ title, summary, type = "post", href = "#", className, ...props }: PostProps) => {
  const icon = type === 'post' ?
    <FileText
      className="w-full h-full text-inherit" strokeWidth={0.75}
    /> :
    <FolderOpenDot
      className="w-full h-full text-inherit" strokeWidth={0.75}
    />

  return <Link href={href}>
    <motion.div className={cn("grid grid-cols-8 transition-all rounded py-4 group relative hover:text-accent-foreground duration-300", className)} {...props}>
      <div className="col-span-1 max-w-[50px] mx-auto">
        {icon}
      </div>

      <div className="col-span-7">
        <h3 className="font-medium">{title}</h3>
        <p className="lousy-text group-hover:text-accent-foreground transition-colors">{summary}</p>
      </div>

      <span className="absolute top-2 right-2 w-[18px] h-[18px] transition-opacity opacity-0 group-hover:opacity-100 delay-100">
        <ExternalLink aria-label="redirect" className="w-full h-full" strokeWidth={1} />
      </span>
    </motion.div>
  </Link>
}
