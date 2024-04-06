<script>
	import "./composer.pcss";

	import { onMount, onDestroy } from 'svelte';

	import Toolbar from './toolbar.svelte';

	import { Editor } from '@tiptap/core';

	import StarterKit from '@tiptap/starter-kit';
	import Typography from '@tiptap/extension-typography';
	import Placeholder from '@tiptap/extension-placeholder';

	export let element;
	export let editor;
	export let content;

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [
				StarterKit,
				Typography,
				Placeholder.configure({
					placeholder({ node }) {
						if (node.type.name === "heading") {
							return "Heading"
						}

						if (node.type.name === "paragraph") {
							return "Paragraph"
						}
					}
				})
			],
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
<div class="prose *:outline-none prose-p:my-2 prose-p:py-0 prose-p:text-lg" bind:this={element} />