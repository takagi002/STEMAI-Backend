var mongoose = require('mongoose');

const studentClassSchema = new mongoose.Schema({
    student_id: {
        type: Number,
        required: true
    },
    course_id: {
        type: Number,
        required: true
    },
    semester: {
        type: String,
        required: true
    },
    fourweek_grade: {
        type: String,
        required: true
    },
    midterm_grade: {
        type: String,
        required: true
    },
    eightweek_grade: {
        type: String,
        required: true
    },
    section: {
        type: Number,
        required: true
    },
    classroom: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    prof_id: {
        type: Number,
        required: true
    },
    taken_before: {
        type: Boolean,
        required: true
    },
    needs_tutoring: {
        type: Boolean,
        required: true
    }
});
       

module.exports = mongoose.model("StudentClass", studentClassSchema);