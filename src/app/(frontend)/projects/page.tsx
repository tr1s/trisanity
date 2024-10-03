import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { PROJECTS_QUERY } from '@/sanity/lib/queries';

const options = { next: { revalidate: 60 } };

export default async function Page() {
	const projects = await client.fetch(PROJECTS_QUERY, {}, options);

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
