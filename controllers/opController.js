var FTs = require('../models/operations/FunctionTestModel');
var AVs = require('../models/operations/AllanVarianceModel');
var TFOs = require('../models/operations/ToolFaceOffsetModel');
var VTs = require('../models/operations/VibrationTestModel');
//var Ops = require('../models/operations/functionTestModel');
//var Ops = require('../models/operations/functionTestModel');
var bodyParser = require('body-parser');

//setup express with body-Parser.
module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

//EZ Gyro 2.0 Operations:
//**************************************************************************************************************************************************Start function Test
 //find functionTests by functionTestname
    app.get('/functionTests/findByfunctionTestname/:functionTestname', function (req, res) {

        functionTests.find({ functionTestname: req.params.functionTestname }, function (err, functionTests) {
            if (err) throw err;
            res.send(functionTests);
            console.log('functionTest found by function Testname');
        });
    });

//get all functionTests from the functionTests collection
    app.get('/functionTests/showAllfunctionTests', function (req, res) {
        console.log('getting all of the function Tests from the function Tests collection');
        FTs.find({})
            .exec(function (err, functionTests) {
                if (err) {
                    res.send('Error occured when retrieving the function Tests');
                } else {
                    console.log(functionTests);
                    res.json(functionTests);
                }
            });
    });
// get functionTest by mongo assigned id
    app.get('/functionTests/findById/:id', function (req, res) {

        FTs.findById({ _id: req.params.id }, function (err, functionTest) {
            if (err) throw err;
            res.json(functionTest);
            console.log('function Test found by ID');
        });
    });

// add functionTest if not already created, if exists, update values.
    app.post('/functionTests/modifyFunctionTest', function (req, res) {

        if (req.body.id) {
            FTs.findByIdAndUpdate(req.body.id, {
                toolSerialNumber: req.body.toolSerialNumber,
                rma: req.body.rma,
                job: req.body.job,
                date: req.body.date,
                setSerial: req.body.setSerial,
                loadCalFile: req.body.loadCalFile,
                stbyCurrent: req.body.stbyCurrent,
                runCurrent: req.body.runCurrent,
                maxCurrent: req.body.maxCurrent,
                motorPos0: req.body.motorPos0,
                motorPos1: req.body.motorPos1,
                motorPos2: req.body.motorPos2,
                accelXMin: req.body.accelXmin,
                accelXMax: req.body.accelXMax,
                accelYMin: req.body.accelYMin,
                accelYMax: req.body.accelYMax,
                accelZMin: req.body.accelZMin,
                accelZMax: req.body.accelZMax,
                gyroXMin: req.body.gyroXMin,
                gyroXMax: req.body.gyroXMax,
                gyroYMin: req.body.gyroYMin,
                gyroYMax: req.body.gyroYMax,
                gyroXtemp: req.body.gyroXtemp,
                gyroYtemp: req.body.gyroYtemp,
                voltageTP70: req.body.voltageTP70,
                voltageTP72: req.body.voltageTP72,
                voltageTP23: req.body.voltageTP23,
                voltageTP14: req.body.voltageTP14,
                voltageTP65: req.body.voltageTP65,
                voltageTP67: req.body.voltageTP67,
                powerNoiseTest: req.body.powerNoiseTest,
                irdaFunction: req.body.irdaFunction,
                cutoutVoltage: req.body.cutoutVoltage,
                recoveryVoltage: req.body.recoveryVoltage,
                allTestsPass: req.body.allTestsPass,
                tech: req.body.tech,
                opStart: req.body.opStart,
                opStop: req.body.opStop,
                failureDescription: req.body.failureDescription,
                resolutionDescription: req.body.resolutionDescription


            }, function (err, functionTest) {
                if (err) throw err;
                res.send('Success');
                console.log('functionTest Updated');
            });
        } else {
            var newfunctionTest = FTs({
                toolSerialNumber: req.body.toolSerialNumber,
                rma: req.body.rma,
                job: req.body.job,
                date: req.body.date,
                setSerial: req.body.setSerial,
                loadCalFile: req.body.loadCalFile,
                stbyCurrent: req.body.stbyCurrent,
                runCurrent: req.body.runCurrent,
                maxCurrent: req.body.maxCurrent,
                motorPos0: req.body.motorPos0,
                motorPos1: req.body.motorPos1,
                motorPos2: req.body.motorPos2,
                accelXMin: req.body.accelXmin,
                accelXMax: req.body.accelXMax,
                accelYMin: req.body.accelYMin,
                accelYMax: req.body.accelYMax,
                accelZMin: req.body.accelZMin,
                accelZMax: req.body.accelZMax,
                gyroXMin: req.body.gyroXMin,
                gyroXMax: req.body.gyroXMax,
                gyroYMin: req.body.gyroYMin,
                gyroYMax: req.body.gyroYMax,
                gyroXtemp: req.body.gyroXtemp,
                gyroYtemp: req.body.gyroYtemp,
                voltageTP70: req.body.voltageTP70,
                voltageTP72: req.body.voltageTP72,
                voltageTP23: req.body.voltageTP23,
                voltageTP14: req.body.voltageTP14,
                voltageTP65: req.body.voltageTP65,
                voltageTP67: req.body.voltageTP67,
                powerNoiseTest: req.body.powerNoiseTest,
                irdaFunction: req.body.irdaFunction,
                cutoutVoltage: req.body.cutoutVoltage,
                recoveryVoltage: req.body.recoveryVoltage,
                allTestsPass: req.body.allTestsPass,
                tech: req.body.tech,
                opStart: req.body.opStart,
                opStop: req.body.opStop,
                failureDescription: req.body.failureDescription,
                resolutionDescription: req.body.resolutionDescription
            });
            newfunctionTest.save(function (err) {
                if (err) throw err;
                res.send('Success');
                console.log('new functionTest saved to Mongo');
            });
        }
    });


