import { z } from 'zod';

export const launchPageFormSchema = z.object({
	title: z.string().min(1).max(32),
	caption: z.string().min(1).max(140)
	// domain: z.string()
	//     .min(1)
	//     .max(32)
	//     .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'Domain must only contain lowercase letters, numbers, and dashes, and must start and end with a letter or number.'),
});
