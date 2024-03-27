<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	import { inject } from '@vercel/analytics';
	inject();

	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	injectSpeedInsights();

	import moment from 'moment';

	import { Toaster } from 'svelte-sonner';

	import '../app.pcss';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});

	moment.updateLocale('relativeTime', {
		relativeTime: {
			future: 'in %s',
			past: '%s ago',
			s: 'secs',
			ss: '%ss',
			m: 'a min',
			mm: '%dm',
			h: 'an hour',
			hh: '%dh',
			d: 'a day',
			dd: '%dd',
			M: 'a month',
			MM: '%dM',
			y: 'a year',
			yy: '%dY'
		}
	});
</script>

<svelte:head>
	<link
		rel="preload"
		href="/fonts/geist/Geist-Regular.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		href="/fonts/geist/Geist-SemiBold.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
</svelte:head>

<Toaster position="top-center" />

<slot />
