const express = require("express");
const app = express();
const morgan = require('morgan')

const apiRouter = require("./routes/index");

const studentRouter=require("./routes/students");
const campusRouter=require("./routes/campuses")



const PORT=3000;

//app.use('/'), apiRouter);
app.use('/students',studentRouter);
app.use('/campuses/',campusRouter);


app.listen(PORT, () => {
  console.log(`Server runnin on ${PORT}`);
})



