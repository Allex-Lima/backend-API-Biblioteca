import bcrypt from "bcrypt";
import { findUserByEmail } from "../../repositories/user/user.Repository.js";
import { validationLogin } from "../../validate/validate.js";


export const loginService = async (dataUser) => {
	try {
		const { error }  = validationLogin.validate(dataUser);
		if (error) {
			return error;
		}
        
		const user = await findUserByEmail(dataUser.email);
		
		if (!user) {
			return [];
		}

		const passwordIsValid = await bcrypt.compare(dataUser.password, user.password);
		
		return passwordIsValid;
        
	} catch (error) {
		return { message: error.message };
	}
};