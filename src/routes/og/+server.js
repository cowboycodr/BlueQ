import { read } from '$app/server';
import { render } from '$lib/server/og';

import GeistRegular from '$lib/fonts/Geist-Regular.otf';
import GeistSemiBold from '$lib/fonts/Geist-SemiBold.otf';
import OG from './og.svelte';

const geistRegular = read(GeistRegular).arrayBuffer();
const geistSemiBold = read(GeistSemiBold).arrayBuffer();

export const GET = async () => {
	const og = await render(OG, {
		fonts: {
			regular: geistRegular,
			semi_bold: geistSemiBold
		}
	});

	return new Response(og.asPng(), {
		headers: {
			'content-type': 'image/png'
		}
	});
};
