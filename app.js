var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var index = require('./routes/index');
var users = require('./routes/users');
// creadas a mayores: ejemplo de MARCAS DEPORTIVAS.
var marDeport = require('./routes/marcasdeportivas');
 // EJEMPLO DE MIS DATOS.
var misDatos = require('./routes/misdatos');
// var hospit = require('./routes/hospital');
// var cultu = require('./routes/cultural');
// var regist = require('./routes/registro');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
// creadas a mayores: ejemplo de MARCAS DEPORTIVAS.
app.use('/marDep', marDeport); 
 // EJEMPLO DE MIS DATOS.
app.use('/misDat', misDatos);
app.use('/hospital', require('./routes/hospital'));
app.use('/cultural',require('./routes/cultural'));
app.use('/cultural/altasocio',require('./routes/cultural'));
app.use('/registro',require('./routes/registro'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
