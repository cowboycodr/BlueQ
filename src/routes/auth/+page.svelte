<script>
	import Fa from 'svelte-fa';
	import { faGoogle } from '@fortawesome/free-brands-svg-icons';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';

	import { SplitScreen } from '$components/layouts';

	import { Button } from '$ui/button';
	import * as Card from '$ui/card';
	import { Separator } from '$ui/separator';
</script>

<svelte:head>
	<title>Sign in / BlueQ</title>
</svelte:head>

<SplitScreen>
	<svelte:fragment slot="left">
		<h1 class="text-3xl font-semibold">
			<span>Blue</span><span class="text-blue-600">Q</span>
		</h1>
		<p class="text-muted-foreground">
			Transform anticipation into engagement, from waitlist to launch.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="right">
		<Card.Root class="w-full md:w-[350px]">
			<Card.Header>
				<Card.Title>Sign in</Card.Title>
				<Card.Description>Currently we only allow popular third-party providers.</Card.Description>
				<Separator />
			</Card.Header>
			<Card.Content class="space-y-2">
				<form method="post" action="?/signin">
					<input type="hidden" name="provider" value="google" />
					<Button class="w-full space-x-1" variant="secondary" type="submit">
						<Fa icon={faGoogle} />
						<span>Google</span>
					</Button>
				</form>
				<form method="post" action="?/signin">
					<input type="hidden" name="provider" value="github" />
					<Button class="w-full space-x-1" variant="secondary" disabled type="submit">
						<Fa icon={faGithub} />
						<span>Github</span>
					</Button>
				</form>
			</Card.Content>
			<Card.Footer>
				<Card.Description>More ways to sign in coming soon.</Card.Description>
			</Card.Footer>
		</Card.Root>
	</svelte:fragment>
</SplitScreen>
