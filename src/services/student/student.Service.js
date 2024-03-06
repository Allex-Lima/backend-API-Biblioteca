import { 
	createStudentRepository,
	deleteStudentRepository,
	findAllStudentRepository,
	findStudentByNameRepository,
	findStudentByRegistrationRepository,
	updateStudentRepository
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

export const findStudentByRegistrationService = async (data) => {
	try {
		const student = await findStudentByRegistrationRepository(data);

		if (!student) {
			return [];
		}

		return student;
	} catch (error) {
		return { message: error.message };
	}
};

export const findStudentByNameService = async (name) => {
	try {
		const student = await findStudentByNameRepository(name);
		if (!name) return [];

		return student;
		
	} catch (error) {
		return { message: error.message };
	}
};

export const updateStudentService = async (dataStudent, registration) => {
	try {
		
		const { error } = validationStudents.validate(dataStudent);
		
		if (error) {
			return error;
		}
		
		const result = await updateStudentRepository(registration, dataStudent);
		
		return result;
		
	} catch (error) {
		if (error.code === 11000) {
			return {message: "Data duplicated."};
		}
		return { message: error.message };
	}
};

export const deleteStudentService = async (registration) => {
	try {
		if (!registration) {
			return {message: "Registration not found."};
		}
		await deleteStudentRepository(registration);

		return { message: "Student deleted successfylly." };

	} catch (error) {
		return { message: error.message };
	}
};