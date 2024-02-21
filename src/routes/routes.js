import { Router } from "express";

import loginRoute from "./login/login.route.js";
import userRoute from "./user/user.route.js";
import studentRoute from "./student/student.route.js";

const router = Router();

router.use(loginRoute);
router.use(userRoute);
router.use(studentRoute);

export default router;