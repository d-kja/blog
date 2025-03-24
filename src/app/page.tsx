import { DetailsCard } from "@/components/layout/home/details-card";
import { Description } from "@/components/layout/home/description";

export const revalidate = 86400 // a day 
export const metadata = {
	title: "D-kja | 🏠 Home sweet home...",
};

export default function Home() {
	return (
		<main className="my-16 flex flex-col md:grid md:grid-cols-3 gap-12 md:gap-6 max-w-screen-lg mx-auto flex-1">
      <DetailsCard />
      <Description />
		</main>
	);
}
