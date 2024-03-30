import ipLocation from "iplocation";
import { superValidate, fail, setError } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { subscriberFormSchema } from './schemas.js';

export const load = async ({ locals: { supabase } }) => {
    const form = await superValidate(zod(subscriberFormSchema));

    return {
        form
    }
}

const geolocate = async (ip) => {
    if (ip === "::1") {
        return "Unknown"
    }

    let location;

    try {
        location = await ipLocation(ip);
    } catch {
        return "Unknown"
    }

    try {
        return `${location.city}, ${location.region.name}, ${location.country.name}`;
    } catch {
        return "Unknown"
    }
}

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

        // check if this user is already subscribed to this project_id
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
        }
    }
}