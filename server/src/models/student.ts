var mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    student_id: {
        type: Number,
        required: true
    },
    grad_class: {
        type: String,
        required: true
    },
    majors: {
        type: String,
        required: true
    },
    gpa: {
        type: Number, 
        required: true
    },
    completed_credits: {
        type: Number,
        required: true
    },
    distance_from_stem: {
        type: Number,
        required: true
    },
    is_work_study: {
        type: Boolean,
        required: true
    },
    is_athlete: {
        type: Boolean,
        required: true
    },
    num_courses_taking: {
        type: Number,
        required: true
    },
    name: {
        type : String,
        required: true
    }
    
});

module.exports = mongoose.model("Student", studentSchema);