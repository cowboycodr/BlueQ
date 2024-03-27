<script>
	import { ChevronDown } from 'lucide-svelte';

	import Projects from './projects.svelte';

	import { NewLaunchPageForm } from './forms';

	import { Button } from '$ui/button';
	import * as Card from '$ui/card';
	import * as Dropdown from '$ui/dropdown-menu';

	export let data;
	let { projects } = data;
	$: ({ projects } = data);

	let showNewLaunchPageForm = false;
</script>

<svelte:head>
	<title>Home - BlueQ</title>
</svelte:head>

<div class="container mx-auto p-2">
	<nav class="flex items-center justify-between pb-2">
		<div class="flex items-center space-x-1">
			<h1 class="text-lg font-semibold">Home</h1>
		</div>
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
		</Card.Root>
	</div>
	<div>
		<div class="flex items-center space-x-1">
			<h1 class="text-lg font-semibold">Projects</h1>
			<Dropdown.Root>
				<Dropdown.Trigger>
					<Button class="flex space-x-1 px-2" variant="ghost">
						<ChevronDown size={16} />
						<span> New </span>
					</Button>
				</Dropdown.Trigger>
				<Dropdown.Content>
					<Dropdown.Group>
						<Dropdown.Item
							class="flex space-x-1"
							on:click={() => {
								showNewLaunchPageForm = true;
							}}
						>
							<span> Launch Page </span>
						</Dropdown.Item>
						<Dropdown.Item class="flex space-x-1" disabled>
							<span> Mailing List </span>
						</Dropdown.Item>
					</Dropdown.Group>
				</Dropdown.Content>
			</Dropdown.Root>
		</div>
		<Projects {projects} />
	</div>
</div>

{#if showNewLaunchPageForm}
	<NewLaunchPageForm
		form={data.form}
		on:close={() => {
			showNewLaunchPageForm = false;
		}}
	/>
{/if}
