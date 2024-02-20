import bcrypt from "bcrypt";
import { findUserByEmail } from "../../repositories/user/user.Repository.js";
import { validationLogin } from "../../validate/validate.js";
import jwt from "jsonwebtoken";

import "dotenv/config";


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

		await bcrypt.compare(dataUser.password, user.password);

		const token = generateToken(user.id);

		return token;
        
	} catch (error) {
		return { message: error.message };
	}
};

export const generateToken = (id) => jwt.sign({id: id}, process.env.SECRET_JWT, {expiresIn: 86400});