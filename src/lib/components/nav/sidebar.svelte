<script>
	import { page } from '$app/stores';

	import * as Avatar from '$ui/avatar';
	import { Button } from '$ui/button';

	import { LayoutDashboard, LineChart, Settings, User } from 'lucide-svelte';

	export let profile;

	$: console.log(profile.avatar_url);
</script>

<div class="sticky flex h-svh flex-col justify-between border-r md:w-[300px]">
	<div class="*:p-2">
		<div class="pb-0">
			<h1 class="text-center text-lg font-semibold md:text-left">
				<slot name="page">
					<span class="">Blue</span><span class="text-blue-600">Q</span>
					<p class="hidden text-sm font-normal text-muted-foreground md:block">
						Anticipation to launch.
					</p>
				</slot>
			</h1>
		</div>
		<div class="space-y-1 pt-0">
			<!-- <Button
				class="w-full space-x-1 md:justify-start"
				variant={isActivePath() ? 'secondary' : 'outline'}
				href="/dashboard"
			>
				<LayoutDashboard size={16} />
				<div class="hidden md:block">Dashboard</div></Button
			>
			<Button
				class="w-full space-x-1 md:justify-start"
				variant={isActivePath('analytics') ? 'secondary' : 'outline'}
				href="/dashboard/analytics"
			>
				<LineChart size={16} />
				<div class="hidden md:block">Analytics</div></Button
			> -->
			<slot name="navigation" />
		</div>
	</div>
	<div class="space-y-2 p-2">
		<Button href="/account/update" variant="ghost" class="w-full justify-start space-x-1 p-2">
			<User size={18} />
			<p class="font-semibold">{profile.full_name}</p>
		</Button>
	</div>
</div>
