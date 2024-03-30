import { superValidate, fail } from 'sveltekit-superforms';
import { zod } from "sveltekit-superforms/adapters";
import ShortUniqueId from 'short-unique-id';
import { launchPageFormSchema } from './forms/schemas.js';
import { generateUniqueTag } from '$lib/server/utils/tag-utils.js';

const uid = new ShortUniqueId({ length: 8 });

export const load = async ({ locals: { supabase, getSession } }) => {
    const session = await getSession();

    // Fetch projects
    const { data: projectsData, error: projectsError } = await supabase
        .from("projects")
        .select("*")
        .eq("owner_id", session.user.id)
        .order("created_at", { ascending: false });

    if (projectsError) {
        console.error(projectsError);
        return []; // or handle the error appropriately
    }

    // Manually fetch subscriber counts for each project
    const projectsWithCounts = await Promise.all(projectsData.map(async project => {
        const { data: countData, error: countError } = await supabase
            .from("subscribers")
            .select("id", { count: 'exact' })
            .eq("project_id", project.id); // Assuming 'project_id' is the FK column in 'subscribers'

        if (countError) {
            console.error(countError);
            return { ...project, subscriber_count: 0 }; // or handle the error appropriately
        }

        return { ...project, subscriber_count: countData.length }; // or use count if using exact count
    }));

    const launchPageForm = await superValidate(zod(launchPageFormSchema));

    return {
        projects: projectsWithCounts,
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