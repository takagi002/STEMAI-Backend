const classService = require('../services/classService.ts');

const getClassesC = async(req, res) => {
    try{
        const classes = await classService.getClasses({});

        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(classes);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getOneClassByCourseIDC = async(req, res) => {
    const course_ID = req.params._ID

    try{
        const aClass = await classService.getOneClassByCourseID(course_ID);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(aClass);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getOneClassByObjectIDC = async(req, res) => {
    const _id = req.params._id

    try{
        const aClass = await classService.getOneClassByObjectID(_id);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(aClass);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const createClassC = async(req, res) => {
    try{
        let newClass = await classService.createClass(req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(201).json(newClass);
    } catch(error) {
        res.status(400).json({message: error.message});
    }
}

const updateClassByObjectIDC = async(req, res) => {
    const _id = req.params._id;
    try{
        await classService.updateClassByObjectID(_id, req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(202).json(_id);
    } catch(error) {
        res.status(401).json({message: error.message});
    }
}

const updateClassByCourseIDC = async(req, res) => {
    const course_ID = req.params._ID;
    try{
        await classService.updateClassByCourseID(course_ID, req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(202).json(course_ID);
    } catch(error) {
        res.status(401).json({message: error.message});
    }
}

const deleteClassByObjectIDC = async(req, res) => {
    const _id = req.params._id;
    try{
        await classService.deleteClassByObjectID(_id, req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(203).json(_id);
    } catch(error) {
        res.status(402).json({message: error.message});
    }
}

const deleteClassByCourseIDC = async(req, res) => {
    const course_ID = req.params._ID;
    try{
        await classService.deleteClassByCourseID(course_ID, req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(203).json(course_ID);
    } catch(error) {
        res.status(402).json({message: error.message});
    }
}

module.exports.getClassesC = getClassesC;
module.exports.getOneClassByObjectIDC = getOneClassByObjectIDC;
module.exports.getOneClassByCourseIDC = getOneClassByCourseIDC;
module.exports.createClassC = createClassC;
module.exports.updateClassByObjectIDC = updateClassByObjectIDC;
module.exports.updateClassByCourseIDC = updateClassByCourseIDC;
module.exports.deleteClassByObjectIDC = deleteClassByObjectIDC;
module.exports.deleteClassByCourseIDC = deleteClassByCourseIDC;


