<script>
    import moment from "moment";

	import { Input } from '$ui/input';
	import { Checkbox } from '$ui/checkbox';
	import * as Table from '$ui/table';

	export let project;
	export let subscribers;
</script>

<Table.Root>
	<Table.Caption>
		A list of people subscribed to {project.title}.
	</Table.Caption>
	<Table.Header>
		<Table.Row>
			<Table.Head class="flex items-center">
				<Checkbox />
			</Table.Head>
			<Table.Head>Email</Table.Head>
			<Table.Head>Location</Table.Head>
			<Table.Head>Date subscribed</Table.Head>
		</Table.Row>
	</Table.Header>
    <Table.Body>
        {#each subscribers as subscriber}
            <Table.Row>
                <Table.Cell>
                    <Checkbox />
                </Table.Cell>
                <Table.Cell>
                    {subscriber.email}
                </Table.Cell>
                <Table.Cell>
                    {subscriber.location}
                </Table.Cell>
                <Table.Cell>
                    {moment(subscriber.created_at).format("MM/DD/YYYY")}
                </Table.Cell>
            </Table.Row>
        {/each}
    </Table.Body>
</Table.Root>
