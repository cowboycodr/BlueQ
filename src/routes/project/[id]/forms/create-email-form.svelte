<script>
	import { DialogForm } from '$components/forms';
	import { createSuperForm } from '$utils/forms';
	import { emailSchema } from '.';

	import { Input } from '$ui/input';
	import { Textarea } from '$ui/textarea';
	import * as Form from '$ui/form';

	let data;
	export { data as form };

	const form = createSuperForm(data, emailSchema);
	const { form: formData } = form;
</script>

<DialogForm on:close>
	<svelte:fragment slot="title">Send email</svelte:fragment>
	<form method="POST" action="?/sendEmail">
		<Form.Field {form} name="subject">
			<Form.Control let:attrs>
				<Form.Label>Subject</Form.Label>
				<Input
					{...attrs}
					bind:value={$formData.subject}
					placeholder="Enter your email subject here..."
				/>
			</Form.Control>
			<Form.Description>This is your email's subject line. Keep it short.</Form.Description>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="title">
			<Form.Control let:attrs>
				<Form.Label>Title</Form.Label>
				<Input
					{...attrs}
					bind:value={$formData.title}
					placeholder="Enter your email title here..."
				/>
			</Form.Control>
			<Form.Description>
				Your email's title is where you can expand on your subject. Or... you can say something
				completely different.
			</Form.Description>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="content">
			<Form.Control let:attrs>
				<Form.Label>Content</Form.Label>
				<Textarea {...attrs} bind:value={$formData.content} placeholder="Lorem ipsum..." />
			</Form.Control>
			<Form.Description>
				This is your email's main content. What it's all about. Right not we only support text. That
				will change soon.
			</Form.Description>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Button>Send</Form.Button>
	</form>
</DialogForm>
