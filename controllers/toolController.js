var Tools = require('../models/EZ_Gyro_2/toolModel');
var bodyParser = require('body-parser');

//setup express with body-Parser.
module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    //find tools by toolSerialNumber
    app.get('/tools/findByToolname/:toolSerialNumber', function (req, res) {

        Tools.find({ toolSerialNumber: req.params.toolSerialNumber }, function (err, tools) {
            if (err) throw err;
            res.send(tools);
            console.log('Tool found by tool Serial Number');
        });
    });

    //get all Tools from the Tools collection
    app.get('/tools/showAllTools', function (req, res) {
        console.log('getting all of the tools from the tools collection');
        Tools.find({})
            .exec(function (err, tools) {
                if (err) {
                    res.send('Error occured when retrieving the tools');
                } else {
                    console.log(tools);
                    res.json(tools);
                }

            });
    });
    // get tool by mongo assigned id
    app.get('/tools/findById/:id', function (req, res) {

        Tools.findById({ _id: req.params.id }, function (err, tool) {
            if (err) throw err;
            res.send(tool);
            console.log('tool found by ID');
        });
    });

    // add tool if not already created, if exists, update values.
    app.post('/tools/modifyTool', function (req, res) {

        if (req.body.id) {
            Tools.findByIdAndUpdate(req.body.id, {
                product: req.body.product,
                toolSerialNumber: req.body.toolSerialNumber,
                dateOfBirth: req.body.dateOfBirth,
                active: req.body.active,
                retired: req.body.retired
            }, function (err, tool) {
                if (err) throw err;
                res.send('Success');
                console.log('Tool Updated');
            });
        } else {
            var newTool = Tools({
                product: req.body.product,
                toolSerialNumber: req.body.toolSerialNumber,
                dateOfBirth: req.body.dateOfBirth,
                active: req.body.active,
                retired: req.body.retired
            });
            newTool.save(function (err) {
                if (err) throw err;
                res.send('Success');
                console.log('new tool saved to Mongo');
            });
        }
    });


    //find tool by mongo assigned ID and Delete
    app.delete('/tool/modifyTool', function (req, res) {

        Tools.findByIdAndRemove(req.body.id, function (err) {
            if (err) throw err;
            res.send('Success');
            console.log('Tool Deleted');
        })
    });

}
