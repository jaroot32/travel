var path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
var aylien = require("aylien_textapi");
const PORT = process.env.PORT || 5000;
dotenv.config();
const request = require('request');

const geoUrl = 'http://api.geonames.org/searchJSON?';

let country

const app = express();

app.use(express.static('dist'));

/* Middleware*/
var bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

app.use(cors());

console.log(__dirname);

const STORE = [];
const GEO_STORE = [];
console.log(GEO_STORE)

let data;
let geoData;
console.log(geoData)

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });  

app.get('/aylien', function(req, res) {
  textapi.sentiment(data, function(error, response) {
    if (error === null) {
      STORE.push(response)
      res.send(STORE);
    }
  });  
});

app.post('/url', function(req,res) {
  data = req.body;
  res.json({
    status: "success",
    term: req.body
  })
});  

app.post('/geo', function (req, res) {
  geoData = geoUrl + 'name=' + req.body["name"] + '&username=' + req.body["username"];
  console.log(geoData)
  res.json({
    status: "success",
    term: geoData
  })
});

app.get('/geo-all', function(req, res) {
  request(geoData, function(error, response, body) {
    console.error('error:', error );
    // console.log('statusCode:', response && response.statusCode);
    // console.log('body ', body)
    let parsed = JSON.parse(body)
    GEO_STORE.push(parsed);
    res.send(GEO_STORE);
  });
});

var API_KEY = '18297839-a1621bfe0657d480a4d918528';

var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(country);
console.log(URL)

app.get('/pixabay', (req, res) => {
  
  request(URL, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return res.status(500).json({ type: 'error', message: error.message});
    }
    res.send(body);
  })

});

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
    console.log('Example app listening on port 8081!')
});