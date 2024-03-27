<script>
	import { createEventDispatcher } from 'svelte';
	import * as Dialog from '$ui/dialog';

	export let action;
	export let form;
	export let schema;
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
	</Dialog.Content>
</Dialog.Root>
