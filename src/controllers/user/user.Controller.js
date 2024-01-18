import { userService } from "../../services/user/user.Service.js";

export const findAllUser = (_req, res) => {
	return res.status(200).json({ message: "Find all users." });
};

export const createUser = async (req, res) => {
	
	try {
		const result  = await userService(req.body);

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
