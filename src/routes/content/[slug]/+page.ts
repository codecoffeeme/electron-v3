import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../../../content/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata,
			slug: params.slug
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}.`);
	}
};
