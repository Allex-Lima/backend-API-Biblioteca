import { Student } from "../../models/student/Student.js";

export const createStudentRepository = (dataStudent) => Student.create(dataStudent);