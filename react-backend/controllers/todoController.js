var Todo = require('../models/todo');

exports.todo_create_post = function(req, res) {
  var todo = new Todo({
    title: req.body.title,
    content: req.body.content
  })

  console.log('Todo: ' + todo);

  todo.save(function(error) {
    if(err) { return next(err); }

    console.log(todo);
  });
}
