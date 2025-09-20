import { DataTypes } from "sequelize";
import { SequelizeVar } from "../db.js";
import RoleModel from "./authentication/permission_role/role/model.js";

const UserModel = SequelizeVar.sequelize.define(
    "user",
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING(100)
        },
        lastName: {
            type: DataTypes.STRING(100)
        },
        password: {
            type: DataTypes.TEXT
        }
    }
)

RoleModel.hasOne(UserModel)

export default UserModel