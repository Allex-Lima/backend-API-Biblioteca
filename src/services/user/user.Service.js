import { createUserRepository } from "../../repositories/user/user.Repository.js";

export const userService = async (dataUser) => {
	try {
		const { name, email, password } = dataUser;
		
		if (!name || !email || !password) {
			return false;
		}

		const createUser = await createUserRepository(dataUser);

		return createUser;

	} catch (error) {
		return { message: error.message };
	}
};