export const load = async ({ params, locals: { supabase, getUser } }) => {
	const user = await getUser();

	const { id: project_id } = params;

	const { data: project, error } = await supabase
		.from('projects')
		.select('*, subscribers(*)')
		.eq('id', project_id)
		.eq('owner_id', user.id)
		.single();

	if (error) {
		console.error(error);
		return { project: null };
	}

	return { project };
};
