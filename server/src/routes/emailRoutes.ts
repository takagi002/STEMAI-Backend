const emailActions = require("../controllers/emailController.ts");
var express = require("express");
var router = express.Router();

router.post('/notifications', emailActions.sendNotificationEmailC);
router.post('/rec', emailActions.sendRecEmailC);



module.exports = router;