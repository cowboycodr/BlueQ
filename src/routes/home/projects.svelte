<script>
	import { Rocket, Mails, LucideSquareArrowOutUpRight, Link, Check } from 'lucide-svelte';

	import ProjectLink from './project-link.svelte';
	import * as Table from '$ui/table';

	export let projects;
</script>

<Table.Root>
	<Table.Caption>A list of your projects.</Table.Caption>
	<Table.Header>
		<Table.Row>
			<Table.Head class="w-[250px]">Title</Table.Head>
			<Table.Head>Type</Table.Head>
			<Table.Head>Link</Table.Head>
			<Table.Head class="text-right md:text-left">Subscribers</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each projects as project}
			<Table.Row>
				<Table.Cell>
					<a href={`/project/${project.id}`} class="flex items-center space-x-1">
						<span> {project.title} </span>
						<LucideSquareArrowOutUpRight class="text-muted-foreground" size={12} />
					</a>
				</Table.Cell>
				<Table.Cell>
					<div class="flex items-center space-x-1 text-muted-foreground">
						{#if project.type === 'launch'}
							<Rocket size={16} />
							<span> Launch </span>
						{:else}
							<Mails size={16} />
							<span> Mailing </span>
						{/if}
					</div>
				</Table.Cell>
				<Table.Cell>
					<ProjectLink shortCode={project.short_code} />
				</Table.Cell>
				<Table.Cell class="text-right md:text-left">{project.subscriber_count}</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
