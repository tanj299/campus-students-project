const {Campus}=require('../database');


const campuses=[
    Campus.create({
        name: "Hunter College",
        address: "695 Park Ave, New York, NY 10065",
        imageUrl:"",
        description:" ",
        }),
        Campus.create({   
        name: "Parsons School of Design",
        address: "66 5th Ave, New York, NY 10011",
        imageUrl:"",
        description:" ",
        }),
        Campus.create({
        name:"LaGuardia Community College",
        address:" 31-10 Thomson Ave, LIC, NY 11101",
        imageUrl:"",
        description:" ",
        })
    ]
    module.exports=campuses;