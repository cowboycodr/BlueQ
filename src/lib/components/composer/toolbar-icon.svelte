<script>
	import { Button } from '$ui/button';

	export let toggle = false;
</script>

<Button
	on:click
	variant="ghost"
	class="aspect-square h-[28px] w-[28px] p-1 {toggle ? 'bg-gray-200 hover:bg-gray-200' : ''}"
	{...$$props}
>
	<slot />
</Button>
