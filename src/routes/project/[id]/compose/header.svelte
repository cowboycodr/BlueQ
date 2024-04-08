<script>
	import { Mail, SendHorizonal as Send } from 'lucide-svelte';
	import { Button } from '$ui/button';

	export let editor;
	export let subject;
</script>

<header class="sticky top-0 flex w-full items-center justify-between border-b p-5 bg-white bg-opacity-75 z-50 backdrop-blur-lg">
	<div class="text-lg font-semibold">
		<span>Blue</span><span class="text-blue-600">Q</span>
	</div>
	<div>
		<span class="flex items-center space-x-1">
			<Mail size={16} />
			<span>/</span>
			<span>{subject}</span>
		</span>
	</div>
	<div>
		<Button class="flex items-center space-x-1">
			<span> Send </span>
			<span>
				<Send size={16} />
			</span>
		</Button>
	</div>
</header>
