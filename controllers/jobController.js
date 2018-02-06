var Jobs = require('../models/jobModel');
var bodyParser = require('body-parser');

//setup express with body-Parser.
module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

//find jobs by jobname
    app.get('/jobs/findByJobname/:jobname', function (req, res) {

        Jobs.find({ jobname: req.params.jobname }, function (err, jobs) {
            if (err) throw err;
            res.send(jobs);
            console.log('Job found by jobname');
        });
    });

//get all Jobs from the Jobs collection
    app.get('/jobs/showAllJobs', function (req, res) {
        console.log('getting all of the jobs from the jobs collection');
        Jobs.find({})
            .exec(function (err, jobs) {
                if (err) {
                    res.send('Error occured when retrieving the jobs');
                } else {
                    console.log(jobs);
                    res.json(jobs);
                }

            });
    });
 // get job by mongo assigned id
    app.get('/jobs/findById/:id', function (req, res) {

        Jobs.findById({ _id: req.params.id }, function (err, job) {
            if (err) throw err;
            res.send(job);
            console.log('job found by ID');
        });
    });

// add job if not already created, if exists, update values.
    app.post('/jobs/modifyJob', function (req, res) {

        if (req.body.id) {
            Jobs.findByIdAndUpdate(req.body.id, {
                jobname: req.body.jobname,
                email: req.body.email,
                password: req.body.password,
                level: req.body.level,
                active: req.body.active
            }, function (err, job) {
                if (err) throw err;
                res.send('Success');
                console.log('Job Updated');
            });
        }else {
                var newJob = Jobs({
                jobname: req.body.jobname,
                email: req.body.email,
                password: req.body.password,
                level: req.body.level,
                active: req.body.active
            });
            newJob.save(function (err) {
                if (err) throw err;
                res.send('Success');
                console.log('new job saved to Mongo');
            });
        }
    });

    
 //find job by mongo assigned ID and Delete
    app.delete('/job/modifyJob', function(req, res) {
        
        Jobs.findByIdAndRemove(req.body.id, function(err) {
            if (err) throw err;
            res.send('Success');
            console.log('Job Deleted');
        })
    });

    }
