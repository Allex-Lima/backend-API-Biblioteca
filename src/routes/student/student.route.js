import { Router } from "express";

const route = Router();

route.post("/student", createStudent);

export default route;