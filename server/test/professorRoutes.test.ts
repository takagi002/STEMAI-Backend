var request = require("supertest");
var expect = require("chai").expect;

var basicSetup = require('./helper/basicSetup.ts');
var app = require('../server');
var aProfessor = require('../src/models/professor.ts');

var newProfessor = new aProfessor({
    prof_id: 1,
    dept: "CIS",
    experience: "2 Years",
    tenured: false,
    perc_passed: 87
})

var newProfessorId;

beforeAll(async () => {
    await basicSetup.connect();

    await newProfessor.save(function(err, newProfessor) {
        newProfessorId = newProfessor.prof_id;
    });
})

afterAll(async () => {
    await basicSetup.clearDatabase();
    await basicSetup.closeDatabase();
    app.close();
})

describe('Get: /get all professors', ()=>{
    it('valid data', async()=>{
        await request(app).get('/professor')
        .then((res) =>{
            expect(res.statusCode).to.equal(200);
            
            expect(res.body[0].dept).to.equal("CIS");
        })
    })
})

describe('Get: /get route to get one professor by prof_id', ()=>{
    it('get one professor data', async()=>{
        await request(app).get('/professor/professorID/' + newProfessorId)
        .then((res) =>{
            expect(res.statusCode).to.equal(200);
            expect(res.body.dept).to.equal("CIS");
        })
    })
})

describe('POST: /post route to post a professor', ()=>{
    it('post new professor data', async()=>{
        var toSendData = {
            prof_id: 2,
            dept: "MATH",
            experience: "12 Years",
            tenured: true,
            perc_passed: 83
        }
        await request(app).post('/professor')
        .send(toSendData)
        .then((res) =>{
            expect(res.statusCode).to.equal(201);
            expect(res.body.dept).to.include("MATH");
        })
    })
})

describe('PATCH: /patch route to update a professor by prof_id', ()=>{
    it('update professor data', async()=>{
        let toSendData = {dept: "BUS"}
        await request(app).patch('/professor/professorID/' + newProfessorId)
        .send(toSendData)
        .then((res) =>{
            expect(res.statusCode).to.equal(202);
            expect(res.body).to.equal(newProfessorId.toString());
        })
    })
})

describe('DELETE: /delete route to delete a professor by prof_id', ()=>{
    it('delete professor data', async()=>{
        await request(app).delete('/professor/professorID/' + newProfessorId)
        .then((res) =>{
            expect(res.statusCode).to.equal(203);
            expect(res.body).to.equal(newProfessorId.toString());
        })
    })
})