const professorActions = require("../controllers/professorController.ts");
var express = require("express");
var router = express.Router();

router.get('/', professorActions.getProfessorsC);
router.get('/objectID/:_id', professorActions.getOneProfessorByObjectIDC);
router.get('/professorID/:prof_id', professorActions.getOneProfessorByProfessorIDC);
router.post('/', professorActions.createProfessorC);
router.patch('/objectID/:_id', professorActions.updateProfessorByObjectIDC);
router.patch('/professorID/:prof_id', professorActions.updateProfessorByProfessorIDC);
router.delete('/objectID/:_id', professorActions.deleteProfessorByObjectIDC);
router.delete('/professorID/:prof_id', professorActions.deleteProfessorByProfessorIDC);

module.exports = router;