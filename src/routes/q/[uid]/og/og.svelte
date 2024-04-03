<script>
	export let title;
	export let caption;
</script>

<div class="flex h-full items-center justify-center bg-white">
	<div class="flex flex-col items-center">
		<h1 class="text-center text-9xl font-semibold">{title}</h1>
		<p class="max-w-[95%] text-center text-5xl text-[#64748b]">{caption}</p>
	</div>
	<div class="absolute bottom-5 flex text-center">
		<p class="text-2xl text-[#64748b]">Powered by BlueQ.</p>
	</div>
</div>
