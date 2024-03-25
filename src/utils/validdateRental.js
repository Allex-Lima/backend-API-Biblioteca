export const validateRental = (req, res) => {
	try {
		const {id} = req.body;

		return (`${id} tudo ok.`);
		
	} catch (error) {
		return { message: error.message };
	}
};