<script>
	import { onMount } from 'svelte';
	import { Heading, Text, Bold, Italic, Link } from 'lucide-svelte';

	import { Separator } from '$ui/separator';
    import LinkTool from "./link.svelte";
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
	$: linkToggled = editor.isActive('link');
    let linkPopoverOpen = false;

    let linkToolUrl;
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
    <LinkTool
        bind:toggle={linkToggled}
        bind:open={linkPopoverOpen}
        bind:url={linkToolUrl}    
        on:submit={() => {
            let href;

            try {
                href = new URL(linkToolUrl).toString();
            } catch (error) {
                href = new URL("https://" + linkToolUrl).toString();
            }

            editor.chain().setLink({ href, target: "_blank" }).focus().run();

            linkToolUrl = "";
        }}
        on:click={() => {
            if (linkToggled) {
                setTimeout(() => {
                    linkPopoverOpen = false;
                }, 1)
            }

            editor.commands.unsetLink();
        }}
    />
</div>
