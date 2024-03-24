import { redirect } from "@sveltejs/kit";
import { superValidate, fail, setError } from "sveltekit-superforms";
import { userSchema } from "../schema.js";
import { zod } from "sveltekit-superforms/adapters";

export const load = async () => {
    return {
        form: await superValidate(zod(userSchema))
    }
}

export const actions = {
    setup: async ({ request, locals: { supabase, getUser } }) => {
        const user = await getUser();

        const form = await superValidate(request, zod(userSchema));

        if (!form.valid) {
            return fail(400, {
                form
            });
        }

        const username = form.data.username;
        const email = form.data.email;
        const fullName = form.data.full_name;

        const is_username_taken = await (async () => {
            const { data, error } = await supabase
                .from("profiles")
                .select("*")
                .eq("username", username);

            if (error) {
                console.error('Error fetching data:', error);
                throw error; // or return false depending on how you want to handle errors
            }

            // If data is not an empty array, a user exists.
            return data.length > 0;
        })();

        if (is_username_taken) {
            return setError(form, "username", "Username is already taken.")
        }

        const { data, error } = await supabase
            .from("profiles")
            .update({
                username,
                full_name: fullName,
                is_setup: true,
                updated_at: new Date()
            })
            .eq("id", user.id)
            .single();

        return {
            form
        }
    }
}