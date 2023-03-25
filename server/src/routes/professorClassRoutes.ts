const professorClassActions = require("../controllers/professorClassController.ts");
var express = require("express");
var router = express.Router();

router.get('/classes/:prof_id', professorClassActions.getProfessorsClassesC);

module.exports = router;