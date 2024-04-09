<script>
	import { Editor, Toolbar } from '$lib/components/composer';

	import Header from './header.svelte';
	import EmailDetails from './email-details.svelte';

	export let data;
	const { project } = data;

	let editor;
	let content;
	let subject;
	let author;
</script>

<svelte:head>
	<title>Composing / {project.title} - BlueQ</title>
</svelte:head>

<Header {editor} {subject} />

<main class="mx-auto max-w-[600px] px-2">
	<div class="py-5">
		<EmailDetails {project} bind:subject bind:author />
	</div>
	<Editor bind:editor bind:content />
	{#if editor}
		<div class="sticky bottom-5">
			<Toolbar {editor} />
		</div>
	{/if}
</main>
