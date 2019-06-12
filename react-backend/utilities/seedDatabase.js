const {students,campuses}=require('../database/models');

const students=require('../data/students');
const campuses=require('../campuses');

const populateStudentTable=async(students)=>{

}

const populateCampusTable=async(campuses)=>{


}

const seedDatabase=async()=>{
    try{
        await populateCampusTable(campuses);
        await populateStudentTable(students);

        console.log("successfully seeded");
        process.exit(0);
    
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}
seedDatabase;

