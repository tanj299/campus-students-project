const express = require("express");
const app = express();
const morgan = require('morgan');
const PORT=5000;

// "scripts": {
//   "start": "node ./bin/www" //changed to app.js
// },
 //const db = require('./database/data');

var createError = require('http-errors');
var path = require('path');
//var cookieParser = require('cookie-parser');
var logger = require('morgan');

//to use index.app , require route module to use()

 //for home ???
const indexRouter =require("./routes/index");
const userRouter=require("./routes/users"); //not using

const studentRouter=require("./routes/students");
const campusRouter=require("./routes/campuses");

app.use('/', indexRouter);
app.use('/users',userRouter);

app.use('/students',studentRouter);
app.use('/campuses',campusRouter);

//api calls
// app.get('/api/hello',function(req,res,next){
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// })

// app.post('/api/world', (req, res) => {
//   console.log(req.body);
//   res.send(`I received your POST request. This is what you sent me: ${req.body.post}`,);
// });

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

app.listen(PORT, () => {
  console.log(`Server runnin on ${PORT}`);
})

module.exports=app;


