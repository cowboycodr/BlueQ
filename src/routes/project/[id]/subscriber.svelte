<script>
    import moment from "moment";

    import * as Table from '$ui/table';
    import { Checkbox } from '$ui/checkbox';

    export let subscriber;
    export let selected = false;

    $: console.log({ selected })
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
        {moment(subscriber.created_at).format("MM/DD/YY")}
    </Table.Cell>
</Table.Row>