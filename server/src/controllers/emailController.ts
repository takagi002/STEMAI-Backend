const emailService = require('../services/emailService.ts');

const sendEmailC = async(req, res) => {
    try{
        const resp = emailService.sendEmail(req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(resp);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

module.exports.sendEmailC = sendEmailC;