export const load = async ({ params, locals: { supabase, getSession } }) => {
    const session = await getSession();

    const { id } = params;

    // Adjusted to fetch project details and its related subscribers
    const { data: project, error } = await supabase
        .from('projects')
        .select('*, subscribers(*)') // Adjusted line: Fetch all columns from project and all related subscribers
        .eq('id', id)
        .eq('owner_id', session.user.id)
        .single();

    if (error) {
        console.error(error);
        return { project: null }; // or handle the error more appropriately
    }

    return {
        project
    }
}