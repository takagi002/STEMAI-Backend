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
        return await professor.findOne({prof_id: query});
    } catch(error) {
        throw Error("Error getting one Professor: " + error);
    }
}

const createProfessor = async (query) => {
    const newProfessor = new professor({
        prof_id: query.prof_id,
        dept: query.dept,
        experience: query.experience,
        tenured: query.tenured,
        perc_passed: query.perc_passed
    });
    try {
        await newProfessor.save();

        return newProfessor;
    } catch (error){
        throw Error("Error creating Professor: " + error);
    }
}

const updateProfessorByObjectID = async(_id,query) =>{
    try {
        await professor.findOneAndUpdate({
            _id: _id
        },
        {
            prof_ID: query.prof_ID,
            dept: query.debt,
            experience: query.experience,
            tenured: query.tenured,
            perc_pass: query.perc_pass
        });
    } catch(error){
        throw Error("Error updating professor");
    }
}

const updateProfessorByProfessorID = async(prof_id,query) =>{
    try {
        await professor.findOneAndUpdate({
            prof_id: prof_id
        },
        {
            prof_ID: query.prof_ID,
            dept: query.debt,
            experience: query.experience,
            tenured: query.tenured,
            perc_pass: query.perc_pass
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
        await professor.findOneAndRemove({prof_id: query});
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
