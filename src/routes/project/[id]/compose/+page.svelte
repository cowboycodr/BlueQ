<script>
	import { onMount } from 'svelte';

	import { Editor, Toolbar } from '$lib/components/composer';
	import { Button } from '$ui/button';
	import { Separator } from '$ui/separator';
	import { Label } from '$ui/label';

	import EmailDetails from './email-details.svelte';

	export let data;
	const { project } = data;

	let editor;
	let content;
</script>

<main class="mx-auto max-w-[600px]">
	<div class="py-10">
		<EmailDetails {project} />
	</div>
	<Editor bind:editor bind:content />
	{#if editor}
		<div class="sticky bottom-5">
			<Toolbar {editor} />
		</div>
	{/if}
</main>
