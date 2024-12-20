const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");

// Carregar as variáveis de ambiente
dotenv.config();

// Importar as rotas
const userRoutes = require("./routes/userRoutes");
const reportRoutes = require("./routes/reportRoutes");

// Configuração do Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API de Relatórios",
      version: "1.0.0",
      description: "API para geração de relatórios personalizados",
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

// Middleware
app.use(cors());
app.use(express.json());

// Definir rotas
app.use("/api/users", userRoutes);
app.use("/api/reports", reportRoutes);

// Rota para acessar a documentação
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`PORTA: ${PORT}`);
});
