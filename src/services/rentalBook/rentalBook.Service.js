import {
	findBookByIdRepository,
}
	from "../../repositories/book/book.repository.js";
import { rentalBookRepository } from "../../repositories/rentalBook/rentalBook.repository.js";
import { findStudentByRegistrationRepository } from "../../repositories/student/student.Repository.js";

export const rentalBookService = async (data, id) => {
	try {
		const dataStudy = await findStudentByRegistrationRepository(data);

		const student = {
			name: dataStudy.name,
			email: dataStudy.email,
			registration: dataStudy.registration
		};

		const dataBook = await findBookByIdRepository(id);

		const book = {
			_id: dataBook._id,
			name: dataBook.name,
			author: dataBook.author,
			genre: dataBook.genre
		};

		const collectionInfo = [{
			student,
			book
		}];

		const result = await rentalBookRepository(collectionInfo);
        
		return result;

	} catch (error) {
		return { message: error.message };
	}
};
