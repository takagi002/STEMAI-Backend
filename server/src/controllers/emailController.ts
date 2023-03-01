const emailService = require('../services/emailService.ts');

const sendNotificationEmailC = async(req, res) => {
    try{
        const resp = emailService.sendNotificationEmail(req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(resp);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

module.exports.sendNotificationEmailC = sendNotificationEmailC;