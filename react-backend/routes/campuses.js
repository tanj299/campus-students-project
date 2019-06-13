
const router=require('express').Router();
const campuses = [{ id: "1", name: "Scout Regiment", address: "695 Park Ave New York, NY 10065", description: "Military"}]
const cors = require('cors')

//route to serve all campuses
router.get("/", cors(), (req,res,next)=>{
    res.json(campuses);
})

//routes to serve single campus
router.get("/:id",(req,res,next)=>{
    res.json("single campus");
})

//route to add a new campus
 router.post("/", (req,res)=>{
    res.json("add a student");
 });

//routes to edit campus ??
 router.put("/:id",(req,res)=>{
    res.json("edit campus")
 });

//route to remove a campus
router.delete("/:id", (req,res)=>{
    res.json("remove a campus")
});

module.exports=router;