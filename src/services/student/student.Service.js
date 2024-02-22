import { createStudentRepository } from "../../repositories/student/student.Repository.js";

import { validationStudents } from "../../validate/validate.js";

export const createStudentService = async (dataStudent) => {
	try {
		const { error } = validationStudents.validate(dataStudent);

		if ( error ) {
			return error;
		}
		const result = await createStudentRepository(dataStudent);
        
		return result;
	} catch (error) {
		return { message : error.message };
	}
};