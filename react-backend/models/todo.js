var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TodoSchema = Schema({
  title: {type: String, required: true},
  content: {type: String, required: true}
});

module.exports = mongoose.model('Todo', TodoSchema);
