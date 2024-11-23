import express from "express";
import dotenv from "dotenv";
import { routeMiddleware } from "./middlewares/route-middleware";
import router from "./routes/index";

// Configurar variáveis de ambiente
dotenv.config();

const app = express();
const port = process.env.PORT;

// Middleware global
app.use(express.json());
app.use(routeMiddleware);

// Rotas
app.use(router);

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
