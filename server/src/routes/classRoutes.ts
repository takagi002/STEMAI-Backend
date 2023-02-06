const classActions = require("../controllers/classController.ts");
var express = require("express");
var router = express.Router();

router.get('/', classActions.getClassesC);
router.get('/objectID/:_id', classActions.getOneClassByObjectIDC);
router.get('/courseID/:course_ID', classActions.getOneClassByCourseIDC);
router.post('/', classActions.createClassC);
router.patch('/objectID/:_id', classActions.updateClassByObjectIDC);
router.patch('/courseID/:course_ID', classActions.updateClassByCourseIDC);
router.delete('/objectID/:_id', classActions.deleteClassByObjectIDC);
router.delete('/courseID/:course_ID', classActions.deleteClassByCourseIDC);

module.exports = router;