const studentClassActions = require("../controllers/studentClassController");
let router = express.Router;

router.get('/', studentClassActions.getStudentClassesC);
router.get('/objectID/:_id', studentClassActions.getOneStudentClassByStudentIDC);
router.get('/studentID/:student_ID', studentClassActions.getOneStudentClassByStudentIDC);
router.post('/', studentClassActions.createStudentClassC);
router.patch('/objectID/:_id', studentClassActions.updateStudentClassByObjectIDC);
router.patch('/studentID/:student_ID', studentClassActions.updateStudentClassByStudentIDC);
router.delete('/objectID/:_id', studentClassActions.deleteStudentClassByObjectIDC);
router.delete('/studentID/:student_ID', studentClassActions.deleteStudentClassByStudentIDC);

module.exports = router;