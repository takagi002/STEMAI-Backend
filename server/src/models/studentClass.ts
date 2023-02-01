
const studentClassSchema = new mongoose.Schema({
    student_ID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }, 
    course_ID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    taken_Before: {
        type: Boolean,
        required: true
    },
    needs_Tutoring: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model("StudentClass", studentClassSchema);