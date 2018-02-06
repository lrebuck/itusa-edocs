var mongoose = require('mongoose')
var Schema = mongoose.Schema

var toolSchema = new Schema({
    product: String,
    toolSerialNumber: String,
    dateOfBirth: Date,
    active: Boolean,
    retired: Date

});

var Tools = mongoose.model('Tools', toolSchema);

module.exports = Tools;