let classModel = require('../models/class.ts');

const getClasses = async () => {
    try{
        return await classModel.find();
    } catch (error) {
        throw Error("Error getting Classes");
    }
}
    
const getOneClassByObjectID = async (query) => {
    try {
        return await classModel.findOne({_id: query});
    } catch(error) {
        throw Error("Error getting one Class");
    }
}

const getOneClassByCourseID = async (query) => {
    try {
        return await classModel.findOne({course_id: query});
    } catch(error) {
        throw Error("Error getting one Class");
    }
}

const createClass = async (query) => {
    const newClass = new classModel({
        course_id: query.course_id,
        department: query.department,
        perc_retaken: query.perc_retaken,
        classroom: query.classroom,
        date_time: query.date_time
    });
    try {
        await newClass.save();

        return newClass;
    } catch (error){
        throw Error("Error creating Class");
    }
}

const updateClassByObjectID = async(_id,query) =>{
    try {
        await classModel.findOneAndUpdate({
            _id: _id
        },
        {
            course_id: query.course_id,
            department: query.department,
            perc_retaken: query.perc_retaken,
            classroom: query.classroom,
            date_time: query.date_time
        });
    } catch(error){
        throw Error("Error updating class");
    }
}

const updateClassByCourseID = async(course_id,query) =>{
    try {
        await classModel.findOneAndUpdate({
            course_ID: course_id
        },
        {
            course_id: query.course_id,
            department: query.department,
            perc_retaken: query.perc_retaken,
            classroom: query.classroom,
            date_time: query.date_time
        });
    } catch(error){
        throw Error("Error updating class");
    }
}

const deleteClassByObjectID = async(query) => {
    try {
        await classModel.findOneAndRemove({_id: query});
    } catch(error) {
        throw Error("Error deleting class");
    }
}

const deleteClassByCourseID = async(query) => {
    try {
        await classModel.findOneAndRemove({course_id: query});
    } catch(error) {
        throw Error("Error deleting class");
    }
}

module.exports.getClasses = getClasses;
module.exports.getOneClassByObjectID = getOneClassByObjectID;
module.exports.getOneClassByCourseID = getOneClassByCourseID;
module.exports.createClass = createClass;
module.exports.updateClassByObjectID = updateClassByObjectID;
module.exports.updateClassByCourseID = updateClassByCourseID;
module.exports.deleteClassByObjectID = deleteClassByObjectID;
module.exports.deleteClassByCourseID = deleteClassByCourseID;
