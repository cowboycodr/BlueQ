import { prose } from '$lib/pragma';

export const actions = {
    async send({ params, request, fetch }) {
        const { id } = params;

        const formData = await request.formData();

        const content = formData.get("content");
        const subject = formData.get("subject");
        const author_tag = formData.get("author_tag");

        const html = prose(`<div class="prose font-sans">${content}</div>`);

        // TODO: Adapt resend api
        await fetch("/api/v1/email/send", {
            method: "POST",
            body: JSON.stringify({
                project_id: id,
                email: {
                    subject,
                    content: html,
                    author_tag,
                }
            }),
        })
    }
}