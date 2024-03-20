<script>
	import Fa from 'svelte-fa';
	import { faGoogle } from '@fortawesome/free-brands-svg-icons';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';

	import { Button } from '$ui/button';
	import * as Card from '$ui/card';
	import { Separator } from '$ui/separator';
</script>

<div class="w-svh flex h-svh items-center justify-center p-2">
	<div class="w-full max-w-sm space-y-5">
		<h1 class="text-center text-3xl font-semibold">
			<span>Blue</span><span class="text-blue-600">Q</span>
		</h1>
		<Card.Root>
			<Card.Header>
				<Card.Title>Sign in</Card.Title>
				<Card.Description>Currently we only allow popular third-paty providers.</Card.Description>
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
		</Card.Root>
	</div>
</div>
