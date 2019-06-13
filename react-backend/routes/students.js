
const router = require("express").Router();
const {Student} = require('../database/models');

//const students = [{id: 1, firstName:"Albert",lastName:"Albertson",email:"al@example.com"},]

const students = [{id: 1, firstName:"Albert",lastName:"Albertson",email:"al@example.com"}, {id: 1, firstName: "Eren", lastName: "Jaeger", email: "thechosenone@example.com"}]
const cors = require('cors')
//route to serve all students

router.get("/", cors(), async(req, res, next) => {
  // res.json("ALL OF THE STUDENTS!!!");
  try{
    const students=await Student.findAll();
    res.json(students);
  }
  catch(error){
    next(error);
  }
});

//routes to serve single student and/or
router.get("/:id", async(req, res,next) => {
  //res.json("A PARTICULAR STUDENT");
  try{
  let student=await Student.findById(req.params.id);
  if(student){
    res.json(student);
  }else{
    res.status(404).send('Student not found');
  }
}catch(error){
    next(error);
  }
});

 //routes to add a new student
router.post("/",async(req,res,next)=>{
  //res.json(" add a new student")
  try{
    let student=await Student.create(req.body);
    res.status(201).json(student);
  }
  catch(error){
    next(error);
  }
});

//route to update or edit student
router.put("/:id",async(req,res)=>{
    //res.json("edit a student")
    try{
    let updateStudentInfo=await Student.update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true,
    });
    res.json(updatedStudentInfo[1]);
  }catch(err) {
    next(err);
  }
});

//route to remove student
 router.delete("/:id",async(req,res,next)=>{
   //res.json("Delete a student")
   try {
    //  DELETE FROM students WHERE id = req.prams.id
    const deleteCount = await Student.destroy({
      where: { id: req.params.id },
    });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;