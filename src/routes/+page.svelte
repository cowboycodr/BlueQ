<script>
	import { onMount } from 'svelte';

	import { Button } from '$ui/button';
	import * as Card from '$ui/card';
	import { Input } from '$ui/input';
	import { Label } from '$ui/label';
</script>

<!-- <div class="container pt-10">
	<div class="max-w-[300px] space-y-2">
		<div>
			<h1 class="text-5xl font-semibold">
				<span>Blue</span><span class="text-blue-600">Q</span>
			</h1>
			<p>Effective communication to the masses.</p>
		</div>
		<div class="space-y-1">
			<Label>Email</Label>
			<Input placeholder="example@email.com" type="email" />
            <Button>Submit</Button>
		</div>
	</div>
</div> -->

<div class="flex">
	<div class="flex h-svh w-[50%] items-center justify-center">
		<div class="w-[350px]">
			<h1 class="text-3xl font-semibold">
				<span>Blue</span><span class="text-blue-600">Q</span>
			</h1>
			<p class="text-muted-foreground">
				Transform anticipation into engagement, from waitlist to launch.
			</p>
		</div>
	</div>
	<div class="flex h-svh w-[50%] items-center justify-center bg-gray-100">
        <Card.Root class="w-[350px]">
            <Card.Header>
                <Card.Title>
                    Early access
                </Card.Title>
                <Card.Description>
                    Get notified when we're ready.
                </Card.Description>
            </Card.Header>
            <Card.Content>
                <Label>Email</Label>
                <Input placeholder="example@email.com" type="email"></Input>
            </Card.Content>
            <Card.Footer class="flex justify-end">
                <Button>
                    Submit
                </Button>
            </Card.Footer>
        </Card.Root>
    </div>
</div>
