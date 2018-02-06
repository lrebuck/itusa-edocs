var mongoose = require('mongoose')
var Schema = mongoose.Schema

var toolFaceOffsetSchema = new Schema({
    toolSerialNumber: String,
    rma: String,
    job: String,
    date: {
        type: Date,
        default: Date.now
    },
    offset: Number,
    hasAttachment: Boolean,
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

var ToolFaceOffsets = mongoose.model('ToolFaceOffsets', toolFaceOffsetSchema);

module.exports = ToolFaceOffsets;