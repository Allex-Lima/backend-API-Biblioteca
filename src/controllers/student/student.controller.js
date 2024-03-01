import { 
	createStudentService,
	findAllStudentService,
	findStudentByRegistrationService,
	updateStudentService
} from "../../services/student/student.service.js";
import { generateRegistration } from "../../utils/generateRegistration.js";

export const createStudent = async (req, res) => {
	try {
		const registration = generateRegistration();
		
		const { name, email } = req.body;
		const dataStudent = {
			name,
			email,
			registration
		};

		const result = await createStudentService(dataStudent);

		if (result.message) {
			return res.status(400).json({ message: result.message.replace(/\\/g, "").replace(/"/g, "") });
		}

		return res.status(201).json(result);

	} catch (error) {
		return res.status(500).json({message: error.message });
	}
    
};

export const findAllStudent = async (req, res) => {
	try {
		const result = await findAllStudentService();

		return res.status(200).json(result);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const findStudentByRegistration = async (req, res) => {
	try {
		const { registration } = req.params;

		const result = await findStudentByRegistrationService(registration);

		if (result.length === 0) {
			return res.status(404).json({ message: "Student not found."});
		}
		return res.status(200).json(result);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const updateStudent = async (req, res) => {
	
	try {
		const { registration } = req.params;

		const registrationStudent = {
			registration,
		};
		
		const {name, email } = req.body;

		const objStudent = {
			name,
			email,
			registration,
		};

		const result = await updateStudentService(objStudent, registrationStudent);
		
		if (result.message) {
			return res.status(400).json({ message: result.message.replace(/\\/g, "").replace(/"/g, "") });
		}
		
		if (result.length === 0) {
			return res.status(404).json({ message: "Student not found." });
		}

		return res.status(200).json(result);

	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};