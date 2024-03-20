export const load = async ({ params, locals: { supabase } }) => {
    const { listId } = params;

    return {
        listId
    }
}