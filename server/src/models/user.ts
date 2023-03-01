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
    }
    
});

module.exports = mongoose.model("User", userSchema);