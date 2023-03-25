let classService1 = require('../services/classService.ts');
let studentClass1 = require('../models/studentClass.ts');
var isEqual = require('lodash.isequal');

const getProfessorsClasses = async (query) => {
    let classes;
    let final;
    try{
        let studentClasses =  await studentClass1.find({prof_id: query});
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
            if(c.course_id === sc.course_id){
                results.push(c);
            } 
       });
    })
    
   console.log("Results = " + results.length);
   return results;
}

module.exports.getProfessorsClasses = getProfessorsClasses;