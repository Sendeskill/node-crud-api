const express = require("express");
const app = express();
const userRoutes = require("./src/routes/userRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/api-docs.json"); // Usando JSON agora
const dotenv = require("dotenv");
const sequelize = require("./src/config/connection");

// Carrega variáveis do arquivo .env
dotenv.config();

// Testa a conexão com o banco de dados
async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

// Inicializa a conexão com o banco ao iniciar o servidor
testDatabaseConnection();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
