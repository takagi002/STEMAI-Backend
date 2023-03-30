const predictionService = require('../services/predictionService.ts');

const getPredictionsC = async(req, res) => {
    try{
        const predictions = await predictionService.getPredictions({});

        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(predictions);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getOnePredictionByCourseIDC = async(req, res) => {
    const student_id = req.params.student_id

    try{
        const aPrediction = await predictionService.getOnePredictionByCourseID(student_id);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(aPrediction);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getOnePredictionByObjectIDC = async(req, res) => {
    const _id = req.params._id

    try{
        const aPrediction = await predictionService.getOnePredictionByObjectID(_id);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(aPrediction);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getPredictionsFromStudentIDC = async(req, res) => {
    const student_id = req.params.student_id;
    const currentSemester = req.params.current_semester;

    try{
        const studentPredictions = await predictionService.getPredictionsFromStudentID(student_id, currentSemester);

        res.status(200).json(studentPredictions);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

const createPredictionC = async(req, res) => {
    try{
        let newPrediction = await predictionService.createPrediction(req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(201).json(newPrediction);
    } catch(error) {
        res.status(400).json({message: error.message});
    }
}

const updatePredictionByObjectIDC = async(req, res) => {
    const _id = req.params._id;
    try{
        await predictionService.updatePredictionByObjectID(_id, req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(202).json(_id);
    } catch(error) {
        res.status(401).json({message: error.message});
    }
}

const updatePredictionByCourseIDC = async(req, res) => {
    const student_id = req.params.student_id;
    try{
        await predictionService.updatePredictionByCourseID(student_id, req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(202).json(student_id);
    } catch(error) {
        res.status(401).json({message: error.message});
    }
}

const deletePredictionByObjectIDC = async(req, res) => {
    const _id = req.params._id;
    try{
        await predictionService.deletePredictionByObjectID(_id, req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(203).json(_id);
    } catch(error) {
        res.status(402).json({message: error.message});
    }
}

const deletePredictionByCourseIDC = async(req, res) => {
    const student_id = req.params.student_id;
    try{
        await predictionService.deletePredictionByCourseID(student_id, req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(203).json(student_id);
    } catch(error) {
        res.status(402).json({message: error.message});
    }
}

module.exports.getPredictionsC = getPredictionsC;
module.exports.getOnePredictionByObjectIDC = getOnePredictionByObjectIDC;
module.exports.getOnePredictionByCourseIDC = getOnePredictionByCourseIDC;
module.exports.createPredictionC = createPredictionC;
module.exports.updatePredictionByObjectIDC = updatePredictionByObjectIDC;
module.exports.updatePredictionByCourseIDC = updatePredictionByCourseIDC;
module.exports.deletePredictionByObjectIDC = deletePredictionByObjectIDC;
module.exports.deletePredictionByCourseIDC = deletePredictionByCourseIDC;
module.exports.getPredictionsFromStudentIDC = getPredictionsFromStudentIDC;


