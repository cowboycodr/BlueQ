<script>
	import { Label } from '$ui/label';
	import { Separator } from '$ui/separator';

	export let project;

	export let author;
	export let subject = "Untitled";

	let authorTag = project.tag;
	$: author = `${authorTag}@blueq.app`;
</script>

<div class="py-10">
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
