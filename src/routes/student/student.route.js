import { Router } from "express";
import { createStudent } from "../../controllers/student/student.controller.js";

const route = Router();

route.post("/user/student", createStudent);

export default route;