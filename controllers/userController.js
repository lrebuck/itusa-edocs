var Users = require('../models/userModel');
var bodyParser = require('body-parser');

//setup express with body-Parser.
module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

//find users by username
    app.get('/users/findByUsername/:username', function (req, res) {

        Users.find({ username: req.params.username }, function (err, users) {
            if (err) throw err;
            res.send(users);
            console.log('User found by username');
        });
    });

//get all Users from the Users collection
    app.get('/users/showAllUsers', function (req, res) {
        console.log('getting all of the users from the users collection');
        Users.find({})
            .exec(function (err, users) {
                if (err) {
                    res.send('Error occured when retrieving the users');
                } else {
                    console.log(users);
                    res.json(users);
                }

            });
    });
 // get user by mongo assigned id
    app.get('/users/findById/:id', function (req, res) {

        Users.findById({ _id: req.params.id }, function (err, user) {
            if (err) throw err;
            res.send(user);
            console.log('user found by ID');
        });
    });

// add user if not already created, if exists, update values.
    app.post('/users/modifyUser', function (req, res) {

        if (req.body.id) {
            Users.findByIdAndUpdate(req.body.id, {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                level: req.body.level,
                active: req.body.active
            }, function (err, user) {
                if (err) throw err;
                res.send('Success');
                console.log('User Updated');
            });
        }else {
                var newUser = Users({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                level: req.body.level,
                active: req.body.active
            });
            newUser.save(function (err) {
                if (err) throw err;
                res.send('Success');
                console.log('new user saved to Mongo');
            });
        }
    });

    
 //find user by mongo assigned ID and Delete
    app.delete('/user/modifyUser', function(req, res) {
        
        Users.findByIdAndRemove(req.body.id, function(err) {
            if (err) throw err;
            res.send('Success');
            console.log('User Deleted');
        })
    });

    }
