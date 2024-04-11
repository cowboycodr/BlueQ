<script>
	import { Mail, SendHorizonal as Send } from 'lucide-svelte';
	import { Button } from '$ui/button';

	export let editor;
	export let subject;
	export let authorTag;

	function getContent() {
		if (!editor) {
			return "";
		}

		const content = editor.getHTML();
		console.log({ content });

		return content;
	}

	$: content = getContent(editor);
</script>

<header
	class="sticky top-0 z-50 flex w-full items-center justify-between border-b bg-white bg-opacity-75 p-5 backdrop-blur-lg"
>
	<div class="text-lg font-semibold">
		<span>Blue</span><span class="text-blue-600">Q</span>
	</div>
	<div>
		<span class="flex items-center space-x-1">
			<Mail size={16} />
			<span>/</span>
			<span>{subject}</span>
		</span>
	</div>
	<div>
		<form action="?/send" method="POST">
			<input type="hidden" name="content" value={content} />
			<input type="hidden" name="author_tag" value={authorTag}>
			<input type="hidden" name="subject" value={subject}>
			<Button class="flex items-center space-x-1" type="submit">
				<span> Send </span>
				<span>
					<Send size={16} />
				</span>
			</Button>
		</form>
	</div>
</header>
