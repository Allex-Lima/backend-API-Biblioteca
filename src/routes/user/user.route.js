import { Router } from "express";
import {
	findAllUser,
	createUser,
} from "../../controllers/user/user.Controller.js";

const route = Router();

route.get("/user", findAllUser);
route.post("/user", createUser);

export default route;