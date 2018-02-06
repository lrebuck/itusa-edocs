var mongoose = require('mongoose')
var Schema = mongoose.Schema

var assemblySchema = new Schema({
	toolSerialNumber: String,
	rma: String,
	job: String,
	date: {
		type: Date,
		default: Date.now
	},
	chassisSerial: String,
	mainPcbSn: String,
	gyroXSn: String,
	gyroYsn: String,
	lowerMechanical: String,
	upperMechanical: String,
	installedInPressureHousing: String,
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
    inspected: Boolean,
    failureDescription: String,
    resolutionDescription: String


});

var Assemblies = mongoose.model('Assemblies', assemblySchema);

module.exports = Assemblies;