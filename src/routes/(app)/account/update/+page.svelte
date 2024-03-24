<script>
	import { onMount } from 'svelte';

	import { formSchema } from './schema.js';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import { SplitScreen } from '$components/layouts';

	import * as Avatar from '$ui/avatar';
	import { Button } from '$ui/button';
	import * as Card from '$ui/card';
	import * as Form from '$ui/form';
	import { Input } from '$ui/input';

	export let data;
	const { profile, user, form } = data;

	const enhancedForm = superForm(form, {
		validators: zodClient(formSchema),
		dataType: 'json'
	});

	const { form: formData, enhance } = enhancedForm;

	$formData.email = user.email;
	$formData.full_name = profile.full_name;
</script>

<svelte:head>
	<title>Account Setup / BlueQ</title>
</svelte:head>

<SplitScreen>
	<svelte:fragment slot="left">
		<h1 class="text-3xl font-semibold">Hello.</h1>
		<p class="text-muted-foreground">Let's get your account set up.</p>
	</svelte:fragment>
	<svelte:fragment slot="right">
		<Card.Root>
			<Card.Header>
				<div class="flex items-center justify-between">
					<Card.Title>Account setup</Card.Title>
				</div>
			</Card.Header>
			<form method="POST" use:enhance>
				<Card.Content>
					<Form.Field form={enhancedForm} name="username">
						<Form.Control let:attrs>
							<Form.Label>Username</Form.Label>
							<Input
								{...attrs}
								placeholder="Enter your username here."
								bind:value={$formData.username}
								on:input={(ev) => {
									ev.target.value = ev.target.value.toLowerCase().replace(/\s+/g, '');
								}}
							/>
						</Form.Control>
						<Form.Description>This is your formal identifier.</Form.Description>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field form={enhancedForm} name="full_name">
						<Form.Control let:attrs>
							<Form.Label>Full name</Form.Label>
							<Input
								{...attrs}
								placeholder="Enter your username here."
								bind:value={$formData.full_name}
							/>
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field form={enhancedForm} name="email">
						<Form.Control let:attrs>
							<Form.Label>Email</Form.Label>
							<Input
								disabled
								{...attrs}
								placeholder="Enter your email here."
								bind:value={$formData.email}
							/>
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
				</Card.Content>
				<Card.Footer class="flex justify-end">
					<Form.Button>Save</Form.Button>
				</Card.Footer>
			</form>
		</Card.Root>
	</svelte:fragment>
</SplitScreen>
