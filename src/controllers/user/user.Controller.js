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
		
		if (result.message) {
			return res.status(400).json({ message: result.message.replace(/\\/g, "").replace(/"/g, "|") });

		}
		return res.status(201).json({ message: "User added with successfully."});

	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};
