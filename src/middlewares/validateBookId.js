import { Types } from "mongoose";

export const validateBookId = async (req, res, next) => {
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