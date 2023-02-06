let studentClass = require('../models/studentClass.ts');

const getStudentClasses = async () => {
    try{
        return await studentClass.find();
    } catch (error) {
        throw Error("Error getting studentClasses");
    }
}
    
const getOneStudentClassByObjectID = async (query) => {
    try {
        return await studentClass.findOne({_id: query});
    } catch(error) {
        throw Error("Error getting one studentClass");
    }
}

const getOneStudentClassByStudentID = async (query) => {
    try {
        return await studentClass.findOne({student_ID: query});
    } catch(error) {
        throw Error("Error getting one studentClass");
    }
}

const createStudentClass = async (query) => {
    const newStudentClass = new studentClass({
        student_ID: query.student_ID,
        course_ID: query.course_ID,
        taken_Before: query.taken_Before,
        needs_Tutoring: query.needs_Tutoring
    });
    try {
        await newStudentClass.save();

        return newStudentClass;
    } catch (error){
        throw Error("Error creating Student Class");
    }
}

const updateStudentClassByObjectID = async(id,query) =>{
    try {
        await studentClass.findOneAndUpdate({
            _id: id
        },
        {
            student_ID: query.student_ID,
            course_ID: query.course_ID,
            taken_Before: query.taken_Before,
            needs_Tutoring: query.needs_Tutoring
        });
    } catch(error){
        throw Error("Error updating student course");
    }
}

const updateStudentClassByStudentID = async(id,query) =>{
    try {
        await studentClass.findOneAndUpdate({
            student_ID: id
        },
        {
            student_ID: query.student_ID,
            course_ID: query.course_ID,
            taken_Before: query.taken_Before,
            needs_Tutoring: query.needs_Tutoring
        });
    } catch(error){
        throw Error("Error updating student course");
    }
}

const deleteStudentClassByObjectID = async(query) => {
    try {
        await studentClass.findOneAndRemove({_id: query});
    } catch(error) {
        throw Error("Error deleting student class");
    }
}

const deleteStudentClassByStudentID = async(query) => {
    try {
        await studentClass.findOneAndRemove({student_ID: query});
    } catch(error) {
        throw Error("Error deleting student class");
    }
}

module.exports.getStudentClasses = getStudentClasses;
module.exports.getOneStudentClassByObjectID = getOneStudentClassByObjectID;
module.exports.getOneStudentClassByStudentID = getOneStudentClassByStudentID;
module.exports.createStudentClass = createStudentClass;
module.exports.updateStudentClassByObjectID = updateStudentClassByObjectID;
module.exports.updateStudentClassByStudentID = updateStudentClassByStudentID;
module.exports.deleteStudentClassByObjectID = deleteStudentClassByObjectID;
module.exports.deleteStudentClassByStudentID = deleteStudentClassByStudentID;
