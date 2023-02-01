let classModel = require('../models/class');

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
        return await classModel.findOne({course_ID: query});
    } catch(error) {
        throw Error("Error getting one Class");
    }
}

const createClass = async (query) => {
    const newClass = new classModel({
        course_ID: query.course_ID,
        date_Time: query.date_Time,
        classroom: query.classroom,
        retaken_Percentage: query.retaken_Percentage,
        dept_Size: query.dept_Size,
        num_Of_Sections: query.num_Of_Sections,
        prof_Class_Exp: query.prof_Class_Exp,
        course_Type: query.course_Type,
        is_Stem_Pass: query.is_Stem_Pass
    });
    try {
        await newClass.save();

        return newClass;
    } catch (error){
        throw Error("Error creating Class");
    }
}

const updateClassByObjectID = async(id,query) =>{
    try {
        await classModel.findOneAndUpdate({
            _id: id
        },
        {
            course_ID: query.course_ID,
            date_Time: query.date_Time,
            classroom: query.classroom,
            retaken_Percentage: query.retaken_Percentage,
            dept_Size: query.dept_Size,
            num_Of_Sections: query.num_Of_Sections,
            prof_Class_Exp: query.prof_Class_Exp,
            course_Type: query.course_Type,
            is_Stem_Pass: query.is_Stem_Pass
        });
    } catch(error){
        throw Error("Error updating class");
    }
}

const updateClassByCourseID = async(id,query) =>{
    try {
        await classModel.findOneAndUpdate({
            course_ID: id
        },
        {
            course_ID: query.course_ID,
            date_Time: query.date_Time,
            classroom: query.classroom,
            retaken_Percentage: query.retaken_Percentage,
            dept_Size: query.dept_Size,
            num_Of_Sections: query.num_Of_Sections,
            prof_Class_Exp: query.prof_Class_Exp,
            course_Type: query.course_Type,
            is_Stem_Pass: query.is_Stem_Pass
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
        await classModel.findOneAndRemove({course_ID: query});
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
