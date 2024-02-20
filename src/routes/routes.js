import { Router } from "express";

import loginRoute from "./login/login.route.js";
import userRoute from "./user/user.route.js";

const router = Router();

router.use(loginRoute);
router.use(userRoute);

export default router;