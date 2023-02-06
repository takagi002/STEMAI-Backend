var mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
    professor_ID: {
        type: Number,
        required: true
    },
    perc_Pass: {
        type: Number,
        required: true
    },
    in_Department: {
        type: String,
        required: true
    },
    tenured: {
        type: Boolean,
        required: true
    },
    adjunct: {
        type: Boolean,
        required: true
    },
    teaching_Time: {
        type: String,
        required: true
    },
    num_Of_Course: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Professor", professorSchema);