//find functionTest by mongo assigned ID and Delete
    app.delete('/functionTests/modifyFunctionTest', function (req, res) {

        FTs.findByIdAndRemove(req.body.id, function (err) {
            if (err) throw err;
            res.send('Success');
            console.log('functionTest Deleted');
        })
    });
//**************************************************************************************************************************************************Stop function Test
//**************************************************************************************************************************************************Start Tool face Offset

//get all toolFaceOffsets from the toolFaceOffsets collection
    app.get('/toolFaceOffsets/showAlltoolFaceOffsets', function (req, res) {
        console.log('getting all of the tool Face Offsets from the tool Face Offsets collection');
        TFOs.find({})
            .exec(function (err, toolFaceOffsets) {
                if (err) {
                    res.send('Error occured when retrieving the tool Face Offsets');
                } else {
                    console.log(toolFaceOffsets);
                    res.json(toolFaceOffsets);
                }
            });
    });
// get toolFaceOffset by mongo assigned id
    app.get('/toolFaceOffsets/findById/:id', function (req, res) {

        TFOs.findById({ _id: req.params.id }, function (err, toolFaceOffset) {
            if (err) throw err;
            res.json(toolFaceOffset);
            console.log('Tool Face Offset found by ID');
        });
    });

// add toolFaceOffset if not already created, if exists, update values.
    app.post('/toolFaceOffsets/modifyToolFaceOffset', function (req, res) {

        if (req.body.id) {
            TFOs.findByIdAndUpdate(req.body.id, {
                toolSerialNumber: req.body.toolSerialNumber,
                rma: req.body.rma,
                job: req.body.job,
                date: req.body.date,
                offset: req.body.offset,
                hasAttachment: req.body.hasAttachment,
                tech: req.body.tech,
                opStart: req.body.opStart,
                opStop: req.body.opStop,
                failureDescription: req.body.failureDescription,
                resolutionDescription: req.body.resolutionDescription
                
            }, function (err, toolFaceOffset) {
                if (err) throw err;
                res.send('Success');
                console.log('toolFace Offset Updated');
            });
        } else {
            var newtoolFaceOffset = TFOs({
                toolSerialNumber: req.body.toolSerialNumber,
                rma: req.body.rma,
                job: req.body.job,
                date: req.body.date,
                offset: req.body.offset,
                hasAttachment: req.body.hasAttachment,
                tech: req.body.tech,
                opStart: req.body.opStart,
                opStop: req.body.opStop,
                failureDescription: req.body.failureDescription,
                resolutionDescription: req.body.resolutionDescription
            });
            newtoolFaceOffset.save(function (err) {
                if (err) throw err;
                res.send('Success');
                console.log('new toolFaceOffset saved to Mongo');
            });
        }
    });


