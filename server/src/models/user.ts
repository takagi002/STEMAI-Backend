var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true,
        enum: ['student', 'professor']
    },
    id: {
        type: Number,
        required: true
    }
    
});

module.exports = mongoose.model("Class", classSchema);