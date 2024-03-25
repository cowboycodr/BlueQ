<script>
	import { page } from '$app/stores';

	import { cn } from '$utils';
	import { Button } from '$ui/button';

	let className;
	export { className as class };
	export let icon;
	export let href;

	const isActivePath = (path) => {
		return $page.url.pathname === `${path}`;
	};
</script>

<Button
	class={cn('w-full justify-start space-x-1', className)}
	variant={isActivePath(href) ? 'secondary' : 'outline'}
	{...$$props}
>
	<div>
		<svelte:component this={icon} size={16} />
	</div>
	<div>
		<slot />
	</div>
</Button>
