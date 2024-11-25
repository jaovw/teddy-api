import { Router } from "express";
import { usuarioController } from "../controllers/usuario-controller";

const router = Router();

router.post("/usuario", usuarioController.criar);

export default router;
