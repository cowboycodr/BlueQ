import { z } from "zod";

export const userSchema = z.object({
    username: z.string()
        .min(2, "Username is too short. It must contain at least 2 characters.")
        .max(24, "Username is too long. It must not exceed 24 characters.") // Adjusted the error message to match the max limit
        .regex(/^[a-zA-Z0-9_.]*$/, "Username can only include letters, numbers, underscores (_), and periods (.) without spaces."),
    email: z.string()
        .email("Please enter a valid email address."),
    full_name: z.string()
        .min(3, "Full name is too short. It must contain at least 3 characters.")
        .max(128, "Full name is too long. It must not exceed 128 characters.")
        .regex(/^[a-zA-Z0-9 \u00C0-\u00FF]*$/, "Full name can only include letters, numbers, and spaces.")
});

