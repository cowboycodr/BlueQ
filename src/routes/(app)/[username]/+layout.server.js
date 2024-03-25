import { redirect } from "@sveltejs/kit";

export const load = async ({ params, locals: { supabase, getSession } }) => {
    const { username } = params;

    const session = await getSession();

    if (!session) {
        throw redirect(303, "/auth");
    }

    const profile = await (async () => {
        const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", session.user.id)
            .single();

        return data;
    })();

    if (username !== profile.username) {
        throw redirect(303, `/auth`);
    }

    if (!profile.is_setup) {
        throw redirect(303, `/account/setup`);
    }

    return {
        profile
    }
}