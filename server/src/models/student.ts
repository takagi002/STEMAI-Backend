var mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    student_ID: {
        type: Number,
        required: true
    },
    current_Period: {
        type: String,
        required: true,
    },
    is_Athlete: {
        type: Boolean,
        required: true
    },
    is_Work_Study: {
        type: Boolean,
        required: true
    },
    is_Full_Time: {
        type: Boolean,
        required: true
    },
    major_Group: {
        type: String,
        required: true,
    }, 
    completed_Credits: {
        type: Number,
        required: true
    },
    attending_Tutoring: {
        type: Boolean,
        required: true
    },
    stem_Grade_Score: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Student", studentSchema);