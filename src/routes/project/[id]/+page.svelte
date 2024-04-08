<script>
	import { page } from '$app/stores';

	import moment from 'moment';
	import { MailPlus, Settings, ArrowLeftIcon, Copy, ChevronDown } from 'lucide-svelte';

	import { copy } from '$utils';
	import { Button } from '$ui/button';
	import * as Card from '$ui/card';
	import * as Dropdown from '$ui/dropdown-menu';

	import { CreateEmailForm, AddContactForm } from './forms';
	import Subscribers from './subscribers.svelte';

	export let data;
	const { project, visitsCount } = data;

	let showCreateEmailForm = false;
	let showAddContactForm = false;

	$: subscribersLastDay = project.subscribers.filter((subscriber) =>
		moment(subscriber.created_at).isAfter(moment().subtract(24, 'hours'))
	);
</script>

<svelte:head>
	<title>
		{project.title} - BlueQ
	</title>
</svelte:head>

<div class="container mx-auto p-2">
	<nav class="flex items-center justify-between pb-2">
		<div class="flex items-center space-x-1">
			<Button href="/home" variant="ghost">
				<ArrowLeftIcon size={16} />
			</Button>
			<h1 class="text-lg font-semibold">
				{project.title}
			</h1>
			<div
				class="flex items-center space-x-1 rounded-md bg-muted p-1 text-sm text-muted-foreground"
			>
				<a href="/q/{project.short_code}">
					{$page.url.origin}/q/{project.short_code}
				</a>
				<div class="cursor-pointer" use:copy={`${$page.url.origin}/q/${project.short_code}`}>
					<Copy size={16} />
				</div>
			</div>
		</div>
		<div class="flex items-center">
			<Button class="space-x-1" variant="ghost">
				<Settings size={16} />
				<span class="hidden md:block"> Settings </span>
			</Button>
		</div>
	</nav>
	<div class="grid gap-2 pb-2 md:grid-cols-2">
		<Card.Root>
			<Card.Header>
				<Card.Description>Subscribers (24hrs)</Card.Description>
				<Card.Title>{subscribersLastDay.length}</Card.Title>
			</Card.Header>
		</Card.Root>
		<Card.Root>
			<Card.Header>
				<Card.Description>Visits (24hrs)</Card.Description>
				<Card.Title>{visitsCount}</Card.Title>
			</Card.Header>
		</Card.Root>
	</div>
	<div class="pb-2">
		<div class="flex items-center justify-between space-x-1 pb-2">
			<div class="flex items-center space-x-1">
				<h1 class="text-lg font-semibold">Subscribers ({project.subscribers.length})</h1>
				<Dropdown.Root>
					<Dropdown.Trigger>
						<Button class="flex space-x-1 px-2" variant="ghost">
							<span> Add </span>
							<ChevronDown size={16} />
						</Button>
					</Dropdown.Trigger>
					<Dropdown.Content>
						<Dropdown.Group>
							<Dropdown.Item
								class="flex space-x-1"
								on:click={() => {
									showAddContactForm = true;
								}}
							>
								<span> Contact </span>
							</Dropdown.Item>
						</Dropdown.Group>
					</Dropdown.Content>
				</Dropdown.Root>
			</div>
			<div class="flex items-center space-x-1">
				<Button href="{project.id}/compose" class="space-x-1">
					<MailPlus size={16} />
					<span> Compose </span>
				</Button>
			</div>
		</div>
		<div>
			<Subscribers {project} subscribers={project.subscribers} />
		</div>
	</div>
</div>

{#if showCreateEmailForm}
	<CreateEmailForm
		form={data.createEmailForm}
		on:close={() => {
			showCreateEmailForm = false;
		}}
	/>
{/if}

{#if showAddContactForm}
	<AddContactForm
		form={data.addContactForm}
		on:close={() => {
			showAddContactForm = false;
		}}
	/>
{/if}
