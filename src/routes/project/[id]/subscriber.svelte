<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	import moment from 'moment';
	import { MoreHorizontal, Trash, Copy } from 'lucide-svelte';

	import { Button } from '$ui/button';
	import * as Dropdown from '$ui/dropdown-menu';
	import { Checkbox } from '$ui/checkbox';
	import * as Table from '$ui/table';

	import { copy } from '$utils';

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

<Table.Row class={selected ? 'bg-gray-100' : ''}>
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
			<Dropdown.Root>
				<Dropdown.Trigger asChild let:builder>
					<Button builders={[builder]} variant="ghost">
						<MoreHorizontal size="16" />
					</Button>
				</Dropdown.Trigger>
				<Dropdown.Content>
					<Dropdown.Label>
						{subscriber.email}
					</Dropdown.Label>
					<Dropdown.Separator />
					<Dropdown.Group>
						<Dropdown.Item>
							<div class="flex space-x-1" use:copy={subscriber.email}>
								<Copy size={16} />
								<span> Copy email </span>
							</div>
						</Dropdown.Item>
						<Dropdown.Item class="flex space-x-1">
							<Trash size={16} class="text-destructive" />
							<span class="text-destructive"> Delete </span>
						</Dropdown.Item>
					</Dropdown.Group>
				</Dropdown.Content>
			</Dropdown.Root>
		</div>
	</Table.Cell>
</Table.Row>
