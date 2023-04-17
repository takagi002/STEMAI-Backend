const predictionActions = require("../controllers/predictionController.ts");
var express = require("express");
var router = express.Router();

router.get('/', predictionActions.getPredictionsC);
router.get('/objectID/:_id', predictionActions.getOnePredictionByObjectIDC);
router.get('/studentID/:student_id', predictionActions.getOnePredictionByStudentIDC);
router.post('/', predictionActions.createPredictionC);
router.patch('/objectID/:_id', predictionActions.updatePredictionByObjectIDC);
router.patch('/studentID/:student_id', predictionActions.updatePredictionByStudentIDC);
router.delete('/objectID/:_id', predictionActions.deletePredictionByObjectIDC);
router.delete('/studentID/:student_id', predictionActions.deletePredictionByStudentIDC);
router.get('/studentIDALL/:student_id/:current_semester', predictionActions.getPredictionsFromStudentIDC);
router.get('/studentInClass/:student_id/:currentSemester/:course_id', predictionActions.getPredictionForStudentInClassC);

module.exports = router;