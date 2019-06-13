
const router=require('express').Router();

const {Campus} = require('../database/models');
const cors = require('cors')

//route to serve all campuses
router.get("/", cors(), async(req,res,next)=>{
    try{
        const campuses=await Campus.findAll();
        res.json(campuses);
    }catch(error){
        next(error);
    }
});

//routes to serve single campus
router.get("/:id", async(req,res,next)=>{
    
    try{
        let campus= await Campus.findByPk(req.params.id);
    if(campus){
        res.json(campus);
    }
    else{
        res.status(404).send('Campus not found');
    }
}
    catch(error){
        next(error);
    }
    // res.json("single campus");
});

//route to add a new campus
 router.post("/", async (req,res,next)=>{
    //res.json("add a campus");
    try{
        let campus=await Campus.create(req.body);
        res.status(201).json(Campus);
    }catch(error){
        next(error);
    }
 });

//routes to edit campus ??
 router.put("/:id",async (req,res, next)=>{
     //res.json("edit campus")
     try{
         let updatedCampusInfo= await Campus.update(req.body,{
             where:{id:req.params.id},
             returning:true,
             plain:true,
         });
         res.json(updatedCampusInfo[1]);
        } catch (err) {
          next(err);
        }
 });

//route to remove a campus
router.delete("/:id", async(req,res)=>{
   // res.json("remove a campus")
   try{
   const deleteCount = await Student.destroy({
    where: { id: req.params.id },
  });
  res.sendStatus(204);
} catch (err) {
  next(err);
}
});

module.exports=router;