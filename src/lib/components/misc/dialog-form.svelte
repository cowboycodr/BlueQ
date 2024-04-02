<script>
	import { createEventDispatcher } from 'svelte';
	import * as Dialog from '$ui/dialog';

	export let open = true;

	const dispatch = createEventDispatcher();

	// Reactively watch 'open' and dispatch 'close' when it becomes false
	$: if (!open) dispatch('close');
</script>

<Dialog.Root bind:open>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>
				<slot name="title" />
			</Dialog.Title>
		</Dialog.Header>
		<slot />
	</Dialog.Content>
</Dialog.Root>
