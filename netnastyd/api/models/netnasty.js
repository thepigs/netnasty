'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonSchema = new Schema({
	name: {
		type: String,
		required: 'Enter name of person'
	},
	devices: [{ type: Schema.Types.ObjectId, ref: 'Device' }]
});

var DeviceSchema = new Schema({
	name: { 
		type: String,
		required: 'Enter name of device'
	},
	mac: {
		type: String,
		required: 'Enter mac of device'
	}
})

module.exports.Person = mongoose.model('Person',PersonSchema)
module.exports.Devices = mongoose.model('Device', DeviceSchema);

			
