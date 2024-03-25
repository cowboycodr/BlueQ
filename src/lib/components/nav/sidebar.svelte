<script>
	import { LayoutDashboard, LineChart } from 'lucide-svelte';

	import { Button } from '$ui/button';
	import { Separator } from '$ui/separator';

	export let profile;
</script>

<div class="sticky flex h-svh md:w-[300px] flex-col border-r *:p-2">
	<div class="pb-0">
		<h1 class="text-center md:text-left text-lg font-semibold">
			<slot name="page">
				<span class="">Blue</span><span class="text-blue-600">Q</span>
				<p class="hidden md:block text-sm font-normal text-muted-foreground">Anticipation to launch.</p>
			</slot>
		</h1>
	</div>
	<div class="pt-0 space-y-1">
		<Button class="w-full md:justify-start space-x-1" variant="outline" href="/dashboard">
			<LayoutDashboard size={16} />
			<div class="hidden md:block">Dashboard</div></Button
		>
		<Button class="w-full md:justify-start space-x-1" variant="outline" href="/dashboard/analytics">
			<LineChart size={16} />
			<div class="hidden md:block">Analytics</div></Button
		>
	</div>
</div>
