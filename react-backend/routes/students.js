const router = require("express").Router();

//route to serve all students
router.get("/", (req, res, next) => {
  res.json("ALL OF THE STUDENTS!!!");
})

//routes to serve single student
router.get("/:id", (req, res, next) => {
  res.json("A PARTICULAR STUDENT");
})

//so either just below routes or have separate

//routes to serve single std based on id and including std's campus
router.get("/:id/:campusId",(req,res,next)=>{
     res.json("single student and its campus")
 })

 //routes to add a new student
router.post;

//route to update or edit student
router.put;

//route to remove student
 router.delete;

module.exports = router;