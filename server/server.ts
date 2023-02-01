const dotenv = require('dotenv');
dotenv.config();


const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());

const dbConnect = require('./src/config/dbConnect.ts');

const server = app.listen(PORT, () => {
  console.log("Server is running at port " + PORT);
});

const db = dbConnect.devDBConnect();
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected to Dev DB successfully");
});

module.exports = server;