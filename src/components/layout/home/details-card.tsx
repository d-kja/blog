import Image from "next/image"
import dayjs from "dayjs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Heading } from "@/components/shards/animated/heading"
import { Div } from "@/components/shards/animated/image"

import { BLUR_PLACEHOLDER } from "@/lib/constants"
import { animations } from "@/lib/animations"

export const DetailsCard = () => {
	const birthDate = dayjs("2002-08-15");
	const currentDate = dayjs();

	const age = currentDate.diff(birthDate, "years", false);

  return (
			<section
				title="character details"
				className="col-span-1 flex flex-col flex-1 justify-start items-center gap-12 md:gap-6 w-full md:max-w-[280px] mx-auto"
			>
				<Div
					initial="exit"
					animate="enter"
					variants={animations.fade({ delay: 0.25 })}
					className="w-full h-full max-h-[280px] max-w-[280px] group"
				>
					<Image
						src="/pfp.png"
						width={280}
						height={280}
						alt="github pfp"
						priority={false}
						placeholder="blur"
						blurDataURL={BLUR_PLACEHOLDER}
						className="rounded-3xl overflow-hidden w-full drop-shadow-lg shadow-xl shadow-primary/5 group-hover:shadow-2xl transition-shadow duration-500"
					/>
				</Div>

				<div className="flex flex-col w-full gap-2">
					<Heading
						initial="exit"
						animate="enter"
						variants={animations.fade({ delay: 0.75, y: 1.5 })}
						primary
						className="font-bold text-base tracking-[0.2em] mx-1 uppercase"
					>
						[Character Details]
					</Heading>

					<Div
						initial="exit"
						animate="enter"
						variants={animations.fade({ delay: 1.25, y: 2.5 })}
						className="flex flex-col gap-1"
					>
						<p className="font-normal text-base text-primary/70">
							<span className="text-primary/40">Name:</span> Nicolas R.
						</p>
						<p className="font-normal text-base text-primary/70">
							<span className="text-primary/40">Age:</span> {age.toString()}{" "}
							years old
						</p>

						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<p className="font-normal text-base text-primary/70">
										<span className="text-primary/40">Origin:</span> Brazil, PR
									</p>
								</TooltipTrigger>
								<TooltipContent side="bottom">
									<p>🇧🇷 Brazil mentioned</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>

						<p className="font-normal text-base text-primary/70">
							<span className="text-primary/40">Class:</span> Software engineer
						</p>
						<p className="font-normal text-base text-primary/70">
							<span className="text-primary/40">Specialization:</span> Full
							stack
						</p>
					</Div>
				</div>
			</section>
  )
}
