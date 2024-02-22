import Joi from "joi";

const validationBase = {
	name: Joi.string().min(3).required(),
	email: Joi.string().email().required(),
};

const validationPassword = {
	password: Joi.string().min(3).required(),
};

const validationRegistration = {
	registration: Joi.string().required(),
};

export const validation = Joi.object({
	...validationBase,
	...validationPassword,
});

export const validationLogin = Joi.object({
	...validationBase,
	...validationPassword,
});

export const validationStudents = Joi.object({
	...validationBase,
	...validationRegistration,
});

