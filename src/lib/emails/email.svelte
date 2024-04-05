<script>
	import {
		Html,
		Head,
		Button,
		Container,
		Column,
		Section,
		Heading,
		Hr,
		Img,
		Link,
		Preview,
		Text
	} from 'svelte-email';
	import { twist } from '.';
	import { twi } from 'tw-to-css';

	twist('bg-black text-white');

	export let author;
	export let content;
	export let title;

	const colors = {
		mutedForeground: `#64748b`,
		secondary: `#f1f5f9`
	};

	const maxWidth = "600px";

	$: paragraphs = content.split('\n');
</script>

<Html style={twi(`bg-white`)} lang="en">
	<Container style={twist(`max-w-[${maxWidth}] border rounded-lg mx-auto my-2 py-5`)}>
		<Heading as="h1" style={twist(`text-center text-3xl font-semibold italic`)}>{title}</Heading>
		<Text style={twist(`text-center m-0 text-lg text-[${colors.mutedForeground}]`)}>{author}</Text>
	</Container>
	<Container style={twist(`${maxWidth} border rounded-lg mx-auto my-2 py-2 px-5`)}>
		{#each paragraphs as paragraph}
			<Text style={twist(`text-lg`)}>{paragraph}</Text>
		{/each}
	</Container>
	<Container style={twist(`max-w-[${maxWidth}] border rounded-lg mx-auto my-2 py-5`)}>
		<Text style={twist(`text-center m-0 text-sm text-[${colors.mutedForeground}]`)}>
			<span>Powered by <Link href="https://blueq.app">BlueQ</Link>.</span>
		</Text>
	</Container>
</Html>
