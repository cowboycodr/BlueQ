import { json, text } from '@sveltejs/kit';

export const GET = async ({ url, locals: { supabase } }) => {
	const BASE_URL = url.origin;
	const projects = await (async () => {
		const { data, error } = await supabase.from('projects').select('*');

		return data;
	})();

	const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${projects
					.map(
						(project) => `
            <url>
                <loc>${BASE_URL}/q/${project.short_code}</loc>
                <lastmod>${project.created_at}</lastmod>
            </url>
        `
					)
					.join('')}
    </urlset>
`.trim();

	return text(sitemap);
};
