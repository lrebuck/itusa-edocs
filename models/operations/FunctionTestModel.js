var mongoose = require('mongoose')
var Schema = mongoose.Schema

var functionTestSchema = new Schema({
    toolSerialNumber: String,
    rma: String,
    job: String,
    date: {
        type: Date,
        default: Date.now
    },
    setSerial: Boolean,
    loadCalFile: Boolean,
    stbyCurrent: Number,
    runCurrent: Number, 
    maxCurrent: Number, 
    motorPos0: Boolean,
    motorPos1: Boolean,
    motorPos2: Boolean,
    accelXMin: Number,
    accelXMax: Number,
    accelYMin: Number,
    accelYMax: Number,
    accelZMin: Number,
    accelZMax: Number,
    gyroXMin: Number,
    gyroXMax: Number,
    gyroYMin: Number,
    gyroYMax: Number,
    gyroXtemp: Number,
    gyroYtemp: Number,
    voltageTP70: Number,
    voltageTP72: Number,
    voltageTP23: Number,
    voltageTP14: Number,
    voltageTP65: Number,
    voltageTP67: Number,
    powerNoiseTest: Boolean,
    irdaFunction: Boolean,
    cutoutVoltage: Number,
    recoveryVoltage: Number,
    allTestsPass: Boolean,
    tech: String,
    opStart: {
        type: Date,
        default: Date.now
    },
    opStop: {
        type: Date,
        default: Date.now
    },
    failureDescription: String,
    resolutionDescription: String

});

var FunctionTest = mongoose.model('FunctionTest', functionTestSchema);

module.exports = FunctionTest;