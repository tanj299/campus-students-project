const express = require("express");
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser');
//const apiRouter = require("./routes");
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
var logger = require('morgan');
const studentRouter=require("./routes/students");
const campusRouter=require("./routes/campuses");
const PORT=5000;

// app.use("/api", apiRouter);
// console.log(Router);
app.use(cors())

app.use('/api/students',studentRouter)
app.use('/api/campuses', campusRouter);

app.listen(PORT, () => {
  console.log(`Server runnin on ${PORT}`);
})

//Utilities
const createLocalDatabase = require('./utilities/createLocalDatabase.js');
const seedDatabase=require('./utilities/seedDatabase.js');
// //our database instance;
 const db=require('./database');

//A helper function to sync our database;
const syncDatabase = () => {
 
  if (process.env.NODE_ENV === 'production') {
    db.sync();
    seedDatabase();
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
// A helper function to create our app with configurations and middleware;
const configureApp = () => {
  app.use(helmet());
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(compression());
  app.use(cookieParser());
}
// catch 404 and forward to error handler
app.use((req, res, next)=> {
  if (path.extname(req.path).length) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  }
  else {
    next();
  }
});

// error handler
app.use((error, req, res, next) =>{
  console.error(error);
  console.error(error.stack);
  res.status(error.status || 500).send(error.message || 'Internal server error.');
});

// Main function declaration;
const bootApp = async () => {
  await syncDatabase();
  await configureApp();
};
// Main function invocation;
bootApp();