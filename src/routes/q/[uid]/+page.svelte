<script>
	import { page } from '$app/stores';

	import { SplitScreen } from '$lib/components/layouts';

	import { Button } from '$ui/button';
	import * as Card from '$ui/card';

	export let data;
	const { project } = data;
</script>

<svelte:head>
	<title>
		{project.title} - Launch Page
	</title>
</svelte:head>

<SplitScreen>
	<div slot="left">
		<h1 class="text-3xl font-semibold">
			<span>{project.title}</span>
		</h1>
		<p class="text-muted-foreground">
			{project.caption}
		</p>
	</div>
	<div slot="right">
		<Card.Root>
			<Card.Header>
				<Card.Title>Launch list</Card.Title>
				<Card.Description>
					Receive launch updates. Sign up for progress notifications.
				</Card.Description>
			</Card.Header>
		</Card.Root>
	</div>
</SplitScreen>