//find toolFaceOffset by mongo assigned ID and Delete
    app.delete('/toolFaceOffsets/modifyToolFaceOffset', function (req, res) {

        TFOs.findByIdAndRemove(req.body.id, function (err) {
            if (err) throw err;
            res.send('Success');
            console.log('tool Face Offset Deleted');
        })
    });
//**************************************************************************************************************************************************Stop Tool face Offset
//**************************************************************************************************************************************************Start Vibration Test

//get all vibrationTests from the vibrationTests collection
    app.get('/vibrationTests/showAllVibrationTests', function (req, res) {
        console.log('getting all of the vibrationTests from the vibrationTests collection');
        VTs.find({})
            .exec(function (err, vibrationTests) {
                if (err) {
                    res.send('Error occured when retrieving the vibrationTests');
                } else {
                    console.log(vibrationTests);
                    res.json(vibrationTests);
                }
            });
    });

// get vibrationTest by mongo assigned id
    app.get('/vibrationTests/findById/:id', function (req, res) {

        VTs.findById({ _id: req.params.id }, function (err, vibrationTest) {
            if (err) throw err;
            res.json(vibrationTest);
            console.log('vibrationTest found by ID');
        });
    });

// add vibrationTest if not already created, if exists, update values.
    app.post('/vibrationTests/modifyVibrationTest', function (req, res) {

        if (req.body.id) {
            VTs.findByIdAndUpdate(req.body.id, {
                toolSerialNumber: req.body.toolSerialNumber,
                rma: req.body.rma,
                job: req.body.job,
                date: req.body.date,
                vibePos1: req.body.vibePos1,
                vibePos2: req.body.vibePos2,
                allTestsPass: req.body.allTestsPass,
                tech: req.body.tech,
                opStart: req.body.opStart,
                opStop: req.body.opStop,
                failureDescription: req.body.failureDescription,
                resolutionDescription: req.body.resolutionDescription

            }, function (err, vibrationTest) {
                if (err) throw err;
                res.send('Success');
                console.log('vibrationTest Updated');
            });
        } else {
            var newvibrationTest = VTs({

                toolSerialNumber: req.body.toolSerialNumber,
                rma: req.body.rma,
                job: req.body.job,
                date: req.body.date,
                vibePos1: req.body.vibePos1,
                vibePos2: req.body.vibePos2,
                allTestsPass: req.body.allTestsPass,
                tech: req.body.tech,
                opStart: req.body.opStart,
                opStop: req.body.opStop,
                failureDescription: req.body.failureDescription,
                resolutionDescription: req.body.resolutionDescription

            });
            newvibrationTest.save(function (err) {
                if (err) throw err;
                res.send('Success');
                console.log('new vibrationTest saved to Mongo');
            });
        }
    });


//find vibrationTest by mongo assigned ID and Delete
    app.delete('/vibrationTests/modifyVibrationTest', function (req, res) {

        VTs.findByIdAndRemove(req.body.id, function (err) {
            if (err) throw err;
            res.send('Success');
            console.log('vibrationTest Deleted');
        })
    });
//**************************************************************************************************************************************************Stop Vibration Test
//**************************************************************************************************************************************************Start Allan Variance
//find allanVariances by allanVariancename
    app.get('/allanVariances/findByallanVariancename/:allanVariancename', function (req, res) {

        allanVariances.find({ allanVariancename: req.params.allanVariancename }, function (err, allanVariances) {
            if (err) throw err;
            res.send(allanVariances);
            console.log('allanVariance found by allanVariancename');
        });
    });

