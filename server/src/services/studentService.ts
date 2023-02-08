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
        return await student.findOne({student_ID: query});
    } catch(error) {
        throw Error("Error getting one Student");
    }
}

const createStudent = async (query) => {
    const newStudent = new student({
        student_ID: query.student_ID,
        current_Period: query.current_Period,
        is_Athlete: query.is_Athlete,
        is_Work_Study: query.is_Work_Study,
        is_Full_Time: query.is_Full_Time,
        major_Group: query.major_Group,
        completed_Credits: query.completed_Credits,
        attending_Tutoring: query.attending_Tutoring,
        stem_Grade_Score: query.stem_Grade_Score
        
    });
    try {
        await newStudent.save();

        return newStudent;
    } catch (error){
        throw Error("Error creating Student");
    }
}

const updateStudentByObjectID = async(id,query) =>{
    try {
        await student.findOneAndUpdate({
            _id: id
        },
        {
            student_ID: query.student_ID,
            current_Period: query.current_Period,
            is_Athlete: query.is_Athlete,
            is_Work_Study: query.is_Work_Study,
            is_Full_Time: query.is_Full_Time,
            major_Group: query.major_Group,
            completed_Credits: query.completed_Credits,
            attending_Tutoring: query.attending_Tutoring,
            stem_Grade_Score: query.stem_Grade_Score
           
        });
    } catch(error){
        throw Error("Error updating student");
    }
}

const updateStudentByStudentID = async(id,query) =>{
    try {
        await student.findOneAndUpdate({
            student_ID: id
        },
        {
            student_ID: query.student_ID,
            current_Period: query.current_Period,
            is_Athlete: query.is_Athlete,
            is_Work_Study: query.is_Work_Study,
            is_Full_Time: query.is_Full_Time,
            major_Group: query.major_Group,
            completed_Credits: query.completed_Credits,
            attending_Tutoring: query.attending_Tutoring,
            stem_Grade_Score: query.stem_Grade_Score
            
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
        await student.findOneAndRemove({student_ID: query});
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
