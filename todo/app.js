var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();

// Setup template engine
app.set('view engine', 'ejs');

// Static files
app.use(express.static('./public'));

// Fire controllers
todoController(app);

app.listen(3000);
console.log('Listening on 3000');
