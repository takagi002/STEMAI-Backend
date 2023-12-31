const userService = require('../services/userService.ts');

const getUsersC = async(req, res) => {
    try{
        const users = await userService.getUsers({});

       
        res.status(200).json(users);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getOneUserByIDC = async(req, res) => {
    const gannon_id = req.params.gannon_id

    try{
        const aUser = await userService.getOneUserByGannonID(gannon_id);

        res.status(200).json(aUser);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getOneUserByGmailC = async(req, res) => {
    const gmail = req.params.gmail

    try{
        const aUser = await userService.getOneUserByGmail(gmail);

        res.status(200).json(aUser);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getOneuserByObjectIDC = async(req, res) => {
    const _id = req.params._id

    try{
        const aUser = await userService.getOneUserByObjectID(_id);

        res.status(200).json(aUser);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const createUserC = async(req, res) => {
    try{
        let newUser = await userService.createUser(req.body);
        
        
        res.status(201).json(newUser);
    } catch(error) {
        res.status(400).json({message: error.message});
    }
}

const updateUserByObjectIDC = async(req, res) => {
    const _id = req.params._id;
    try{
        await userService.updateUserByObjectID(_id, req.body);
        
        res.status(202).json(_id);
    } catch(error) {
        res.status(401).json({message: error.message});
    }
}

const updateUserByGmailC = async(req, res) => {
    const gmail = req.params.gmail;
    try{
        await userService.updateUserByGmail(gmail, req.body);
        
        res.status(202).json(gmail);
    } catch(error) {
        res.status(401).json({message: error.message});
    }
}

const deleteUserByObjectIDC = async(req, res) => {
    const _id = req.params._id;
    try{
        await userService.deleteUserByObjectID(_id, req.body);
        
        res.status(203).json(_id);
    } catch(error) {
        res.status(402).json({message: error.message});
    }
}

const deleteUserByGannonIDC = async(req, res) => {
    const gannon_id = req.params.gannon_id;
    try{
        await userService.deleteUserByGannonID(gannon_id, req.body);
        
        res.status(203).json(gannon_id);
    } catch(error) {
        res.status(402).json({message: error.message});
    }
}

const deleteUserByGmailC = async(req, res) => {
    const gmail = req.params.gmail;
    try{
        await userService.deleteUserByGmail(gmail);
        
        res.status(203).json(gmail);
    } catch(error) {
        res.status(402).json({message: error.message});
    }
}

const checkUserExistsC = async(req, res) => {
    const gmail = req.params.gmail;

    try {
        const exists = await userService.checkUserExists(gmail);
        
        res.status(201).json(exists);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const generateCodeC = async(req, res) => {
    try{
        const response = await userService.generateCode(req.body);

        res.status(204).json(response);
    } catch(error){
        res.status(404).json({message: error.message});
    }
}

const checkUserAuthenticatedC = async(req, res) => {
    const gmail = req.params.gmail;

    try {
        const auth = await userService.checkUserAuthenticated(gmail);
        
        res.status(201).json(auth);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const checkIfGannonIDExistsC = async(req, res) => {
    const gannon_id = req.params.gannon_id;

    try {
        const exists = await userService.checkIfGannonIDExists(gannon_id);
        
        res.status(201).json(exists);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const changeNotificationPreferenceC = async(req, res) => {
    try {
        await userService.changeNotificationPreference(req.body);
        
        res.status(201).json("yeah pog");
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const checkUserSignedUpC = async(req, res) => {
    const idNumber = req.params.idNumber;

    try {
        const signed = await userService.checkUserSignedUp(idNumber);
        
        res.status(201).json(signed);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

module.exports.getUsersC = getUsersC;
module.exports.getOneUserByObjectIDC = getOneuserByObjectIDC;
module.exports.getOneUserByIDC = getOneUserByIDC;
module.exports.getOneUserByGmailC = getOneUserByGmailC;
module.exports.createUserC = createUserC;
module.exports.updateUserByObjectIDC = updateUserByObjectIDC;
module.exports.updateUserByGmailC = updateUserByGmailC;
module.exports.deleteUserByObjectIDC = deleteUserByObjectIDC;
module.exports.deleteUserByGannonIDC = deleteUserByGannonIDC;
module.exports.deleteUserByGmailC = deleteUserByGmailC;
module.exports.checkUserExistsC = checkUserExistsC;
module.exports.generateCodeC = generateCodeC;
module.exports.checkUserAuthenticatedC = checkUserAuthenticatedC;
module.exports.checkIfGannonIDExistsC = checkIfGannonIDExistsC;
module.exports.changeNotificationPreferenceC = changeNotificationPreferenceC;
module.exports.checkUserSignedUpC = checkUserSignedUpC;

