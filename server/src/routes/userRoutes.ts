const userActions = require("../controllers/userController.ts");
var express = require("express");
var router = express.Router();

router.get('/', userActions.getUsersC);
router.get('/objectID/:_id', userActions.getOneUserByObjectIDC);
router.get('/gannonID/:gannon_id', userActions.getOneUserByIDC);
router.get('/gmail/:gmail', userActions.getOneUserByGmailC);
router.post('/', userActions.createUserC);
router.patch('/objectID/:_id', userActions.updateUserByObjectIDC);
router.patch('/gmail/:gmail', userActions.updateUserByGmailC);
router.delete('/objectID/:_id', userActions.deleteUserByObjectIDC);
router.delete('/gannonID/:gannon_id', userActions.deleteUserByGannonIDC);
router.get('/exists/:gmail', userActions.checkUserExistsC);
router.post('/generateCode', userActions.generateCodeC);
router.get('/authenticated/:gmail', userActions.checkUserAuthenticatedC);


module.exports = router;