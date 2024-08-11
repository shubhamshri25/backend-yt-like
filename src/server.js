const app = require("./app");
require("dotenv").config();
const db = require("../src/db");
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Listening on port ${port}!`));
