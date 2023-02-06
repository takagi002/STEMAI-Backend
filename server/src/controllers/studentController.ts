const studentService = require('../services/studentService.ts');

const getStudentsC = async(req, res) => {
    try{
        const students = await studentService.getStudents({});

        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(students);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getOneStudentByStudentIDC = async(req, res) => {
    const student_ID = req.params.student_ID

    try{
        const student = await studentService.getOneStudentByStudentID(student_ID);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(student);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getOneStudentByObjectIDC = async(req, res) => {
    const _id = req.params._id

    try{
        const student = await studentService.getOneStudentByObjectID(_id);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(student);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const createStudentC = async(req, res) => {
    try{
        let newStudent = await studentService.createStudent(req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(201).json(newStudent);
    } catch(error) {
        res.status(400).json({message: error.message});
    }
}

const updateStudentByObjectIDC = async(req, res) => {
    const _id = req.params._id;
    try{
        await studentService.updateStudentByObjectID(_id, req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(202).json(_id);
    } catch(error) {
        res.status(401).json({message: error.message});
    }
}

const updateStudentByStudentIDC = async(req, res) => {
    const student_ID = req.params.student_ID;
    try{
        await studentService.updateStudentByStudentID(student_ID, req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(202).json(student_ID);
    } catch(error) {
        res.status(401).json({message: error.message});
    }
}

const deleteStudentByObjectIDC = async(req, res) => {
    const _id = req.params._id;
    try{
        await studentService.deleteStudentByObjectID(_id, req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(203).json(_id);
    } catch(error) {
        res.status(402).json({message: error.message});
    }
}

const deleteStudentByStudentIDC = async(req, res) => {
    const student_ID = req.params.student_ID;
    try{
        await studentService.deleteStudentByStudentID(student_ID, req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(203).json(student_ID);
    } catch(error) {
        res.status(402).json({message: error.message});
    }
}

module.exports.getStudentsC = getStudentsC;
module.exports.getOneStudentByObjectIDC = getOneStudentByObjectIDC;
module.exports.getOneStudentByStudentIDC = getOneStudentByStudentIDC;
module.exports.createStudentC = createStudentC;
module.exports.updateStudentByObjectIDC = updateStudentByObjectIDC;
module.exports.updateStudentByStudentIDC = updateStudentByStudentIDC;
module.exports.deleteStudentByObjectIDC = deleteStudentByObjectIDC;
module.exports.deleteStudentByStudentIDC = deleteStudentByStudentIDC;


