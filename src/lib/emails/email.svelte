<script>
	import { twi } from 'tw-to-css';

	export let title;
	export let author;
	export let content = '';

	$: paragraphs = content.split('\n');
</script>

<div style={twi('min-h-[300px] w-[600px] rounded-lg border p-5')}>
	<header style={twi('pb-5')}>
		<h1 style={twi('text-center text-5xl italic')}>
			{title}
		</h1>
		<p style={twi('text-center text-[#64748b]')}>
			{author}
		</p>
	</header>
	<hr />
	<article style={twi('py-5')}>
		{#each paragraphs as paragraph}
			<p style={twi('pt-2')}>{paragraph}</p>
		{/each}
	</article>
	<hr />
	<p style={twi('pt-5 text-center text-[#64748b]')}>
		Powered by <a style={twi('underline')} href="https://blueq.app">BlueQ</a>.
	</p>
</div>
