export const load = async ({ params, locals: { supabase } }) => {
    const { uid } = params;

    const { data: project, error } = await supabase
        .from("projects")
        .select("*")
        .eq("short_code", uid)
        .single();

    console.log(project);

    return {
        project
    }
}