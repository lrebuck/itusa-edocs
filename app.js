var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var userController = require('./controllers/userController');
var toolController = require('./controllers/toolController');
var jobController = require('./controllers/jobController');
var opController = require('./controllers/opController');



//set the app port to 3000
var port = process.env.PORT || 3000;

//set ejs as the view engine
app.use('assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

//connect to the mongo db
mongoose.connect(config.getDBConnectionString());

//make app aware of controllers
setupController(app);
userController(app);
opController(app);
toolController(app);
jobController(app);

//start express on the port set above
app.listen(port);


