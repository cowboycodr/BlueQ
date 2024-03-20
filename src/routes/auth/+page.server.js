import { redirect } from "@sveltejs/kit";

export const actions = {
    async signin({ request, locals: { supabase } }) {
        const formData = await request.formData();
        const provider = formData.get("provider");

        if (provider === "google") {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    queryParams: {
                        access_type: 'offline',
                        prompt: 'consent',
                    },
                },
            });

            throw redirect(302, data.url);
        }
    }
}