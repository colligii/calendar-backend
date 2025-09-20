import * as z from "zod";

export const AddPermissions = z.object({
    name: z.string(),
    key: z.string()
})

export const ListAddPermissions = z.array(
    AddPermissions
)