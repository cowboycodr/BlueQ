<script>
	import { page } from '$app/stores';

	import { SplitScreen } from '$lib/components/layouts';
	import SubscriberForm from './subscriber-form.svelte';

	export let data;
	let { project, form } = data;
	$: ({ project, form } = data);
</script>

<svelte:head>
	<title>
		{project.title} - Launch Page
	</title>
	<meta property="twitter:image" content={`${$page.url.href}/og`}>
	<meta property="twitter:description" content={project.caption}>
	<meta property="description" content={project.caption} />
	<meta property="og:image" content={`${$page.url.href}/og`}>
	<meta property="og:title" content={project.title}>
	<meta property="og:description" content={project.caption}/>
	<meta property="og:url" content={$page.url.href}>
</svelte:head>

<SplitScreen>
	<div slot="left">
		<h1 class="text-3xl font-semibold">
			<span>{project.title}</span>
		</h1>
		<p class="text-muted-foreground">
			{project.caption}
		</p>
	</div>
	<div slot="right">
		<SubscriberForm {form} {project} />
	</div>
</SplitScreen>
