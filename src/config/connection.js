const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

console.log("DB Config:", {
  name: process.env.DB_NAME,
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  pass: process.env.DB_PASSWORD,
});

// Conexão ao banco de dados
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
  }
);

module.exports = sequelize;
