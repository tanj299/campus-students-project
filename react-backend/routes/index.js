// var express = require('express');
// var router = express.Router();
const router=require("express").Router();

/* GET home page. */
//when GET request made to home page
router.get('/',function(req,res,next){
    //res.render('index',{title:'Express'});
    res.send("Home");
    
// if clicked students redirect to student route
   // res.redirect('./students');
})

//Add page route
// router.get('/about',function(req,res){
//    res.send('About Us');
// })

module.exports = router;
