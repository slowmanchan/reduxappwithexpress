var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');

// var todo_controller = require('../controllers/todoController');
//
// router.post('/', todo_controller.todo_create_post);
// router.get('/', todo_controller.todo_get_all);

router.post('/', function(req, res, next) {
  var todo = new Todo({
    title: req.body.title,
    content: req.body.content
  })

  todo.save(function(err) {
    if(err) { return next(err); }
    console.log('saved: ' + todo)
  });
  res.json(todo)
})

router.get('/', function(req, res, next) {
  Todo.find({})
    .exec(function(err, todos) {
      if(err) {return next(err);}

      res.json(todos)
      console.log(todos)
    })
})

module.exports = router;
