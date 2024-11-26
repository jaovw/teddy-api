import { Router } from "express";
import { urlController } from "../controllers/url-controller";

const router = Router();

router.delete("/url/:id", urlController.deletar);
router.post("/url", urlController.criar);
router.get("/url", urlController.listarPorQuery);
router.get("/url/:id", urlController.listarPorId);

export default router;
