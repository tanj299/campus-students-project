const express = require("express");
const app = express();
const cors = require('cors')

//const apiRouter = require("./routes");
const morgan = require('morgan')
const studentRouter=require("./routes/students");

const PORT=5000;

// app.use("/api", apiRouter);
// console.log(Router);
app.use(cors())

app.use('/api/students',studentRouter);

app.listen(PORT, () => {
  console.log(`Server runnin on ${PORT}`);
})



