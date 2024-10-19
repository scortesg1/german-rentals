import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  hp: z.string().min(2).max(50),
  transmission: z.string().min(2).max(50),
  people: z.string().min(1),
  photo: z.string().min(2).max(150),
  pricePerDay: z.string().min(2).max(50),
  fuel: z.string().min(2).max(50),
  type: z.string().min(2).max(50),
  isPublic: z.boolean()
});
