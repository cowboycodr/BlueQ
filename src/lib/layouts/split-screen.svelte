<div class="mx-auto flex h-svh w-full max-w-sm flex-col justify-center md:max-w-none md:flex-row">
	<div class="flex items-center justify-center md:h-svh md:w-[50%]">
		<div class="w-full p-2 md:w-[350px] md:p-0">
			<slot name="branding" />
		</div>
	</div>
	<div class="flex items-center justify-center p-2 md:h-svh md:w-[50%] md:bg-gray-100 md:p-0">
		<div class="w-full md:w-[350px]">
			<slot name="content" />
		</div>
	</div>
</div>
