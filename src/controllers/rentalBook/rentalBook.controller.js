import { rentalBookService } from "../../services/rentalBook/rentalBook.service.js";

export const rentalBookController = async (req, res) => {
	try {
		const {registration, id } = req.body;
		
		const study = await rentalBookService(registration, id);

		return res.status(201).json(study);

	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};
