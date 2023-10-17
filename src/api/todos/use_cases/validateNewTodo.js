const Joi = require("joi");

const todoValidationSchema = Joi.object({
	text: Joi.string().required(),
});

const validateNewTodo = (data) => {
	console.log(data);
	const { error } = todoValidationSchema.validate(data);
	return {
		error: error?.details[0]?.message,
	};
};

module.exports = validateNewTodo;
