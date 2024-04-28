import { P } from "@/components/shards/animated/paragraph";
import Image from "next/image";

export const metadata = {
  title: "Home  -  d-kja"
}

export default function Home() {
  return (
    <main className="my-12 flex flex-col gap-24 max-w-screen-lg mx-auto">

      <section title="introduction" className="flex flex-col flex-1 justify-center items-center gap-5">
        <Image src="https://avatars.githubusercontent.com/u/89911360" width={140} height={140} alt="github pfp" className="rounded-full ring ring-offset-[0.25rem] ring-primary ring-offset-background" />

        <div className="flex flex-col items-center">
          <h1 className="font-extrabold text-3xl tracking-wide">Nicolas</h1>
          <p className="font-normal text-lg text-primary/60">A comfy space to write.</p>
        </div>
      </section>

      <div className="flex flex-col gap-8">

        <section title="Recent posts" className="flex flex-col gap-3">
          <h2 className="font-bold text-xl">
            Recent
          </h2>

          <span className="lousy-text">
            I'm mostly going to talk about my own projects or ideas, kinda like posts
          </span>
        </section>

        <section title="Who am I?" className="flex flex-col gap-3">
          <h2 className="font-bold text-xl">
            Who am I?
          </h2>

          <P className="lousy-text">
            Well, I'm just a nobody. A nobody trying his best to do the things that he finds joy in life.
          </P>

          <p className="lousy-text">
            But if you really want to know who I am, here you go. I'm called Nicolas, I've been working on the field since the start of 2022 as a web developer. Oh.. almost forgot to say that I'm from Brazil. Hope that's enough.
          </p>
        </section>

      </div>
    </main>

  );
}
