import {
	findBookByIdRepository,
}
	from "../../repositories/book/book.repository.js";
import { 
	findRentalBookRepository, 
	insertRentalBookRepository, 
	rentalBookRepository 
} from "../../repositories/rentalBook/rentalBook.repository.js";
import { findStudentByRegistrationRepository } from "../../repositories/student/student.Repository.js";

export const rentalBookService = async (registration, idLivro) => {
	try {

		const dataStudy = await findStudentByRegistrationRepository(registration);

		const rentalAll = await findRentalBookRepository();
		
		for (let v of rentalAll) {
			for (let item of v.student) {
				if (item.registration === registration) {
					return false;
				}
			}
		}

		const student = {
			name: dataStudy.name,
			email: dataStudy.email,
			registration: dataStudy.registration
		};
		
		
		const dataBook = await findBookByIdRepository(idLivro);

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

export const findRentalBookService = async () => {
	try {
		const result = await findRentalBookRepository();

		return result;

	} catch (error) {
		return { message: error.message };
	}
};

export const insertRentalBookService = async (id, idLivro) => {
	try {
		const dataBook = await findBookByIdRepository(idLivro);

		const book = {
			_id: dataBook._id,
			name: dataBook.name,
			author: dataBook.author,
			genre: dataBook.genre
		};

		const insertBook = insertRentalBookRepository(id, book);

		return insertBook;
	} catch (error) {
		return { message: error.message };
	}
};
