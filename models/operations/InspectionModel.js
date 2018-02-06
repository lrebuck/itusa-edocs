var mongoose = require('mongoose')
var Schema = mongoose.Schema

var inspectionSchema = new Schema({
    toolSerialNumber: String,
    rma: String,
    job: String,
    date: {
        type: Date,
        default: Date.now
    },
    lowerShockROM: Boolean,
    maleCommsSecure: Boolean,
    maleCommsWiring: Boolean,
    mainPCBMounting: Boolean,
    gxInstallation: Boolean,
    gyInstallation: Boolean,
    accelerometerInstallation: Boolean,
    motorHardwareCheck: Boolean,
    connectorsSecuredWithRTV: Boolean,
    motorCableRouting: Boolean,
    wiringLaced: Boolean,
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

var Inspections = mongoose.model('Inspections', inspectionSchema);

module.exports = Inspections;