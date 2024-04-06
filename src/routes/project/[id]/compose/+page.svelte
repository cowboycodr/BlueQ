<script>
	import { Editor, Toolbar } from '$lib/components/composer';

	let editor;
	let content;
</script>

<main class="mx-auto max-w-[600px]">
	<Editor bind:editor bind:content />
	{#if editor}
			<Toolbar {editor} />
	{/if}
</main>
