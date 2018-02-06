var mongoose = require('mongoose')
var Schema = mongoose.Schema

var allanVarianceSchema = new Schema({
    toolSerialNumber: String,
    rma: String,
    job: String,
    date: {
        type: Date,
        default: Date.now
    },
    temp: String,
    gx40SecDev: Number,
    gy40SecDev: Number,
    gc40SecMin: Number,
    gy40SecMin: Number,
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

var AllanVariances = mongoose.model('AllanVariances', allanVarianceSchema);

module.exports = AllanVariances;