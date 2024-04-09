export const actions = {
    async send({ request }) {
        const formData = await request.formData();
        const content = formData.content;

        // TODO: Adapt resend api
        console.log({ content });
    }
}