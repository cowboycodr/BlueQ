import { z } from 'zod';

export const launchPageFormSchema = z.object({
    name: z.string().min(1).max(32),
    description: z.string().min(1).max(140),
    domain: z.string().min(1).max(32),
})