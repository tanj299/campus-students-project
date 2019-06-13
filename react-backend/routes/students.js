const router = require("express").Router();

//const {Campuses}=require('../database/models');

//dummy data
 const students = [{firstName:"Albert",lastName:"Albertson",email:"al@example.com"},]

//route to serve all students
router.get('/', async(req, res, next) => {
  // res.json("ALL OF THE STUDENTS!!!");
  res.json(students)
});

//routes to serve single student and/or
router.get("/:id", (req, res,next) => {
  console.log("particular student");
  res.json(`${req.params.id}`);      //instead of id
  //res.json("A PARTICULAR STUDENT");
})

 //routes to add a new student
router.post("/",(req,res)=>{
  var id=req.body.id;
 // res.redirect('/'+id);
  res.json(" add a new student")
});

//route to update or edit student
router.put("/:id",(req,res)=>{
  var id=req.
    res.json("edit a student")
});

//route to remove student
 router.delete("/:id",(req,res)=>{
   res.json("Delete a student")
 });

module.exports = router;