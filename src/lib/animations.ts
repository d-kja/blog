import type { AnimationProps } from "framer-motion";

type Opts = {
	delay?: number;
	y?: number;
};

const fade: (opts: Opts) => AnimationProps["variants"] = ({
	delay = 0,
	y = 0,
}: Opts) => ({
	enter: {
		opacity: 1,
		y: 0,
		transition: {
			delay: delay * 0.4,
			easings: ["easeInOut"],
		},
	},
	exit: {
		opacity: 0,
		y: y + 2.5,
	},
});

const groupFade: (opts: Opts) => AnimationProps["variants"] = ({
	delay = 0,
}: Opts) => ({
	enter: {
		opacity: 1,
		transition: {
			delay: delay * 0.3,
			when: "beforeChildren",
		},
	},
	exit: {
		opacity: 0,
	},
});

export const animations = {
	fade,
	groupFade,
};
