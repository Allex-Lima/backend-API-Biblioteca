import { loginService } from "../../services/login/login.service.js";

const login = async (req, res) => {
	try {
		const result = await loginService(req.body);
		
		if (result.message) {
			return res.status(400).json({ message: result.message.replace(/\\/g, "").replace(/"/g, "") });
		}

		if (!result || result.length === 0) {
			return res.status(404).json({ message: "Email or password invalid." });
		}

		return res.status(201).json({ message: "logged with successfully." });

	} catch (error) {
		return res.status(500).json({ message: error.message });
	}


};

export default login;