<script>
	import { onMount } from 'svelte';
	import { Heading, Text } from 'lucide-svelte';
	import ToolbarIcon from './toolbar-icon.svelte';

	export let editor;

	onMount(() => {
		editor.chain().focus().setHeading({ level: 1 }).run();
	});

    $: headingToggled = editor.isActive("heading")
</script>

<div class="mx-auto flex w-min space-x-1 rounded-lg border bg-white p-1 shadow-sm">
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
	<ToolbarIcon>
		<Text size={32} />
	</ToolbarIcon>
</div>
