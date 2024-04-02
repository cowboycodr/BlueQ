<script>
	import DialogForm from '$lib/components/misc/dialog-form.svelte';
	import { createSuperForm } from '$lib/utils/forms';
	import { launchPageFormSchema } from './schemas';

	import { Input } from '$ui/input';
	import { Textarea } from '$ui/textarea';
	import * as Form from '$ui/form';

	let data;
	export { data as form };

	const form = createSuperForm(data, launchPageFormSchema);
	const { form: formData } = form;
</script>

<DialogForm on:close>
	<svelte:fragment slot="title">New Launch Page</svelte:fragment>
	<form method="POST" action="?/newProject">
		<Form.Field {form} name="title">
			<Form.Control let:attrs>
				<Form.Label>Title</Form.Label>
				<Input
					{...attrs}
					bind:value={$formData.title}
					placeholder="Enter your project name here..."
				/>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="caption">
			<Form.Control let:attrs>
				<Form.Label>Caption</Form.Label>
				<Textarea
					{...attrs}
					bind:value={$formData.caption}
					placeholder="Your project motto, or a brief description..."
				/>
			</Form.Control>
			<Form.Description>This caption that will appear on your landing page.</Form.Description>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Button>Create</Form.Button>
	</form>
</DialogForm>