//get all allanVariances from the allanVariances collection
    app.get('/allanVariances/showAllAllanVariances', function (req, res) {
        console.log('getting all of the allanVariances from the allanVariances collection');
        AVs.find({})
            .exec(function (err, allanVariances) {
                if (err) {
                    res.send('Error occured when retrieving the allanVariances');
                } else {
                    console.log(allanVariances);
                    res.json(allanVariances);
                }
            });
    });
// get allanVariance by mongo assigned id
    app.get('/allanVariances/findById/:id', function (req, res) {

        allanVariances.findById({ _id: req.params.id }, function (err, allanVariance) {
            if (err) throw err;
            res.send(allanVariance);
            console.log('allanVariance found by ID');
        });
    });

// add allanVariance if not already created, if exists, update values.
    app.post('/allanVariances/ModifyAllanVariance', function (req, res) {

        if (req.body.id) {
            AVs.findByIdAndUpdate(req.body.id, {

                toolSerialNumber: req.body.toolSerialNumber,
                rma: req.body.rma,
                job: req.body.job,
                date: req.body.date,
                temp: req.body.temp,
                gx40SecDev: req.body.gx40SecDev,
                gy40SecDev: req.body.gy40SecDev,
                gx40SecMin: req.body.gx40SecMin,
                gy40SecMin: req.body.gy40SecMin,
                allTestsPass: req.body.allTestsPass,
                tech: req.body.tech,
                opStart: req.body.opStart,
                opStop: req.body.opStop,
                failureDescription: req.body.failureDescription,
                resolutionDescription: req.body.resolutionDescription

            }, function (err, allanVariance) {
                if (err) throw err;
                res.send('Success');
                console.log('allanVariance Updated');
            });
        } else {
            var newallanVariance = AVs({

                toolSerialNumber: req.body.toolSerialNumber,
                rma: req.body.rma,
                job: req.body.job,
                date: req.body.date,
                temp: req.body.temp,
                gx40SecDev: req.body.gx40SecDev,
                gy40SecDev: req.body.gy40SecDev,
                gx40SecMin: req.body.gx40SecMin,
                gy40SecMin: req.body.gy40SecMin,
                allTestsPass: req.body.allTestsPass,
                tech: req.body.tech,
                opStart: req.body.opStart,
                opStop: req.body.opStop,
                failureDescription: req.body.failureDescription,
                resolutionDescription: req.body.resolutionDescription

            });
            newallanVariance.save(function (err) {
                if (err) throw err;
                res.send('Success');
                console.log('new allanVariance saved to Mongo');
            });
        }
    });


//find allanVariance by mongo assigned ID and Delete
    app.delete('/allanVariances/ModifyAllanVariance', function (req, res) {

        AVs.findByIdAndRemove(req.body.id, function (err) {
            if (err) throw err;
            res.send('Success');
            console.log('allanVariance Deleted');
        })
    });
//**************************************************************************************************************************************************Stop Allan Variance
//**************************************************************************************************************************************************Start Calibration
//find calibrations by calibrationname
    app.get('/calibrations/findBycalibrationname/:calibrationname', function (req, res) {

        calibrations.find({ calibrationname: req.params.calibrationname }, function (err, calibrations) {
            if (err) throw err;
            res.send(calibrations);
            console.log('calibration found by calibrationname');
        });
    });

//get all calibrations from the calibrations collection
    app.get('/calibrations/showAllcalibrations', function (req, res) {
        console.log('getting all of the calibrations from the calibrations collection');
        calibrations.find({})
            .exec(function (err, calibrations) {
                if (err) {
                    res.send('Error occured when retrieving the calibrations');
                } else {
                    console.log(calibrations);
                    res.json(calibrations);
                }
            });
    });
// get calibration by mongo assigned id
    app.get('/calibrations/findById/:id', function (req, res) {

        calibrations.findById({ _id: req.params.id }, function (err, calibration) {
            if (err) throw err;
            res.send(calibration);
            console.log('calibration found by ID');
        });
    });

