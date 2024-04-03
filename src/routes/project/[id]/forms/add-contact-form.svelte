<script>
	import DialogForm from '$lib/components/misc/dialog-form.svelte';
	import { createSuperForm } from '$utils/forms';
	import { contactSchema, emailSchema } from './schemas';

	import { Input } from '$ui/input';
	import * as Form from '$ui/form';

	let data;
	export { data as form };

	const form = createSuperForm(data, contactSchema);
	const { form: formData } = form;
</script>

<DialogForm on:close>
	<svelte:fragment slot="title">Add Contact</svelte:fragment>
	<form method="POST" action="?/addContact">
		<Form.Field {form} name="email">
			<Form.Control let:attrs>
				<Form.Label>Email</Form.Label>
				<Input {...attrs} bind:value={$formData.email} placeholder="example@email.com" />
			</Form.Control>
			<Form.Description>The new contact's email.</Form.Description>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Button>Add</Form.Button>
	</form>
</DialogForm>
