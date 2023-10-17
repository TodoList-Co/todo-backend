const todos = require("../../../db/todos");

const addTodo = (message) => {
	try {
		const completeTodo = {
			id: todos.length,
			message,
			complete: false,
		};
		todos.push(completeTodo);
		return completeTodo;
	} catch (err) {
		throw new Error(err.message);
	}
};

module.exports = addTodo;
