import { json, error } from '@sveltejs/kit';
import DOMPurify from 'isomorphic-dompurify';

import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

export const POST = async ({ request, locals: { supabase, getUser } }) => {
	const user = await getUser();
	const body = await request.json();
	const {
		project_id,
		email: { subject, content, author_tag }
	} = body;

	if (!user || !user.id) {
		throw error(400, {
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
		const { data, error: errorObject } = await supabase
			.from('subscribers')
			.select('*')
			.eq('project_id', project_id);

		if (errorObject) {
			console.error(errorObject);

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

	const author = `${project.title} <${author_tag}@blueq.app>`;
	const html = content;

	const emails = recipients.map((recipient) => {
		return {
			from: author,
			to: recipient,
			subject,
			html,
		};
	});

	console.log({ emails });

	const { data, error: errorObject } = await resend.batch.send(emails);

	if (errorObject) {
		console.error(errorObject);

		return error(500, {
			message: 'Failed to deliver emails'
		});
	}

	console.log({ data });
	console.log("email sent successfully")

	return json(200, {
		message: 'Success'
	});
};
