'use strict';
module.exports = function(app) {
var person = require('../controllers/person');

	    // todoList Routes
app.route('/person')
       .get(person.list_all)
       .post(person.create);
//app.route('/tasks/:taskId')
//                 .get(todoList.read_a_task)
//                     .put(todoList.update_a_task)
//                         .delete(todoList.delete_a_task);
                  };
