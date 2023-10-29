const express = require("express");
const app = express();
const router = require("./routes/router");
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(3000, () => console.log("Listening on port 3000..."));
