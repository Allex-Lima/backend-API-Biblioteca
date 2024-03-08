import { 
	createBookRepository, 
	findBookByIdRepository, 
	findAllBooksRepository 
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