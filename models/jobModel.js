var mongoose = require('mongoose')
var Schema = mongoose.Schema

var jobSchema = new Schema({
    partNumber: String,
    qty: Number,
    toolSerialNumber: String,
    rma: String,
    fieldReturn: Boolean,
    fieldFailure: String,
    failureReplicated: Boolean,
    customer: String,
    dateOpen: {
        type: Date,
        default: Date.now
    },
    dateClosed: Date,
    active: {
        type: Boolean,
        default: true
    }

});

var Jobs = mongoose.model('Jobs', jobSchema);

module.exports = Jobs;