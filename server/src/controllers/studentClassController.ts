const studentClassService = require('../services/studentClassService.ts');

const getStudentClassesC = async(req, res) => {
    try{
        const studentClasses = await studentClassService.getStudentClasses({});

        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(studentClasses);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getOneStudentClassByStudentIDC = async(req, res) => {
    const student_ID = req.params.student_ID

    try{
        const studentClass = await studentClassService.getOneStudentClassByStudentID(student_ID);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(studentClass);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getOneStudentClassByObjectIDC = async(req, res) => {
    const _id = req.params._id

    try{
        const studentClass = await studentClassService.getOneStudentClassByObjectID(_id);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(studentClass);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const createStudentClassC = async(req, res) => {
    try{
        let newStudentClass = await studentClassService.createStudentClass(req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(201).json(newStudentClass);
    } catch(error) {
        res.status(400).json({message: error.message});
    }
}

const updateStudentClassByObjectIDC = async(req, res) => {
    const _id = req.params._id;
    try{
        await studentClassService.updateStudentClassByObjectID(_id, req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(202).json(_id);
    } catch(error) {
        res.status(401).json({message: error.message});
    }
}

const updateStudentClassByStudentIDC = async(req, res) => {
    const student_ID = req.params.student_ID;
    try{
        await studentClassService.updateStudentClassByStudentID(student_ID, req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(202).json(student_ID);
    } catch(error) {
        res.status(401).json({message: error.message});
    }
}

const deleteStudentClassByObjectIDC = async(req, res) => {
    const _id = req.params._id;
    try{
        await studentClassService.deleteStudentClassByObjectID(_id, req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(203).json(_id);
    } catch(error) {
        res.status(402).json({message: error.message});
    }
}

const deleteStudentClassByStudentIDC = async(req, res) => {
    const student_ID = req.params.student_ID;
    try{
        await studentClassService.deleteStudentClassByStudentID(student_ID, req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(203).json(student_ID);
    } catch(error) {
        res.status(402).json({message: error.message});
    }
}

module.exports.getStudentClassesC = getStudentClassesC;
module.exports.getOneStudentClassByObjectIDC = getOneStudentClassByObjectIDC;
module.exports.getOneStudentClassByStudentIDC = getOneStudentClassByStudentIDC;
module.exports.createStudentClassC = createStudentClassC;
module.exports.updateStudentClassByObjectIDC = updateStudentClassByObjectIDC;
module.exports.updateStudentClassByStudentIDC = updateStudentClassByStudentIDC;
module.exports.deleteStudentClassByObjectIDC = deleteStudentClassByObjectIDC;
module.exports.deleteStudentClassByStudentIDC = deleteStudentClassByStudentIDC;


