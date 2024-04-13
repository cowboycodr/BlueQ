<script>
	import { Label } from '$ui/label';
	import { Separator } from '$ui/separator';

	export let project;

	export let subject = 'Untitled';

	export let authorTag = project.tag;
</script>

<div>
	<div>
		<div>
			<Label>From</Label>
			<div class="text-sm text-muted-foreground">
				<span>{project.title} </span>
				{'<'}<span bind:innerText={authorTag} contenteditable>{project.tag}</span>@blueq.app{'>'}
			</div>
			<Separator />
		</div>
		<div>
			<Label>Subject</Label>
			<input class="w-full" type="text" placeholder="Enter subject here..." bind:value={subject} />
			<Separator />
		</div>
	</div>
</div>
