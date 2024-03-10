import { 
	createBookService, 
	findBookByIdService, 
	findAllBooksService, 
	findParameterService
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