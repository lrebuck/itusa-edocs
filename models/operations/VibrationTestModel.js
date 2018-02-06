var mongoose = require('mongoose')
var Schema = mongoose.Schema

var vibrationTestSchema = new Schema({
    toolSerialNumber: String,
    rma: String,
    job: String,
    date: {
        type: Date,
        default: Date.now
    },
    vibePos1: Boolean,
    vibePos2: Boolean,
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

var VibrationTest = mongoose.model('VibrationTest', vibrationTestSchema);

module.exports = VibrationTest;