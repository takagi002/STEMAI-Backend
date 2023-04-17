var request = require("supertest");
var expect = require("chai").expect;

var basicSetup = require('./helper/basicSetup.ts');
var app = require('../server');
var aPrediction = require('../src/models/prediction.ts');

var newPrediction = new aPrediction({
    student_id: 1,
    course_id: 23,
    prediction: true,
    reason: ["Reason", "reason2"],
    semester: "S2023"
})

var newPrediction2 = new aPrediction({
    student_id: 1,
    course_id: 24,
    prediction: false,
    reason: ["Reason", "reason2"],
    semester: "S2023"
})



var newStudentId;

beforeAll(async () => {
    await basicSetup.connect();

    await newPrediction.save(function(err, newPrediction) {
        newStudentId = newPrediction.student_id;

    });
    await newPrediction2.save(function(err, newPrediction2) {
    });
    
})

afterAll(async () => {
    await basicSetup.clearDatabase();
    await basicSetup.closeDatabase();
    app.close();
})

describe('Get: /get all predictions', ()=>{
    it('valid data', async()=>{
        await request(app).get('/prediction')
        .then((res) =>{
            expect(res.statusCode).to.equal(200);
            
            expect(res.body[0].semester).to.equal("S2023");
        })
    })
})

describe('Get: /get route to get one prediction by student_id', ()=>{
    it('get one prediction data', async()=>{
        await request(app).get('/prediction/studentID/' + newStudentId)
        .then((res) =>{
            expect(res.statusCode).to.equal(200);
            expect(res.body.semester).to.equal("S2023");
        })
    })
})

describe('Get: /get route to get all predictions with one student id', ()=>{
    it('get one prediction data', async()=>{
        await request(app).get('/prediction/studentIDAll/' + newStudentId + "/S2023")
        .then((res) =>{
            expect(res.statusCode).to.equal(200);
            expect(res.body.length).to.equal(2);
        })
    })
})

describe('Get: /get route to get one prediction with one student id and course id', ()=>{
    it('get one prediction data', async()=>{
        await request(app).get('/prediction/studentInClass/' + newStudentId + "/S2023/23")
        .then((res) =>{
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.equal(true);
        })
    })
})

describe('POST: /post route to post a prediction', ()=>{
    it('post new prediction data', async()=>{
        var toSendData = {
            student_id: 2,
            course_id: 24,
            prediction: false,
            reason: ["Reason", "reason2"],
            semester: "S2023"
        }
        await request(app).post('/prediction')
        .send(toSendData)
        .then((res) =>{
            expect(res.statusCode).to.equal(201);
            expect(res.body.semester).to.include("S2023");
        })
    })
})

describe('PATCH: /patch route to update a prediction by student_id', ()=>{
    it('update prediction data', async()=>{
        let toSendData = {semester: "F2022"}
        await request(app).patch('/prediction/studentID/' + newStudentId)
        .send(toSendData)
        .then((res) =>{
            expect(res.statusCode).to.equal(202);
            expect(res.body).to.equal(newStudentId.toString());
        })
    })
})

describe('DELETE: /delete route to delete a prediction by student_id', ()=>{
    it('delete prediction data', async()=>{
        await request(app).delete('/prediction/studentID/' + newStudentId)
        .then((res) =>{
            expect(res.statusCode).to.equal(203);
            expect(res.body).to.equal(newStudentId.toString());
        })
    })
})