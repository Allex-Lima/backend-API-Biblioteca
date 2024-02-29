import { Router } from "express";
import { 
	createStudent,
	findAllStudent 
} from "../../controllers/student/student.controller.js";

const route = Router();

route.post("/user/student", createStudent);
route.get("/user/student", findAllStudent);

export default route;