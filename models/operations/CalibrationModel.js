var mongoose = require('mongoose')
var Schema = mongoose.Schema

var calibrationSchema = new Schema({
    toolSerialNumber: String,
    rma: String,
    job: String,
    date: {
        type: Date,
        default: Date.now
    },
    testStand: String,
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

var Calibrations = mongoose.model('Calibrations', calibrationSchema);

module.exports = Calibrations;