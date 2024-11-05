import { sanityFetch } from '@/sanity/lib/live';
import { PROJECT_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
	const { data: project } = await sanityFetch({ query: PROJECT_QUERY, params: await params });

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
