"use client";

import { CaretUpIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	const handleScrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className="flex justify-between items-center max-w-screen-lg w-full mx-auto mt-auto mb-12">
			<div className="flex flex-col">
				<p className="lousy-text italic text-sm">
					Copy- right? <span className="not-italic">🤔</span>
				</p>

				<span className="lousy-text text-xs">&copy; {currentYear}</span>
			</div>

			<Button variant="outline" className="w-min p-2" onClick={handleScrollTop}>
				<CaretUpIcon className="w-5 h-5" />
			</Button>
		</footer>
	);
};
