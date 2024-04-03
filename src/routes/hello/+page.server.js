import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ url, request, locals: { supabase } }) => {
		const formData = await request.formData();
		const provider = formData.get('provider');

		const redirectTo = url.searchParams.get('r') || '/';

		if (provider === 'google') {
			const { data, error } = await supabase.auth.signInWithOAuth({
				provider: 'google',
				options: {
					queryParams: {
						access_type: 'offline',
						prompt: 'consent'
					},
					redirectTo: `${url.origin}/auth/callback?r=${encodeURIComponent(redirectTo)}`
				}
			});

			throw redirect(303, data.url);
		}

		return {
			status: 400,
			body: { error: 'Invalid provider' }
		};
	}
};
