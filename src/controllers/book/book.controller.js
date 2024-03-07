export const createBook = async (req, res) => {
	try {
		return res.status(201).json("book created.");
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};