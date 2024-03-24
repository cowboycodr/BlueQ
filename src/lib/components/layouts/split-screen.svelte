<div class="mx-auto flex min-h-svh w-full max-w-sm flex-col justify-center md:flex-row md:max-w-none">
	<div class="flex items-center justify-center md:h-svh md:w-[50%]">
		<div class="w-full p-2 md:w-[350px] md:p-0">
			<slot name="left" />
		</div>
	</div>
	<div class="flex items-center justify-center p-2 md:h-svh md:w-[50%] md:bg-gray-100 md:p-0">
		<div class="w-full md:w-[350px]">
			<slot name="right" />
		</div>
	</div>
</div>
