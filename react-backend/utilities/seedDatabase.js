const {db}=require('../database');

const students = require('../data/students');
const campuses=require('../data/campuses');

const seedDatabase=async()=>{
    try{
        await db.sync();
        await Promise.all(students);
        await Promise.all(campuses);

        console.log("successfully seeded");
        //process.exit(0);
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}
seedDatabase(); 
