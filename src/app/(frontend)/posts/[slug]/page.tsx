import { sanityFetch } from '@/sanity/lib/live';
import { POST_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
	const { data: post } = await sanityFetch({ query: POST_QUERY, params: await params });

	if (!post) {
		notFound();
	}

	return (
		<main>
			<h1>{post?.title}</h1>
			<hr />
			<Link href="/posts">&larr; Return to index</Link>
		</main>
	);
}
