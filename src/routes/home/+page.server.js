export const load = async ({ locals: { supabase, getSession } }) => {
    const session = await getSession(); 

    const projects = await (async () => {
        const { data, error } = await supabase
            .from("projects")
            .select("*")
            .eq("owner_id", session.user.id);

        return data;
    })();

    return {
        projects
    }
}