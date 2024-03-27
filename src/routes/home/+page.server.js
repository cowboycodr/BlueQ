import { superValidate, fail } from 'sveltekit-superforms';
import { zod } from "sveltekit-superforms/adapters";
import ShortUniqueId from 'short-unique-id';
import { launchPageFormSchema } from './forms/schemas.js';
import { generateUniqueTag } from '$lib/server/utils/tag-utils.js';

const uid = new ShortUniqueId({ length: 12 });

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
    newProject: async ({ request, locals: { supabase, getUser } }) => {
        const user = await getUser();

        const form = await superValidate(request, zod(launchPageFormSchema));

        if (!form.valid) {
            return fail(400, {
                launchPageForm: form,
            });
        }

        const title = form.data.title;
        const caption = form.data.caption;

        const tag = await generateUniqueTag(title, supabase);
        const shortCode = uid.rnd();

        const { data, error } = await supabase
            .from("projects")
            .insert([
                {
                    title,
                    caption,
                    tag,
                    type: "launch",
                    owner_id: user.id,
                    short_code: shortCode,
                },
            ]);

        if (error) {
            console.error(error);

            return fail(500, {
                launchPageForm: form,
            });
        }

        return {
            launchPageForm: form,
        };
    },
};