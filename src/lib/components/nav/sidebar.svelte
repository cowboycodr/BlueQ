<script>
	import { page } from '$app/stores';

	import { User } from 'lucide-svelte';
	import { Button } from '$ui/button';

	export let profile;
	export const isActivePath = (path) => {
		return $page.url.pathname === `/${profile.username}/${path}`;
	};
</script>

<div class="sticky flex h-svh flex-col justify-between border-r md:w-[300px]">
	<div class="*:p-2">
		<div class="pb-0">
			<h1 class="text-center text-lg font-semibold md:text-left">
				<slot name="header">
					<span class="">Blue</span><span class="text-blue-600">Q</span>
					<p class="hidden text-sm font-normal text-muted-foreground md:block">
						Anticipation to launch.
					</p>
				</slot>
			</h1>
		</div>
		<div class="space-y-1 pt-0">
			<slot />
		</div>
	</div>
	<div class="space-y-2 p-2">
		<Button href="/account/update" variant="ghost" class="w-full justify-start space-x-1 p-2">
			<User size={18} />
			<p class="font-semibold">{profile.full_name}</p>
		</Button>
	</div>
</div>
