import { z } from "zod"

export const addKeyPairSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
});

export type AddKeyPairSchema = z.infer<typeof addKeyPairSchema>;
