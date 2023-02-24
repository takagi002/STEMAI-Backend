const predictionActions = require("../controllers/predictionController.ts");
var express = require("express");
var router = express.Router();

router.get('/', predictionActions.getPredictionsC);
router.get('/objectID/:_id', predictionActions.getOnePredictionByObjectIDC);
router.get('/studentID/:student_id', predictionActions.getOnePredictionByCourseIDC);
router.post('/', predictionActions.createPredictionC);
router.patch('/objectID/:_id', predictionActions.updatePredictionByObjectIDC);
router.patch('/studentID/:student_id', predictionActions.updatePredictionByCourseIDC);
router.delete('/objectID/:_id', predictionActions.deletePredictionByObjectIDC);
router.delete('/studentID/:student_id', predictionActions.deletePredictionByCourseIDC);

module.exports = router;