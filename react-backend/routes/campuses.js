const router=require('express').Router();

//route to serve all campuses
router.get("/",(req,res,next)=>{
    res.json("ALL CAMPUSES");
})

//routes to serve single campus
router.get("/:id",(req,res,next)=>{
    res.json("single campus");
})

//route to add a new campus
 router.post("/", (req,res)=>{
    
 });

//routes to edit campus ??
 router.put;

//route to remove a campus
router.delete;

module.exports=router;