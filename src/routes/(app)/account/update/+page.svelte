<script>
	import UserForm from '../user-form.svelte';

	import { SplitScreen } from '$components/layouts';

	import * as Card from '$ui/card';

	export let data;
	let { profile, user, form } = data;
    $: ({ profile, user, form } = data);
</script>

<svelte:head>
	<title>Account Setup / BlueQ</title>
</svelte:head>

<SplitScreen>
	<svelte:fragment slot="left">
		<h1 class="text-3xl font-semibold">Hi, {profile.full_name.split(" ")[0].slice(0, 16)}.</h1>
		<p class="text-muted-foreground">Looking for a change?</p>
	</svelte:fragment>
	<svelte:fragment slot="right">
		<Card.Root>
			<Card.Header>
				<div class="flex items-center justify-between">
					<Card.Title>Account setup</Card.Title>
				</div>
			</Card.Header>
			<UserForm
				{form}
				email={user.email}
				username={profile.username}
				fullName={profile.full_name}
				action="?/update"
			/>
		</Card.Root>
	</svelte:fragment>
</SplitScreen>
