<script>
    export let data;
    $: console.log(data.html)
</script>

{@html data.html}