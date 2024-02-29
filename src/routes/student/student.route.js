import { Router } from "express";
import { 
	createStudent,
	findAllStudent, 
	findStudentByRegistration
} from "../../controllers/student/student.controller.js";

const route = Router();

route.post("/user/student", createStudent);
route.get("/user/student", findAllStudent);
route.get("/user/student/:registration", findStudentByRegistration);

export default route;