<script>
    import { page } from '$app/stores';

	import { MailPlus } from 'lucide-svelte';

	import { Button } from '$ui/button';
	import * as Card from '$ui/card';
	import * as Dropdown from '$ui/dropdown-menu';

	export let data;
	const { project } = data;
</script>

<svelte:head>
	<title>
		{project.title} - BlueQ
	</title>
</svelte:head>

<div class="container mx-auto p-2">
	<nav class="flex items-center justify-between pb-2">
		<h1 class="text-lg font-semibold">
			{project.title}
		</h1>
	</nav>
	<div class="grid gap-2 pb-2 md:grid-cols-2">
		<Card.Root>
			<Card.Header>
				<Card.Description>Subscribers (24hrs)</Card.Description>
				<Card.Title>+0</Card.Title>
			</Card.Header>
		</Card.Root>
		<Card.Root>
			<Card.Header>
				<Card.Description>Visits (24hrs)</Card.Description>
				<Card.Title>0</Card.Title>
			</Card.Header>
            <Card.Content>

            </Card.Content>
		</Card.Root>
	</div>
	<div class="pb-2">
		<div class="flex items-center justify-between space-x-1">
			<div>
				<h1 class="text-lg font-semibold">Subscribers ({project.subscribers.length})</h1>
			</div>
			<div>
				<Button class="space-x-1">
                    <span>
                        New email
                    </span>
					<MailPlus size={16} />
				</Button>
			</div>
		</div>
	</div>
</div>
