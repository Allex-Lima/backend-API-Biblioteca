import { Types } from "mongoose";

export const validateId = async (req, res, next) => {
	try {
		const id = req.params.id;
		
		if (!id) {
			return res.status(400).json({ message: "Please, provide book id." });
		}
		const idValid = Types.ObjectId.isValid(id);
		
		if (!idValid) {
			return res.status(400).json({ message: "Please, provide book id valid." });
		}

		next();
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const validateRentalBook = (req, res, next) => {
	try {
		const { registration, idLivro } = req.body;

		if (!registration || (registration.length < 13)) {
			return res.status(400).json({ message: "Please, provide registration of student." });
		}

		const idValid = Types.ObjectId.isValid(idLivro);

		if (!idValid) {
			return res.status(400).json({ message: "Please, provide book id valid."});
		}

		return next();

	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};