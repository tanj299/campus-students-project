const express = require("express");
const app = express();
const morgan = require('morgan')

var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//to use index.app , require route module to use()
const indexRouter =require("./routes/index"); //for home
const userRouter=require("./routes/users"); //not using

const studentRouter=require("./routes/students");
const campusRouter=require("./routes/campuses");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//add the middleware libraries into the request handling chain
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const PORT=3000;

app.use('/', indexRouter);
app.use('/users',userRouter);

app.use('/students',studentRouter);
app.use('/campuses',campusRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

app.listen(PORT, () => {
  console.log(`Server runnin on ${PORT}`);
})

module.exports=app;


