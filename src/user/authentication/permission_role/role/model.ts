import { DataTypes } from "sequelize";
import { SequelizeVar } from "../../../../db.js";

const RoleModel = SequelizeVar.sequelize.define(
    "role",
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING(100)
        },
        
    }
)

export default RoleModel;