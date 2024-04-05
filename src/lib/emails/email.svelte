<script>
	import {
		Html,
		Head,
		Button,
		Container,
		Column,
		Section,
		Heading,
		Hr,
		Img,
		Link,
		Preview,
		Text
	} from 'svelte-email';
	import { twist } from ".";

	twist("bg-black text-white");

	export let title;
	export let content;
</script>

<Html lang="en">
	<Container style={twist("max-w-[465px] border rounded")}>
		<Text style={twist("text-center")}>{title}</Text>
	</Container>
</Html>