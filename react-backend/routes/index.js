var express = require('express');
var router = express.Router();

const studentRouter=require("./students");
const campusesRouter=require("./campuses.js");

// const studentRouter=require("./singleStudent");
// const campusesRouter=require("./singleCampus");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use("/students",studentsRouter);
router.use("/campus",campusesRouter);

// router.use("/singleStudent",studentRouter);
// router.use("/singleCampus",campusRouter);


module.exports = router;
