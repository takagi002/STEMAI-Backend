var mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
    prof_id: {
        type: Number,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    tenured: {
        type: Boolean,
        required: true
    },
    perc_passed: {
        type: Number,
        required: true
    }
      
});

module.exports = mongoose.model("Professor", professorSchema);