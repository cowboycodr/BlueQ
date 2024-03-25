import { redirect } from "@sveltejs/kit";

export const load = async ({ parent }) => {
    const { profile } = await parent();

    throw redirect(303, `/${profile.username}`);
}