<script>
	import * as Card from '$ui/card';

	export let data;
	let { profile } = data;
	$: ({ profile } = data);

	const projects = [
		{
			name: 'Arc',
			id: "001"
		},
        {
            name: "Vercel",
            id: "002"
        }
	];
</script>

<div class="container p-2">
	<h1 class="text-lg font-semibold">
		Your projects
	</h1>
	<div class="grid grid-cols-3 gap-2">
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
