var mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    course_id: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    perc_retaken: {
        type: Number,
        required: true
    },
    classroom: {
        type: String,
        required: true,
    },
    date_time: {
        type: String,
        required: true
    }, 
    course_name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Class", classSchema);