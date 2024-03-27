<script>
	import { Rocket, Mails } from 'lucide-svelte';
	import * as Card from '$ui/card';
	export let projects;
</script>

<div class="grid gap-2 md:grid-cols-3">
	{#each projects as project}
		<a href={`/${project.id}`}>
			<Card.Root>
				<Card.Header>
					<div class="flex space-x-1">
						<svelte:component this={project.type === 'launch' ? Rocket : Mails} size={16} />
						<Card.Title>{project.title}</Card.Title>
					</div>
					<Card.Description>0 subscribers</Card.Description>
				</Card.Header>
			</Card.Root>
		</a>
	{/each}
</div>
