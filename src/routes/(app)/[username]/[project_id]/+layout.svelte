<script>
	import { LayoutDashboard, LineChart, Settings, User } from 'lucide-svelte';

	import { page } from '$app/stores';
	import { SideBar } from '$components/nav';
	import { Button } from '$ui/button';

	export let data;
	let { profile } = data;
	$: ({ profile } = data);

	function isActivePath(path) {
		return $page.url.pathname === `/${profile.username}/${path}`;
	}
</script>

<div class="flex">
	<SideBar {profile}>
		<svelte:fragment slot="navigation">
			<Button
				class="w-full space-x-1 md:justify-start"
				variant={isActivePath($page.params.project_id) ? 'secondary' : 'outline'}
				href={`/${profile.username}/${$page.params.project_id}`}
			>
				<LayoutDashboard size={16} />
				<div class="hidden md:block">Dashboard</div></Button
			>
			<!-- <Button
				class="w-full space-x-1 md:justify-start"
				variant={isActivePath('analytics') ? 'secondary' : 'outline'}
				href={`/${profile.username}/${$page.params.project_id}/analytics`}
			>
				<LineChart size={16} />
				<div class="hidden md:block">Analytics</div></Button
			> -->
		</svelte:fragment>
	</SideBar>
	<slot />
</div>
