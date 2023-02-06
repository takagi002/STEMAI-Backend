let professor = require('../models/professor.ts');

const getProfessors = async () => {
    try{
        return await professor.find();
    } catch (error) {
        throw Error("Error getting Professors");
    }
}
    
const getOneProfessorByObjectID = async (query) => {
    try {
        return await professor.findOne({_id: query});
    } catch(error) {
        throw Error("Error getting one Professor");
    }
}

const getOneProfessorByProfessorID = async (query) => {
    try {
        return await professor.findOne({professor_ID: query});
    } catch(error) {
        throw Error("Error getting one Professor");
    }
}

const createProfessor = async (query) => {
    const newProfessor = new professor({
        professor_ID: query.professor_ID,
        perc_Pass: query.perc_Pass,
        in_Department: query.in_Department,
        tenured: query.tenured,
        adjunct: query.adjunct,
        teaching_Time: query.teaching_Time,
        num_Of_Course: query.num_Of_Course
    });
    try {
        await newProfessor.save();

        return newProfessor;
    } catch (error){
        throw Error("Error creating Professor");
    }
}

const updateProfessorByObjectID = async(id,query) =>{
    try {
        await professor.findOneAndUpdate({
            _id: id
        },
        {
            professor_ID: query.professor_ID,
            perc_Pass: query.perc_Pass,
            in_Department: query.in_Department,
            tenured: query.tenured,
            adjunct: query.adjunct,
            teaching_Time: query.teaching_Time,
            num_Of_Course: query.num_Of_Course
        });
    } catch(error){
        throw Error("Error updating professor");
    }
}

const updateProfessorByProfessorID = async(id,query) =>{
    try {
        await professor.findOneAndUpdate({
            professor_ID: id
        },
        {
            professor_ID: query.professor_ID,
            perc_Pass: query.perc_Pass,
            in_Department: query.in_Department,
            tenured: query.tenured,
            adjunct: query.adjunct,
            teaching_Time: query.teaching_Time,
            num_Of_Course: query.num_Of_Course
        });
    } catch(error){
        throw Error("Error updating professor");
    }
}

const deleteProfessorByObjectID = async(query) => {
    try {
        await professor.findOneAndRemove({_id: query});
    } catch(error) {
        throw Error("Error deleting Professor");
    }
}

const deleteProfessorByProfessorID = async(query) => {
    try {
        await professor.findOneAndRemove({professor_ID: query});
    } catch(error) {
        throw Error("Error deleting Professor");
    }
}

module.exports.getProfessors = getProfessors;
module.exports.getOneProfessorByObjectID = getOneProfessorByObjectID;
module.exports.getOneProfessorByProfessorID = getOneProfessorByProfessorID;
module.exports.createProfessor = createProfessor;
module.exports.updateProfessorByObjectID = updateProfessorByObjectID;
module.exports.updateProfessorByProfessorID = updateProfessorByProfessorID;
module.exports.deleteProfessorByObjectID = deleteProfessorByObjectID;
module.exports.deleteProfessorByProfessorID = deleteProfessorByProfessorID;
