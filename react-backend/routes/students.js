
const router = require("express").Router();
const students = [{firstName:"Albert",lastName:"Albertson",email:"al@example.com"}, {firstName: "Eren", lastName: "Jaeger", email: "thechosenone@example.com"}]
const cors = require('cors')
//route to serve all students
router.get("/", cors(), (req, res, next) => {
  // res.json("ALL OF THE STUDENTS!!!");
  res.json(students)
})

//routes to serve single student and/or
router.get("/:id", (req, res,next) => {
  res.json("A PARTICULAR STUDENT");
})

 //routes to add a new student
router.post("/",(req,res)=>{
  res.json(" add a new student")
});

//route to update or edit student
router.put("/:id",(req,res)=>{
    res.json("edit a student")
});

//route to remove student
 router.delete("/:id",(req,res)=>{
   res.json("Delete a student")
 });

module.exports = router;