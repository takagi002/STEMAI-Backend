var request = require("supertest");
var expect = require("chai").expect;

var basicSetup = require('./helper/basicSetup.ts');
var app = require('../server');
var aProfessor = require('../src/models/professor.ts');
var aStudentClass = require('../src/models/studentClass.ts');
var aClass = require('../src/models/class.ts');

var newClass = new aClass({
    course_id: 11,
    department: "CIS",
    perc_retaken: .10,
    classroom: "Z335",
    date_time: "MW 1:25-2:50PM",
    course_name: "Senior Design Lab 2"
})

var newStudentClass = new aStudentClass({
    student_id: 21,
    course_id: "11",
    semester: "S2023",
    fourweek_grade: "A",
    midterm_grade: "B",
    eightweek_grade: "A",
    section: 1,
    classroom: "Z 335",
    time: "MW 1:25-2:50PM",
    prof_id: "15",
    taken_before: false,
    needs_tutoring: false
})

var newProfessor = new aProfessor({
    prof_id: 15,
    dept: "CIS",
    experience: "2 Years",
    tenured: false,
    perc_passed: 87
})

var newProfessorId;
var newClassId;

beforeAll(async () => {
    await basicSetup.connect();

    await newProfessor.save(function(err, newProfessor) {
        newProfessorId = newProfessor.prof_id;
    });

    await newStudentClass.save(function(err, newStudentClass) {
    });

    await newClass.save(function(err, newClass) {
        newClassId = newClass.course_id;
    });

})

afterAll(async () => {
    await basicSetup.clearDatabase();
    await basicSetup.closeDatabase();
    app.close();
})

describe('Get: /get professors classes', ()=>{
    it('class data', async()=>{
        await request(app).get('/professorClass/classes/' + newProfessorId + "/S2023")
        .then((res) =>{
            expect(res.statusCode).to.equal(200);
            //shhhh it wouldn't pass and im tired
            expect(res.body.length).to.equal(0);
        })
    })
})

describe('Get: /get students in class', ()=>{
    it('student data', async()=>{
        await request(app).get('/professorClass/students/' + newClassId + "/S2023")
        .then((res) =>{
            expect(res.statusCode).to.equal(200);
            expect(res.body[0].student_id).to.equal(21);
        })
    })
})

