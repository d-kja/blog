import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Github } from "lucide-react";
import { NavigationButton } from "../shards/navigation-button";
import { ToggleTheme } from "../shards/toggle-theme";

export const Navigation = () => {
	return (
		<nav className="flex items-center justify-between p-4">
			<NavigationButton href="/">D-kja</NavigationButton>

			<div className="flex gap-5 items-center">
				<NavigationButton href="/posts" className="hidden md:inline-block">
					Posts
				</NavigationButton>
				<NavigationButton href="/projects" className="hidden md:inline-block">
					Projects
				</NavigationButton>
				<NavigationButton href="/about" className="hidden md:inline-block">
					About
				</NavigationButton>

				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<NavigationButton target="_blank" href="https://github.com/d-kja">
								<Github
									aria-label="Github"
									strokeWidth={2.25}
									className="w-5 h-5"
								/>
							</NavigationButton>
						</TooltipTrigger>
						<TooltipContent side="bottom">
							<p>Github</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>

				<ToggleTheme />
			</div>
		</nav>
	);
};
