const express = require("express");

const app = express();
app.use(express.json());

app.use("/", require("./api/health"));
app.use("/todos", require("./api/todos"));

app.listen(3000, (err) => {
	if (!err) {
		console.log(`Server running on port 3000`);
	} else {
		console.log(`Error occured: ${err}`);
	}
});
