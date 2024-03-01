import { Student } from "../../models/student/Student.js";

export const createStudentRepository = (dataStudent) => Student.create(dataStudent);

export const findAllStudentRepository = () => Student.find();

export const findStudentByRegistrationRepository = (registration) => Student.findOne({ registration: registration });

export const updateStudentRepository = (registration, dataStudent) => Student.findOneAndUpdate(registration, { $set: dataStudent}, {new: true});