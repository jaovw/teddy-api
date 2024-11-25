import { Router } from "express";

import usuario_route from "./usuario";
import login_route from "./auth";

const router = Router();

router.use("/", usuario_route);
router.use("/", login_route);

export default router;
