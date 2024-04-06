<script>
	import { onMount, onDestroy } from 'svelte';

	import Toolbar from './toolbar.svelte';

	import { Editor } from '@tiptap/core';

	import StarterKit from '@tiptap/starter-kit';
	import Typography from '@tiptap/extension-typography';

	export let element;
	export let editor;
	export let content;

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [StarterKit, Typography],
			content: content,
			onTransaction() {
				editor = editor;
			},
			autofocus: true
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

<div class="pt-20"></div>
<div class="prose prose-p:my-2 prose-p:text-lg prose-p:py-0 *:outline-none" bind:this={element} />
