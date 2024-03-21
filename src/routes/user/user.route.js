import { Router } from "express";
import {
	findAllUser,
	createUser,
	updateUser,
} from "../../controllers/user/user.Controller.js";

const route = Router();

route.get("/user", findAllUser);
route.post("/user", createUser);
route.patch("/user/:id", updateUser);

export default route;