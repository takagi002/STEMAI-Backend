let student = require('../models/student.ts');

const getStudents = async () => {
    try{
        return await student.find();
    } catch (error) {
        throw Error("Error getting Students");
    }
}
    
const getOneStudentByObjectID = async (query) => {
    try {
        return await student.findOne({_id: query});
    } catch(error) {
        throw Error("Error getting one Student");
    }
}

const getOneStudentByStudentID = async (query) => {
    try {
        return await student.findOne({student_id: query});
    } catch(error) {
        throw Error("Error getting one Student");
    }
}

const createStudent = async (query) => {
    const newStudent = new student({
        student_id: query.student_id,
        grad_class: query.grad_class,
        majors: query.majors,
        gpa: query.gpa,
        completed_credits: query.completed_credits,
        distance_from_stem: query.distance_from_stem,
        is_work_study: query.is_work_study,
        is_athlete: query.is_athlete,
        num_courses_taking: query.num_courses_taking,
        name: query.name  
    });
    try {
        await newStudent.save();

        return newStudent;
    } catch (error){
        throw Error("Error creating Student: " + error);
    }
}

const updateStudentByObjectID = async(_id,query) =>{
    try {
        await student.findOneAndUpdate({
            _id: _id
        },
        {
            student_ID: query.student_ID,
            grad_class: query.grad_class,
            majors: query.majors,
            gpa: query.gpa,
            completed_credits: query.completed_Credits,
            distance_from_stem: query.distance_from_stem,
            is_work_study: query.is_work_study,
            is_athlete: query.is_athlete,
            num_courses_taking: query.num_courses_taking,
            name: query.name
           
        });
    } catch(error){
        throw Error("Error updating student");
    }
}

const updateStudentByStudentID = async(student_id,query) =>{
    try {
        await student.findOneAndUpdate({
            student_ID: student_id
        },
        {
            student_ID: query.student_ID,
            grad_class: query.grad_class,
            majors: query.majors,
            gpa: query.gpa,
            completed_credits: query.completed_Credits,
            distance_from_stem: query.distance_from_stem,
            is_work_study: query.is_work_study,
            is_athlete: query.is_athlete,
            num_courses_taking: query.num_courses_taking,
            name: query.name
            
        });
    } catch(error){
        throw Error("Error updating student");
    }
}

const deleteStudentByObjectID = async(query) => {
    try {
        await student.findOneAndRemove({_id: query});
    } catch(error) {
        throw Error("Error deleting student");
    }
}

const deleteStudentByStudentID = async(query) => {
    try {
        await student.findOneAndRemove({student_id: query});
    } catch(error) {
        throw Error("Error deleting student");
    }
}

module.exports.getStudents = getStudents;
module.exports.getOneStudentByObjectID = getOneStudentByObjectID;
module.exports.getOneStudentByStudentID = getOneStudentByStudentID;
module.exports.createStudent = createStudent;
module.exports.updateStudentByObjectID = updateStudentByObjectID;
module.exports.updateStudentByStudentID = updateStudentByStudentID;
module.exports.deleteStudentByObjectID = deleteStudentByObjectID;
module.exports.deleteStudentByStudentID = deleteStudentByStudentID;
