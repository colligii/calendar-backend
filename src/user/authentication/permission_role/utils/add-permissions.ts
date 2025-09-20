import type z from "zod";
import { ListAddPermissions } from "../../../schemas/add-permissions.schema.js";
import PermissionsModel from "../permissions/model.js";

export function validateListPermissions(permissions: z.infer<typeof ListAddPermissions>) {
    try {
        ListAddPermissions.parse(permissions);
        return true;
    } catch (e) {
        return false;
    }
}

export async  function createAndValidateListPermissions(permissions: z.infer<typeof ListAddPermissions>) {
    const isValidPermissions = validateListPermissions(permissions);

    if(!isValidPermissions)
        throw new Error("User.ValidPermissions");

    let permissionsBulk = [];

    for(let permission of permissions) {
        permissionsBulk.push(await PermissionsModel.upsert(permission))
    }
    return permissionsBulk;
}