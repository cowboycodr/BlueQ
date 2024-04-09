export const actions = {
    async send({ params, request, fetch }) {
        const { id } = params;

        const template = await (async () => {
            const response = await fetch("/template.html");
            const template = await response.text();

            return template;
        })();

        const formData = await request.formData();

        const content = formData.get("content");
        const subject = formData.get("subject");
        const author_tag = formData.get("author_tag");

        const html = template.replace("{{{ content }}}", content);

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