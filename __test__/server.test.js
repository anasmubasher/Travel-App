/**
 * @jest-environment jsdom
 */
import  express, { Router }  from "express"
import  request from "supertest";


const app = new express();
app.use(express.static('dist'));

describe("Testing the server", () => {
    test("Testing the port", async() => {
        const res = await request(app).get('/')
        expect(res.statusCode).toBe(200);
})});