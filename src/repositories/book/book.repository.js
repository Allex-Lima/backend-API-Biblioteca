import { Book } from "../../models/book/Book.js";

export const createBookRepository = (dataBook) => Book.create(dataBook);

export const findAllBooksRepository = () => Book.find({});

export const findBookByIdRepository = (id) => Book.findById({ _id: id });

export const findParameterRepository = async (name, author, genre) => {
	try {
		const query = {};

		if (name) {
			query.name = {$regex: new RegExp(name, "i")};
		}

		if (author) {
			query.author = {$regex: new RegExp(author, "i")};
		}

		if (genre) {
			query.genre = {$regex: new RegExp(genre, "i")};
		}

		const book = await Book.find(query);
		return book;
	} catch (error) {
		return { message: error.message };
	}
};

export const deleteBookRepository = async (id) => Book.findByIdAndDelete(id);