"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, FolderOpenDot, Home, Menu, User, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
	{ href: "/", label: "Home", icon: Home },
	{ href: "/posts", label: "Posts", icon: FileText },
	{ href: "/projects", label: "Projects", icon: FolderOpenDot },
	{ href: "/about", label: "About", icon: User },
];

export function MobileNav() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	return (
		<div className="md:hidden">
			{/* Menu button */}
			<button
				type="button"
				onClick={() => setIsOpen(true)}
				className="p-2 text-primary/70 hover:text-primary transition-colors"
				aria-label="Open menu"
			>
				<Menu className="w-5 h-5" />
			</button>

			{/* Overlay */}
			<AnimatePresence>
				{isOpen && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
							onClick={() => setIsOpen(false)}
						/>

						{/* Drawer */}
						<motion.div
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ type: "spring", damping: 25, stiffness: 300 }}
							className="fixed top-0 right-0 bottom-0 w-[280px] bg-background border-l border-border z-50 p-6 flex flex-col"
						>
							{/* Close button */}
							<div className="flex justify-end mb-8">
								<button
									type="button"
									onClick={() => setIsOpen(false)}
									className="p-2 text-primary/70 hover:text-primary transition-colors"
									aria-label="Close menu"
								>
									<X className="w-5 h-5" />
								</button>
							</div>

							{/* Nav items */}
							<nav className="flex flex-col gap-2">
								{navItems.map((item, idx) => {
									const Icon = item.icon;
									const isActive = pathname === item.href;

									return (
										<motion.div
											key={item.href}
											initial={{ opacity: 0, x: 20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: idx * 0.05 + 0.1 }}
										>
											<Link
												href={item.href}
												onClick={() => setIsOpen(false)}
												className={cn(
													"flex items-center gap-3 px-4 py-3 rounded-lg transition-all",
													isActive
														? "bg-primary text-primary-foreground"
														: "text-primary/70 hover:bg-secondary/50 hover:text-primary"
												)}
											>
												<Icon className="w-5 h-5" />
												<span className="font-medium">{item.label}</span>
											</Link>
										</motion.div>
									);
								})}
							</nav>

							{/* Footer */}
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.3 }}
								className="mt-auto pt-6 border-t border-border"
							>
								<p className="text-sm text-primary/40 text-center">
									D-kja &copy; {new Date().getFullYear()}
								</p>
							</motion.div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	);
}
