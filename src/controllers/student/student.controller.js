import { createStudentService } from "../../services/student/student.service.js";

export const createStudent = async (req, res) => {
	try {
		const registration = "2024";
		const { name, email } = req.body;
		const dataStudent = {
			name,
			email,
			registration
		};

		const result = await createStudentService(dataStudent);

		return res.status(201).json(result);

	} catch (error) {
		return res.status(500).json({message: error.message });
	}
    
};