import { createUserRepository, findAllUserRepository } from "../../repositories/user/user.Repository.js";

export const createUserService = async (dataUser) => {
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

export const findAllUserService = async () => {
	try {
		const allUser = await findAllUserRepository();

		return allUser;
	} catch (error) {
		return {message: error.message};
	}
};

