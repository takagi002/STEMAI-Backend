let user = require('../models/user.ts');

const getUsers = async () => {
    try{
        return await user.find();
    } catch (error) {
        throw Error("Error getting Users");
    }
}
    
const getOneUserByObjectID = async (query) => {
    try {
        return await user.findOne({_id: query});
    } catch(error) {
        throw Error("Error getting one User");
    }
}

const getOneUserByGannonID = async (query) => {
    try {
        return await user.findOne({gannon_id: query});
    } catch(error) {
        throw Error("Error getting one User");
    }
}

const createUser = async (query) => {
    const newUser = new user({
        gmail: query.gmail,
        userType: query.userType,
        gannon_id: query.gannon_id
    });
    try {
        await newUser.save();

        return newUser;
    } catch (error){
        throw Error("Error creating User " + error);
    }
}

const updateUserByObjectID = async(_id,query) =>{
    try {
        await user.findOneAndUpdate({
            _id: _id
        },
        {
            gmail: query.gmail,
            userType: query.userType,
            gannon_id: query.gannon_id
           
        });
    } catch(error){
        throw Error("Error updating user " + error);
    }
}

const updateUserByGmail = async(gmail,query) =>{
    try {
        await user.findOneAndUpdate({
            gmail: gmail
        },
        {
            gmail: query.gmail,
            userType: query.userType,
            gannon_id: query.gannon_id
        });
    } catch(error){
        throw Error("Error updating User");
    }
}



const deleteUserByObjectID = async(query) => {
    try {
        await user.findOneAndRemove({_id: query});
    } catch(error) {
        throw Error("Error deleting User");
    }
}

const deleteUserByGannonID = async(query) => {
    try {
        await user.findOneAndRemove({gannon_id: query});
    } catch(error) {
        throw Error("Error deleting User");
    }
}

const checkUserExists = async(query) => {
    try {
        if(await user.countDocuments({gmail: query}) == 0){
            return false;
        } else {
            return true;
        }
    } catch(error) {
        throw Error("Error checking if user exists " + error)
    }
}

module.exports.getUsers = getUsers;
module.exports.getOneUserByObjectID = getOneUserByObjectID;
module.exports.getOneUserByGannonID = getOneUserByGannonID;
module.exports.createUser = createUser;
module.exports.updateUserByObjectID = updateUserByObjectID;
module.exports.updateUserByGmail = updateUserByGmail;
module.exports.deleteUserByObjectID = deleteUserByObjectID;
module.exports.deleteUserByGannonID = deleteUserByGannonID;
module.exports.checkUserExists = checkUserExists;
