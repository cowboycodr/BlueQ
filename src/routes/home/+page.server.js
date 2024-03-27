import { superValidate } from 'sveltekit-superforms';
import { zod } from "sveltekit-superforms/adapters";
import { launchPageFormSchema } from './forms/schemas.js';

export const load = async ({ locals: { supabase, getSession } }) => {
    const session = await getSession();

    const projects = await (async () => {
        const { data, error } = await supabase
            .from("projects")
            .select("*")
            .eq("owner_id", session.user.id);

        return data;
    })();

    const launchPageForm = await superValidate(zod(launchPageFormSchema));

    return {
        projects,
        launchPageForm,
    }
}

export const actions = {

}