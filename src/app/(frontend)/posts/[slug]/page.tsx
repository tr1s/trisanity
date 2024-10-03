import { client } from '@/sanity/lib/client';
import { POST_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import Link from 'next/link';

type PostIndexProps = { params: { slug: string } };

const options = { next: { revalidate: 60 } };

export default async function Page({ params }: PostIndexProps) {
	const post = await client.fetch(POST_QUERY, params, options);

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
