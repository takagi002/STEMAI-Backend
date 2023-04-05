const professorClassActions = require("../controllers/professorClassController.ts");
var express = require("express");
var router = express.Router();

router.get('/classes/:prof_id/:currentSemester', professorClassActions.getProfessorsClassesC);
router.get('/students/:course_id/:currentSemester', professorClassActions.getProfessorsStudentsC);


module.exports = router;