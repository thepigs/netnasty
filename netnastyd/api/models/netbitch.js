'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonSchema = new Schema({
	name: {
		type: String
		required: 'Enter name of person'
	}
	devices: [{ type: Schema.Types.ObjectId, ref: 'Device' }]
});

var DeviceSchema = new Device({
	name: { 
		type: String,
		required: 'Enter name of device'
	},
	mac: {
		type: String,
		required: 'Enter mac of device'
	}
})

mongoose.model('Person',PersonSchema)
mongoose.model('Device', DeviceSchema);

			
