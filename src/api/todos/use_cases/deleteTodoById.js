const todos = require("../../../db/todos");

const deleteTodoById = (id) => {
	try {
		todos.splice(id, 1);
		return id;
	} catch (err) {
		throw new Error(err.message);
	}
};

module.exports = deleteTodoById;
