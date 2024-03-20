import { redirect } from "@sveltejs/kit";

export const load = async ({ locals: { getSession } }) => {
    const session = await getSession();

    if (!session) {
        return redirect(303, "/");
    }
}