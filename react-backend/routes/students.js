const router = require("express").Router();

const {Student,Campus}=require('../database/models');

//dummy data
 //const students = [{firstName:"Albert",lastName:"Albertson",email:"al@example.com"},]

//route to serve all students
router.get('/', async(req, res, next) => {
  Student.findAll()
  .then(students=>res.json(students))
  .catch(next)
});

//routes to serve single student and/or
router.get("/:id", (req, res,next) => {
  console.log("particular student");
  Student.findById(req.params.id)
  .then(Student=>res.json(students))
  .catch(next)
});

 //routes to add a new student
router.post("/",(req,res)=>{
  //var id=req.body.id;
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