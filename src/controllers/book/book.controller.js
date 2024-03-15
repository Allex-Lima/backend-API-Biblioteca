import { 
	createBookService, 
	findBookByIdService, 
	findAllBooksService, 
	findParameterService,
	deleteBookService,
	updateBookService
} from "../../services/book/book.service.js";

export const createBook = async (req, res) => {
	try {
		const book = await createBookService(req.body);

		if (book.message) {
			return res.status(400).json({message : book.message.replace(/\\/g, "").replace(/"/g,"")});
		}

		return res.status(201).json(book);

	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const findAllBooks = async (req, res) => {
	try {
		const books = await findAllBooksService();

		return res.json(books);
	} catch (error) {
		return res.status(500).json({message: error.message});
	}
};

export const findBookById = async (req, res) => {
	try {
		const { id } = req.params;
		
		const book = await findBookByIdService(id);

		if (!book) {
			return res.status(404).json({ message: "Id is invalid." });
		} 

		return res.json(book);

	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const findBookByParameter = async (req, res) => {
	try {
		const { name, author, genre } = req.query;
		
		const book = await findParameterService(name, author, genre);

		if (!book) {
			return res.status(404).json({ message: " Book not found."});
		}

		return res.json(book);

	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const deleteBook = async (req, res) => {
	try {
		const id = req.params.id;

		if (!id) {
			return res.status(404).json({ message: "Id Book not inserted." });
		}
		
		const result = await deleteBookService(id);

		if (!result) {
			return res.status(404).json({ message: "Book not found to delete."});
		}

		return res.status(200).json({ message: "Book deleted successfully" });
	} catch (error) {
		return res.status(500).json({ message: error.message});
	}
};

export const updateBook = async (req, res) => {
	try {

		const { id } = req.params;

		const result = await updateBookService(id, req.body);

		if (result.message) {
			return res.status(400).json({ message: result.message.replace(/\\/g, "").replace(/"/g, "")});
		}

		return res.status(201).json(result);

	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};