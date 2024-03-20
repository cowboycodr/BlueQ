<script>
	import { Button } from '$ui/button';
	import * as Card from '$ui/card';
	import { Input } from '$ui/input';
	import { Label } from '$ui/label';
	
	export let data;
</script>

<svelte:head>
	<title>Early Access / BlueQ</title>
</svelte:head>

<div class="flex flex-col md:flex-row">
	<div class="flex h-svh items-center justify-center md:w-[50%]">
		<div class="w-full p-2 md:w-[350px] md:p-0">
			<h1 class="text-3xl font-semibold">
				<span>Blue</span><span class="text-blue-600">Q</span>
			</h1>
			<p class="text-muted-foreground">
				Transform anticipation into engagement, from waitlist to launch.
			</p>
		</div>
	</div>
	<div class="flex h-svh items-center justify-center bg-gray-100 p-2 md:w-[50%] md:p-0">
		<Card.Root class="w-full md:w-[350px]">
			<Card.Header>
				<Card.Title>Waitlist</Card.Title>
				<Card.Description>Be the first to use BlueQ.</Card.Description>
			</Card.Header>
			<Card.Content>
				<Label>Email</Label>
				<Input placeholder="Enter your email" type="email" />
			</Card.Content>
			<Card.Footer class="flex justify-end">
				<Button>Join</Button>
			</Card.Footer>
		</Card.Root>
	</div>
</div>
