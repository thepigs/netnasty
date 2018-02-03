var mongoose = require('mongoose'),
      Person = mongoose.model('Person');

exports.list_all = function(req, res) {
	Person.find({} , function(err,person) {
		if (err)
		  res.send(err);
		res.json(person);
	});
};

exports.create = function(req, res) { 
	var p = new Person(req.body);
	p.save(function(err,person) {
		if (err)
			res.send(err);
		res.json(person);
	});
};

