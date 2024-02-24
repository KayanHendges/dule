import { z } from "zod";

export const nameFormField = z.string().min(2).max(200);
export const emailFormField = z.string().email();
export const passwordFormField = z.string().min(8).max(200);
