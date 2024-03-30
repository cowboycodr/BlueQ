<script>
	import moment from 'moment';

	import { Input } from '$ui/input';
	import { Checkbox } from '$ui/checkbox';
	import * as Table from '$ui/table';

	import Subscriber from './subscriber.svelte';

	export let project;
	export let subscribers;

	let masterSelected = false;
    let selected = [];

    function handleSelect(ev) {
        const { subscriber } = ev.detail;

        selected = [subscriber.id, ...selected];
    }

    function handleDeselect(ev) {
        const { subscriber } = ev.detail;

        // Filter out the deselected subscriber's ID from the 'selected' array
        selected = selected.filter(id => id !== subscriber.id);
    }

    $: console.log({ selected });
</script>

<Table.Root>
	<Table.Caption>
		A list of people subscribed to {project.title}.
	</Table.Caption>
	<Table.Header>
		<Table.Row>
			<Table.Head class="flex items-center">
				<Checkbox bind:checked={masterSelected} />
			</Table.Head>
			<Table.Head>
                <Input placeholder="Email" />
            </Table.Head>
			<Table.Head>Location</Table.Head>
			<Table.Head>Date subscribed</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each subscribers as subscriber}
			<Subscriber {subscriber} selected={masterSelected} on:select={handleSelect} on:deselect={handleDeselect} />
		{/each}
	</Table.Body>
</Table.Root>
