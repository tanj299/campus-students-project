const router = require('express').Router();

//const {Campuses} = require('../database/models');
//const Sequelize = require("sequelize");

//route to serve all campuses
router.get("/", (req, res, next) => {
    res.json(campuses);
})

//routes to serve single campus
router.get("/:id", (req, res, next) => {
    res.json(`${req.params.id}`); // instead of id ??
})

//route to add a new campus
// router.post('/', (req, res,next) => {
//     try{
//        // const name:req.body.name;
//         //const imageUrl:req.body.imageUrl;
//         const newCampus=await Campuses.create({
//             name,
//             imageUrl,
//             address,
//             description,
//         });
//         res.send(newCampus);
//     }catch(error){
//         next(error);
//     }
// });

//routes to edit campus ??
router.put("/:id", (req, res) => {
    res.json("edit campus")
});

//route to remove a campus
router.delete("/:id", (req, res) => {
    res.json("remove a campus")
});

module.exports = router;