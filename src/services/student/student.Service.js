import { createStudentRepository } from "../../repositories/student/student.Repository.js";

export const createStudentService = async (dataStudent) => {
	try {
		const result = await createStudentRepository(dataStudent);
        
		return result;
	} catch (error) {
		return { message : error.message };
	}
};