var request = require("supertest");
var expect = require("chai").expect;

var basicSetup = require('./helper/basicSetup.ts');
var app = require('../server');
var aStudent = require('../src/models/student.ts');

var newStudent = new aStudent({
    student_id: 1,
    grad_class: "2023",
    majors: "Software Engineering",
    gpa: 3.85,
    completed_credits: 135,
    distance_from_stem: 0,
    is_work_study: false,
    is_athlete: false,
    num_courses_taking: 4,
    name: "Joseph Roseph"
})

var newStudentId;

beforeAll(async () => {
    await basicSetup.connect();

    await newStudent.save().then(function(newStudent) {
        newStudentId = newStudent.student_id;

    }).catch(function(err){

    });
})

afterAll(async () => {
    await basicSetup.clearDatabase();
    await basicSetup.closeDatabase();
    app.close();
})

describe('Get: /get all students', ()=>{
    it('valid data', async()=>{
        await request(app).get('/student')
        .then((res) =>{
            expect(res.statusCode).to.equal(200);
            
            expect(res.body[0].majors).to.equal("Software Engineering");
        })
    })
})

describe('Get: /get route to get one student by course_id', ()=>{
    it('get one student data', async()=>{
        await request(app).get('/student/studentID/' + newStudentId)
        .then((res) =>{
            expect(res.statusCode).to.equal(200);
            expect(res.body.majors).to.equal("Software Engineering");
        })
    })
})

describe('POST: /post route to post a student', ()=>{
    it('post new student data', async()=>{
        var toSendData = {
            student_id: 21,
            grad_class: "2024",
            majors: "Business",
            gpa: 1.59,
            completed_credits: 131,
            distance_from_stem: 0,
            is_work_study: false,
            is_athlete: false,
            num_courses_taking: 3,
            name: "Johny Bonny"
        }
        await request(app).post('/student')
        .send(toSendData)
        .then((res) =>{
            expect(res.statusCode).to.equal(201);
            expect(res.body.majors).to.include("Business");
        })
    })
})

describe('PATCH: /patch route to update a student by course_id', ()=>{
    it('update student data', async()=>{
        let toSendData = {majors: "Enviromental Engineering"}
        await request(app).patch('/student/studentID/' + newStudentId)
        .send(toSendData)
        .then((res) =>{
            expect(res.statusCode).to.equal(202);
            expect(res.body).to.equal(newStudentId.toString());
        })
    })
})

describe('DELETE: /delete route to delete a student by course_id', ()=>{
    it('delete student data', async()=>{
        await request(app).delete('/student/studentID/' + newStudentId)
        .then((res) =>{
            expect(res.statusCode).to.equal(203);
            expect(res.body).to.equal(newStudentId.toString());
        })
    })
})