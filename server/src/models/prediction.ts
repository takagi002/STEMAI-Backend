var mongoose = require('mongoose');

const predictionSchema = new mongoose.Schema({
    student_id: {
        type: Number,
        required: true
    },
    course_id: {
        type: Number,
        required: true
    },
    prediction: {
        type: Boolean,
        required: true
    },
    reason: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Prediction", predictionSchema);