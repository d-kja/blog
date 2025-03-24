"use client";

import { animations } from "@/lib/animations";
import { AnimatePresence } from "framer-motion";
import { Post, type PostProps } from "../shards/animated/post";

const POSTS: PostProps[] = [
	{
		title: "Laterem",
		summary:
			"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
		type: "post",
	},
	{
		title: "Latus",
		summary:
			"Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore Reprehenderit nostrud nostrud ipsum laboris  culpa et culpa duis.",
		type: "project",
	},
	{
		title: "Dioxus",
		summary:
			"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
		type: "post",
	},
];

export const Posts = () => {
	return (
		<AnimatePresence>
			{POSTS?.map((item, idx) => (
				<Post
					{...item}
					key={item?.id ?? idx}
					initial="exit"
					animate="enter"
					variants={animations.groupFade({ delay: (idx + 1.5) * 0.75, y: 1.5 })}
				/>
			))}
		</AnimatePresence>
	);
};
