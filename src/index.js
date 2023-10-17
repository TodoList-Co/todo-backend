const express = require("express");

const app = express();

app.use("/", (req, res) => res.json({ ok: true }));

app.listen(3000, (err) => {
	if (!err) {
		console.log(`Server running on port 3000`);
	} else {
		console.log(`Error occured: ${err}`);
	}
});
