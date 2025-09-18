import express from "express";
import 'dotenv/config';
import configureDb, { SequelizeVar } from "./db.js";

async function main() {
    const app = express();
    const PORT = process.env.PORT || 3000;

    await configureDb();

    app.use((await import('./routes.js')).default)
    app.use(express.json())

    await SequelizeVar.sequelize.sync({ alter: true })

    app.listen(PORT, () => console.log(`Listening to port ${PORT}`))
}

main()