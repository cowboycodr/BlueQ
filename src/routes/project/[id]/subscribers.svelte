<script>
	import { onMount } from 'svelte';
	import Fuse from 'fuse.js';
	import { Button } from '$ui/button';
	import { Input } from '$ui/input';
	import { Checkbox } from '$ui/checkbox';
	import * as Table from '$ui/table';
	import Subscriber from './subscriber.svelte';

	export let project;
	export let subscribers;

	let masterSelected = false;
	let selected = [];
	let displayedSubscribers = subscribers || [];

	let fuse;
	let minScore = 0.3;
	let emailSearch = '';

	onMount(() => {
		const options = {
			keys: ['email'], // Define keys to search in
			includeScore: true, // Include score to sort by relevance
			isCaseSensitive: false,
			threshold: minScore,
		};
		fuse = new Fuse(subscribers, options);

		// Initially display all subscribers
		displayedSubscribers = subscribers;
	});

	function handleSelect(ev) {
		const { subscriber } = ev.detail;

		selected = [subscriber.id, ...selected];
	}

	function handleDeselect(ev) {
		const { subscriber } = ev.detail;

		// Filter out the deselected subscriber's ID from the 'selected' array
		selected = selected.filter((id) => id !== subscriber.id);
	}

	$: if (emailSearch) {
		const results = fuse.search(emailSearch);
		displayedSubscribers = results.map((result) => result.item);
	} else {
		displayedSubscribers = subscribers || [];
	}
</script>

<Table.Root class="min-w-[600px]">
	<Table.Caption>
		{#if displayedSubscribers.length > 0}
			A list of people subscribed to {project.title}.
		{:else if emailSearch.length > 0}
			No subscribers found with email "{emailSearch}".
		{:else}
			Subscribers to {project.title} will show up here.
		{/if}
	</Table.Caption>
	<Table.Header>
		<Table.Row>
			<Table.Head>
				<Checkbox bind:checked={masterSelected} />
			</Table.Head>
			<Table.Head>
				<div class="flex w-96 items-center space-x-1">
					<Input
						class="text-primary"
						placeholder="Email (type here to search)"
						bind:value={emailSearch}
					/>
				</div>
			</Table.Head>
			<Table.Head>Location</Table.Head>
			<Table.Head>Joined</Table.Head>
			<Table.Head />
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each displayedSubscribers as subscriber}
			<Subscriber
				{subscriber}
				selected={masterSelected}
				on:select={handleSelect}
				on:deselect={handleDeselect}
			/>
		{/each}
	</Table.Body>
</Table.Root>
