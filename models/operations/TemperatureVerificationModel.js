var mongoose = require('mongoose')
var Schema = mongoose.Schema

var temperatureVerificationSchema = new Schema({
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

var TemperatureVerifications = mongoose.model('TemperatureVerifications', temperatureVerificationSchema);

module.exports = TemperatureVerifications;