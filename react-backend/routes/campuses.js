
const router=require('express').Router();

//id just added to  test for now
const campuses=[{id:1,name:"Hunter College",  
address: "695 Park Ave, New York, NY 10065"},
{id:2,name: "Parsons School of Design",
address: "66 5th Ave, New York, NY 10011"}
]

//route to serve all campuses
router.get("/",(req,res,next)=>{
    res.json(campuses);   
})

//routes to serve single campus
router.get("/:id",(req,res,next)=>{
    res.json(`${req.params.id}`); // instead of id ??
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