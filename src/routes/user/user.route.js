import { Router } from "express";
import { findAllUser } from "../../controllers/user/user.Controller.js";

const route = Router();

route.get("/user", findAllUser);

export default route;