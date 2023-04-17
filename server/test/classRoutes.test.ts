var request = require("supertest");
var expect = require("chai").expect;

var basicSetup = require('./helper/basicSetup.ts');
var app = require('../server');
var aClass = require('../src/models/class.ts');

var newClass = new aClass({
    course_id: 1,
    department: "CIS",
    perc_retaken: .10,
    classroom: "Z335",
    date_time: "MW 1:25-2:50PM",
    course_name: "Senior Design Lab 2"
})

var newClassId;

beforeAll(async () => {
    await basicSetup.connect();

    await newClass.save(function(err, newClass) {
        newClassId = newClass.course_id;

    });
})

afterAll(async () => {
    await basicSetup.clearDatabase();
    await basicSetup.closeDatabase();
    app.close();
})

describe('Get: /get all classes', ()=>{
    it('valid data', async()=>{
        await request(app).get('/class')
        .then((res) =>{
            expect(res.statusCode).to.equal(200);
            
            expect(res.body[0].course_name).to.equal("Senior Design Lab 2");
        })
    })
})

describe('Get: /get route to get one class by course_id', ()=>{
    it('get one class data', async()=>{
        await request(app).get('/class/courseID/' + newClassId)
        .then((res) =>{
            expect(res.statusCode).to.equal(200);
            expect(res.body.course_name).to.equal("Senior Design Lab 2");
        })
    })
})

describe('POST: /post route to post a class', ()=>{
    it('post new class data', async()=>{
        var toSendData = {
            course_id: 2,
            department: "CIS",
            perc_retaken: .20,
            classroom: "Z339",
            date_time: "TTH 1:30-2:50PM",
            course_name: "Software Engineering"
        }
        await request(app).post('/class')
        .send(toSendData)
        .then((res) =>{
            expect(res.statusCode).to.equal(201);
            expect(res.body.course_name).to.include("Software Engineering");
        })
    })
})

describe('PATCH: /patch route to update a class by course_id', ()=>{
    it('update class data', async()=>{
        let toSendData = {course_name: "Distributed Programming"}
        await request(app).patch('/class/courseID/' + newClassId)
        .send(toSendData)
        .then((res) =>{
            expect(res.statusCode).to.equal(202);
            expect(res.body).to.equal(newClassId.toString());
        })
    })
})

describe('DELETE: /delete route to delete a class by course_id', ()=>{
    it('delete class data', async()=>{
        await request(app).delete('/class/courseID/' + newClassId)
        .then((res) =>{
            expect(res.statusCode).to.equal(203);
            expect(res.body).to.equal(newClassId.toString());
        })
    })
})