// add calibration if not already created, if exists, update values.
    app.post('/calibrations/modifycalibration', function (req, res) {

        if (req.body.id) {
            calibrations.findByIdAndUpdate(req.body.id, {
                toolSerialNumber: String,
                rma: req.body.rma,
                job: req.body.job,
                date: req.body.date,
                testStand: req.body.testStand,
                allTestsPass: req.body.allTestsPass,
                tech: req.body.tech,
                opStart: req.body.opStart,
                opStop: req.body.opStop,
                failureDescription: req.body.failureDescription,
                resolutionDescription: req.body.resolutionDescription


            }, function (err, calibration) {
                if (err) throw err;
                res.send('Success');
                console.log('calibration Updated');
            });
        } else {
            var newcalibration = calibrations({
                toolSerialNumber: String,
                rma: req.body.rma,
                job: req.body.job,
                date: req.body.date,
                testStand: req.body.testStand,
                allTestsPass: req.body.allTestsPass,
                tech: req.body.tech,
                opStart: req.body.opStart,
                opStop: req.body.opStop,
                failureDescription: req.body.failureDescription,
                resolutionDescription: req.body.resolutionDescription
            });
            newcalibration.save(function (err) {
                if (err) throw err;
                res.send('Success');
                console.log('new calibration saved to Mongo');
            });
        }
    });


    //find calibration by mongo assigned ID and Delete
    app.delete('/calibration/modifycalibration', function (req, res) {

        calibrations.findByIdAndRemove(req.body.id, function (err) {
            if (err) throw err;
            res.send('Success');
            console.log('calibration Deleted');
        })
    });

//**************************************************************************************************************************************************Stop Calibration
//**************************************************************************************************************************************************Start Temperature Verification
    //find temperatureVerifications by temperatureVerificationname
    app.get('/temperatureVerifications/findBytemperatureVerificationname/:temperatureVerificationname', function (req, res) {

        temperatureVerifications.find({ temperatureVerificationname: req.params.temperatureVerificationname }, function (err, temperatureVerifications) {
            if (err) throw err;
            res.send(temperatureVerifications);
            console.log('temperatureVerification found by temperatureVerificationname');
        });
    });

    //get all temperatureVerifications from the temperatureVerifications collection
    app.get('/temperatureVerifications/showAllTemperatureVerifications', function (req, res) {
        console.log('getting all of the temperatureVerifications from the temperatureVerifications collection');
        temperatureVerifications.find({})
            .exec(function (err, temperatureVerifications) {
                if (err) {
                    res.send('Error occured when retrieving the temperatureVerifications');
                } else {
                    console.log(temperatureVerifications);
                    res.json(temperatureVerifications);
                }
            });
    });
    // get temperatureVerification by mongo assigned id
    app.get('/temperatureVerifications/findById/:id', function (req, res) {

        temperatureVerifications.findById({ _id: req.params.id }, function (err, temperatureVerification) {
            if (err) throw err;
            res.send(temperatureVerification);
            console.log('temperatureVerification found by ID');
        });
    });

    // add temperatureVerification if not already created, if exists, update values.
    app.post('/temperatureVerifications/modifytemperatureVerification', function (req, res) {

        if (req.body.id) {
            temperatureVerifications.findByIdAndUpdate(req.body.id, {
                toolSerialNumber: String,
                rma: req.body.rma,
                job: req.body.job,
                date: req.body.date,
                testStand: req.body.testStand,
                allTestsPass: req.body.allTestsPass,
                tech: req.body.tech,
                opStart: req.body.opStart,
                opStop: req.body.opStop,
                failureDescription: req.body.failureDescription,
                resolutionDescription: req.body.resolutionDescription

            }, function (err, temperatureVerification) {
                if (err) throw err;
                res.send('Success');
                console.log('temperatureVerification Updated');
            });
        } else {
            var newtemperatureVerification = temperatureVerifications({
                toolSerialNumber: String,
                rma: req.body.rma,
                job: req.body.job,
                date: req.body.date,
                testStand: req.body.testStand,
                allTestsPass: req.body.allTestsPass,
                tech: req.body.tech,
                opStart: req.body.opStart,
                opStop: req.body.opStop,
                failureDescription: req.body.failureDescription,
                resolutionDescription: req.body.resolutionDescription

            });
            newtemperatureVerification.save(function (err) {
                if (err) throw err;
                res.send('Success');
                console.log('new temperatureVerification saved to Mongo');
            });
        }
    });


    //find temperatureVerification by mongo assigned ID and Delete
    app.delete('/temperatureVerification/modifytemperatureVerification', function (req, res) {

        temperatureVerifications.findByIdAndRemove(req.body.id, function (err) {
            if (err) throw err;
            res.send('Success');
            console.log('temperatureVerification Deleted');
        })
    });
