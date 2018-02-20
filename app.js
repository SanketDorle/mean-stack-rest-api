
// Dependencies
var express = require('express');
var port = process.env.PORT || 3000;
var http = require('http');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Imports Routes
var api = require('./routes/api');

// MongoDB
mongoose.connect('mongodb://localhost/rest_test');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/', api);


// Handle route
app.get('/', function (req, res) {
    res.send('It works');
});
app.get('*', function (req, res) {
    res.redirect('/');
});

var server = http.createServer(app);
server.listen(port);
server.on('error', function (error) {
	console.log('Error', error);
});
server.on('listening', function () {
	console.log('Listening to port: ' + port);
});