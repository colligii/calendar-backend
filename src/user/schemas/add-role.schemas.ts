import * as z from "zod";

export const AddRole = z.object({
    name: z.string()
})