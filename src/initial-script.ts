import { readFileSync } from "fs"
import { createAndValidateListPermissions } from "./user/authentication/permission_role/utils/add-permissions.js"
import { join } from "path"
import { createAndValidateRole } from "./user/authentication/permission_role/utils/add-role.js";
import { validateAndCreateUser } from "./user/utils/create-user.js";

export default async function initialScript() {
    if(process.env.EXEC_INITIAL_SCRIPT === "true") {
        const user = {
            id: process.env.USER_ID,
            name: process.env.USER_NAME,
            lastName: process.env.USER_LASTNAME,
            password: process.env.USER_PASSWORD,
            roleId: process.env.USER_ROLEID
        }

        const role = {
            id: user.roleId,
            name: process.env.ROLE_NAME
        }

        const permissions = JSON.parse(readFileSync(join(process.cwd(), 'permissions.json'), "utf-8"));

        await createAndValidateListPermissions(permissions);
        await createAndValidateRole(role);
        await validateAndCreateUser(user)
    }
}