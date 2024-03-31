<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	import moment from 'moment';
	import { MoreHorizontal } from 'lucide-svelte';

	import { Button } from '$ui/button';
	import { Checkbox } from '$ui/checkbox';
	import * as Table from '$ui/table';

	export let subscriber;
	export let selected = false;

	function dispatchSelectState(selected) {
		if (!selected) {
			dispatch('deselect', { subscriber });
			return;
		}

		dispatch('select', { subscriber });
	}

	$: dispatchSelectState(selected);
</script>

<Table.Row>
	<Table.Cell>
		<Checkbox bind:checked={selected} />
	</Table.Cell>
	<Table.Cell>
		{subscriber.email}
	</Table.Cell>
	<Table.Cell>
		{subscriber.location}
	</Table.Cell>
	<Table.Cell>
		{moment(subscriber.created_at).format('MM/DD/YY')}
	</Table.Cell>
	<Table.Cell>
		<div class="flex items-center">
			<Button variant="ghost">
				<MoreHorizontal size="16" />
			</Button>
		</div>
	</Table.Cell>
</Table.Row>
