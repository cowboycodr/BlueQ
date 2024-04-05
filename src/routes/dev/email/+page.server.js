import { render } from "svelte-email";
import { Email } from "$lib/emails";

export const load = async () => {
    console.log(Email);

    const { html } = Email.render({ title: "Hello World", content: "What in the \n world?" })

    return {
        html
    }
}