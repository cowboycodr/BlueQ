import { redirect } from "@sveltejs/kit";

export const load = async ({ locals: { supabase, getUser } }) => {
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

    return {
        user,
        profile,
    }
}