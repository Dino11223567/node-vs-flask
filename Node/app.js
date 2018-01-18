const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars');

/*
Everything above this point is what would be an 'import' for Python. The two
items below are like Flask(app) init object with Python Flask.
*/
const app = express();
const port = '3000';
name = 'your_name'

/* Middleware...not totally famiiliar with this. Order matters...must come before
route-handling.
*/

//Logs server activity based on requests
const logger = function (req, res, next) {
  console.log(`Accessed: ${req.url}`);
  next();
};

app.use(logger);

//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//MW for static files (images, css, etc.)
app.use(express.static(path.join(__dirname, 'public')));

//MW for view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

/*Routes, just like for Flask...sort of. Instead of defining the method for the
request, it acts as a method on the app itself (e.g., app.get, app.post, etc.)
*/

//render vs. send, just like Flask...local variables get passed as an object...
app.get('/', function (req, res) {
  res.render('index', {
    name: name,
  });
});

//Just like app.run() with Python and Flask
app.listen(port, function () {
  console.log(`Hey, ${name}. The server is up on ${port}!`);
});
