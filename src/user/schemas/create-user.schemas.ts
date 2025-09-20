import * as z from "zod";

export const CreateUser = z.object({
    name: z.string(),
    lastName: z.string(),
    password: z.string(),
    roleId: z.string()
})