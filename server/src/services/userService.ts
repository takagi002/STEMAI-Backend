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

const getOneUserByID = async (query) => {
    try {
        return await user.findOne({ID: query});
    } catch(error) {
        throw Error("Error getting one User");
    }
}

const createUser = async (query) => {
    const newUser = new user({
        email: query.email,
        userType: query.userType,
        ID: query.ID
    });
    try {
        await newUser.save();

        return newUser;
    } catch (error){
        throw Error("Error creating User");
    }
}

const updateUserByObjectID = async(id,query) =>{
    try {
        await user.findOneAndUpdate({
            _id: id
        },
        {
            email: query.email,
            userType: query.userType,
            ID: query.ID
           
        });
    } catch(error){
        throw Error("Error updating user");
    }
}

const updateUserByID = async(id,query) =>{
    try {
        await user.findOneAndUpdate({
            ID: id
        },
        {
            email: query.email,
            userType: query.userType,
            ID: query.ID
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

const deleteUserByID = async(query) => {
    try {
        await user.findOneAndRemove({ID: query});
    } catch(error) {
        throw Error("Error deleting User");
    }
}

module.exports.getUsers = getUsers;
module.exports.getOneUserByObjectID = getOneUserByObjectID;
module.exports.getOneUserByID = getOneUserByID;
module.exports.createUser = createUser;
module.exports.updateUserByObjectID = updateUserByObjectID;
module.exports.updateUserByID = updateUserByID;
module.exports.deleteUserByObjectID = deleteUserByObjectID;
module.exports.deleteUserByID = deleteUserByID;
