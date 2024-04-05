import { json, error } from '@sveltejs/kit';

import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

import { Email } from '$lib/emails';

const resend = new Resend(RESEND_API_KEY);

export const POST = async ({ request, locals: { supabase, getUser } }) => {
	const user = await getUser();
	const body = await request.json();
	const {
		project_id,
		email: { subject, title, content }
	} = body;

	if (!user || !user.id) {
		return error(400, {
			message: 'User not found.'
		});
	}

	const project = await (async () => {
		const { data, error } = await supabase
			.from('projects')
			.select('*')
			.eq('id', project_id)
			.eq('owner_id', user.id)
			.single();

		if (error) {
			throw error(501, {
				message: 'Encountered an error'
			});
		}

		if (!data) {
			throw error(400, {
				message: 'Project not found'
			});
		}

		return data;
	})();

	const subscribers = await (async () => {
		const { data, error } = await supabase
			.from('subscribers')
			.select('*')
			.eq('project_id', project_id);

		if (error) {
			console.error(error);

			throw error(501, {
				message: 'Encountered an error'
			});
		}

		if (!data) {
			console.error('Subscribers assosciated with this project were not found.');

			throw error(400, {
				message: 'No project subscribers found.'
			});
		}

		return data;
	})();

	const recipients = subscribers.map((subscriber) => {
		return subscriber.email || null;
	});

	const template = Email.render({ title, content, author: project.title });
	const author = `${project.title} <${project.tag}@blueq.app>`;
	const html = template.html;

	const emails = recipients.map((recipient) => {
		return {
			from: author,
			to: recipient,
			subject,
			html
		};
	});

	const { data, error } = await resend.batch.send(emails);

	if (error) {
		return error(500, {
			message: 'Failed to deliver emails'
		});
	}

	return json(200, {
		message: 'Success'
	});
};
