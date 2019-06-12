const router=require("express").Router();


/* GET home page. */
//when GET request made to home page
router.get('/',function(req,res,next){
   res.send({express: "Home"});
})

// Error handling middleware;
router.use((req, res, next) => {
    const error = new Error("Not Found, Please Check URL!");
    error.status = 404;
    next(error);
  });
module.exports = router;
