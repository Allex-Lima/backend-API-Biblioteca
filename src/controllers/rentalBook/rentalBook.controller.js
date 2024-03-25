import { 
	findRentalBookCollectionByIdRepository 
} 
	from "../../repositories/rentalBook/rentalBook.repository.js";
import { 
	findRentalBookService, 
	insertRentalBookService, 
	rentalBookService 
} 
	from "../../services/rentalBook/rentalBook.service.js";

export const rentalBookController = async (req, res) => {
	try {
		const {registration, idLivro } = req.body;
		
		const study = await rentalBookService(registration, idLivro);
		
		if (!study) {
			return res.status(409).json({ message: "Data duplicated. Registration already exist for this STUDENT." });
		}

		return res.status(201).json(study);

	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const findRentalBookController = async (req, res) => {
	try {
		const result = await findRentalBookService();
		
		return res.json(result);

	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const findRentalBookByIdCollectionController = async (req, res) => {
	try {
		const { id } = req.params;

		const result = await findRentalBookCollectionByIdRepository(id);

		return res.json(result.book);
	} catch (error) {
		return res.status(500).json({message: error.message });
	}
};

export const insertRentalBook = async (req, res) => {
	try {
		const { id } = req.params;
		const { idLivro } = req.body;

		const result = await insertRentalBookService(id, idLivro);
		
		return res.status(201).json(result);
	} catch (error) {
		return res.status(500).json({message: error.message });
	}
};
