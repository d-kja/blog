import type { AnimationProps, Transition } from "framer-motion";

type AnimationOpts = {
	delay?: number;
	y?: number;
	duration?: number;
};

/** Standard easing curve for all animations */
const EASE_CURVE = [0.25, 0.1, 0.25, 1] as const;

/** Delay multiplier for staggered animations */
const DELAY_MULTIPLIER = 0.4;

/**
 * Fade animation with optional vertical offset
 * Uses enter/exit states for AnimatePresence compatibility
 */
const fade = ({
	delay = 0,
	y = 0,
	duration = 0.5,
}: AnimationOpts): AnimationProps["variants"] => ({
	enter: {
		opacity: 1,
		y: 0,
		transition: {
			delay: delay * DELAY_MULTIPLIER,
			duration,
			ease: EASE_CURVE,
		},
	},
	exit: {
		opacity: 0,
		y: y + 2.5,
	},
});

/**
 * Group fade for staggering child animations
 * Uses beforeChildren to ensure parent animates first
 */
const groupFade = ({
	delay = 0,
}: AnimationOpts): AnimationProps["variants"] => ({
	enter: {
		opacity: 1,
		transition: {
			delay: delay * DELAY_MULTIPLIER,
			when: "beforeChildren",
		},
	},
	exit: {
		opacity: 0,
	},
});

/** Spring transition config for hover interactions */
const hoverSpring: Transition = {
	type: "spring",
	stiffness: 400,
	damping: 25,
};

export const animations = {
	fade,
	groupFade,
	hoverSpring,
};
