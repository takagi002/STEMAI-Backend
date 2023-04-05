var emailService = require('../services/emailService.ts');


const sendRecEmailC = async(req, res) => {
    try{
        const resp = emailService.sendRecEmail(req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(resp);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

module.exports.sendRecEmailC = sendRecEmailC;