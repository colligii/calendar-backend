import { DataTypes } from "sequelize";
import { SequelizeVar } from "../../../db.js";
import PermissionsModel from "./permissions/model.js";
import RoleModel from "./role/model.js";

const PermissionRoleModel = SequelizeVar.sequelize.define(
    "permission_role",
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING(100)
        }
    }
)

PermissionsModel.belongsToMany(RoleModel, { through: PermissionRoleModel })
RoleModel.belongsToMany(PermissionsModel, { through: PermissionRoleModel })

export default PermissionRoleModel
