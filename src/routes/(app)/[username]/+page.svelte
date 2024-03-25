<script>
	import { Button } from '$ui/button';
	import * as Card from '$ui/card';

	export let data;
	let { profile, projects } = data;
	$: ({ profile, projects } = data);
</script>

<div class="w-full p-2">
	<h1 class="text-lg font-semibold">Projects</h1>
	<div class="grid grid-cols-3 gap-2">
		<Card.Root>
			<Card.Header>
				<Card.Title>Create a new project</Card.Title>
				<Card.Description>The possibilities are endless.</Card.Description>
			</Card.Header>
			<Card.Footer>
				<Button>Create</Button>
			</Card.Footer>
		</Card.Root>
		{#each projects as project}
			<a href={`/${profile.username}/${project.id}`}>
				<Card.Root>
					<Card.Header>
						<Card.Title>
							{project.name}
						</Card.Title>
					</Card.Header>
				</Card.Root>
			</a>
		{/each}
	</div>
</div>
