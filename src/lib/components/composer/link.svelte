<script>
	import { createEventDispatcher } from 'svelte';

	import * as Popover from '$ui/popover';
	import { Button } from '$ui/button';
	import { Input } from '$ui/input';

	import { Link } from 'lucide-svelte';

	export let toggle = false;
	export let url = '';

	const dispatch = createEventDispatcher();

	export let open = false;

	$: if (open) {
		dispatch('open');
	} else if (!open && url) {
		dispatch('submit');
	} else {
		dispatch('close');
	}
</script>

<Popover.Root bind:open>
	<Popover.Trigger asChild let:builder>
		<Button
			on:click
			builders={[builder]}
			variant="ghost"
			class="aspect-square h-[28px] w-[28px] p-1 {toggle ? 'bg-gray-200 hover:bg-gray-200' : ''}"
			{...$$props}
		>
			<Link size={32} />
		</Button>
	</Popover.Trigger>
	<Popover.Content class="p-0">
		<Input type="url" placeholder="Enter the url here..." bind:value={url} />
	</Popover.Content>
</Popover.Root>
