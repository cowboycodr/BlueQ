<script>
	import { Rocket, Mails, LucideSquareArrowOutUpRight, Link } from 'lucide-svelte';

	import * as Card from '$ui/card';
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
					<a href={`/project/${project.short_code}`} class="flex items-center space-x-1">
						<span> {project.title} </span>
						<LucideSquareArrowOutUpRight class="text-muted-foreground" size={12} />
					</a>
				</Table.Cell>
				<Table.Cell class="flex items-center space-x-1 text-muted-foreground">
					{#if project.type === 'launch'}
						<Rocket size={16} />
						<span> Launch Page </span>
					{:else}
						<Mails size={16} />
						<span> Mailing List </span>
					{/if}
				</Table.Cell>
				<Table.Cell>
					<div
						class="flex w-min items-center space-x-1 rounded-md bg-muted p-1 text-muted-foreground"
					>
						<a href="/q/${project.short_code}">
							blueq.app/{project.short_code}
						</a>
						<Link size={12} />
					</div>
				</Table.Cell>
				<Table.Cell class="text-right md:text-left">{0}</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
