// Setup empty JS object to act as endpoint for all routes
const cityInfo = [];

// Require Express to run server and routes
const express = require('express');
const mockAPIResponse = require('./mockAPI.js')
const request = require('supertest');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// Setup Server
const port = 5000;

const server = app.listen(port, ()=> {
    console.log('server is running');
    console.log(`running on localhost: ${port}`);
});

// Get route
app.get('/all', (req, res) => {
    res.send(cityInfo);
});

// Post route
app.post('/addData', (req, res) => {

    const newData = {
        countryName: req.body.countryCode,
        south: req.body.lat,
        north: req.body.lng,
    };

    cityInfo.push(newData);
    res.send(newData);
    console.log(newData);
});