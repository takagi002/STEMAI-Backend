const professerService = require('../services/professorService.ts');

const getProfessersC = async(req, res) => {
    try{
        const professers = await professerService.getProfessors({});

        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(professers);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getOneProfesserByProfessorIDC = async(req, res) => {
    const prof_id = req.params.prof_id

    try{
        const professer = await professerService.getOneProfesserByProfessorID(prof_id);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(professer);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getOneProfesserByObjectIDC = async(req, res) => {
    const _id = req.params._id

    try{
        const professer = await professerService.getOneProfesserByObjectID(_id);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(professer);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const createProfesserC = async(req, res) => {
    try{
        let newProfesser = await professerService.createProfesser(req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(201).json(newProfesser);
    } catch(error) {
        res.status(400).json({message: error.message});
    }
}

const updateProfesserByObjectIDC = async(req, res) => {
    const _id = req.params._id;
    try{
        await professerService.updateProfesserByObjectID(_id, req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(202).json(_id);
    } catch(error) {
        res.status(401).json({message: error.message});
    }
}

const updateProfesserByProfessorIDC = async(req, res) => {
    const prof_id = req.params.prof_id;
    try{
        await professerService.updateProfesserByProfessorID(prof_id, req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(202).json(prof_id);
    } catch(error) {
        res.status(401).json({message: error.message});
    }
}

const deleteProfesserByObjectIDC = async(req, res) => {
    const _id = req.params._id;
    try{
        await professerService.deleteProfesserByObjectID(_id, req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(203).json(_id);
    } catch(error) {
        res.status(402).json({message: error.message});
    }
}

const deleteProfesserByProfessorIDC = async(req, res) => {
    const prof_id = req.params.prof_id;
    try{
        await professerService.deleteProfesserByProfessorID(prof_id, req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(203).json(prof_id);
    } catch(error) {
        res.status(402).json({message: error.message});
    }
}

module.exports.getProfessorsC = getProfessersC;
module.exports.getOneProfessorByObjectIDC = getOneProfesserByObjectIDC
module.exports.getOneProfessorByProfessorIDC = getOneProfesserByProfessorIDC;
module.exports.createProfessorC = createProfesserC;
module.exports.updateProfessorByObjectIDC = updateProfesserByObjectIDC
module.exports.updateProfessorByProfessorIDC = updateProfesserByProfessorIDC
module.exports.deleteProfessorByObjectIDC = deleteProfesserByObjectIDC;
module.exports.deleteProfessorByProfessorIDC = deleteProfesserByProfessorIDC;


