import { fail } from '@sveltejs/kit';

import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { emailSchema, contactSchema } from './forms/schemas.js';

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
	const addContactForm = await superValidate(zod(contactSchema));

	return {
		project,
		visitsCount,
		createEmailForm,
		addContactForm
	};
};

export const actions = {
	async deleteSubscriber({ request, locals: { supabase } }) {
		const formData = await request.formData();

		const subscriberId = formData.get('subscriber_id');

		const { data, error } = await supabase.from('subscribers').delete().eq('id', subscriberId);

		if (error) {
			console.error(error);

			return fail(500, {
				message: error.message
			});
		}

		return { data };
	},
	async sendEmail({ params, request, fetch }) {
		const form = await superValidate(request, zod(emailSchema));

		if (!form.valid) {
			return fail(400, {
				createEmailForm: form
			});
		}

		const subject = form.data.subject;
		const title = form.data.title;
		const content = form.data.content;

		const { id: project_id } = params;

		const email = {
			subject,
			title,
			content
		};

		await fetch('/api/v1/email/send', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ project_id, email })
		});

		return {
			createEmailForm: form
		};
	},
	async addContact({ params, request, locals: { supabase, getUser } }) {
		const form = await superValidate(request, zod(contactSchema));

		if (!form.valid) {
			return fail(400, {
				addContactForm: form
			});
		}

		const { id: project_id } = params;
		const user = await getUser();

		const email = form.data.email;

		const project = await (async () => {
			const { data, error } = await supabase
				.from('projects')
				.select('*')
				.eq('id', project_id)
				.eq('owner_id', user.id)
				.single();

			if (error || !data) {
				console.error(error);

				return fail(400, {
					message: 'Project not found'
				});
			}

			return data;
		})();

		const { data, error } = await supabase.from('subscribers').insert([
			{
				email,
				project_id: project.id,
				location: [],
				ip: '0'
			}
		]);

		if (error) {
			console.error(error);

			return fail(400, {
				message: 'Failed to add contact'
			});
		}

		return { addContactForm: form };
	}
};
