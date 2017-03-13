var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connect to database
mongoose.connect('mongodb://test:test@ds129610.mlab.com:29610/pasportit-todo')

// Create schema
var todoSchema = new mongoose.Schema({
  item: String
});

// Create a model
var Todo = mongoose.model('Todo', todoSchema);

//var data = [{item: 'pass classes'}, {item: 'get a job'}, {item: 'Have fun'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {

  app.get('/todo', function(req, res) {
    Todo.find({}, function(err, data){
      if (err) throw err;
      res.render('todo', {todos: data});
    });
  });

  app.post('/todo', urlencodedParser, function(req, res) {
    var newTodo = Todo(req.body).save(function(err, data) {
      if (err) throw err;
      res.json(data);
    });
  });

  app.delete('/todo/:item', function(req, res) {
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data) {
      if (err) throw err;
      res.json(data);
    })
  });
};
