import { DataTypes } from "sequelize";
import { SequelizeVar } from "../../../db.js";
import PermissionsModel from "./permissions/model.js";
import RoleModel from "./role/model.js";

const PermissionRoleModel = SequelizeVar.sequelize.define(
    "permission_role",
    {}
)

PermissionsModel.belongsToMany(RoleModel, { through: PermissionRoleModel })
RoleModel.belongsToMany(PermissionsModel, { through: PermissionRoleModel })

export default PermissionRoleModel
