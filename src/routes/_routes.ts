import { Router } from "express";

import usuario_route from "./usuario";
import login_route from "./auth";
import url_route from "./url";

const router = Router();

router.use("/", usuario_route);
router.use("/", login_route);
router.use("/", url_route);

export default router;
