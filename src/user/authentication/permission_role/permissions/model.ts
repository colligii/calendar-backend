import { DataTypes } from "sequelize";
import { SequelizeVar } from "../../../../db.js";

const PermissionsModel = SequelizeVar.sequelize.define(
    "permissions",
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING(100)
        },
        key: {
            type: DataTypes.STRING(100)
        },
    }
)

export default PermissionsModel;