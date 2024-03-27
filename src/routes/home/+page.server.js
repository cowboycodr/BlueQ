import { superValidate, fail } from 'sveltekit-superforms';
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
    newProject: async (event) => {
        const form = await superValidate(event, zod(launchPageFormSchema));


        if (!form.valid) {
            return fail(400, {
                launchPageForm: form,
            });
        }

        return {
            launchPageForm: form,
        };
    },
};