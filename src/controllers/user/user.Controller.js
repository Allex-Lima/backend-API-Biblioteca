import { createUserService, findAllUserService } from "../../services/user/user.Service.js";

export const findAllUser = async (_req, res) => {
	try {
		const users = await findAllUserService();
		
		return res.status(200).json(users);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const createUser = async (req, res) => {

	try {
		const result = await createUserService(req.body);

		return res.status(201).json(result);

	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};
