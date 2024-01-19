import { createUserService, findAllUserService } from "../../services/user/user.Service.js";

export const findAllUser = async (_req, res) => {
	const users = await findAllUserService();

	return res.status(200).json(users);
};

export const createUser = async (req, res) => {
	
	try {
		const result  = await createUserService(req.body);

		if (!result) {
			return res.status(404).json({ message: "The fields has to be filled." });
		}

		return res.status(201).json({
			message: "User added with successfully.",
		});
	
	} catch (error) {
		console.log(error.message);
		return res.status(500).json({message: error.message});
	}
};
