const addTodo = require("./use_cases/addTodo");
const deleteTodoById = require("./use_cases/deleteTodoById");
const getAllTodos = require("./use_cases/getAllTodos");
const getTodoById = require("./use_cases/getTodoById");
const updateTodoById = require("./use_cases/updateTodoById");
const validateNewTodo = require("./use_cases/validateNewTodo");

const getTodos = async (req, res) => {
	try {
		const todos = getAllTodos();
		res.json(todos);
	} catch (err) {
		res.status(500).json(err.message);
	}
};
const getTodo = async (req, res) => {
	try {
		const { id } = req.params;

		const todo = getTodoById(id);
		if (!todo) {
			return res.status(400).json("Todo not found.");
		}

		res.json(todo);
	} catch (err) {
		res.status(500).json(err.message);
	}
};
const createTodo = async (req, res) => {
	try {
		const { error } = validateNewTodo(req.body);
		if (error) {
			return res.status(400).json(error);
		}

		const { text } = req.body;
		const todo = addTodo(text);

		res.json(todo);
	} catch (err) {
		res.status(500).json(err.message);
	}
};
const updateTodo = async (req, res) => {
	try {
		const { id } = req.params;

		const todo = getTodoById(id);
		if (!todo) {
			return res.status(400).json("Todo not found.");
		}

		const updatedTodo = updateTodoById(id);
		res.json(updatedTodo);
	} catch (err) {
		res.status(500).json(err.message);
	}
};
const deleteTodo = async (req, res) => {
	try {
		const { id } = req.params;

		const todo = getTodoById(id);
		if (!todo) {
			return res.status(400).json("Todo not found.");
		}

		deleteTodoById(id);
		res.json(true);
	} catch (err) {
		res.status(500).json(err.message);
	}
};

module.exports = {
	getTodos,
	getTodo,
	createTodo,
	updateTodo,
	deleteTodo,
};
