const dotenv = require('dotenv');
dotenv.config();


var express = require("express");
var cors = require('cors')


var app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(cors());

const dbConnect = require('./src/config/dbConnect.ts');

const studentClassRoutes = require('./src/routes/studentClassRoutes.ts');
app.use('/studentClass', studentClassRoutes);

const studentRoutes = require('./src/routes/studentRoutes.ts');
app.use('/student', studentRoutes);

const classRoutes = require('./src/routes/classRoutes.ts');
app.use('/class', classRoutes);

const professorRoutes = require('./src/routes/professorRoutes.ts');
app.use('/professor', professorRoutes);

const emailRoutes = require('./src/routes/emailRoutes.ts');
app.use('/email', emailRoutes);

const userRoutes = require('./src/routes/userRoutes.ts');
app.use('/user', userRoutes);

const predictionRoutes = require('../server/src/routes/predictionRoutes.ts');
app.use('/prediction', predictionRoutes);

const professorClassRoutes = require('../server/src/routes/professorClassRoutes.ts');
app.use('/professorClass', professorClassRoutes);

const server = app.listen(PORT, () => {
  console.log("Server is running at port " + PORT);
});

if(process.env.NODE_ENV != "test"){
  const db = dbConnect.devDBConnect();
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected to Dev DB successfully");
  });
};


module.exports = server;