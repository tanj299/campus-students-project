const express = require("express");
const app = express();

//const apiRouter = require("./routes");
const morgan = require('morgan')
const studentRouter=require("./routes/students");

const PORT=3000;

// app.use("/api", apiRouter);
// console.log(Router);

app.use('/students',studentRouter);

app.listen(PORT, () => {
  console.log(`Server runnin on ${PORT}`);
})



