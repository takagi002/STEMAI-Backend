const userService = require('../services/userService.ts');

const getUsersC = async(req, res) => {
    try{
        const users = await userService.getUsers({});

        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(users);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getOneUserByIDC = async(req, res) => {
    const ID = req.params.ID

    try{
        const aUser = await userService.getOneUserByID(ID);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(aUser);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getOneuserByObjectIDC = async(req, res) => {
    const _id = req.params._id

    try{
        const aUser = await userService.getOneUserByObjectID(_id);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(aUser);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const createUserC = async(req, res) => {
    try{
        let newUser = await userService.createUser(req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(201).json(newUser);
    } catch(error) {
        res.status(400).json({message: error.message});
    }
}

const updateUserByObjectIDC = async(req, res) => {
    const _id = req.params._id;
    try{
        await userService.updateUserByObjectID(_id, req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(202).json(_id);
    } catch(error) {
        res.status(401).json({message: error.message});
    }
}

const updateUserByIDC = async(req, res) => {
    const ID = req.params.ID;
    try{
        await userService.updateUserByID(ID, req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(202).json(ID);
    } catch(error) {
        res.status(401).json({message: error.message});
    }
}

const deleteUserByObjectIDC = async(req, res) => {
    const _id = req.params._id;
    try{
        await userService.deleteUserByObjectID(_id, req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(203).json(_id);
    } catch(error) {
        res.status(402).json({message: error.message});
    }
}

const deleteUserByIDC = async(req, res) => {
    const ID = req.params.ID;
    try{
        await userService.deleteuserByID(ID, req.body);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(203).json(ID);
    } catch(error) {
        res.status(402).json({message: error.message});
    }
}

module.exports.getUsersC = getUsersC;
module.exports.getOneUserByObjectIDC = getOneuserByObjectIDC;
module.exports.getOneUserByIDC = getOneUserByIDC;
module.exports.createUserC = createUserC;
module.exports.updateUserByObjectIDC = updateUserByObjectIDC;
module.exports.updateUserByIDC = updateUserByIDC;
module.exports.deleteUserByObjectIDC = deleteUserByObjectIDC;
module.exports.deleteUserByIDC = deleteUserByIDC;


