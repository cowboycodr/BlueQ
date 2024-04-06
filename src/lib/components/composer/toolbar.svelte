<script>
	import { onMount } from 'svelte';
	import { Heading, Text, Bold, Italic } from 'lucide-svelte';

	import { Separator } from '$ui/separator';
	import ToolbarIcon from './toolbar-icon.svelte';

	export let editor;

	onMount(() => {
		if (editor.isEmpty) {
			editor.commands.setHeading({ level: 1 });
		}
	});

	$: headingToggled = editor.isActive('heading');
	$: paragraphToggled = editor.isActive('paragraph');
	$: boldToggled = editor.isActive('bold');
	$: italicToggled = editor.isActive('italic');
</script>

<div class="mx-auto flex w-min space-x-1 rounded-lg border bg-white p-1 shadow-2xl">
	<ToolbarIcon
		bind:toggle={headingToggled}
		on:click={() => {
			headingToggled = !headingToggled;

			if (!headingToggled) {
				editor.chain().focus().setParagraph().run();
				return;
			}

			editor.chain().focus().setHeading({ level: 1 }).run();
		}}
	>
		<Heading />
	</ToolbarIcon>
	<ToolbarIcon
		bind:toggle={paragraphToggled}
		on:click={() => {
			paragraphToggled = !paragraphToggled;

			if (paragraphToggled) {
				editor.chain().focus().setParagraph().run();
				return;
			}
		}}
	>
		<Text size={32} />
	</ToolbarIcon>
	<div class="shrink border-l"></div>
	<ToolbarIcon
		bind:toggle={boldToggled}
		on:click={() => {
			boldToggled = !boldToggled;

			if (boldToggled) {
				editor.chain().setBold().focus().run();
				return;
			}

			editor.chain().unsetBold().focus().run();
		}}
	>
		<Bold size={32} />
	</ToolbarIcon>
	<ToolbarIcon
		bind:toggle={italicToggled}
		on:click={() => {
			italicToggled = !italicToggled;

			if (italicToggled) {
				editor.chain().setItalic().focus().run();
				return;
			}

			editor.chain().unsetItalic().focus().run();
		}}
	>
		<Italic size={32} />
	</ToolbarIcon>
</div>
