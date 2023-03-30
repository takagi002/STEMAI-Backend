const professorClassesService = require('../services/professorClassesService.ts');

const getProfessorsClassesC = async(req, res) => {
    const prof_id = req.params.prof_id
    const currentSemester = req.params.currentSemester;

    try{
        const classes = await professorClassesService.getProfessorsClasses(prof_id, currentSemester);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(classes);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getProfessorsStudentsC = async(req, res) => {
    const course_id = req.params.course_id
    const currentSemester = req.params.currentSemester;


    try{
        const students = await professorClassesService.getProfessorsStudents(course_id, currentSemester);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(students);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

module.exports.getProfessorsClassesC = getProfessorsClassesC;
module.exports.getProfessorsStudentsC = getProfessorsStudentsC;