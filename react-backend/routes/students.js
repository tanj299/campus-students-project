
const router = require("express").Router();
const students = [{id: 1, firstName:"Albert",lastName:"Albertson",email:"al@example.com"}, {id: 2, firstName: "Eren", lastName: "Jaeger", email: "snk@example.com"}]
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
router.get("/:id", (req, res,next) => {
  res.json({ id: 1, firstName: "Albert", lastName: "Albertson", email: "al@example.com", gpa: "3.7" })
  // res.json("A PARTICULAR STUDENT");
})

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