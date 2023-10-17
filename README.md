# Express + NodeJS backend

Objective: build out basic create, read, update, and delete operations for a todo list app. You do not need to connect to a database, you can mock the data on the server (it will persist until the server is shut down). Feel free to use any dependencies you need, as long as you meet the requirements (listed below).

### Todo Object: Minimum Requirements

A todo must have 3 fields: ID, text, and complete:

```
{
    ID: String,
    text: String,
    complete: Boolean
}
```

### Getting Started

-   Clone the repository onto your local machine
-   Checkout a new feature branch
-   Install all required dependencies by running "npm install"
-   To start the server, run "npm start". You should be able to access the server on http://localhost:3000. The root endpoint currently returns { ok: true }
-   Once you have completed all the required features, push your branch to the remote repository

### Required Features

-   [ ] Get all todos at the endpoint /todos
-   [ ] Get a particular todo at the endpoint /todo/:todoId
-   [ ] Create a todo at /todos
-   [ ] Update todo's "complete" status at /todos/:todoId
-   [ ] Delete a todo at /todos/:todoId
