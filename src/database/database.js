import Sequelize from "sequelize";

 export const sequelize = new Sequelize(
    "pokemondb",
    "root",
    "root",
    {
        host: "localhost",
        dialect: "postgres"
    }
);