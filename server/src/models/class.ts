var mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    course_ID: {
        type: Number,
        required: true
    },
    date_Time: {
        type: Date,
        required: true
    },
    classroom: {
        type: String,
        required: true,
    },
    retaken_Percentage: {
        type: Number,
        required: true
    },
    dept_Size: {
        type: Number,
        required: true
    },
    num_Of_Sections: {
        type: Number,
        required: true
    }, 
    prof_Class_Exp: {
        type: Number,
        required: true
    },
    course_Type: {
        type: String,
        required: true
    },
    is_Stem_Pass: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model("Class", classSchema);