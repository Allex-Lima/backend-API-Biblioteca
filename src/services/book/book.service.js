import { 
	createBookRepository, 
	findBookByIdRepository, 
	findAllBooksRepository, 
	findParameterRepository,
	deleteBookRepository
} from "../../repositories/book/book.repository.js";
import { validationBook } from "../../validate/validate.js";
import { Types } from "mongoose";

export const createBookService = async (dataBook) => {
	try {
		const { error } = await validationBook.validate(dataBook);

		if (error) return error;
        
		const result = await createBookRepository(dataBook);

		return result;
        
	} catch (error) {
		return { message: error.message };
	}    
};

export const findAllBooksService = async () => {
	try {
		const result = await findAllBooksRepository();

		return result;

	} catch (error) {
		return { message: error.message };
	}
};

export const findBookByIdService = async (id) => {
	try {
		const idIsValid = Types.ObjectId.isValid(id);

		if (!idIsValid) return false;

		const book = await findBookByIdRepository(id);


		return book;

	} catch (error) {
		return { message: error.message };
	}
};

export const findParameterService = async (name, author, genre) => {
	try {
		const book = await findParameterRepository(name, author, genre);

		if (!book) return [];

		if (book.length === 0) return false;

		return book;
		
	} catch (error) {
		return { message: error.message };
	}
};

export const deleteBookService = async (id) => {
	try {
		const result = await deleteBookRepository(id);
		
		return result;

	} catch (error) {
		return { message: error.message };
	}
};