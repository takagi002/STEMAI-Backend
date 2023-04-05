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
        return await studentClass.findOne({student_id: query});
    } catch(error) {
        throw Error("Error getting one studentClass");
    }
}

const createStudentClass = async (query) => {
    const newStudentClass = new studentClass({
        student_id: query.student_id,
        course_id: query.course_id,
        semester: query.semester,
        fourweek_grade: query.fourweek_grade,
        midterm_grade: query.midterm_grade,
        eightweek_grade: query.eightweek_grade,
        section: query.section,
        classroom: query.classroom,
        time: query.time,
        prof_id: query.prof_id,
        taken_before: query.taken_before,
        needs_tutoring: query.needs_tutoring
    });
    try {
        await newStudentClass.save();

        return newStudentClass;
    } catch (error){
        throw Error("Error creating Student Class");
    }
}

const updateStudentClassByObjectID = async(_id,query) =>{
    try {
        await studentClass.findOneAndUpdate({
            _id: _id
        },
        {
            student_id: query.student_id,
            course_id: query.course_id,
            semester: query.semester,
            fourweek_grade: query.fourweek_grade,
            midterm_grade: query.midterm_grade,
            eightweek_grade: query.eightweek_grade,
            section: query.section,
            classroom: query.classroom,
            time: query.time,
            prof_id: query.prof_id,
            taken_before: query.taken_before,
            needs_tutoring: query.needs_tutoring
        });
    } catch(error){
        throw Error("Error updating student course");
    }
}

const updateStudentClassByStudentID = async(student_id,query) =>{
    try {
        await studentClass.findOneAndUpdate({
            student_id: student_id
        },
        {
            student_id: query.student_id,
            course_id: query.course_id,
            semester: query.semester,
            fourweek_grade: query.fourweek_grade,
            midterm_grade: query.midterm_grade,
            eightweek_grade: query.eightweek_grade,
            section: query.section,
            classroom: query.classroom,
            time: query.time,
            prof_id: query.prof_id,
            taken_before: query.taken_before,
            needs_tutoring: query.needs_tutoring
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
        await studentClass.findOneAndRemove({student_id: query});
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
