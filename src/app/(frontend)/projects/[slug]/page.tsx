import { client } from '@/sanity/lib/client';
import { PROJECT_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import Link from 'next/link';

type ProjectIndexProps = { params: { slug: string } };

const options = { next: { revalidate: 60 } };

export default async function Page({ params }: ProjectIndexProps) {
	const project = await client.fetch(PROJECT_QUERY, params, options);

	if (!project) {
		notFound();
	}

	return (
		<main>
			<h1>{project?.title}</h1>
			<hr />
			<Link href="/projects">&larr; Return to index</Link>
		</main>
	);
}
