var request = require("supertest");
var expect = require("chai").expect;

var basicSetup = require('./helper/basicSetup.ts');
var app = require('../server');
var aUser = require('../src/models/user.ts');

var newUser = new aUser({
    gmail: "email@gmail.com",
    userType: "student",
    gannon_id: "jones001",
    idNumber: 12345,
    authenticated: true,
    authenticationCode: 0,
    notifications: false
})

var newUserGannonId;
var newUserGmail;
var newUserID;

beforeAll(async () => {
    await basicSetup.connect();

    await newUser.save(function(err, newUser) {
        newUserGannonId = newUser.gannon_id;
        newUserGmail = newUser.gmail
        newUserID = newUser.idNumber;
    });
})

afterAll(async () => {
    await basicSetup.clearDatabase();
    await basicSetup.closeDatabase();
    app.close();
})

describe('Get: /get all useres', ()=>{
    it('valid data', async()=>{
        await request(app).get('/user')
        .then((res) =>{
            expect(res.statusCode).to.equal(200);
            expect(res.body[0].userType).to.equal("student");
        })
    })
})

describe('Get: /get route to get one user by gannon_id', ()=>{
    it('get one user data', async()=>{
        await request(app).get('/user/gannonID/' + newUserGannonId)
        .then((res) =>{
            expect(res.statusCode).to.equal(200);
            expect(res.body.userType).to.equal("student");
        })
    })
})

describe('Get: /get route to get one user by gmail', ()=>{
    it('get one user data', async()=>{
        await request(app).get('/user/gmail/' + newUserGmail)
        .then((res) =>{
            expect(res.statusCode).to.equal(200);
            expect(res.body.userType).to.equal("student");
        })
    })
})

describe('POST: /post route to post a user', ()=>{
    it('post new user data', async()=>{
        var toSendData = {
            gmail: "peemail@gmail.com",
            userType: "professor",
            gannon_id: "power001",
            idNumber: 1022,
            authenticated: false,
            authenticationCode: 0,
            notifications: false
        }
        await request(app).post('/user')
        .send(toSendData)
        .then((res) =>{
            expect(res.statusCode).to.equal(201);
            expect(res.body.userType).to.include("professor");
        })
    })
})

describe('PATCH: /patch route to update a user by gmail', ()=>{
    it('update user data', async()=>{
        let toSendData = {notifications: true}
        await request(app).patch('/user/gmail/' + newUserGmail)
        .send(toSendData)
        .then((res) =>{
            expect(res.statusCode).to.equal(202);
            expect(res.body).to.equal(newUserGmail);
        })
    })
})

describe('Get: /get route to check if a user exists TRUE', ()=>{
    it('return true', async()=>{
        await request(app).get('/user/exists/' + newUserGmail)
        .then((res) =>{
            expect(res.statusCode).to.equal(201);
            expect(res.body).to.equal(true);
        })
    })
})

describe('Get: /get route to check if a user exists FALSE', ()=>{
    it('return false', async()=>{
        await request(app).get('/user/exists/bobby@gmail.com')
        .then((res) =>{
            expect(res.statusCode).to.equal(201);
            expect(res.body).to.equal(false);
        })
    })
})

describe('Get: /get route to check if a user is authenticated TRUE', ()=>{
    it('return true', async()=>{
        await request(app).get('/user/authenticated/' + newUserGmail)
        .then((res) =>{
            expect(res.statusCode).to.equal(201);
            expect(res.body).to.equal(true);
        })
    })
})

describe('Get: /get route to check if a user is authenticated FALSE', ()=>{
    it('return false', async()=>{
        await request(app).get('/user/authenticated/peemail@gmail.com')
        .then((res) =>{
            expect(res.statusCode).to.equal(201);
            expect(res.body).to.equal(false);
        })
    })
})

describe('Get: /get route to check if a gannon id is in use TRUE', ()=>{
    it('return true', async()=>{
        await request(app).get('/user/existsGannonID/' + newUserGannonId)
        .then((res) =>{
            expect(res.statusCode).to.equal(201);
            expect(res.body).to.equal(true);
        })
    })
})

describe('Get: /get route to check if a gannon id is in use FALSE', ()=>{
    it('return false', async()=>{
        await request(app).get('/user/existsGannonID/pop002')
        .then((res) =>{
            expect(res.statusCode).to.equal(201);
            expect(res.body).to.equal(false);
        })
    })
})

describe('Get: /get route to check if a user is signed up TRUE', ()=>{
    it('get user data', async()=>{
        await request(app).get('/user/signedUp/' + newUserID)
        .then((res) =>{
            expect(res.statusCode).to.equal(201);
            expect(res.body.idNumber).to.equal(newUserID);
        })
    })
})

describe('Get: /get route to check if a user is signed up FALSE', ()=>{
    it('return false', async()=>{
        await request(app).get('/user/signedUp/019')
        .then((res) =>{
            expect(res.statusCode).to.equal(201);
            expect(res.body).to.equal(false);
        })
    })
})

describe('DELETE: /delete route to delete a user by gannon_id', ()=>{
    it('delete user data', async()=>{
        await request(app).delete('/user/gannonID/' + newUserGannonId)
        .then((res) =>{
            expect(res.statusCode).to.equal(203);
            expect(res.body).to.equal(newUserGannonId);
        })
    })
})