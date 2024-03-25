<script>
	import { page } from '$app/stores';

	import { LayoutDashboard, LineChart, Settings, User } from 'lucide-svelte';

	import { Button } from '$ui/button';
	import { Separator } from '$ui/separator';

	export let profile;

	$: console.log($page);
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
			<Button
				class="w-full space-x-1 md:justify-start"
				variant={$page.url.pathname === `/${profile.username}` ? 'secondary' : 'outline'}
				href="/dashboard"
			>
				<LayoutDashboard size={16} />
				<div class="hidden md:block">Dashboard</div></Button
			>
			<Button
				class="w-full space-x-1 md:justify-start"
				variant={$page.url.pathname === `/${profile.username}/analytics` ? 'secondary' : 'outline'}
				href="/dashboard/analytics"
			>
				<LineChart size={16} />
				<div class="hidden md:block">Analytics</div></Button
			>
		</div>
	</div>
	<div class="space-y-2 p-2">
		<p class="text-sm text-muted-foreground">Personal</p>
		<div class="space-y-1 pt-0">
			<Button class="w-full space-x-1 md:justify-start" variant="outline" href="/settings">
				<Settings size={16} />
				<div class="hidden md:block">Settings</div></Button
			>
			<Button class="w-full space-x-1 md:justify-start" variant="outline" href="/account/update">
				<User size={16} />
				<div class="hidden md:block">Account</div></Button
			>
		</div>
	</div>
</div>
