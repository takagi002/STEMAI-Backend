const userActions = require("../controllers/userController.ts");
var express = require("express");
var router = express.Router();

router.get('/', userActions.getUsersC);
router.get('/objectID/:_id', userActions.getOneUserByObjectIDC);
router.get('/ID/:ID', userActions.getOneUserByIDC);
router.post('/', userActions.createUserC);
router.patch('/objectID/:_id', userActions.updateUserByObjectIDC);
router.patch('/ID/:ID', userActions.updateUserByIDC);
router.delete('/objectID/:_id', userActions.deleteUserByObjectIDC);
router.delete('/ID/:ID', userActions.deleteUserByIDC);

module.exports = router;