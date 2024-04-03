import { z } from 'zod';

export const subscriberFormSchema = z.object({
	email: z.string().email(),
	project_id: z.string().uuid()
});
