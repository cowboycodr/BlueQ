import { redirect } from "@sveltejs/kit";
import { superValidate, fail, setError } from "sveltekit-superforms";
import { formSchema } from "./schema.js";
import { zod } from "sveltekit-superforms/adapters";

export const load = async ({ parent }) => {
    const { profile } = await parent();

    if (profile.is_setup) {
        throw redirect(303, "/account");
    }

    return {
        form: await superValidate(zod(formSchema))
    }
}

export const actions = {
    default: async ({ request, locals: { supabase } }) => {
        const form = await superValidate(request, zod(formSchema));

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
                return true;
            }

            return data === null;
        })();

        if (is_username_taken) {
            return setError(form, "username", "Username is already taken.")
        }

        return {
            form
        }
    }
}