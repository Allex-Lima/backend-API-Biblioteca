import { createUserRepository, findAllUserRepository } from "../../repositories/user/user.Repository.js";
import { validation } from "../../validate/validate.js";

export const createUserService = async (dataUser) => {
	try {
		const { error }  = validation.validate(dataUser);
		
		if (error) {
			return error;
		}

		await createUserRepository(dataUser);

		// return { message: "User added with successfully."};
		return true;

	} catch (error) {
		if (error.message) {
			return { message: "Data already existing." };
		}
		return { message: error.message };
	}
};

export const findAllUserService = async () => {
	try {
		const allUser = await findAllUserRepository();

		return allUser;

	} catch (error) {
		return {message: error.message};
	}
};

