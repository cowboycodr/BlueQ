import { redirect } from "@sveltejs/kit";

export const load = async ({ params, locals: { supabase, getUser } }) => {
    const { username } = params;

    const user = await getUser();

    if (!user) {
        throw redirect(303, "/auth");
    }

    const profile = await (async () => {
        const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", user.id)
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
        user,
        profile
    }
}