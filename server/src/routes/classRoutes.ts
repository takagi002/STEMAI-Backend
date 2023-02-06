const classActions = require("../controllers/classController");
var router = express.Router;

router.get('/', classActions.getClassesC);
router.get('/objectID/:_id', classActions.getOneClassByCourseIDC);
router.get('/courseID/:course_ID', classActions.getOneClassByIDC);
router.post('/', classActions.createClassC);
router.patch('/objectID/:_id', classActions.updateClassByObjectIDC);
router.patch('/courseID/:course_ID', classActions.updateClassByCourseIDC);
router.delete('/objectID/:_id', classActions.deleteClassByObjectIDC);
router.delete('/courseID/:course_ID', classActions.deleteClassByCourseIDC);

module.exports = router;