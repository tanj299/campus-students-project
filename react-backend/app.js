
//npm install express morgan nodemon concurrently body-parser

// Here, we will sync our database, create our application, and export this module
// so that we can use it in the bin directory, where we will be able to establish a server to listen and handle requests and responses;

//Module dependencies
const express = require("express");
var path = require('path');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const compression = require('compression');
var logger = require('morgan');

//Utilities
const createLocalDatabase = require('./utilities/createLocalDatabase');

//our database instance;
const db=require('./database');

// Our apiRouter;
//const apiRouter = require('./routes/index');
 const indexRouter =require("./routes/index");
 //const userRouter=require("./routes/users"); //not using
 const studentRouter=require("./routes/students");
 const campusRouter=require("./routes/campuses");

 //app.use('/api',apiRouter);

//A helper function to sync our database;
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

//instantiate our express app
const app = express();

// A helper function to create our app with configurations and middleware;
const configureApp = () => {
  app.use(helmet());
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(compression());
  app.use(cookieParser());
}

//Mount student and campus Router
app.use('/', indexRouter);
//app.use('/users',userRouter);
app.use('/students',studentRouter);
app.use('/campuses',campusRouter);


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

// const PORT=5000;
// app.listen(PORT, () => {
//   console.log(`Server runnin on ${PORT}`);
// })
module.exports=app;