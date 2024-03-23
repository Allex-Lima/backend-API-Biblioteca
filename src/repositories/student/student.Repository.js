import { Student } from "../../models/student/Student.js";

export const createStudentRepository = (dataStudent) => Student.create(dataStudent);

export const findAllStudentRepository = () => Student.find().sort({_id: -1});

export const findStudentByRegistrationRepository = async(registration) => await Student.findOne({ registration: registration });

export const findStudentByNameRepository = (name) => Student.find({ 
	name: { $regex: `${name || "" }`, $options: "i"},
}).sort({ _id: -1 });

export const updateStudentRepository = (registration, dataStudent) => Student.findOneAndUpdate(registration, { $set: dataStudent}, {new: true});

export const deleteStudentRepository = (id) => Student.findByIdAndDelete(id);