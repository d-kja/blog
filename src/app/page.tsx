import { DetailsCard } from "@/components/layout/home/details-card";
import { Description } from "@/components/layout/home/description";
import { getRecentPosts } from "@/lib/posts";

export default function HomePage() {
	const recentPosts = getRecentPosts(3);

	return (
		<main className="my-16 flex flex-col md:grid md:grid-cols-3 gap-12 md:gap-10 max-w-screen-lg mx-auto flex-1 px-4">
			<DetailsCard />
			<Description recentPosts={recentPosts} />
		</main>
	);
}
