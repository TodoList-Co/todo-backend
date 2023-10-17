const todos = require("../../../db/todos");

const updateTodoById = (id) => {
	try {
		todos[id].complete = !todos[id].complete;
		return todos[id];
	} catch (err) {
		throw new Error(err.message);
	}
};

module.exports = updateTodoById;
