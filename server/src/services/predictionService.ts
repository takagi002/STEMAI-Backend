let predictionModel = require('../models/prediction.ts');

const getPredictions = async () => {
    try{
        return await predictionModel.find();
    } catch (error) {
        throw Error("Error getting Predictions");
    }
}
    
const getOnePredictionByObjectID = async (query) => {
    try {
        return await predictionModel.findOne({_id: query});
    } catch(error) {
        throw Error("Error getting one Prediction");
    }
}

const getOnePredictionByStudentID = async (query) => {
    try {
        return await predictionModel.findOne({student_id: query});
    } catch(error) {
        throw Error("Error getting one Prediction");
    }
}

const createPrediction = async (query) => {
    const newPrediction = new predictionModel({
        student_id: query.student_id,
        course_id: query.course_id,
        prediction: query.prediction,
        reason: query.reason
    });
    try {
        await newPrediction.save();

        return newPrediction;
    } catch (error){
        throw Error("Error creating Prediction");
    }
}

const updatePredictionByObjectID = async(id,query) =>{
    try {
        await predictionModel.findOneAndUpdate({
            _id: id
        },
        {
            student_id: query.student_id,
            course_id: query.course_id,
            prediction: query.prediction,
            reason: query.reason
        });
    } catch(error){
        throw Error("Error updating prediction");
    }
}

const updatePredictionByStudentID = async(id,query) =>{
    try {
        await predictionModel.findOneAndUpdate({
            student_id: id
        },
        {
            student_id: query.student_id,
            course_id: query.course_id,
            prediction: query.prediction,
            reason: query.reason
        });
    } catch(error){
        throw Error("Error updating prediction");
    }
}

const deletePredictionByObjectID = async(query) => {
    try {
        await predictionModel.findOneAndRemove({_id: query});
    } catch(error) {
        throw Error("Error deleting prediction");
    }
}

const deletePredictionByStudentID = async(query) => {
    try {
        await predictionModel.findOneAndRemove({student_id: query});
    } catch(error) {
        throw Error("Error deleting prediction");
    }
}

module.exports.getPredictions = getPredictions;
module.exports.getOnePredictionByObjectID = getOnePredictionByObjectID;
module.exports.getOnePredictionByCourseID = getOnePredictionByStudentID;
module.exports.createPrediction = createPrediction;
module.exports.updatePredictionByObjectID = updatePredictionByObjectID;
module.exports.updatePredictionByStudentID = updatePredictionByStudentID;
module.exports.deletePredictionByObjectID = deletePredictionByObjectID;
module.exports.deletePredictionByStudentID = deletePredictionByStudentID;
