const professorClassesService = require('../services/professorClassesService.ts');

const getProfessorsClassesC = async(req, res) => {
    const prof_id = req.params.prof_id

    try{
        const classes = await professorClassesService.getProfessorsClasses(prof_id);

        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(classes);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

module.exports.getProfessorsClassesC = getProfessorsClassesC;