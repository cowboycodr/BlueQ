<script>
	import { toast } from "svelte-sonner";

	import { createSuperForm } from '$lib/utils/forms';
	import { subscriberFormSchema } from './schemas';

	import * as Card from '$ui/card';
	import * as Form from '$ui/form';
	import { Input } from '$ui/input';

	let data;
	export { data as form };
	export let project;

	const form = createSuperForm(data, subscriberFormSchema, {
		onResult: (event) => {
			if (event.result.type === 'success') {
				console.log("here");
				toast.success("Subscribed")
			}
		}
	});
	const { form: formData, enhance } = form;

	$formData.project_id = project.id;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Launch list</Card.Title>
		<Card.Description>Receive launch updates. Sign up for progress notifications.</Card.Description>
	</Card.Header>
	<form method="POST" use:enhance>
		<Card.Content>
			<Form.Field {form} name="email">
				<Form.Control let:attrs>
					<Form.Label>Email</Form.Label>
					<Input {...attrs} bind:value={$formData.email} placeholder="Enter your email..." />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="project_id">
				<Form.Control let:attrs>
					<Input {...attrs} type="hidden" bind:value={$formData.project_id} />
				</Form.Control>
			</Form.Field>
		</Card.Content>
		<Card.Footer>
			<Form.Button>Join</Form.Button>
		</Card.Footer>
	</form>
</Card.Root>
