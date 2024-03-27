<script>
	import DialogForm from './dialog-form.svelte';
	import { createSuperForm } from './utils';
	import { launchPageFormSchema } from './schemas';

	import { Input } from '$ui/input';
	import { Textarea } from '$ui/textarea';
	import * as Form from '$ui/form';

	let data;
	export { data as form };

	const form = createSuperForm(data, launchPageFormSchema);
	const { form: formData } = form;
</script>

<DialogForm {form} action="newProject" on:close>
	<svelte:fragment slot="title">New Launch Page</svelte:fragment>
	<svelte:fragment slot="form">
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
		<!-- <Form.Field {form} name="domain">
			<Form.Control let:attrs>
				<Form.Label>Domain</Form.Label>
				<Input
					{...attrs}
					bind:value={$formData.domain}
					placeholder="Enter your project domain here..."
					on:keydown={(e) => {
                        if ($formData.domain.length >= 32 && e.key !== 'Backspace') {
                            e.preventDefault();
                            return;
                        }

						if (e.key === ' ') {
							e.preventDefault();
							$formData.domain += '-';
						}
					}}
				/>
			</Form.Control>
            <Form.Description>
                This is the subdomain where your Launch Page will be hosted.
            </Form.Description>
			<Form.Description>
                {#if $formData.domain}
                    <strong>{$formData.domain}.blueq.app</strong>
                {/if}
			</Form.Description>
		</Form.Field> -->
		<Form.Field {form} name="description">
			<Form.Control let:attrs>
				<Form.Label>Caption</Form.Label>
				<Textarea
					{...attrs}
					bind:value={$formData.description}
					placeholder="Your project motto, or a brief description..."
				/>
			</Form.Control>
			<Form.Description>This caption that will appear on your landing page.</Form.Description>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Button>Create</Form.Button>
	</svelte:fragment>
</DialogForm>
