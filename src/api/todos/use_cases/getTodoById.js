const todos = require("../../../db/todos");

const getTodoById = (id) => {
	try {
		const todo = todos.find((todo) => todo.id == id);
		return todo;
	} catch (err) {
		throw new Error(err.message);
	}
};

module.exports = getTodoById;
