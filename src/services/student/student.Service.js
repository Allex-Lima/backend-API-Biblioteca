import { 
	createStudentRepository,
	findAllStudentRepository,
	findStudentByRegistrationRepository
} from "../../repositories/student/student.Repository.js";

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

export const findAllStudentService = async () => {
	try {
		const allStudent = await findAllStudentRepository();

		return allStudent;

	} catch (error) {
		return { message: error.message };
	}
};

export const findStudentByRegistrationService = async (registration) => {
	try {
		const student = await findStudentByRegistrationRepository(registration);

		if (!student) {
			return [];
		}

		return student;
	} catch (error) {
		return { message: error.message };
	}
};