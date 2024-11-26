import { Router } from "express";
import { urlController } from "../controllers/url-controller";
import { authMiddleware } from "../middlewares/auth-middleware";

const router = Router();

router.delete("/url/:id", authMiddleware, urlController.deletar);
router.post("/url", authMiddleware, urlController.criar);
router.get("/url", urlController.listarPorQuery);
router.get("/url/:id", urlController.listarPorId);

export default router;
