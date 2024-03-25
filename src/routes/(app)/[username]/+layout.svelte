<script>
    import { SideBar } from "$components/nav";
</script>

<div class="flex">
    <SideBar></SideBar>
    <div class="container mx-auto p-2">
        <slot />
    </div>
</div>