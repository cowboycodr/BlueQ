<script>
	import { SideBar } from '$components/nav';

    export let data;
    let { profile } = data;
    $: ({ profile } = data);
</script>

<div class="flex">
	<SideBar {profile}></SideBar>
	<slot />
</div>
