import { Router } from "express";
import login from "../../controllers/login/login.js";

const router = Router();

router.post("/login", login);

export default router;