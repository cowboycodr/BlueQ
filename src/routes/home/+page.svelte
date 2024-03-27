<script>
	import { ChevronDown, Mails, Rocket } from 'lucide-svelte';

	import Projects from "./projects.svelte";

	import { Button } from '$ui/button';
	import * as Card from '$ui/card';
	import * as Dropdown from '$ui/dropdown-menu';

	export let data;
	// let { projects } = data;
	// $: ({ projects } = data);

	let projects = [
		{
			title: "Vercel",
			type: "launch"
		},
		{
			title: "Arc",
			type: "mailing"
		},
		{
			title: "Vesturio",
			type: "launch",
		},
		{
			title: "Vercel",
			type: "launch"
		},
		{
			title: "Arc",
			type: "mailing"
		},
	]
</script>

<svelte:head>
	<title>
		Home - BlueQ
	</title>
</svelte:head>

<div class="container mx-auto p-2">
	<nav class="flex items-center justify-between pb-2">
		<div class="flex items-center space-x-1">
			<h1 class="text-lg font-semibold">Home</h1>
		</div>
		<div class="flex items-center space-x-1">
			<Dropdown.Root>
				<Dropdown.Trigger>
					<Button class="flex space-x-1">
						<ChevronDown size={16} />
						<span> New </span>
					</Button>
				</Dropdown.Trigger>
				<Dropdown.Content>
					<Dropdown.Group>
						<Dropdown.Item class="flex space-x-1">
							<Rocket size={16} />
							<span> Launch Page </span>
						</Dropdown.Item>
						<Dropdown.Item class="flex space-x-1" disabled>
							<Mails size={16} />
							<span> Mailing List </span>
						</Dropdown.Item>
					</Dropdown.Group>
				</Dropdown.Content>
			</Dropdown.Root>
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
		<h1 class="pb-2 text-lg font-semibold">Projects</h1>
		<Projects {projects} />
	</div>
</div>
