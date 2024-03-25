<script>
	import { LayoutDashboard, LineChart } from 'lucide-svelte';

	import { page } from '$app/stores';
	import * as SideBar from '$components/nav';

	export let data;
	let { profile } = data;
	$: ({ profile } = data);
</script>

<div class="flex">
	<SideBar.Root {profile}>
		<SideBar.Button icon={LayoutDashboard} href={`/${profile.username}/${$page.params.project_id}`}>
			Dashboard
		</SideBar.Button>
		<SideBar.Button icon={LineChart} href={`/${profile.username}/${$page.params.project_id}/analytics`}>
			Analytics
		</SideBar.Button>
	</SideBar.Root>
	<slot />
</div>
