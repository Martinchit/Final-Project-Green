const mainApp = require('../app.js').mainApp
const request = require('supertest');

describe("General Route",()=>{
    it("/ should return 404", (done)=>{
        request(mainApp)
            .get('/')
            .expect(200)
            .end((err, res)=>{
                if(err) throw err;
                done()
            });
    });

});


describe('News API', () => {
    it("/ should return 20 news in each get call", (done)=>{
        request(mainApp)
            .get("/api/news")
            .expect(200)
            .end((err, res)=>{
                expect(res.body.length == 20)
                if(err) throw err;
                done();
            });
    });

    it("/ news sources return from a post call should be the same as the value made in the post call", (done)=>{
        request(mainApp)
            .post("/api/selected_news")
            .send({choice : 'bloomberg'})
            .expect(200)
            .end((err, res)=>{
                expect(res.body[0].source == 'bloomberg')
                expect(res.body.map(e => e.source.id).every(e => e === 'bloomberg'))
                if(err) throw err;
                done();
            });
    });
})


describe('Login Route', () => {
    it("/ no req body for api/logIn should return 401", (done) => {
        request(mainApp)
            .post("/api/logIn")
            .send({})
            .expect(401)
            .end((err, res) => {
                if(err) throw err;
                done();
            })
    })

    it("/ no existing account found in database should return 401", (done) => {
        request(mainApp)
            .post("/api/logIn")
            .send({email: '', password: ''})
            .expect(401)
            .end((err, res) => {
                if(err) throw err;
                done();
            })
    })
})


describe('Recycling Bin', () => {
    it("/ response data length should be 10", (done) => {
        request(mainApp)
            .post("/api/recyclingBin")
            .send({lat: 22.2772, lng: 114.1662})
            .expect(200)
            .end((err, res) => {
                expect(res.body.length == 10)
                if(err) throw err;
                done();
            })
    })

    it("/ no req body should return 400", (done) => {
        request(mainApp)
            .post("/api/recyclingBin")
            .send({})
            .expect(400)
            .end((err, res) => {
                if(err) throw err;
                done();
            })
    })
})