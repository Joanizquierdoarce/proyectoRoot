import { Sequelize } from "sequelize";

const sequelize = new Sequelize("userManagement", "postgres", "admin",
{host: "localhost",
dialect: "postgres"})

sequelize.authenticate()
    .then(() => console.log("Conexión a PostgreSQL exitosa"))
    .catch(err => console.error("Error conectando a PostgreSQL", err))

    export default sequelize;