<script>
	import Fa from 'svelte-fa';
	import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

	import { SplitScreen } from '$components/layouts';

	import { Button } from '$ui/button';
	import * as Card from '$ui/card';
</script>

<svelte:head>
	<title>Welcome - BlueQ</title>
</svelte:head>

<SplitScreen>
	<div slot="left">
		<h1 class="text-3xl font-semibold">
			<span>Blue</span><span class="text-blue-600">Q</span>
		</h1>
		<p class="text-muted-foreground">Effortlessly unleash the power of connection.</p>
	</div>
	<div slot="right">
		<Card.Root>
			<Card.Header>
				<Card.Title>Welcome</Card.Title>
				<Card.Description>Let's get you signed in.</Card.Description>
			</Card.Header>
			<Card.Content class="space-y-2">
				<form method="POST" class="space-y-2">
					<Button class="w-full space-x-1" variant="secondary">
						<Fa icon={faGoogle} />
						<div>Google</div>
					</Button>
					<Button class="w-full space-x-1" variant="secondary" disabled>
						<Fa icon={faGithub} />
						<div>Github</div>
					</Button>
				</form>
			</Card.Content>
		</Card.Root>
	</div>
</SplitScreen>
