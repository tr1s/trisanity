import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
	S.list()
		.title('tris.codes/')
		.items([
			S.listItem()
				.title('Blog')
				.child(
					S.list()
						.title('Blog')
						.items([
							S.documentTypeListItem('post').title('Posts'),
							S.documentTypeListItem('category').title('Categories'),
							S.documentTypeListItem('author').title('Authors'),
							S.divider(),
							...S.documentTypeListItems().filter(
								(item) =>
									item.getId() && !['post', 'category', 'author', 'project'].includes(item.getId()!)
							),
						])
				),
			S.listItem()
				.title('Project')
				.child(
					S.list()
						.title('Project')
						.items([S.documentTypeListItem('project').title('Projects'), S.divider()])
				),
			// Add more top-level sections as needed
		]);