//**************************************************************************************************************************************************Stop Temperature Verification
//**************************************************************************************************************************************************Start Assembly
    //find assemblies by assemblyname
    app.get('/assemblies/findByassemblyname/:assemblyname', function (req, res) {

        assemblies.find({ assemblyname: req.params.assemblyname }, function (err, assemblies) {
            if (err) throw err;
            res.send(assemblies);
            console.log('assembly found by assemblyname');
        });
    });

    //get all assemblies from the assemblies collection
    app.get('/assemblies/showAllAssemblies', function (req, res) {
        console.log('getting all of the assemblies from the assemblies collection');
        assemblies.find({})
            .exec(function (err, assemblies) {
                if (err) {
                    res.send('Error occured when retrieving the assemblies');
                } else {
                    console.log(assemblies);
                    res.json(assemblies);
                }
            });
    });
    // get assembly by mongo assigned id
    app.get('/assemblies/findById/:id', function (req, res) {

        assemblies.findById({ _id: req.params.id }, function (err, assembly) {
            if (err) throw err;
            res.send(assembly);
            console.log('assembly found by ID');
        });
    });

    // add assembly if not already created, if exists, update values.
    app.post('/assemblies/modifyAssembly', function (req, res) {

        if (req.body.id) {
            assemblies.findByIdAndUpdate(req.body.id, {

                toolSerialNumber: String,
                rma: req.body.rma,
                job: req.bodyjob,
                date: req.body.date,
                chassisSerial: req.body.chassisSerial,
                mainPcbSn: req.body.mainPcbSn,
                gyroXSn: req.body.gyroXSn,
                gyroYsn: req.body.gyroYsn,
                lowerMechanical: req.body.lowerMechanical,
                upperMechanical: req.body.upperMechanical,
                installedInPressureHousing: req.body.installedInPressureHousing,
                allTestsPass: req.body.allTestsPass,
                tech: req.body.tech,
                opStart: req.body.opStart,
                opStop: req.body.opStop,
                inspected: req.body.inspected,
                failureDescription: req.body.failureDescription,
                resolutionDescription: req.body.resolutionDescription

            }, function (err, assembly) {
                if (err) throw err;
                res.send('Success');
                console.log('assembly Updated');
            });
        } else {
            var newassembly = assemblies({

                toolSerialNumber: String,
                rma: req.body.rma,
                job: req.bodyjob,
                date: req.body.date,
                chassisSerial: req.body.chassisSerial,
                mainPcbSn: req.body.mainPcbSn,
                gyroXSn: req.body.gyroXSn,
                gyroYsn: req.body.gyroYsn,
                lowerMechanical: req.body.lowerMechanical,
                upperMechanical: req.body.upperMechanical,
                installedInPressureHousing: req.body.installedInPressureHousing,
                allTestsPass: req.body.allTestsPass,
                tech: req.body.tech,
                opStart: req.body.opStart,
                opStop: req.body.opStop,
                failureDescription: req.body.failureDescription,
                resolutionDescription: req.body.resolutionDescription
            });
            newassembly.save(function (err) {
                if (err) throw err;
                res.send('Success');
                console.log('new assembly saved to Mongo');
            });
        }
    });


    //find assembly by mongo assigned ID and Delete
    app.delete('/assembly/modifyassembly', function (req, res) {

        assemblies.findByIdAndRemove(req.body.id, function (err) {
            if (err) throw err;
            res.send('Success');
            console.log('assembly Deleted');
        })
    });
