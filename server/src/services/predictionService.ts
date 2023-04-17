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

const getPredictionsFromStudentID = async (student_id, currentSemester) => {
    try {
        return await predictionModel.find({student_id: student_id, semester: currentSemester});
    } catch(error) {
        throw Error("Error getting one Prediction " + error);
    }
}

const createPrediction = async (query) => {
    const newPrediction = new predictionModel({
        student_id: query.student_id,
        course_id: query.course_id,
        prediction: query.prediction,
        reason: query.reason,
        semester: query.semester
    });
    try {
        await newPrediction.save();

        return newPrediction;
    } catch (error){
        throw Error("Error creating Prediction");
    }
}

const updatePredictionByObjectID = async(_id,query) =>{
    try {
        await predictionModel.findOneAndUpdate({
            _id: _id
        },
        {
            student_id: query.student_id,
            course_id: query.course_id,
            prediction: query.prediction,
            reason: query.reason,
            semester: query.semester
        });
    } catch(error){
        throw Error("Error updating prediction");
    }
}

const updatePredictionByStudentID = async(student_id,query) =>{
    try {
        await predictionModel.findOneAndUpdate({
            student_id: student_id
        },
        {
            student_id: query.student_id,
            course_id: query.course_id,
            prediction: query.prediction,
            reason: query.reason,
            semester: query.semester
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

const getPredictionForStudentInClass = async(student_id, currentSemester, course_id) => {
    var full_prediction;
    try {
       full_prediction = await predictionModel.findOne({student_id: student_id, semester: currentSemester, course_id: course_id});
        return full_prediction.prediction;
    } catch(error) {
        throw Error("Error getting one Prediction " + error);
    }
}

module.exports.getPredictions = getPredictions;
module.exports.getOnePredictionByObjectID = getOnePredictionByObjectID;
module.exports.getOnePredictionByStudentID = getOnePredictionByStudentID;
module.exports.createPrediction = createPrediction;
module.exports.updatePredictionByObjectID = updatePredictionByObjectID;
module.exports.updatePredictionByStudentID = updatePredictionByStudentID;
module.exports.deletePredictionByObjectID = deletePredictionByObjectID;
module.exports.deletePredictionByStudentID = deletePredictionByStudentID;
module.exports.getPredictionsFromStudentID = getPredictionsFromStudentID;
module.exports.getPredictionForStudentInClass = getPredictionForStudentInClass;
