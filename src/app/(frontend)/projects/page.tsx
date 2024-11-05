import Link from 'next/link';
import { sanityFetch } from '@/sanity/lib/live';
import { PROJECTS_QUERY } from '@/sanity/lib/queries';

export default async function Page() {
	const { data: projects } = await sanityFetch({ query: PROJECTS_QUERY });

	return (
		<main>
			<h1>Project index</h1>
			<ul>
				{projects.map((project) => (
					<li key={project._id}>
						<Link href={`/projects/${project?.slug?.current}`}>{project?.title}</Link>
					</li>
				))}
			</ul>
			<hr />
			<Link href="/">&larr; Return home</Link>
		</main>
	);
}
