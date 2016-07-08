import Joi from 'joi';

export default {
	// POST /api/users
	createUser: {
		body: {
			firstName: Joi.string().required(),
			lastName: Joi.string().required(),
			email: Joi.string().required(),
			address: Joi.string().required(),
			phone: Joi.string().regex(/^[1-9][0-9]{9}$/).required(),
			image: Joi.string().required(),
			dob: Joi.string().required(),
			networth: Joi.string().required()
		}
	},

	// UPDATE /api/users/:userId
	updateUser: {
		body: {
			firstName: Joi.string().required(),
			lastName: Joi.string().required(),
			email: Joi.string().required(),
			address: Joi.string().required(),
			phone: Joi.string().regex(/^[1-9][0-9]{9}$/).required(),
			image: Joi.string().required(),
			dob: Joi.string().required(),
			networth: Joi.string().required()
		},
		params: {
			userId: Joi.string().hex().required()
		}
	}
};
