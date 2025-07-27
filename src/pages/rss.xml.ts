import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
	const articles = await getCollection('articles');
	return rss({
		// `<title>` field in output xml
		title: 'w. biggs\' articles',
		// `<description>` field in output xml
		description: 'Articles posted by w. biggs',
		// Pull in your project "site" from the endpoint context
		// https://docs.astro.build/en/reference/api-reference/#site
		site: context.site!,
		// Array of `<item>`s in output xml
		// See "Generating items" section for examples using content collections and glob imports
		items: articles.map((article) => ({
			title: article.data.title,
			pubDate: article.data.pubDate,
			description: article.data.description,
			link: `/articles/${article.id}/`,
		})),
		// (optional) inject custom xml
		customData: `<language>en-us</language>`,
	});
}
