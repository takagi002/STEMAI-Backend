const studentClassActions = require("../controllers/studentClassController.ts");
var express = require("express");
var router = express.Router();

router.get('/', studentClassActions.getStudentClassesC);
router.get('/objectID/:_id', studentClassActions.getOneStudentClassByObjectIDC);
router.get('/studentID/:student_id', studentClassActions.getOneStudentClassByStudentIDC);
router.post('/', studentClassActions.createStudentClassC);
router.patch('/objectID/:_id', studentClassActions.updateStudentClassByObjectIDC);
router.patch('/studentID/:student_id', studentClassActions.updateStudentClassByStudentIDC);
router.delete('/objectID/:_id', studentClassActions.deleteStudentClassByObjectIDC);
router.delete('/studentID/:student_id', studentClassActions.deleteStudentClassByStudentIDC);

module.exports = router;