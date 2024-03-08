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

const validationDataBook = {
	name: Joi.string().min(3).required(),
	author: Joi.string().required(),
	edition: Joi.string().required(),
	genre: Joi.string().required(),
	amount: Joi.string().required(),
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

export const validationBook = Joi.object({
	...validationDataBook,
});
