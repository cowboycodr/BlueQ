import { redirect, json } from "@sveltejs/kit";

export const load = async ({ params, parent }) => {
    const { profile } = await parent();
    const { goto } = params;


    throw redirect(303, `/${profile.username}/${goto}`);
}