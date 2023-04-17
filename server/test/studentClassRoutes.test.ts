var request = require("supertest");
var expect = require("chai").expect;

var basicSetup = require('./helper/basicSetup.ts');
var app = require('../server');
var aStudentClass = require('../src/models/studentClass.ts');

var newStudentClass = new aStudentClass({
    student_id: 21,
    course_id: "1",
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

var newStudentClassId;

beforeAll(async () => {
    await basicSetup.connect();

    await newStudentClass.save(function(err, newStudentClass) {
        newStudentClassId = newStudentClass.student_id;

    });
})

afterAll(async () => {
    await basicSetup.clearDatabase();
    await basicSetup.closeDatabase();
    app.close();
})

describe('Get: /get all student classes', ()=>{
    it('valid data', async()=>{
        await request(app).get('/studentClass')
        .then((res) =>{
            expect(res.statusCode).to.equal(200);
            
            expect(res.body[0].semester).to.equal("S2023");
        })
    })
})

describe('Get: /get route to get one student class by student_id', ()=>{
    it('get one student class data', async()=>{
        await request(app).get('/studentClass/studentID/' + newStudentClassId)
        .then((res) =>{
            expect(res.statusCode).to.equal(200);
            expect(res.body.semester).to.equal("S2023");
        })
    })
})

describe('POST: /post route to post a student class', ()=>{
    it('post new student class data', async()=>{
        var toSendData = {
            student_id: 25,
            course_id: 2,
            semester: "S2023",
            fourweek_grade: "C",
            midterm_grade: "D",
            eightweek_grade: "F",
            section: 1,
            classroom: "Z 335",
            time: "TTH 1:25-2:50PM",
            prof_id: "12",
            taken_before: true,
            needs_tutoring: true
        }
        await request(app).post('/studentClass')
        .send(toSendData)
        .then((res) =>{
            expect(res.statusCode).to.equal(201);
            expect(res.body.semester).to.include("S2023");
        })
    })
})

describe('PATCH: /patch route to update a student class by student_id', ()=>{
    it('update student class data', async()=>{
        let toSendData = {semester: "F2022"}
        await request(app).patch('/studentClass/studentID/' + newStudentClassId)
        .send(toSendData)
        .then((res) =>{
            expect(res.statusCode).to.equal(202);
            expect(res.body).to.equal(newStudentClassId.toString());
        })
    })
})

describe('DELETE: /delete route to delete a student class by student_id', ()=>{
    it('delete student class data', async()=>{
        await request(app).delete('/studentClass/studentID/' + newStudentClassId)
        .then((res) =>{
            expect(res.statusCode).to.equal(203);
            expect(res.body).to.equal(newStudentClassId.toString());
        })
    })
})