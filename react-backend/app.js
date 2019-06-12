
//npm install express morgan nodemon concurrently body-PerformanceResourceTiming.apply.apply.

const express = require("express");
const app = express();
//const morgan = require('morgan');
//const bodyParser=require("body-parser");
const PORT=5000;
var createError = require('http-errors');
var path = require('path');
//var cookieParser = require('cookie-parser');
var logger = require('morgan');
//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded());
app.use(express.json());

app.use("/database",require("./database"));

const createLocalDatabase = require('./utilities/createLocalDatabase');
const {db}=require('./database');

// A helper function to sync our database;
const syncDatabase = () => {
  if (process.env.NODE_ENV === 'production') {
    db.sync();
  }
  else {
    console.log('As a reminder, the forced synchronization option is on');
    db.sync({ force: true })
      .catch(err => {
        if (err.name === 'SequelizeConnectionError') {
          createLocalDatabase();
        }
        else {
          console.log(err);
        }
      });
    }
}; 

 //for home ???
const indexRouter =require("./routes/index");
const userRouter=require("./routes/users"); //not using

const studentRouter=require("./routes/students");
const campusRouter=require("./routes/campuses");

app.use('/', indexRouter);
app.use('/users',userRouter);

app.use('/students',studentRouter);
app.use('/campuses',campusRouter);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//add the middleware libraries into the request handling chain
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(error, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = error.message;
  res.locals.error = req.app.get('env') === 'development' ? error : {};

  // render the error page
  res.status(error.status || 500);
  res.render('error');
});

// Main function declaration;
const bootApp = async () => {
  await syncDatabase();
  await configureApp();
};

// Main function invocation;
bootApp();

app.listen(PORT, () => {
  console.log(`Server runnin on ${PORT}`);
})

module.exports=app;


