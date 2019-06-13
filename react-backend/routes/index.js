const router=require("express").Router();
//const {Campus,Student} = require('../database/models');

//subroutes;
const studentRouter=require("./students");
const campusRouter=require("./campuses");

//mount our subrouteres to assemble our apiRouter
router.use('/students',studentRouter);
router.use('/campuses',campusRouter);


// /* GET home page. */
// //when GET request made to home page
// router.get('/',function(req,res,next){
//    res.send({express: "Home"});
// })

// Error handling middleware;
router.use((req, res, next) => {
    const error = new Error("Not Found, Please Check URL!");
    error.status = 404;
    next(error);
  });
  
module.exports = router;
