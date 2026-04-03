import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import { PostContent } from "./post-content";

interface PostPageProps {
	params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
	const slugs = getPostSlugs();
	return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
	params,
}: PostPageProps): Promise<Metadata> {
	const { slug } = await params;
	const post = getPostBySlug(slug);

	if (!post) {
		return {
			title: "Post Not Found",
			description: "The requested post could not be found.",
		};
	}

	return {
		title: post.title,
		description: post.summary,
		keywords: post.tags,
		openGraph: {
			type: "article",
			title: post.title,
			description: post.summary,
			publishedTime: post.date,
			tags: post.tags,
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.summary,
		},
	};
}

export default async function PostPage({ params }: PostPageProps) {
	const { slug } = await params;
	const post = getPostBySlug(slug);

	if (!post) {
		notFound();
	}

	return <PostContent post={post} />;
}
