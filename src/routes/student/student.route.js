import { Router } from "express";
import { 
	createStudent,
	deleteStudent,
	findAllStudent, 
	findStudentByName, 
	findStudentByRegistration,
	updateStudent
} from "../../controllers/student/student.controller.js";

const route = Router();

route.post("/user/student", createStudent);

route.get("/user/allstudent", findStudentByName);
route.get("/user/student", findAllStudent);
route.get("/user/student/:registration", findStudentByRegistration);

route.patch("/user/student/:registration", updateStudent);

route.delete("/user/student/:registration", deleteStudent);

export default route;