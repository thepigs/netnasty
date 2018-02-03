var express = require('express'),
      app = express(),
        port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Models = require('./api/models/netnasty.js'),
       bodyParser = require('body-parser');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/netnasty'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/netnasty'); //importing route
routes(app); //register the route
app.listen(port);

console.log('netnasty RESTful API server started on: ' + port);

