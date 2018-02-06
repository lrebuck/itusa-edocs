var Users = require('../models/userModel');
var AVs = require('../models/operations/AllanVarianceModel');
var FTs = require('../models/operations/FunctionTestModel');
var TFOs = require('../models/operations/ToolFaceOffsetModel');
var VTs = require('../models/operations/VibrationTestModel');

//seed the database with userdata
module.exports = function(app){
    app.get('/api/setupUsers', function (req, res) {

        var prodUsers = [
            {
                username: 'PedroArreola',
                email: 'Pedro.Arreola@imdexlimited.com',
                password: 'Arreola',
                level: 3,
                active: true
            },
            {
                username: 'BentoMartins',
                email: 'bento.martins@imdexlimited.com',
                password: 'Martins',
                level: 3,
                active: true,
            },
            {
                username: 'LeifRebuck',
                email: 'leif.rebuck@imdexlimited.com',
                password: 'Rebuck',
                level: 2,
                active: true,
            }, {
                username: 'KenLofrano',
                email: 'Ken.LoFrano@imdexlimited.com',
                password: 'LoFrano',
                level: 1,
                active: true,
            }];

        Users.create(prodUsers, function (err, results) {
            if (err) throw err;
            res.send(results);
        });
    });
    app.get('/api/setupAV', function (req, res) {

        var prodAllanVariances = [
            {
                toolSerialNumber: 'EG9999',
                rma: '001-18',
                job: 'US-008',
                date: 'January 29, 2018',
                temp: 35,
                gx40SecDev: .18,
                gy40SecDev: .13,
                gx40SecMin: .19,
                gy40SecMin: 05,
                allTestsPass: false
            },
            {
                toolSerialNumber: 'EG9999',
                rma: '001-18',
                job: 'US-008',
                date: 'January 31, 2018',
                temp: 35,
                gx40SecDev: .13,
                gy40SecDev: .13,
                gx40SecMin: .06,
                gy40SecMin: 05,
                allTestsPass: true
            }];

        AVs.create(prodAllanVariances, function (err, results) {
            if (err) throw err;
            res.send(results);
        });
    });
    app.get('/api/setupFT', function (req, res) {

        var prodFunctionTests = [
            {
                toolSerialNumber: 'EG0263',
                rma: '002-18',
                job: 'US-1704',
                date: 'January 31, 2018',
                setSerial: true,
                loadCalFile: true,
                stbyCurrent: 20,
                runCurrent: 230,
                maxCurrent: 274,
                motorPos0: true,
                motorPos1: true,
                motorPos2: true,
                accelXMin: -3546263,
                accelXMax: 3261537,
                accelYMin: -3016432,
                accelYMax: 3123465,
                accelZMin: -3000236,
                accelZMax: 3264959,
                gyroXMin: -26346597,
                gyroXMax: 37535216,
                gyroYMin: -967535743,
                gyroYMax: 968375573,
                gyroXtemp: 26.5,
                gyroYtemp: 27.4,
                voltageTP70: 5.004,
                voltageTP72: 3.300,
                voltageTP23: 5.001,
                voltageTP14: 1.800,
                voltageTP65: 4.997,
                voltageTP67: 3.339,
                powerNoiseTest: true,
                irdaFunction: true,
                cutoutVoltage: 6.1,
                recoveryVoltage: 7.5,
                allTestsPass: true
            },
            {
                toolSerialNumber: 'EG0212',
                rma: '003-18',
                job: 'US-1705',
                date: 'January 31, 2018',
                setSerial: true,
                loadCalFile: true,
                stbyCurrent: 20,
                runCurrent: 230,
                maxCurrent: 274,
                motorPos0: true,
                motorPos1: true,
                motorPos2: true,
                accelXMin: -3026263,
                accelXMax: 3101537,
                accelYMin: -3066432,
                accelYMax: 3023465,
                accelZMin: -3000236,
                accelZMax: 3264959,
                gyroXMin: -26346597,
                gyroXMax: 37535216,
                gyroYMin: -967535743,
                gyroYMax: 968375573,
                gyroXtemp: 27.5,
                gyroYtemp: 28.4,
                voltageTP70: 4.997,
                voltageTP72: 3.300,
                voltageTP23: 5.001,
                voltageTP14: 1.801,
                voltageTP65: 4.998,
                voltageTP67: 3.339,
                powerNoiseTest: true,
                irdaFunction: true,
                cutoutVoltage: 6.5,
                recoveryVoltage: 7.1,
                allTestsPass: true
            }];

        TFOs.create(prodToolFaceOffsets, function (err, results) {
            if (err) throw err;
            res.send(results);
        });
    });
    app.get('/api/setupTFO', function (req, res) {

        var prodToolFaceOffsets = [
            {
                toolSerialNumber: 'EG0212',
                rma: '002-18',
                job: 'US-1704',
                date: 'December 17, 2017',
                offset: -359.62,
                hasAttachment: true
            },
            {
                toolSerialNumber: 'EG0212',
                rma: '002-18',
                job: 'US-1704',
                date: 'December 17, 2017',
                offset: -359.62,
                hasAttachment: true
            }];

        TFOs.create(prodToolFaceOffsets, function (err, results) {
            if (err) throw err;
            res.send(results);
        });
    });
    app.get('/api/setupVT', function (req, res) {

        var prodVibrationTests = [
            {
                toolSerialNumber: 'EG0212',
                rma: '002-18',
                job: 'US-1704',
                date: 'December 17, 2017',
                vibePos1: true,
                vibePos2: true,
                allTestsPass: true
            },
            {
                toolSerialNumber: 'EG0212',
                rma: '002-18',
                job: 'US-1704',
                date: 'December 17, 2017',
                vibePos1: true,
                vibePos2: true,
                allTestsPass: true
            }];

        VTs.create(prodVibrationTests, function (err, results) {
            if (err) throw err;
            res.send(results);
        });
    });
};
