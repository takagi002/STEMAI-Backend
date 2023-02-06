const dotenv = require('dotenv');
dotenv.config();


const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());

const dbConnect = require('./src/config/dbConnect.ts');

const studentClassRoutes = require('./src/routes/studentClassRoutes');
app.use('/studentClass', studentClassRoutes);

const studentRoutes = require('./src/routes/studentRoutes');
app.use('/student', studentRoutes);

const classRoutes = require('./src/routes/classRoutes');
app.use('/class', classRoutes);

const professorRoutes = require('./src/routes/professorRoutes');
app.use('/professor', professorRoutes);


const server = app.listen(PORT, () => {
  console.log("Server is running at port " + PORT);
});

const db = dbConnect.devDBConnect();
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected to Dev DB successfully");
});

module.exports = server;