//**************************************************************************************************************************************************Stop Assembly
//**************************************************************************************************************************************************Start Inspection
    //find inspections by inspectionname
    app.get('/inspections/findByinspectionname/:inspectionname', function (req, res) {

        inspections.find({ inspectionname: req.params.inspectionname }, function (err, inspections) {
            if (err) throw err;
            res.send(inspections);
            console.log('inspection found by inspectionname');
        });
    });

    //get all inspections from the inspections collection
    app.get('/inspections/showAllinspections', function (req, res) {
        console.log('getting all of the inspections from the inspections collection');
        inspections.find({})
            .exec(function (err, inspections) {
                if (err) {
                    res.send('Error occured when retrieving the inspections');
                } else {
                    console.log(inspections);
                    res.json(inspections);
                }
            });
    });
    // get inspection by mongo assigned id
    app.get('/inspections/findById/:id', function (req, res) {

        inspections.findById({ _id: req.params.id }, function (err, inspection) {
            if (err) throw err;
            res.send(inspection);
            console.log('inspection found by ID');
        });
    });

    // add inspection if not already created, if exists, update values.
    app.post('/inspections/modifyinspection', function (req, res) {

        if (req.body.id) {
            inspections.findByIdAndUpdate(req.body.id, {

                toolSerialNumber: String,
                rma: req.body.rma,
                job: req.body.job,
                date: req.body.date,
                lowerShockROM: req.body.lowerShockROM,
                maleCommsSecure: req.body.maleCommsSecure,
                maleCommsWiring: req.body.maleCommsWiring,
                mainPCBMounting: req.body.mainPCBMounting,
                gxInstallation: req.body.gxInstallation,
                gyInstallation: req.body.gyInstallation,
                accelerometerInstallation: req.body.accelerometerInstallation,
                motorHardwareCheck: req.body.motorHardwareCheck,
                connectorsSecuredWithRTV: req.body.connectorsSecuredWithRTV,
                motorCableRouting: req.body.motorCableRouting,
                wiringLaced: req.body.wiringLaced,
                allTestsPass: req.body.allTestsPass,
                tech: req.body.tech,
                opStart: req.body.opStart,
                opStop: req.body.opStop,
                failureDescription: req.body.failureDescription,
                resolutionDescription: req.body.resolutionDescription

            }, function (err, inspection) {
                if (err) throw err;
                res.send('Success');
                console.log('inspection Updated');
            });
        } else {
            var newinspection = inspections({

                toolSerialNumber: String,
                rma: req.body.rma,
                job: req.body.job,
                date: req.body.date,
                lowerShockROM: req.body.lowerShockROM,
                maleCommsSecure: req.body.maleCommsSecure,
                maleCommsWiring: req.body.maleCommsWiring,
                mainPCBMounting: req.body.mainPCBMounting,
                gxInstallation: req.body.gxInstallation,
                gyInstallation: req.body.gyInstallation,
                accelerometerInstallation: req.body.accelerometerInstallation,
                motorHardwareCheck: req.body.motorHardwareCheck,
                connectorsSecuredWithRTV: req.body.connectorsSecuredWithRTV,
                motorCableRouting: req.body.motorCableRouting,
                wiringLaced: req.body.wiringLaced,
                allTestsPass: req.body.allTestsPass,
                tech: req.body.tech,
                opStart: req.body.opStart,
                opStop: req.body.opStop,
                failureDescription: req.body.failureDescription,
                resolutionDescription: req.body.resolutionDescription

            });
            newinspection.save(function (err) {
                if (err) throw err;
                res.send('Success');
                console.log('new inspection saved to Mongo');
            });
        }
    });


    //find inspection by mongo assigned ID and Delete
    app.delete('/inspection/modifyinspection', function (req, res) {

        inspections.findByIdAndRemove(req.body.id, function (err) {
            if (err) throw err;
            res.send('Success');
            console.log('inspection Deleted');
        })
    });
//**************************************************************************************************************************************************Stop Inspection
}

