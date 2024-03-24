<script>
	import * as Card from '$ui/card';
	import * as Form from '$ui/form';
	import { Input } from '$ui/input';

	import { userSchema } from './schema.js';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let form;

	export let email;
	export let username;
	export let fullName;

	export let action;

	const enhancedForm = superForm(form, {
		validators: zodClient(userSchema),
		dataType: 'json'
	});

	const { form: formData, enhance } = enhancedForm;

	$formData.email = email;
	$formData.username = username;
	$formData.full_name = fullName;
</script>

<form method="POST" {action} use:enhance>
	<Card.Content>
		<Form.Field form={enhancedForm} name="username">
			<Form.Control let:attrs>
				<Form.Label>Username</Form.Label>
				<Input
					name="username"
					placeholder="Enter your username here."
					bind:value={$formData.username}
					on:input={(ev) => {
						ev.target.value = ev.target.value.toLowerCase().replace(/\s+/g, '');
					}}
					{...attrs}
				/>
			</Form.Control>
			<Form.Description>This is your formal identifier.</Form.Description>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field form={enhancedForm} name="full_name">
			<Form.Control let:attrs>
				<Form.Label>Full name</Form.Label>
				<Input
					name="full_name"
					placeholder="Enter your full name here."
					bind:value={$formData.full_name}
					{...attrs}
				/>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field form={enhancedForm} name="email">
			<Form.Control let:attrs>
				<Form.Label>Email</Form.Label>
				<Input
					disabled
					name="email"
					placeholder="Enter your email here."
					bind:value={$formData.email}
					{...attrs}
				/>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
	</Card.Content>
	<Card.Footer class="flex justify-end">
		<Form.Button>Save</Form.Button>
	</Card.Footer>
</form>
