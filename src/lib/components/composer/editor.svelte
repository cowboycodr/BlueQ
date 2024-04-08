<script>
	import './composer.pcss';

	import { onMount } from 'svelte';
	import { Editor } from '@tiptap/core';

	import StarterKit from '@tiptap/starter-kit';
	import Typography from '@tiptap/extension-typography';
	import Placeholder from '@tiptap/extension-placeholder';
	import Link from '@tiptap/extension-link';

	export let element;
	export let editor;
	export let content;

	onMount(() => {
		editor = new Editor({
			element: element,
			content: content,
			extensions: [
				StarterKit,
				Typography,
				Placeholder.configure({
					placeholder({ node }) {
						if (node.type.name === 'heading') {
							return 'Heading';
						}

						if (node.type.name === 'paragraph') {
							return 'Paragraph';
						}
					}
				}),
				Link
			],
			onTransaction() {
				editor = editor;
			},
			autofocus: true
		});

		return () => {
			editor.destroy();
		};
	});
</script>

<div class="prose *:outline-none prose-p:my-2 prose-p:py-0 prose-p:text-lg" bind:this={element} />
