<script>
	import { Button } from '$ui/button';
	import * as Card from '$ui/card';

	export let data;
	let { profile } = data;
	$: ({ profile } = data);

	let displayName = profile.full_name.split(' ')[0].slice(0, 12);
</script>

<svelte:head>
	<title>
		{displayName} - Dashboard / BlueQ
	</title>
</svelte:head>

<div class="w-full space-y-2">
	<h1 class=" p-2 pb-0 text-lg font-semibold">
		Dashboard
	</h1>
	<div class="px-2">
		<div class="grid grid-cols-2 gap-2">
			<Card.Root>
				<Card.Header>
					<Card.Description>Landing page visits</Card.Description>
					<Card.Title>+22,384</Card.Title>
				</Card.Header>
				<Card.Content>[ chart ]</Card.Content>
			</Card.Root>
			<Card.Root>
				<Card.Header>
					<Card.Description>Email list subscribers</Card.Description>
					<Card.Title>+3,284</Card.Title>
				</Card.Header>
				<Card.Content>[ chart ]</Card.Content>
			</Card.Root>
		</div>
	</div>
</div>
