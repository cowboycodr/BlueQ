<script>
    import DialogForm from "./dialog-form.svelte";

    export let form;
</script>

<DialogForm {form} on:close>
    <svelte:fragment slot="title">
        New Launch Page
    </svelte:fragment>
</DialogForm>
