import { P } from "@/components/shards/animated/paragraph";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import Image from "next/image";

export const metadata = {
  title: "D-kja's website"
}

const BLUR_PLACEHOLDER = "|VHLMZM{9ttPtRRPWAj]j]_NRjEL%Mt7ofs;WBRjX4s:WCRir@ogbYRjoft7oMspWBNFRibbt7oyW.R*adkCxus;WBofWBShoft7RjoJWARjt7j]NGofofaejZaya#WUj?M|bFxaayjtoya{floLR*f*xuWVWUofWVaxax"

export default function Home() {
  const birthDate = dayjs('2002-08-15')
  const currentDate = dayjs()
  const age = currentDate.diff(birthDate, 'years', false);

  return (
    <main className="my-16 flex flex-col md:grid md:grid-cols-3 gap-16 md:gap-6 max-w-screen-lg mx-auto">

      <section title="character details" className="col-span-1 flex flex-col flex-1 justify-start items-center gap-6 md:max-w-[280px] mx-auto">
        <Image
          src="/pfp.png"
          width={280}
          height={280}
          alt="github pfp"
          priority={false}
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
          className="rounded-3xl overflow-hidden w-full drop-shadow-lg shadow-xl shadow-primary/5"
        />

        <div className="flex flex-col w-full gap-2">
          <h1 className="font-bold text-base tracking-[0.2em] mx-1 uppercase">[Character Details]</h1>

          <div className="flex flex-col gap-1">
            <p className="font-normal text-base text-primary/70"><span className="text-primary/40">Name:</span> Nicolas R.</p>
            <p className="font-normal text-base text-primary/70"><span className="text-primary/40">Age:</span> {age.toString()} years old</p>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <p className="font-normal text-base text-primary/70"><span className="text-primary/40">Origin:</span> Brazil, PR</p>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>🇧🇷 Brazil mentioned</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <p className="font-normal text-base text-primary/70"><span className="text-primary/40">Class:</span> Software developer</p>
            <p className="font-normal text-base text-primary/70"><span className="text-primary/40">Specialty:</span> Full stack</p>
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-8 col-span-2">
        <section title="Who am I?" className="flex flex-col gap-3">
          <h2 className="font-bold text-xl">
            Who am I? 🤔
          </h2>

          <P className="lousy-text">
            Well, I'm just a nobody. A nobody trying his best to do the things that he finds joy in life.
          </P>

          <p className="lousy-text">
            But if you really want to know who I am, here you go. I'm called Nicolas, I've been working on the field since the start of 2022 as a software developer.
          </p>

          <p className="lousy-text">
            My first interaction with code was when I was between 13 and 15y (I can't quite recall the exact age), I was trying to modify existing server plugins in Minecraft and although I did manage to change those plugins, my computer was always on the verge of frying after using Visual Studio 🫠.
          </p>

          <p className="lousy-text">
            Well, my free time consists of reading mangas and webtoons, going to the gym, drawing is also one of the things that I like to do, coding side projects, and I also play video games. Hope that's enough.
          </p>
        </section>

        <section title="Recent posts" className="flex flex-col gap-3">
          <h2 className="font-bold text-xl">
            Recent posts
          </h2>

          <span className={cn("lousy-text")}>
            It's meant to be a comfy space to write about my projects and share some of my thoughts, hope you can respect that.
          </span>
        </section>
      </div>
    </main>

  );
}
