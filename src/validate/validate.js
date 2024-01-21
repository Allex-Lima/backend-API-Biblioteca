import Joi from "joi";


export const validation = Joi.object({
	name: Joi.string().min(3).required(),
	email: Joi.string().email().required(),
	password: Joi.string().alphanum().min(6).required()
});