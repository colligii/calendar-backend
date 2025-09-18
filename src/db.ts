import { Sequelize } from "sequelize";

export default async function configureDb() {
    const sequelize = new Sequelize(process.env.POSTRGRES_URL as string)

    try {
        await sequelize.authenticate();
        SequelizeVar.sequelize = sequelize;
        
        console.log('Connection has been established successfully.');
    } catch (error) {
        throw error;
    }
}

export class SequelizeVar {
    static sequelize: Sequelize
}