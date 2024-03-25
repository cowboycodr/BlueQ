export const load = async ({ locals: { supabase, getSession } }) => {
    const session = await getSession();

    const projects = await (async () => {
        const id = session.user.id;

        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .eq('owner_id', id)
            .order('created_at', { ascending: false });

        return data;
    })();

    return {
        projects
    }
}

export const actions = {
    newProject: async ({ request, locals: { supabase, getSession } }) => {

    }
}