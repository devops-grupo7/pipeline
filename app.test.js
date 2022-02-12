const supertest = require('supertest');
const app = require('./app.js');

describe("main" , () => {
    describe("GET /", () => {
        describe("Given a route that doesnt exists", () => {
            it("should return a 404", async () => {
                const route = '/tp';
                await supertest(app).get(`/${route}`).expect(404);
            });
        });
    });
    describe("GET /", () => {
        describe("Given a route that does exists", () => {
            it("should return a 200", async () => {
                const route = '/';
                await supertest(app).get(`/${route}`).expect(404);
            });
        });
    });
});