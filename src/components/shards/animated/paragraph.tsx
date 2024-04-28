import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

interface ParagraphProps extends ComponentProps<'p'> { }

export const P = ({ children, className, ...props }: ParagraphProps) => {
	return <p className={cn("fade-in", className)} {...props}>{children}</p>
}
