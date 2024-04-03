import ipLocation from "iplocation";
import { superValidate, fail, setError } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { subscriberFormSchema } from './schemas.js';

const geolocate = async (ip) => {
    if (ip === "::1") {
        return [];
    }

    let location;

    try {
        location = await ipLocation(ip);
    } catch (error) {
        return [];
    }

    return location;
};

const checkAndLogVisit = async ({ supabase, project_id, ip }) => {
    // Check for existing visits in the last 24 hours
    const { data, error: selectError } = await supabase
        .from("visits")
        .select("*")
        .eq("ip", ip)
        .gte("created_at", new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString());

    if (selectError) {
        console.error("Error querying visits:", selectError);
        return; // Stop execution if there was an error querying
    }

    const location = await geolocate(ip);

    // If no visit in the last 24 hours (data is empty), log this visit
    if (!data || data.length === 0) {
        const { error: insertError } = await supabase
            .from("visits")
            .insert([{ ip, project_id, location }]);

        if (insertError) {
            console.error("Error logging visit:", insertError);
        }
    }
};
export const load = async ({ parent, locals: { supabase }, getClientAddress }) => {
    const { project } = await parent();

    const ip = getClientAddress();
    await checkAndLogVisit({ supabase, project_id: project.id, ip });

    const form = await superValidate(zod(subscriberFormSchema));

    return {
        form
    };
};

export const actions = {
    async default({ getClientAddress, request, locals: { supabase } }) {
        const form = await superValidate(request, zod(subscriberFormSchema));

        if (!form.valid) {
            return fail(400, {
                form
            });
        }

        const email = form.data.email;
        const project_id = form.data.project_id;
        const ip = getClientAddress();
        const location = await geolocate(ip);

        // Check if this user is already subscribed to this project_id
        const { data: existingSubscriber, error: existingSubscriberError } = await supabase
            .from("subscribers")
            .select("*")
            .eq("email", email)
            .eq("project_id", project_id)
            .single();

        if (existingSubscriber) {
            return setError(form, 'email', 'You are already subscribed to this project.');
        }

        const { data, error } = await supabase
            .from("subscribers")
            .insert([
                {
                    email,
                    project_id,
                    location,
                    ip,
                }
            ]);

        if (error) {
            console.error(error);

            return fail(500, {
                form
            });
        }

        return {
            form
        };
    }
};
