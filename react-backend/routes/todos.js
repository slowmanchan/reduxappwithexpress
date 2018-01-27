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

  console.log('Todo: ' + todo);

  todo.save(function(err) {
    if(err) { return next(err); }

    console.log(todo);
  });
})

router.get('/', function(req, res, next) {
  res.json([{
    id: 1,
    username: "norman"
  }, {
    id: 2,
    username: "Chanman"
  }])
})

module.exports = router;
