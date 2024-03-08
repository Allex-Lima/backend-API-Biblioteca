import { createBookRepository } from "../../repositories/book/book.repository.js";
import { validationBook } from "../../validate/validate.js";

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