var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    gmail: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true,
        enum: ['student', 'professor', 'not set']
    },
    gannon_id: {
        type: String,
        required: true
    },
    idNumber:{
        type: Number,
        required: true
    },
    authenticated: {
        type: Boolean,
        required: true
    },
    authenticationCode: {
        type: Number,
        required: false
    }
    
});

module.exports = mongoose.model("User", userSchema);