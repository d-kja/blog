import { Heading } from "@/components/shards/animated/heading";
import { Div } from "@/components/shards/animated/image";
import { P } from "@/components/shards/animated/paragraph";
import { animations } from "@/lib/animations";
import { Posts } from "../posts";
import dayjs from "dayjs";

export const Description = () => {
	const startDate = dayjs("2020-03-01");
	const currentDate = dayjs();

	const age = currentDate.diff(startDate, "years", false);

	return (
		<div className="flex flex-col gap-8 col-span-2">
			<section title="Who am I?" className="flex flex-col gap-3">
				<Heading
					initial="exit"
					animate="enter"
					variants={animations.fade({ delay: 1 })}
					className="font-bold text-xl"
				>
					How you doin' 🙂
				</Heading>

				<P
					initial="exit"
					animate="enter"
					variants={animations.fade({ delay: 1.15, y: 0.5 })}
					className="lousy-text"
				>
					Hey, it might be the first time that you've found me out in the wild.
					I'm called Nicolas and I've been a software developer for around {age}{" "}
					years.
				</P>

				<P
					initial="exit"
					animate="enter"
					variants={animations.fade({ delay: 1.25, y: 0.75 })}
					className="lousy-text"
				>
					I usually like to spend my free time coding some random stuff, most of
					it gets either scrapped or I just keep it private on Github. Because
					of that, I've been looking forward to using this website to showcase
					some of my ideas in a more structured way.
				</P>

				<P
					initial="exit"
					animate="enter"
					variants={animations.fade({ delay: 1.35, y: 1 })}
					className="lousy-text"
				>
					If you have ideas that I can incorporate into my projects, just reach
					out. I'm always willing to discuss! Just don't be weird when reaching out to me, you will earn yourself a block if you do 😄
				</P>
			</section>

			<section title="Recent posts" className="flex flex-col gap-3">
				<Heading
					initial="exit"
					animate="enter"
					variants={animations.fade({ delay: 1.5, y: 1.5 })}
					className="font-bold text-xl"
				>
					Recent posts
				</Heading>

				<P
					initial="exit"
					animate="enter"
					variants={animations.fade({ delay: 1.5, y: 1.75 })}
					className={"lousy-text"}
				>
					It's meant to be a comfy space to write about my projects and share
					some of my thoughts, hope you can respect that.
				</P>

				<Div
					initial="exit"
					animate="enter"
					variants={animations.fade({ delay: 1.75, y: 2 })}
					className="flex flex-col divide-y relative"
				>
					<Posts />

					<Div
						initial="exit"
						animate="enter"
						variants={animations.fade({ delay: 2.25 })}
						className="bg-gradient-to-b from-transparent to-background/50 z-10 absolute inset-0 pointer-events-none transition-all duration-700"
					/>
				</Div>
			</section>
		</div>
	);
};
