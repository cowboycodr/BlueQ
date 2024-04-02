import { fail } from "@sveltejs/kit";

import { superValidate, fail } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { emailSchema } from "./forms/schemas.js";

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

    const { count: visitsCount, error: visitsError } = await supabase
        .from('visits')
        .select('id', { count: 'exact', head: true }) // Only count entries, don't fetch data
        .eq('project_id', id)
        .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString());

    const createEmailForm = await superValidate(zod(emailSchema));

    return {
        project,
        visitsCount,
        createEmailForm,
    }
}

export const actions = {
    async deleteSubscriber({ request, locals: { supabase } }) {
        const formData = await request.formData();

        const subscriberId = formData.get("subscriber_id");

        const { data, error } = await supabase
            .from("subscribers")
            .delete()
            .eq('id', subscriberId);

        if (error) {
            return fail(500, {
                message: error.message
            });
        }

        return { data };
    },
}