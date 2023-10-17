const todos = require("../../../db/todos");

const getAllTodos = () => {
	try {
		return todos;
	} catch (err) {
		throw new Error(err.message);
	}
};

module.exports = getAllTodos;
