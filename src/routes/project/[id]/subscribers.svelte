<script>
    import moment from "moment";

	import { Input } from '$ui/input';
	import { Checkbox } from '$ui/checkbox';
	import * as Table from '$ui/table';

    import Subscriber from "./subscriber.svelte";

	export let project;
	export let subscribers;

    let masterSelected = false;
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
			<Table.Head>Email</Table.Head>
			<Table.Head>Location</Table.Head>
			<Table.Head>Date subscribed</Table.Head>
		</Table.Row>
	</Table.Header>
    <Table.Body>
        {#each subscribers as subscriber}
            <Subscriber selected={masterSelected} {subscriber} />
        {/each}
    </Table.Body>
</Table.Root>
