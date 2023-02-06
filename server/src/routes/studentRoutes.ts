const studentActions = require("../controllers/studentController");
var router = express.Router;

router.get('/', studentActions.getStudentsC);
router.get('/objectID/:_id', studentActions.getOneStudentByStudentIDC);
router.get('/studentID/:student_ID', studentActions.getOneStudentByStudentIDC);
router.post('/', studentActions.createStudentC);
router.patch('/objectID/:_id', studentActions.updateStudentByObjectIDC);
router.patch('/studentID/:student_ID', studentActions.updateStudentByStudentIDC);
router.delete('/objectID/:_id', studentActions.deleteStudentByObjectIDC);
router.delete('/studentID/:student_ID', studentActions.deleteStudentByStudentIDC);

module.exports = router;