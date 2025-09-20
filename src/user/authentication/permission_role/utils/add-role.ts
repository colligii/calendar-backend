import type z from "zod";
import RoleModel from "../role/model.js";
import { AddRole } from "../../../schemas/add-role.schemas.js";

export function validateRole(role: z.infer<typeof AddRole>) {
    try {
        AddRole.parse(role);
        return true;
    } catch (e) {
        return false;
    }
}

export async  function createAndValidateRole(role: any) {
    const isValidRole = validateRole(role);

    if(!isValidRole)
        throw new Error("User.ValidRole");

    RoleModel.upsert(role)
}