const router=require('express').Router();

router.get("/",(req,res,next)=>{
    res.json("ALL CAMPUSES");
})

router.get("/:id",(req,res,next)=>{
    res.json("single campus");
})

// router.post;
// router.put;
// router.delete;

module.exports=router;