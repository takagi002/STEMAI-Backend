let user = require('../models/user.ts');
var emailService = require('./emailService.ts');

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

const getOneUserByGmail = async (query) => {
    try {
        return await user.findOne({gmail: query});
    } catch(error) {
        throw Error("Error getting one User");
    }
}

const createUser = async (query) => {
    const newUser = new user({
        gmail: query.gmail,
        userType: query.userType,
        gannon_id: query.gannon_id,
        idNumber: query.idNumber,
        authenticated: false,
        notifications: false,
        authenticationCode: 0
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
            gannon_id: query.gannon_id,
            idNumber: query.idNumber,
            authenticated: query.authenticated,
            notifications: query.notifications
           
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
            gannon_id: query.gannon_id,
            idNumber: query.idNumber,
            authenticated: query.authenticated,
            notifications: query.notifications

        });
        if(query.authenticated){
            emailService.sendInitialNotificationEmail(query.gannon_id);
        }
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

const deleteUserByGmail = async(query) => {
    try {
        await user.findOneAndRemove({gmail: query});
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

const generateCode = async(query) => {
   var code =  Math.floor(100000 + Math.random() * 900000);
   try {
            await user.findOneAndUpdate({gmail: query.gmail},{
                gmail: query.gmail,
                userType: query.userType,
                gannon_id: query.gannon_id,
                idNumber: query.idNumber,
                authenticated: query.authenticated,
                authenticationCode: code,
                notifications: query.notifications

            })
        emailService.sendAuthenticationEmail(code, query.gannon_id);
        return "Code Sent and Generated";
   } catch(error) {
        throw Error("Error generating code: " + error)
   }
}

const checkUserAuthenticated = async(query) => {
    try {
        var authUser = await user.findOne({gmail: query})
        return authUser.authenticated;
    } catch(error) {
        throw Error("Error checking if user exists " + error)
    }
}

const checkIfGannonIDExists = async(query) => {
    try {
        if(await user.countDocuments({gannon_id: query}) == 0){
            return false;
        } else {
            return true;
        }
    }catch(error) {
        throw Error("Error Checking if Gannon ID exists " + error)
    }
}

const changeNotificationPreference = async(query) => {
    try {
        await user.findOneAndUpdate({gmail: query.gmail},{
            gmail: query.gmail,
            userType: query.userType,
            gannon_id: query.gannon_id,
            idNumber: query.idNumber,
            authenticated: query.authenticated,
            authenticationCode: query.code,
            notifications: query.notifications
        })
        if(query.notifications){
            emailService.sendNotificationEmail(query.gannon_id);
        }
        
    }catch(error) {
        throw Error("Error Checking if Gannon ID exists " + error)
    }
}

const checkUserSignedUp = async(query) =>{
    try{
        if(await user.countDocuments({idNumber: query}) == 0){
            return false;
        } else {
            return user.findOne({idNumber: query});
        }
    }catch(error) {
        throw Error("Error checking if user signed up " + error)
    }
}

module.exports.getUsers = getUsers;
module.exports.getOneUserByObjectID = getOneUserByObjectID;
module.exports.getOneUserByGannonID = getOneUserByGannonID;
module.exports.getOneUserByGmail = getOneUserByGmail;
module.exports.createUser = createUser;
module.exports.updateUserByObjectID = updateUserByObjectID;
module.exports.updateUserByGmail = updateUserByGmail;
module.exports.deleteUserByObjectID = deleteUserByObjectID;
module.exports.deleteUserByGannonID = deleteUserByGannonID;
module.exports.deleteUserByGmail = deleteUserByGmail;
module.exports.checkUserExists = checkUserExists;
module.exports.generateCode = generateCode;
module.exports.checkUserAuthenticated = checkUserAuthenticated;
module.exports.checkIfGannonIDExists = checkIfGannonIDExists;
module.exports.changeNotificationPreference = changeNotificationPreference;
module.exports.checkUserSignedUp = checkUserSignedUp;
