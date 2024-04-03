import { z } from 'zod';

export const emailSchema = z.object({
	subject: z.string().min(1).max(64),
	title: z.string().min(1).max(64),
	content: z.string().min(1).max(10_000)
});

export const contactSchema = z.object({
	email: z.string().email()
});
