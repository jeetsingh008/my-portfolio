import { z } from "zod";

export const ContactUsSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email(),
  phone: z.string().regex(/^[6-9]\d{9}$/, {
    message: "Phone number must be a valid 10-digit Indian number",
  }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

export type ContactUsSchemaType = z.infer<typeof ContactUsSchema>;
