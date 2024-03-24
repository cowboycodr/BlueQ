import { redirect } from "@sveltejs/kit";

export const load = async ({ locals: { getSession } }) => {
    const session = await getSession();

    if (session) {
        throw redirect(303, "/dashboard");
    }

    return {};
}

export const actions = {
    async signin({ url, request, locals: { supabase } }) {
        const redirectTo = url.searchParams.get("q") || "";

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
                    redirectTo: `${url.origin}/auth/callback?${redirectTo}`
                },
            });

            throw redirect(302, data.url);
        }
    }
}