var mongoose = require('mongoose');

var Car = mongoose.Schema({
    registration_number: {
		type: String,
		required: true
	},
	color: {
		type: String,
		required: true
	},
	status: {
		type: String,
		enum: ['IN', 'OUT'],
		required: true,
		default: 'IN'
	},
	date: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model('Car', Car);