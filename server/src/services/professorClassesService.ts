let classService1 = require('../services/classService.ts');
let studentClass1 = require('../models/studentClass.ts');
var isEqual = require('lodash.isequal');

const getProfessorsClasses = async (prof_id, currentSemester) => {
    let classes;
    let final;
    
    try{
        let studentClasses =  await studentClass1.find({prof_id: prof_id.toString(), semester: currentSemester});
        let allClasses = await classService1.getClasses();
        classes = getAssociatedClasses(studentClasses, allClasses);
        final = removeDuplicates(classes);
        return final;
        
    } catch (error) {
        throw Error("Error getting Classes " + error);
    }
}

 const removeDuplicates = (classes) => {
    let result = [];
    for (const item of classes) {
        const found = result.some((value) => isEqual(value, item));
        if (!found) {
            result.push(item);
        }
    }
    return result;
}

const getAssociatedClasses = (studentClasses,classes) => {
    let results = [];
    studentClasses.forEach(sc => {
        classes.forEach(c => {
            if(c.course_id.toString() === sc.course_id){
                results.push(c);
            } 
       });
    })
   return results;
}

const getProfessorsStudents = async(course_id, currentSemester) =>{
    return await studentClass1.find({course_id: course_id.toString(), semester: currentSemester});
}

module.exports.getProfessorsClasses = getProfessorsClasses;
module.exports.getProfessorsStudents = getProfessorsStudents;